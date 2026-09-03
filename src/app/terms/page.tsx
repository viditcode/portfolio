import type { Metadata } from "next";
import InformationalPage, { PageCallout } from "@/components/InformationalPage";
import { profile } from "@/data/content";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms for using ViditCode and its educational technology content.", alternates: { canonical: "/terms" } };

export default function TermsPage() {
  return <InformationalPage eyebrow="legal" title="Terms & Conditions" intro="These terms describe the general rules for using ViditCode.">
    <PageCallout>These terms are a general website template, not legal advice. They should be reviewed and customized for your circumstances before relying on them. Last updated: September 2, 2026.</PageCallout>
    <section><h2>Acceptance of terms</h2><p>By accessing ViditCode, you agree to these terms. If you do not agree, please do not use the website.</p></section>
    <section><h2>Use of the website</h2><p>You may use the site for lawful, personal, and informational purposes. Do not interfere with the site, attempt unauthorized access, or use its content in a way that infringes rights or violates law.</p></section>
    <section><h2>Content and intellectual property</h2><p>Unless otherwise noted, original site content is owned by or licensed to ViditCode. You may link to and share it with appropriate attribution, but do not reproduce or republish substantial content without permission.</p></section>
    <section><h2>Tools, utilities, and AI output</h2><p>Any tools, examples, or AI-generated output made available on the site are provided for general informational use. Review and test output independently before using it in production, security-sensitive, legal, financial, or other consequential situations.</p></section>
    <section><h2>Third-party links and services</h2><p>The site may link to or embed third-party services. ViditCode does not control their content, availability, or practices and is not responsible for them.</p></section>
    <section><h2>Availability and accuracy</h2><p>The site may change, be unavailable, or contain errors. Efforts are made to keep content useful, but no guarantee is made that it is complete, current, or suitable for a particular purpose.</p></section>
    <section><h2>Limitation of liability</h2><p>To the extent permitted by applicable law, use of ViditCode is at your own risk. ViditCode is not liable for losses arising from reliance on site content, tools, links, or interruptions in availability.</p></section>
    <section><h2>Changes and contact</h2><p>These terms may be updated from time to time. Questions can be sent to <a className="text-signal hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>.</p></section>
  </InformationalPage>;
}
