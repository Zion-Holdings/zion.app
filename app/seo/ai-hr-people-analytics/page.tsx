import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI HR and People Analytics | Zion Tech Group",
  description:
    "Improve workforce planning with AI HR and people analytics for hiring, retention, and performance.",
  alternates: { canonical: "https://ziontechgroup.com/seo/ai-hr-people-analytics" },
};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI HR and People Analytics</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Make better people decisions with AI-powered HR analytics and insights.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Hiring pipeline insights</li>
          <li>Retention and attrition risk scoring</li>
          <li>Skill gap analysis</li>
          <li>Workforce planning and forecasting</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Explore people analytics AI</a>
        </p>
      </div>
    </main>
  );
}
