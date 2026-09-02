import Link from "next/link";
import { profile } from "../data/content";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      {/*<p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">
        // about
      </p>*/}
      <h2 className="text-2xl font-semibold text-ink mb-5">
        Quality isn't a phase — it's the design constraint
      </h2>
      <p className="max-w-2xl text-ink-soft leading-relaxed">
        I'm a QA engineer moving toward SDET work, building real automation
        against real systems rather than tutorials — booking flows, payment
        integrations, and the security issues that hide in business logic.
        I like understanding *why* a pattern works before I use it, and I'd
        rather ship one well-tested case study than five untested demos.
      </p>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <div className="rounded-xl border border-line bg-white/60 p-8 sm:p-12 text-center">
        <p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">

        </p>
        <h2 className="text-2xl font-semibold text-ink mb-4">
          Let's talk testing
        </h2>
        <p className="text-ink-soft mb-8 max-w-md mx-auto">
          Open to SDET and QA automation roles. The fastest way to reach me
          is email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-signal transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-ink-faint">
          © {new Date().getFullYear()} {profile.name} · Built &amp; tested with
          Next.js + Playwright
        </p>
        <div className="flex gap-5">
          <Link

            href="/blog"
            target="_blank"
            className="text-sm text-ink-soft hover:text-signal"
          >
            Blog

          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft hover:text-signal"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-soft hover:text-signal"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}