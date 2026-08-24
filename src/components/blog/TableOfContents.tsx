"use client";

import { useEffect, useState } from "react";

import type { Heading } from "@/lib/posts";

export default function TableOfContents({
  headings,
}: {
  headings: Heading[];
}) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const elements = headings
      .map((h) => document.getElementById(h.slug))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const TOP_OFFSET = 120;

    // Get heading from URL hash
    const getHashSlug = () => {
      const hash = window.location.hash.replace("#", "");

      if (hash && elements.some((el) => el.id === hash)) {
        return hash;
      }

      return null;
    };

    // Determine active heading based on scroll position
    const updateActiveFromScroll = () => {
      let current = elements[0].id;

      for (const el of elements) {
        if (el.getBoundingClientRect().top <= TOP_OFFSET) {
          current = el.id;
        } else {
          break;
        }
      }

      setActiveSlug(current);
    };

    // When URL contains a hash, use it first
    const initialHash = getHashSlug();

    if (initialHash) {
      setActiveSlug(initialHash);
    } else {
      updateActiveFromScroll();
    }

    // Handle hash changes
    const handleHashChange = () => {
      const hashSlug = getHashSlug();

      if (hashSlug) {
        setActiveSlug(hashSlug);
      } else {
        updateActiveFromScroll();
      }
    };

    const handleScroll = () => {
      updateActiveFromScroll();
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden lg:block">
      <p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">
        On this page
      </p>

      <ul className="space-y-2 border-l border-line">
        {headings.map((h) => (
          <li
            key={h.slug}
            style={{
              paddingLeft: h.depth === 3 ? "1.5rem" : "1rem",
            }}
          >
            <a
              href={`#${h.slug}`}
              onClick={() => {
                setActiveSlug(h.slug);
              }}
              className={`block text-sm -ml-px border-l-2 pl-3 py-0.5 transition-colors ${activeSlug === h.slug
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