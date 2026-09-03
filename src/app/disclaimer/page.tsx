import type { Metadata } from "next";
import InformationalPage, { PageCallout } from "@/components/InformationalPage";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important information about the educational technology content published by ViditCode.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <InformationalPage eyebrow="legal" title="Disclaimer" intro="ViditCode publishes educational technology content. Please use it as a starting point, not as a substitute for independent judgment.">
      <PageCallout>This disclaimer is a general website template, not legal advice. Review and customize it before relying on it. Last updated: September 2, 2026.</PageCallout>
      <section><h2>Technical content and tutorials</h2><p>Articles, tutorials, examples, and testing information are provided for general educational purposes. Technology changes quickly, so instructions may become outdated or may not fit your environment.</p></section>
      <section><h2>Tools and recommendations</h2><p>Software tools, utilities, and recommendations are shared as information, not as a guarantee of suitability or performance. Test tools and code in a safe environment before using them in production.</p></section>
      <section><h2>AI-generated information</h2><p>Future site features or content may include AI-assisted material. AI output can be incomplete, inaccurate, or unsuitable for a particular situation. Verify it independently, especially for security-sensitive or consequential decisions.</p></section>
      <section><h2>Third-party information</h2><p>ViditCode may refer to third-party products, websites, or services. Their content and availability are outside ViditCode&apos;s control, and a reference does not constitute an endorsement.</p></section>
      <section><h2>Accuracy and user responsibility</h2><p>Reasonable efforts are made to publish useful, accurate content, but no warranty is made about completeness, accuracy, or fitness for a particular purpose. You are responsible for evaluating and using information from this site.</p></section>
      <section><h2>Affiliate disclosure</h2><p>ViditCode does not currently state that it has affiliate relationships. If affiliate links are introduced, this page and the relevant content should be updated with a clear disclosure before publication.</p></section>
    </InformationalPage>
  );
}
