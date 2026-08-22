import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block py-6 border-b border-line last:border-0"
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
      {post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-paper-dim px-2 py-1 font-mono text-[0.7rem] text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
