import type { Metadata } from "next";

export const metadata = {
  title: "AI Document Processing | Zion Tech Group",
  description:
    "Deploy AI document processing for extraction, classification, validation, and workflow handoff at scale.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Document Processing</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce manual document handling with AI extraction, classification, and validation.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Structured and unstructured extraction</li>
          <li>Document classification</li>
          <li>Validation and exception handling</li>
          <li>Workflow integration and handoff</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Start automation review</a>
        </p>
      </div>
    </main>
  );
}
