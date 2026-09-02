export type Tool = {
  slug: "json-formatter" | "url-encoder" | "text-case-converter";
  name: string;
  description: string;
  category: string;
  tags: string[];
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
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}

export function getToolTags(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  tools.forEach((tool) => tool.tags.forEach((tag) => counts.set(tag, (counts.get(tag) ?? 0) + 1)));
  return [...counts.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => a.tag.localeCompare(b.tag));
}
