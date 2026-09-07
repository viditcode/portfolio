"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { profile } from "../data/content";
import { socialLinks } from "../data/social-links";

const links: { label: string; href: string; target?: string }[] = [
  { label: "Work", href: "/#work" },
  { label: "Skills", href: "/#skills" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog", target: "_blank" },
  { label: "Contact", href: "/#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const connectRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (connectRef.current && !connectRef.current.contains(e.target as Node)) {
        setConnectOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold text-ink">
          {profile.name.toLowerCase()}<span className="text-signal">.test</span>
        </Link>

        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                target={l.target}
                rel={l.target === "_blank" ? "noopener noreferrer" : undefined}
                className="text-sm text-ink-soft hover:text-signal transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}

          {/* Connect dropdown */}
          <li className="relative" ref={connectRef}>
            <button
              type="button"
              onClick={() => setConnectOpen((v) => !v)}
              aria-expanded={connectOpen}
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm text-ink-soft hover:text-signal transition-colors"
            >
              Connect
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className={`transition-transform ${connectOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {connectOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl border border-line bg-paper shadow-lg py-2 z-50">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 text-sm text-ink-soft hover:text-signal transition-colors"
                    onClick={() => setConnectOpen(false)}
                  >
                    <Icon size={15} />
                    {label}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink px-3.5 py-1.5 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="sm:hidden flex items-center justify-center w-9 h-9 rounded-md border border-line text-ink"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="sm:hidden border-t border-line bg-paper px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  target={l.target}
                  rel={l.target === "_blank" ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink-soft hover:text-signal transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* Connect section in mobile menu — flat list, no nested dropdown */}
            <li>
              <p className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-2">
                Connect
              </p>
              <ul className="flex flex-wrap gap-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-2 text-sm text-ink-soft hover:text-signal transition-colors"
                    >
                      <Icon size={16} />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-block rounded-full border border-ink px-4 py-2 text-sm font-medium text-ink"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}