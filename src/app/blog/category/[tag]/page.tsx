import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTags, getPostsByTag } from "@/lib/posts";
import PostCard from "@/components/blog/PostCard";
import CategoryChips from "@/components/blog/CategoryChips";

export function generateStaticParams() {
  return getAllTags().map(({ tag }) => ({ tag }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag } = await params;
  return {
    title: `${tag} — Blog`,
    description: `Posts tagged ${tag}`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const tags = getAllTags();

  if (posts.length === 0) notFound();

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      {/*<p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">
        // blog / {tag}
      </p>*/}
      <h1 className="text-2xl font-semibold text-ink mb-8">
        {tag}
      </h1>

      <CategoryChips tags={tags} activeTag={tag} />

      <div className="flex flex-col">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
