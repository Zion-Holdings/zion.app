import type { Metadata } from "next";

export const metadata = {
  title: "AI Support Automation Playbook | Zion Tech Group",
  description:
    "A practical AI support automation playbook for teams ready to reduce ticket volume and improve response quality.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>
          AI Support Automation Playbook
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          A step-by-step playbook for deploying AI support automation without losing customer trust.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Triage and classification patterns</li>
          <li>Human handoff rules</li>
          <li>Quality assurance checklists</li>
          <li>ROI measurement template</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>
            Visit ziontechgroup.com
          </a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>
            Talk to our team
          </a>
        </p>
      </div>
    </main>
  );
}
