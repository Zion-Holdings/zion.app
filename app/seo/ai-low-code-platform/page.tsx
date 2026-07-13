import type { Metadata } from "next";

export const metadata = {
  title: "AI Low-Code Platform Solutions | Zion Tech Group",
  description:
    "Accelerate internal tooling and business apps with AI low-code platform capabilities and governance.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Low-Code Platform</h1>
        <p style={{ color: "#cbde8f1", marginBottom: "0.75rem" }}>
          Deliver business apps faster with AI-assisted low-code workflows and governance.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>AI schema and UI generation</li>
          <li>Workflow automation and approval chains</li>
          <li>Role-based access and audit logs</li>
          <li>Enterprise integration controls</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Review low-code AI workflows</a>
        </p>
      </div>
    </main>
  );
}
