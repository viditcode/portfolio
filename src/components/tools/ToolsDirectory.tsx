"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Tool } from "@/data/tools";

export default function ToolsDirectory({ tools, tags }: { tools: Tool[]; tags: { tag: string; count: number }[] }) {
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get("tag") ?? "";
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return tools.filter((tool) => {
      const matchesTag = !selectedTag || tool.tags.includes(selectedTag);
      const matchesQuery = !q || [tool.name, tool.description, tool.category, ...tool.tags].join(" ").toLowerCase().includes(q);
      return matchesTag && matchesQuery;
    });
  }, [query, selectedTag, tools]);

  return <div>
    <div className="relative mb-6">
      <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-faint" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" /></svg>
      <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search tools by name, purpose, or tag..." className="w-full rounded-lg border border-line bg-white/60 py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-signal" />
    </div>
    <nav aria-label="Tool tags" className="mb-8 flex flex-wrap gap-2">
      <Link href="/tools" className={`rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${!selectedTag ? "bg-ink text-paper" : "bg-paper-dim text-ink-soft hover:bg-signal-dim hover:text-signal"}`}>All</Link>
      {tags.map(({ tag, count }) => <Link key={tag} href={`/tools?tag=${encodeURIComponent(tag)}`} className={`rounded-full px-3 py-1.5 font-mono text-xs transition-colors ${selectedTag === tag ? "bg-ink text-paper" : "bg-paper-dim text-ink-soft hover:bg-signal-dim hover:text-signal"}`}>{tag} <span className="opacity-60">({count})</span></Link>)}
    </nav>
    <p className="mb-4 font-mono text-xs text-ink-faint">{filtered.length} tool{filtered.length === 1 ? "" : "s"}{selectedTag ? ` tagged ${selectedTag}` : " available"}</p>
    {filtered.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((tool) => <article key={tool.slug} className="flex flex-col rounded-xl border border-line bg-white/60 p-6 transition-all hover:border-signal hover:shadow-sm"><p className="font-mono text-xs text-signal">{tool.category}</p><h2 className="mt-3 text-lg font-semibold text-ink">{tool.name}</h2><p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{tool.description}</p><div className="mt-5 flex flex-wrap gap-2">{tool.tags.map((tag) => <Link key={tag} href={`/tools?tag=${encodeURIComponent(tag)}`} className="rounded-md bg-paper-dim px-2 py-1 font-mono text-[0.7rem] text-ink-soft hover:text-signal">{tag}</Link>)}</div><Link href={`/tools/${tool.slug}`} className="mt-6 text-sm font-medium text-signal hover:underline">Open tool →</Link></article>)}</div> : <p className="py-8 text-center text-ink-soft">No tools match that search. Try another term or tag.</p>}
  </div>;
}
