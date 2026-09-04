import type { Metadata } from "next";

export const metadata = {
  title: "Free AI IT Readiness Kit | Zion Tech Group",
  description:
    "Use the Zion Tech Group free AI IT readiness kit to evaluate automation potential and prioritize initiatives.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>
          Free AI IT Readiness Kit
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Assess your organization's readiness for AI and IT automation with this free kit.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Readiness questionnaire</li>
          <li>Workflow mapping template</li>
          <li>Cost and impact estimator</li>
          <li>Implementation roadmap template</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>
            Visit ziontechgroup.com
          </a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>
            Book a walkthrough
          </a>
        </p>
      </div>
    </main>
  );
}
