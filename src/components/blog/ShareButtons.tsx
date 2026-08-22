"use client";

import { useState } from "react";

export default function ShareButtons({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const twitterHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    url
  )}`;

  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-xs text-ink-faint uppercase tracking-wide">
        Share
      </span>
      <a
        href={twitterHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="flex items-center justify-center w-8 h-8 rounded-full border border-line text-ink-soft hover:border-signal hover:text-signal transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.9 1.9h3.7l-8 9.2 9.5 12.5h-7.4l-5.8-7.6-6.6 7.6H.6l8.6-9.9L0 1.9h7.6l5.3 7z" />
        </svg>
      </a>
      <a
        href={linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="flex items-center justify-center w-8 h-8 rounded-full border border-line text-ink-soft hover:border-signal hover:text-signal transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.4 20.4h-3.5v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.05c.5-.9 1.6-1.9 3.4-1.9 3.6 0 4.3 2.4 4.3 5.5v6.2zM5.3 7.4A2 2 0 1 1 5.3 3.3a2 2 0 0 1 0 4.1zM7 20.4H3.6V9H7v11.4z" />
        </svg>
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy link"
        className="flex items-center justify-center w-8 h-8 rounded-full border border-line text-ink-soft hover:border-signal hover:text-signal transition-colors"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="9" y="9" width="13" height="13" rx="2" />
            <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
          </svg>
        )}
      </button>
      {copied && (
        <span className="font-mono text-xs text-signal">Copied!</span>
      )}
    </div>
  );
}
