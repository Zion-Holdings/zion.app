import type { Metadata } from "next";

export const metadata = {
  title: "AI Edge and IoT Platforms | Zion Tech Group",
  description:
    "Deploy AI edge and IoT platforms for real-time operations, device management, and workload optimization.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Edge and IoT Platforms</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve real-time operations with edge deployment, telemetry processing, and IoT automation.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Edge runtime and device onboarding</li>
          <li>Streaming telemetry and anomaly detection</li>
          <li>Workload offloading rules</li>
          <li>Security and update orchestration</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss edge/IoT AI</a>
        </p>
      </div>
    </main>
  );
}
