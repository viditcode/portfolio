import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on QA automation, API testing, and security testing.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">
        // blog
      </p>
      <h1 className="text-2xl font-semibold text-ink mb-8">Writing</h1>

      {posts.length === 0 ? (
        <p className="text-ink-soft">No posts yet — check back soon.</p>
      ) : (
        <div className="flex flex-col divide-y divide-line">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group py-6 first:pt-0"
            >
              <div className="flex items-center gap-3 font-mono text-xs text-ink-faint mb-2">
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
              <h2 className="text-lg font-semibold text-ink group-hover:text-signal transition-colors">
                {post.title}
              </h2>
              <p className="mt-1 text-sm text-ink-soft">{post.description}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
