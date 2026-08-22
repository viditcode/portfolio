import Link from "next/link";

export default function CategoryChips({
  tags,
  activeTag,
}: {
  tags: { tag: string; count: number }[];
  activeTag?: string;
}) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <Link
        href="/blog"
        className={`rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${
          !activeTag
            ? "bg-ink text-paper"
            : "bg-paper-dim text-ink-soft hover:bg-signal-dim hover:text-signal"
        }`}
      >
        All
      </Link>
      {tags.map(({ tag, count }) => (
        <Link
          key={tag}
          href={`/blog/category/${tag}`}
          className={`rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${
            activeTag === tag
              ? "bg-ink text-paper"
              : "bg-paper-dim text-ink-soft hover:bg-signal-dim hover:text-signal"
          }`}
        >
          {tag} <span className="opacity-60">({count})</span>
        </Link>
      ))}
    </div>
  );
}
