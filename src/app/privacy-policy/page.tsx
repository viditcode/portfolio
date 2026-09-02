import type { Metadata } from "next";
import InformationalPage, { PageCallout } from "@/components/InformationalPage";
import { profile } from "@/data/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read the ViditCode privacy policy, including how newsletter subscriptions and third-party comments are handled.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <InformationalPage eyebrow="legal" title="Privacy Policy" intro="This policy explains how ViditCode handles information when you visit the site or choose to use its available features.">
      <PageCallout>This is an informational website policy template, not legal advice. Review it before publishing if your practices or applicable law change. Last updated: September 2, 2026.</PageCallout>
      <section><h2>Introduction</h2><p>ViditCode is a personal website operated by {profile.name}. This policy applies to information processed through viditcode.com.</p></section>
      <section><h2>Information we collect</h2><p>Visiting public pages does not require an account or a contact form submission. If you subscribe to the newsletter, the email address you provide is submitted to Kit. If you participate in blog comments, Giscus and GitHub may process the information associated with your GitHub account and comment.</p></section>
      <section><h2>How information is used</h2><p>Newsletter email addresses are used by Kit to deliver requested updates. Comments are used to display and manage discussion on the relevant blog post. ViditCode does not currently use a separate website analytics or advertising service.</p></section>
      <section><h2>Cookies and similar technologies</h2><p>ViditCode does not currently set a dedicated analytics or advertising cookie. Third-party features, including Kit and Giscus/GitHub, may use cookies, local storage, or similar technologies when you interact with them. See the <a className="text-signal hover:underline" href="/cookie-policy">Cookie Policy</a> for more detail.</p></section>
      <section><h2>Third-party services</h2><p>The newsletter form submits to Kit. Blog comments load Giscus, which is based on GitHub Discussions. These services have their own privacy practices; review their policies before using those features.</p></section>
      <section><h2>Data retention and security</h2><p>ViditCode does not operate a separate database for visitor accounts or messages. Information submitted to third-party services is retained under their policies. Reasonable care is taken in maintaining the site, but no internet transmission or service can be guaranteed completely secure.</p></section>
      <section><h2>Your choices and rights</h2><p>You can choose not to use the newsletter or comments. Newsletter messages include the provider&apos;s unsubscribe option. For requests about information held by a third-party service, use that service&apos;s privacy controls or contact it directly.</p></section>
      <section><h2>Children&apos;s privacy</h2><p>ViditCode is not directed to children and does not knowingly seek to collect personal information from children.</p></section>
      <section><h2>Changes to this policy</h2><p>This policy may be updated when site features or legal requirements change. The date above will be revised when material changes are made.</p></section>
      <section><h2>Contact</h2><p>For privacy questions about ViditCode, email <a className="text-signal hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>.</p></section>
    </InformationalPage>
  );
}
