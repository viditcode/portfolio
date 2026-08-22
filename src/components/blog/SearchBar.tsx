"use client";

import { useMemo, useState } from "react";
import type { PostMeta } from "@/lib/posts";
import PostCard from "./PostCard";

export default function SearchBar({ posts }: { posts: PostMeta[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((post) => {
      const haystack = [post.title, post.description, ...post.tags]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, posts]);

  return (
    <div>
      <div className="relative mb-8">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search posts by title, topic, or tag..."
          className="w-full rounded-lg border border-line bg-white/60 py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint focus:border-signal outline-none transition-colors"
        />
      </div>

      {query && (
        <p className="font-mono text-xs text-ink-faint mb-4">
          {filtered.length} result{filtered.length === 1 ? "" : "s"} for &quot;{query}&quot;
        </p>
      )}

      {filtered.length === 0 ? (
        <p className="text-ink-soft py-8 text-center">
          No posts match that search — try a different term.
        </p>
      ) : (
        <div className="flex flex-col">
          {filtered.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
