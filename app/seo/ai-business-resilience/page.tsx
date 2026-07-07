import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Business Resilience Planning | Zion Tech Group",
  description:
    "Strengthen continuity planning with AI business resilience tools and disruption forecasting.",
  alternates: { canonical: "https://ziontechgroup.com/seo/ai-business-resilience" },
};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Business Resilience</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Prepare for disruptions with AI resilience planning and faster recovery workflows.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Disruption scenario modeling</li>
          <li>Critical path recovery planning</li>
          <li>Resilience scorecard automation</li>
          <li>Supplier and operational redundancy checks</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Review business resilience AI</a>
        </p>
      </div>
    </main>
  );
}
