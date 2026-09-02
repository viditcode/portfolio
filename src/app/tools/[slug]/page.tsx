import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";
import { getTool, tools } from "@/data/tools";

export function generateStaticParams() { return tools.map((tool) => ({ slug: tool.slug })); }
export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { return params.then(({ slug }) => { const tool = getTool(slug); return tool ? { title: tool.name, description: tool.description, alternates: { canonical: `/tools/${tool.slug}` } } : {}; }); }

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const tool = getTool((await params).slug);
  if (!tool) notFound();
  return <article className="mx-auto max-w-4xl px-6 py-16 sm:py-24"><nav aria-label="Breadcrumb" className="font-mono text-xs text-ink-faint"><Link href="/" className="hover:text-signal">Home</Link><span aria-hidden="true"> / </span><Link href="/tools" className="hover:text-signal">Tools</Link><span aria-hidden="true"> / </span><span>{tool.name}</span></nav><p className="mt-10 font-mono text-xs text-signal">{tool.category}</p><h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{tool.name}</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{tool.description}</p><ToolRunner tool={tool} /><Link href="/tools" className="mt-8 inline-block text-sm font-medium text-signal hover:underline">← Back to all tools</Link></article>;
}
