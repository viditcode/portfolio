export type Tool = {
  slug: "json-formatter" | "url-encoder" | "text-case-converter" | "jwt-decoder" | "word-counter";
  name: string;
  description: string;
  category: string;
  tags: string[];
  summary?: string;
  example?: string;
};

export const tools: Tool[] = [
  {
    slug: "json-formatter",
    name: "JSON Formatter & Validator",
    description: "Format, validate, and compact JSON directly in your browser.",
    category: "Developer Utility",
    tags: ["JSON", "API", "Developer"],
  },
  {
    slug: "url-encoder",
    name: "URL Encoder & Decoder",
    description: "Encode or decode URL components safely for requests and query parameters.",
    category: "Developer Utility",
    tags: ["URL", "API", "Developer"],
  },
  {
    slug: "text-case-converter",
    name: "Text Case Converter",
    description: "Convert text to camel case, snake case, kebab case, or title case.",
    category: "Developer Utility",
    tags: ["Text", "Developer", "Productivity"],
  },
  {
    slug: "jwt-decoder",
    name: "JWT Decoder",
    description: "Decode a JSON Web Token to inspect its header, payload, expiry, and standard claims.",
    category: "Security & API",
    tags: ["JWT", "Security", "API", "Developer"],
    summary: "Use this JWT decoder to inspect the readable header and payload of a JSON Web Token. It identifies common claims such as the algorithm, issuer, audience, issued-at time, expiry, and not-before time so you can troubleshoot authentication flows more quickly.",
    example: "Paste a token in the form header.payload.signature. The decoder shows the data contained in the header and payload, plus a readable token-status summary. Decoding a JWT does not verify its signature or prove that it is trustworthy.",
  },
  {
    slug: "word-counter",
    name: "Word Counter",
    description: "Count words, characters, sentences, paragraphs, and estimated reading time in your text.",
    category: "Writing Utility",
    tags: ["Writing", "Text", "Productivity", "SEO"],
    summary: "Use this free word counter to quickly measure the length and readability of text before publishing. It reports words, characters with and without spaces, sentences, paragraphs, and an estimated reading time.",
    example: "Paste a blog introduction, product description, or social post. The counter updates as you type, making it useful for checking editorial limits and planning readable content.",
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  tools.forEach((tool) => tool.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)));
  return [...counts.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => a.tag.localeCompare(b.tag));
}
