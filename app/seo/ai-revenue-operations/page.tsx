import type { Metadata } from "next";

export const metadata = {
  title: "AI Revenue Operations | Zion Tech Group",
  description:
    "Align sales, marketing, and success data with AI revenue operations workflows that improve conversion and expansion.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Revenue Operations</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve conversion and expansion with AI-assisted revenue operations and go-to-market analytics.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Lead scoring and routing</li>
          <li>Pipeline hygiene automation</li>
          <li>Outreach personalization</li>
          <li>Churn and expansion signals</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Talk revenue ops</a>
        </p>
      </div>
    </main>
  );
}
