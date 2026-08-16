import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { profile } from "@/data/content";

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
    <h2 className="text-xl font-semibold text-ink mt-10 mb-4" {...props} />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3 className="text-lg font-semibold text-ink mt-8 mb-3" {...props} />
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
  code: (props: React.ComponentProps<"code">) => (
    <code
      className="font-mono text-sm bg-paper-dim rounded px-1.5 py-0.5"
      {...props}
    />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-signal hover:underline" {...props} />
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

  return (
    <article className="mx-auto max-w-2xl px-6 py-20">
      <div className="flex items-center gap-3 font-mono text-xs text-ink-faint mb-3">
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
      <h1 className="text-3xl font-semibold text-ink mb-8">{post.title}</h1>
      <div>
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>
    </article>
  );
}
