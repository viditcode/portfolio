import type { Metadata } from "next";
import InformationalPage, { PageCallout } from "@/components/InformationalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Learn how ViditCode and its optional third-party features use cookies and similar technologies.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <InformationalPage eyebrow="legal" title="Cookie Policy" intro="This page explains the limited use of cookies and similar browser technologies on ViditCode.">
      <PageCallout>This policy reflects the current implementation. Update it before adding analytics, advertising, consent tooling, or other tracking. Last updated: September 2, 2026.</PageCallout>
      <section><h2>What these technologies are</h2><p>Cookies are small files stored by a browser. Local storage and similar technologies can also remember information in a browser. They can support core functions, preferences, measurements, or third-party services.</p></section>
      <section><h2>Current use on ViditCode</h2><p>ViditCode does not currently use a dedicated analytics, advertising, or cookie-consent service, and it does not set advertising cookies. Public pages can be viewed without creating an account.</p></section>
      <section><h2>Optional third-party features</h2><p>The newsletter form sends a subscription request to Kit. Blog comments load Giscus, which uses GitHub Discussions. When you use either feature, that provider may use cookies, local storage, or similar technologies under its own policies. These are optional features; you can avoid them by not submitting the newsletter form or using comments.</p></section>
      <section><h2>Essential and optional technologies</h2><p>There are no separately configured first-party essential or optional tracking categories at this time. If future features introduce analytics, ads, or a preference system, this policy and any required consent controls will be updated first.</p></section>
      <section><h2>Managing cookies</h2><p>You can control or delete cookies through your browser settings. Blocking cookies may affect third-party features. Consult your browser&apos;s help documentation for instructions.</p></section>
    </InformationalPage>
  );
}
