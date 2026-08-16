import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { profile } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts().map((post) => ({
    url: `${profile.siteUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    { url: profile.siteUrl, lastModified: new Date() },
    { url: `${profile.siteUrl}/blog`, lastModified: new Date() },
    ...posts,
  ];
}
