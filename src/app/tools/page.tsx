import { Suspense } from "react";
import type { Metadata } from "next";
import ToolsDirectory from "@/components/tools/ToolsDirectory";
import { getToolTags, tools } from "@/data/tools";

export const metadata: Metadata = { title: "Tools", description: "Free browser-based utilities for developers and software testers.", alternates: { canonical: "/tools" } };

export default function ToolsPage() {
  return <section className="mx-auto max-w-4xl px-6 py-16 sm:py-24"><p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">// tools</p><h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Useful tools, kept simple</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">Small browser-based utilities for development and testing work. Your input stays in your browser.</p><div className="mt-10"><Suspense fallback={<p className="text-ink-soft">Loading tools…</p>}><ToolsDirectory tools={tools} tags={getToolTags()} /></Suspense></div></section>;
}
