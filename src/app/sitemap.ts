import type { MetadataRoute } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { profile } from "@/data/content";
import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${profile.siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));
  const tags = getAllTags().map(({ tag }) => ({ url: `${profile.siteUrl}/blog/category/${encodeURIComponent(tag)}`, lastModified: new Date() }));

  return [
    { url: profile.siteUrl, lastModified: new Date() },
    { url: `${profile.siteUrl}/blog`, lastModified: new Date() },
    { url: `${profile.siteUrl}/tools`, lastModified: new Date() },
    ...tools.map((tool) => ({ url: `${profile.siteUrl}/tools/${tool.slug}`, lastModified: new Date() })),
    { url: `${profile.siteUrl}/about`, lastModified: new Date() },
    { url: `${profile.siteUrl}/contact`, lastModified: new Date() },
    { url: `${profile.siteUrl}/privacy-policy`, lastModified: new Date() },
    { url: `${profile.siteUrl}/terms`, lastModified: new Date() },
    { url: `${profile.siteUrl}/disclaimer`, lastModified: new Date() },
    { url: `${profile.siteUrl}/cookie-policy`, lastModified: new Date() },
    ...tags,
    ...posts,
  ];
}
