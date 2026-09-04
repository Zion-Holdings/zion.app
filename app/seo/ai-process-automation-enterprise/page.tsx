import type { Metadata } from "next";

export const metadata = {
  title: "AI Process Automation for Enterprise | Zion Tech Group",
  description:
    "Apply AI process automation across back-office, support, and operations with measurable ROI.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Process Automation for Enterprise</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Identify high-impact workflows, automate them with AI, and measure outcomes with clear KPIs.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Workflow selection and prioritization</li>
          <li>Document and data extraction</li>
          <li>Exception handling and human handoff</li>
          <li>ROI tracking and governance</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Book automation review</a>
        </p>
      </div>
    </main>
  );
}
