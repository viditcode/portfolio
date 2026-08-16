import { useEffect, useState } from "react";
import { bootLines, profile } from "../data/content";

export default function BootLog() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      setVisibleCount(bootLines.length);
      setDone(true);
      return;
    }

    const timers = bootLines.map((line, i) =>
      setTimeout(() => {
        setVisibleCount(i + 1);
        if (i === bootLines.length - 1) setDone(true);
      }, line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="w-full max-w-2xl">
      <div className="rounded-lg border border-console-line bg-console p-4 sm:p-6 font-mono text-sm">
        <div className="flex gap-1.5 mb-4" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-ink-faint/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-faint/40" />
          <span className="w-2.5 h-2.5 rounded-full bg-ink-faint/40" />
        </div>
        <div className="space-y-1.5 min-h-[168px]">
          {bootLines.slice(0, visibleCount).map((line, i) => {
            const isPass = line.text.startsWith("✓");
            const isFinal = line.text === "ALL CHECKS PASSED";
            return (
              <p
                key={i}
                className={
                  isFinal
                    ? "text-signal font-semibold tracking-wide pt-1"
                    : isPass
                    ? "text-signal"
                    : "text-paper/70"
                }
              >
                {line.text}
              </p>
            );
          })}
        </div>
      </div>

      <h1
        className={`mt-8 font-mono text-4xl sm:text-5xl font-semibold tracking-tight text-ink transition-opacity duration-700 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        {profile.name}
      </h1>
      <p
        className={`mt-2 text-lg text-ink-soft transition-opacity duration-700 delay-150 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        {profile.title}
      </p>
      <p
        className={`mt-4 max-w-lg text-ink-soft transition-opacity duration-700 delay-300 ${
          done ? "opacity-100" : "opacity-0"
        }`}
      >
        {profile.tagline}
      </p>
    </div>
  );
}
