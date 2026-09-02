import type { Metadata } from "next";
import InformationalPage, { PageLinks } from "@/components/InformationalPage";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about ViditCode, a practical resource for software testing, development, and developer tools.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <InformationalPage eyebrow="about" title="About ViditCode" intro="ViditCode is a personal technology website for sharing practical lessons from software testing, automation, development, and the tools that support better software.">
      <section>
        <h2>What you&apos;ll find here</h2>
        <p>
          The site brings together notes, tutorials, and projects grounded in real learning and hands-on work. Topics include QA automation, API testing, security-minded testing, software development, and useful developer workflows.
        </p>
      </section>
      <section>
        <h2>Built for practical learning</h2>
        <p>
          ViditCode aims to make technical ideas easier to apply. Articles may explain an approach, document a lesson learned, or share a starting point for exploring a tool. Content is intended to be useful to developers, testers, and anyone improving their software craft.
        </p>
      </section>
      <section>
        <h2>What&apos;s next</h2>
        <p>
          Over time, ViditCode may grow to include more in-depth guides, projects, courses, and small utilities. Any additions will stay focused on clear, useful technology and software-quality resources.
        </p>
      </section>
      <PageLinks />
    </InformationalPage>
  );
}
