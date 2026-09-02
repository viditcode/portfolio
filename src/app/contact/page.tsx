import type { Metadata } from "next";
import InformationalPage, { PageCallout, PageLinks } from "@/components/InformationalPage";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ViditCode for questions, feedback, bug reports, or collaboration inquiries.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <InformationalPage eyebrow="contact" title="Get in touch" intro="Questions, feedback, bug reports, and relevant collaboration inquiries are welcome.">
      <PageCallout>
        <h2>Email</h2>
        <p className="mt-2">The best way to reach ViditCode is by email.</p>
        <a className="mt-4 inline-block font-medium text-signal hover:underline" href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </PageCallout>
      <section>
        <h2>How to help</h2>
        <p>
          If you&apos;re reporting an issue, include the page or tool involved and enough detail to reproduce it. For feedback or collaboration, a short note about the context is appreciated.
        </p>
      </section>
      <PageLinks />
    </InformationalPage>
  );
}
