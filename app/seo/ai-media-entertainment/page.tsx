import type { Metadata } from "next";

export const metadata = {
  title: "AI Media and Entertainment Solutions | Zion Tech Group",
  description:
    "Apply AI to media and entertainment workflows: content personalization, metadata, and operational efficiency.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Media and Entertainment</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve content operations with AI-assisted personalization, metadata, and distribution automation.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Content recommendation and ranking</li>
          <li>Metadata and tagging automation</li>
          <li>Audience segmentation</li>
          <li>Operational cost reduction</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss media AI</a>
        </p>
      </div>
    </main>
  );
}
