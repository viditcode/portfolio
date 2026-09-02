import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Category } from "@/data/categories";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type Heading = { depth: 2 | 3; text: string; slug: string };

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date string, e.g. "2026-08-20"
  tags: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
  headings: Heading[];
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Pulls ## and ### headings out of raw markdown so we can build a table of
// contents without re-parsing the fully compiled MDX tree.
function extractHeadings(markdown: string): Heading[] {
  const lines = markdown.split("\n");
  const headings: Heading[] = [];
  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.*)/);
    if (match) {
      const depth = match[1].length as 2 | 3;
      const text = match[2].trim();
      headings.push({ depth, text, slug: slugify(text) });
    }
  }
  return headings;
}

function getSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return getSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: (data.tags as string[]) ?? [],
        readingTime: readingTime(content).text,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    readingTime: readingTime(content).text,
    content,
    headings: extractHeadings(content),
  };
}

export function getAllTags(): { tag: string; count: number }[] {
  const posts = getAllPosts();
  const counts = new Map<string, number>();
  for (const post of posts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function getPostsByTag(tag: string): PostMeta[] {
  return getAllPosts().filter((post) => post.tags.includes(tag));
}

export function getRelatedPosts(current: PostMeta, limit = 3): PostMeta[] {
  return getAllPosts()
    .filter((post) => post.slug !== current.slug)
    .map((post) => ({
      post,
      shared: post.tags.filter((t) => current.tags.includes(t)).length,
    }))
    .filter((entry) => entry.shared > 0)
    .sort((a, b) => b.shared - a.shared)
    .slice(0, limit)
    .map((entry) => entry.post);
}
