import type { Metadata } from "next";

export const metadata = {
  title: "AI Email Automation for Business | Zion Tech Group",
  description:
    "Implement AI email automation for business with safer routing, drafting, and analytics from Zion Tech Group.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Email Automation for Business</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve response quality and reduce handling time with AI email automation designed for business teams.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Intent classification and routing</li>
          <li>Suggested replies and summaries</li>
          <li>Analytics and volume forecasting</li>
          <li>Compliance-aware retention rules</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Talk to our team</a>
        </p>
      </div>
    </main>
  );
}
