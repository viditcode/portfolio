import Link from "next/link";
import type { ReactNode } from "react";

type InformationalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export default function InformationalPage({
  eyebrow,
  title,
  intro,
  children,
}: InformationalPageProps) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <p className="mb-3 font-mono text-xs uppercase tracking-widest text-ink-faint">
        // {eyebrow}
      </p>
      <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
      <div className="mt-12 space-y-10 text-ink-soft [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-ink [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </article>
  );
}

export function PageCallout({ children }: { children: ReactNode }) {
  return <aside className="rounded-xl border border-line bg-white/60 p-5 text-sm leading-relaxed text-ink-soft">{children}</aside>;
}

export function PageLinks() {
  return (
    <nav aria-label="Helpful links" className="flex flex-wrap gap-3">
      <Link className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-signal" href="/">
        Home
      </Link>
      <Link className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal" href="/blog">
        Blog
      </Link>
      <Link className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal" href="/contact">
        Contact
      </Link>
    </nav>
  );
}
