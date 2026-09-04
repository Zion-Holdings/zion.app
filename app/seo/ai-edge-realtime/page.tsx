import type { Metadata } from "next";

export const metadata = {
  title: "AI Edge Realtime Inference | Zion Tech Group",
  description:
    "Deploy AI edge realtime inference with low latency, device management, and observability built for production.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Edge Realtime Inference</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Move inference closer to the action with edge deployment, monitoring, and fallback controls.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Low-latency model deployment</li>
          <li>Device provisioning and updates</li>
          <li>Fallback and canary releases</li>
          <li>Edge observability</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Start edge pilot</a>
        </p>
      </div>
    </main>
  );
}
