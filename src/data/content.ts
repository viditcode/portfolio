// Edit this file with your real details. Keep NDA-covered work generalized —
// describe the problem/approach/impact without naming the client or company.

export const profile = {
  name: "Vidit",
  title: "SDET / QA Automation Engineer",
  tagline:
    "I break things on purpose — then build the automation that stops them breaking again.",
  location: "India",
  email: "you@example.com",
  github: "https://github.com/viditcode",
  linkedin: "https://linkedin.com/in/your-handle",
  resumeUrl: "/resume.pdf",
  siteUrl: "https://example.com", // update once you have a real domain — used for SEO/OG tags
};

export type CaseStudy = {
  id: string;
  status: "PASS" | "IN_PROGRESS";
  title: string;
  duration: string;
  impact: string;
  problem: string;
  approach: string;
  stack: string[];
  links?: { label: string; href: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-01",
    status: "PASS",
    title: "End-to-End Booking Flow Automation",
    duration: "6 wks",
    impact: "6 modules automated, 0 → full regression coverage",
    problem:
      "A multi-step booking flow (login via OTP, slot selection, cart, payment, summary) had no automated regression coverage, making every release a manual re-check.",
    approach:
      "Built a Python + Playwright framework using the Page Object Model with a shared BasePage, isolated fixtures per logged-in state, and dedicated handling for the payment gateway's iframe/popup behavior.",
    stack: ["Python", "Playwright", "POM", "Pytest", "Payment Gateway"],
    links: [{ label: "GitHub", href: "https://github.com/viditcode" }],
  },
  {
    id: "cs-02",
    status: "PASS",
    title: "API Test Suite — Public REST API",
    duration: "2 wks",
    impact: "60+ cases, wired into CI on every PR",
    problem:
      "Needed a repeatable way to validate CRUD behavior and edge cases for a REST API without relying on manual Postman runs before every release.",
    approach:
      "Started manual exploration in Postman (environments, chained requests, Tests tab), then rebuilt the coverage in Python using requests + pytest, with one clearly-named test per behavior.",
    stack: ["Postman", "Python", "Requests", "Pytest", "GitHub Actions"],
    links: [{ label: "GitHub", href: "https://github.com/viditcode" }],
  },
  {
    id: "cs-03",
    status: "IN_PROGRESS",
    title: "Security Testing — OWASP Top 10 Case Studies",
    duration: "3 wks",
    impact: "IDOR, auth flaws, and business-logic issues found in practice apps",
    problem:
      "Wanted hands-on security testing skill beyond theory — specifically the vulnerability classes most relevant to booking and payment systems.",
    approach:
      "Worked through DVWA and Juice Shop with Burp Suite Community Edition, prioritizing high-impact classes first: IDOR, broken access control, and business logic flaws, before moving to JWT and API-specific issues.",
    stack: ["Burp Suite", "DVWA", "Juice Shop", "OWASP Top 10"],
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  { label: "Automation", items: ["Python", "Playwright", "Selenium (basics)", "POM"] },
  { label: "API Testing", items: ["Postman", "Requests", "Pytest", "REST"] },
  { label: "Security", items: ["Burp Suite", "OWASP Top 10", "DVWA", "Juice Shop"] },
  { label: "Tooling", items: ["Git/GitHub", "GitHub Actions", "Allure", "k6"] },
];

export const bootLines = [
  { text: "$ npm run verify --profile", delay: 0 },
  { text: "✓ profile loaded", delay: 500 },
  { text: `✓ ${caseStudies.length} case studies found`, delay: 900 },
  { text: "running contact.spec.ts", delay: 1300 },
  { text: "✓ contact.spec.ts passed", delay: 1900 },
  { text: "ALL CHECKS PASSED", delay: 2400 },
];
