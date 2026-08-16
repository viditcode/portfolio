import { useState } from "react";
import { profile } from "../data/content";

const links = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-semibold text-ink">
          {profile.name.toLowerCase()}<span className="text-signal">.test</span>
        </a>

        <ul className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-ink-soft hover:text-signal transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resumeUrl} className="rounded-full border border-ink px-3.5 py-1.5 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors">
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
                <a href={l.href} onClick={() => setOpen(false)} className="text-base text-ink-soft hover:text-signal transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumeUrl} onClick={() => setOpen(false)} className="inline-block rounded-full border border-ink px-4 py-2 text-sm font-medium text-ink">
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}