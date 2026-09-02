import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-4xl flex-col justify-center px-6 py-16 sm:py-24">
      <p className="font-mono text-sm text-signal">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">Page Not Found</h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">The page you&apos;re looking for doesn&apos;t exist, may have moved, or its address may be incorrect.</p>
      <nav aria-label="Helpful links" className="mt-8 flex flex-wrap gap-3">
        <Link className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-signal" href="/">Home</Link>
        <Link className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal" href="/blog">Blog</Link>
        <Link className="rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-signal hover:text-signal" href="/contact">Contact</Link>
      </nav>
    </section>
  );
}
