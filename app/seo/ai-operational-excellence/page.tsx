import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Operational Excellence | Zion Tech Group",
  description:
    "Raise operational performance with AI operational excellence programs, metrics, and coaching.",
  alternates: { canonical: "https://ziontechgroup.com/seo/ai-operational-excellence" },
};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Operational Excellence</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve throughput, quality, and delivery predictability with AI operational excellence.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Performance signal extraction</li>
          <li>Coaching recommendations</li>
          <li>Process standardization support</li>
          <li>Real-time operational dashboards</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Review operational excellence AI</a>
        </p>
      </div>
    </main>
  );
}
