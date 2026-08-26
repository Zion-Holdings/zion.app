import type { Metadata } from "next";

export const metadata = {
  title: "AI Services Catalog | Zion Tech Group",
  description: "Explore Zion Tech Group's AI services catalog: automation, copilots, computer vision, document intelligence, and workflow AI.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>AI Services Catalog</h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", marginBottom: "1.5rem" }}>
          Browse our AI services and find the right automation stack for your business.
        </p>
        <ul style={{ display: "grid", gap: "0.75rem" }}>
          <li>AI Customer Success & Support Automation</li>
          <li>AI Document Intelligence & RAG</li>
          <li>AI Security Operations & Threat Detection</li>
          <li>AI Computer Vision & Quality Inspection</li>
          <li>AI Marketing & Revenue Operations</li>
        </ul>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Schedule a meeting</a>
        </div>
      </div>
    </main>
  );
}
