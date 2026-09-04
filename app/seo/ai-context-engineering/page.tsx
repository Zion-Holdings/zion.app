import type { Metadata } from "next";

export const metadata = {
  title: "AI Context Engineering for Enterprise | Zion Tech Group",
  description:
    "Improve AI outputs with enterprise context engineering: retrieval, grounding, and policy-aware prompt orchestration.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Context Engineering for Enterprise</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve answer quality and compliance with strong context engineering across knowledge sources.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Knowledge indexing and retrieval</li>
          <li>Prompt and tool orchestration</li>
          <li>Citations and grounded answers</li>
          <li>Policy-aware filtering</li>
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
