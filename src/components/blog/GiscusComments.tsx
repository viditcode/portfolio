"use client";

import { useEffect, useRef } from "react";

const GISCUS_CONFIG = {
  repo: "viditcode/portfolio", // e.g. "viditcode/portfolio"
  repoId: "R_kgDOT6O1kw", // giscus.app gives you this
  category: "Announcements", // or whichever Discussion category you pick
  categoryId: "DIC_kwDOT6O1k84DD8-G", // giscus.app gives you this
};

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    script.setAttribute("data-repo", GISCUS_CONFIG.repo);
    script.setAttribute("data-repo-id", GISCUS_CONFIG.repoId);
    script.setAttribute("data-category", GISCUS_CONFIG.category);
    script.setAttribute("data-category-id", GISCUS_CONFIG.categoryId);
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-theme", "light");
    script.setAttribute("data-lang", "en");

    ref.current.appendChild(script);
  }, []);

  if (GISCUS_CONFIG.repoId === "REPLACE_ME") {
    return (
      <div className="rounded-lg border border-dashed border-line bg-paper-dim p-6 text-sm text-ink-faint">
        Comments aren&apos;t set up yet — visit{" "}
        <a
          href="https://giscus.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-signal hover:underline"
        >
          giscus.app
        </a>{" "}
        to get your repo ID and category ID, then update{" "}
        <code className="font-mono text-xs">GiscusComments.tsx</code>.
      </div>
    );
  }

  return <div ref={ref} />;
}
