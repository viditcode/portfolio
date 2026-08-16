import type { CaseStudy } from "../data/content";

export default function CaseStudyCard({ cs }: { cs: CaseStudy }) {
  const isPass = cs.status === "PASS";

  return (
    <article className="group rounded-xl border border-line bg-white/60 p-6 transition-all hover:border-signal hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-ink">{cs.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[0.7rem] font-semibold tracking-wide ${
            isPass
              ? "bg-signal-dim text-signal"
              : "bg-amber-dim text-amber"
          }`}
        >
          {isPass ? "✓ PASS" : "● RUNNING"}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-3 font-mono text-xs text-ink-faint">
        <span>{cs.duration}</span>
        <span aria-hidden="true">·</span>
        <span className="text-signal">{cs.impact}</span>
      </div>

      <div className="mt-4 space-y-3 text-sm text-ink-soft leading-relaxed">
        <p>
          <span className="font-medium text-ink">Problem — </span>
          {cs.problem}
        </p>
        <p>
          <span className="font-medium text-ink">Approach — </span>
          {cs.approach}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {cs.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-paper-dim px-2 py-1 font-mono text-[0.7rem] text-ink-soft"
          >
            {tech}
          </span>
        ))}
      </div>

      {cs.links && cs.links.length > 0 && (
        <div className="mt-5 flex gap-4">
          {cs.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-signal hover:underline"
            >
              {link.label} →
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
