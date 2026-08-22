import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllPosts, getAllTags } from "@/lib/posts";
import SearchBar from "@/components/blog/SearchBar";
import CategoryChips from "@/components/blog/CategoryChips";
import NewsletterForm from "@/components/blog/NewsletterForm";
import SubscribeBanner from "@/components/blog/SubscribeBanner";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on QA automation, API testing, and security testing.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <Suspense fallback={null}>
        <SubscribeBanner />
      </Suspense>

      {/*<p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-3">
        // blog
      </p>*/}
      <h1 className="text-2xl font-semibold text-ink mb-8">Blog</h1>

      <CategoryChips tags={tags} />

      {posts.length === 0 ? (
        <p className="text-ink-soft">No posts yet — check back soon.</p>
      ) : (
        <SearchBar posts={posts} />
      )}

      <div className="mt-16">
        <NewsletterForm />
      </div>
    </section>
  );
}