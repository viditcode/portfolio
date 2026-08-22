import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/posts";
import { profile } from "@/data/profile";
import TableOfContents from "@/components/blog/TableOfContents";
import ShareButtons from "@/components/blog/ShareButtons";
import GiscusComments from "@/components/blog/GiscusComments";
import NewsletterForm from "@/components/blog/NewsletterForm";
import PostCard from "@/components/blog/PostCard";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      url: `${profile.siteUrl}/blog/${post.slug}`,
    },
  };
}

const mdxComponents = {
  h2: (props: React.ComponentProps<"h2">) => (
    <h2 className="text-xl font-semibold text-ink mt-10 mb-4 scroll-mt-24" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-lg font-semibold text-ink mt-8 mb-3 scroll-mt-24" {...props} />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="text-ink-soft leading-relaxed mb-4" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="list-disc pl-6 text-ink-soft mb-4 space-y-1" {...props} />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol className="list-decimal pl-6 text-ink-soft mb-4 space-y-1" {...props} />
  ),
  table: (props: React.ComponentProps<"table">) => (
    <div className="overflow-x-auto mb-6 rounded-lg border border-line">
      <table className="w-full text-sm" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="bg-paper-dim" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="text-left font-mono text-xs uppercase tracking-wide text-ink-soft px-4 py-2" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td className="px-4 py-2 border-t border-line text-ink-soft" {...props} />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre className="rounded-lg p-4 mb-6 overflow-x-auto text-sm" {...props} />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code
      className="font-mono text-sm bg-paper-dim rounded px-1.5 py-0.5"
      {...props}
    />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-signal hover:underline" {...props} />
  ),
  img: (props: React.ComponentProps<"img">) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className="rounded-lg border border-line my-6 w-full" {...props} alt={props.alt ?? ""} />
  ),
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const url = `${profile.siteUrl}/blog/${post.slug}`;

  return (
    <article className="mx-auto max-w-4xl px-6 py-20">
      <div className="lg:grid lg:grid-cols-[1fr_200px] lg:gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 font-mono text-xs text-ink-faint mb-2">
            <span>{profile.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span aria-hidden="true">·</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-3xl font-semibold text-ink mb-4">{post.title}</h1>

          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/category/${tag}`}
                  className="rounded-full bg-paper-dim px-3 py-1 font-mono text-xs text-ink-soft hover:bg-signal-dim hover:text-signal transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}

          <div className="mb-8 pb-8 border-b border-line">
            <ShareButtons url={url} title={post.title} />
          </div>

          <div>
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "wrap" }],
                    [rehypePrettyCode, { theme: "github-dark" }],
                  ],
                },
              }}
            />
          </div>

          <div className="mt-12 pt-8 border-t border-line">
            <ShareButtons url={url} title={post.title} />
          </div>

          {related.length > 0 && (
            <div className="mt-16">
              <p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-4">
                // related posts
              </p>
              <div className="flex flex-col">
                {related.map((r) => (
                  <PostCard key={r.slug} post={r} />
                ))}
              </div>
            </div>
          )}

          <div className="mt-16">
            <NewsletterForm />
          </div>

          <div className="mt-16">
            <p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-4">
              // comments
            </p>
            <GiscusComments />
          </div>
        </div>

        <TableOfContents headings={post.headings} />
      </div>
    </article>
  );
}
