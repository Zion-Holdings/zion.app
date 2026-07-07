import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI IT Compliance Automation | Zion Tech Group",
  description:
    "Maintain compliance posture with AI IT compliance automation, evidence collection, and controls.",
  alternates: { canonical: "https://ziontechgroup.com/seo/ai-it-compliance" },
};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI IT Compliance Automation</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce audit time and improve control reliability with AI-assisted compliance automation.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Automated evidence collection</li>
          <li>Control testing and exception tracking</li>
          <li>Policy and control mapping</li>
          <li>Audit-ready reporting</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss IT compliance AI</a>
        </p>
      </div>
    </main>
  );
}
