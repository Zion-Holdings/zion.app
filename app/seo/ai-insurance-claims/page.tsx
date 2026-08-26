import type { Metadata } from "next";

export const metadata = {
  title: "AI Insurance Claims Automation | Zion Tech Group",
  description:
    "Speed insurance claims with AI extraction, triage, and workflow automation while maintaining compliance.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Insurance Claims Automation</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce claims handling time with AI extraction, triage, and workflow automation.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Document extraction and validation</li>
          <li>Fraud signal flagging</li>
          <li>Workflow assignment and SLA tracking</li>
          <li>Regulatory reporting support</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Book claims automation review</a>
        </p>
      </div>
    </main>
  );
}
