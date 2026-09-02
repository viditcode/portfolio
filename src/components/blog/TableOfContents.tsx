"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/posts";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSlug(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headings.forEach(({ slug }) => {
      const el = document.getElementById(slug);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden lg:block">
      <p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">
        On this page
      </p>
      <ul className="space-y-2 border-l border-line">
        {headings.map((h) => (
          <li key={h.slug} style={{ paddingLeft: h.depth === 3 ? "1.5rem" : "1rem" }}>
            <a
              href={`#${h.slug}`}
              className={`block text-sm -ml-px border-l-2 pl-3 py-0.5 transition-colors ${
                activeSlug === h.slug
                  ? "border-signal text-signal font-medium"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
