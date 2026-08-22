"use client";

const KIT_FORM_ID = "9832242";

export default function NewsletterForm() {
  return (
    <div className="rounded-xl border border-line bg-white/60 p-6 sm:p-8 text-center">
      {/*<p className="font-mono text-xs tracking-widest text-ink-faint uppercase mb-2">
        // subscribe
      </p>*/}
      <h3 className="text-lg font-semibold text-ink mb-2">
        Get new posts by email
      </h3>
      <p className="text-sm text-ink-soft mb-5 max-w-sm mx-auto">
        API testing notes, no spam, unsubscribe anytime.
      </p>

      <form
        action={`https://app.kit.com/forms/${KIT_FORM_ID}/subscriptions`}
        method="post"
        className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto"
      >
        <input
          type="email"
          name="email_address"
          required
          placeholder="you@example.com"
          className="flex-1 rounded-full border border-line bg-paper px-4 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-signal outline-none transition-colors"
        />
        <button
          type="submit"
          className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper hover:bg-signal transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}