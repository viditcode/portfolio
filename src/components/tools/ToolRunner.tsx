"use client";

import { useState } from "react";
import type { Tool } from "@/data/tools";

const inputClass = "min-h-44 w-full rounded-lg border border-line bg-paper p-4 font-mono text-sm text-ink outline-none transition-colors focus:border-signal";

export default function ToolRunner({ tool }: { tool: Tool }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [message, setMessage] = useState("Paste content, then choose an action.");

  function formatJson(compact = false) {
    try { setOutput(JSON.stringify(JSON.parse(input), null, compact ? 0 : 2)); setMessage("Valid JSON."); } catch { setOutput(""); setMessage("That is not valid JSON. Check commas, quotes, and brackets."); }
  }
  function convertText(style: "camel" | "snake" | "kebab" | "title") {
    const words = input.trim().replace(/([a-z])([A-Z])/g, "$1 $2").split(/[^a-zA-Z0-9]+/).filter(Boolean);
    const lower = words.map((word) => word.toLowerCase());
    const result = style === "camel" ? lower.map((word, index) => index ? word[0].toUpperCase() + word.slice(1) : word).join("") : style === "snake" ? lower.join("_") : style === "kebab" ? lower.join("-") : lower.map((word) => word[0].toUpperCase() + word.slice(1)).join(" ");
    setOutput(result); setMessage(result ? "Converted." : "Enter text to convert.");
  }
  const action = tool.slug === "json-formatter" ? <div className="flex flex-wrap gap-3"><button type="button" onClick={() => formatJson()} className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-signal">Format & validate</button><button type="button" onClick={() => formatJson(true)} className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-signal hover:text-signal">Compact</button></div> : tool.slug === "url-encoder" ? <div className="flex flex-wrap gap-3"><button type="button" onClick={() => { try { setOutput(encodeURIComponent(input)); setMessage("Encoded."); } catch { setMessage("Unable to encode that text."); } }} className="rounded-full bg-ink px-4 py-2 text-sm font-medium text-paper hover:bg-signal">Encode</button><button type="button" onClick={() => { try { setOutput(decodeURIComponent(input)); setMessage("Decoded."); } catch { setMessage("That value cannot be decoded."); } }} className="rounded-full border border-line px-4 py-2 text-sm font-medium text-ink hover:border-signal hover:text-signal">Decode</button></div> : <div className="flex flex-wrap gap-3">{(["camel", "snake", "kebab", "title"] as const).map((style) => <button key={style} type="button" onClick={() => convertText(style)} className="rounded-full border border-line px-4 py-2 text-sm font-medium capitalize text-ink hover:border-signal hover:text-signal">{style} case</button>)}</div>;
  return <section className="mt-10 rounded-xl border border-line bg-white/60 p-5 sm:p-8"><div className="grid gap-5 lg:grid-cols-2"><label className="text-sm font-medium text-ink">Input<textarea value={input} onChange={(event) => setInput(event.target.value)} className={`${inputClass} mt-2`} placeholder={tool.slug === "json-formatter" ? '{ "example": true }' : "Paste text here"} /></label><label className="text-sm font-medium text-ink">Output<textarea readOnly value={output} className={`${inputClass} mt-2`} placeholder="Your result will appear here" /></label></div><div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">{action}<p aria-live="polite" className="text-sm text-ink-soft">{message}</p></div></section>;
}
