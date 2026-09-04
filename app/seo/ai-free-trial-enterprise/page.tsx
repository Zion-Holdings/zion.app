import type { Metadata } from "next";

export const metadata = {
  title: "Free AI Trial for Enterprises | Zion Tech Group",
  description: "Run a low-risk enterprise AI trial with Zion Tech Group: guided use case, implementation support, and clear success criteria.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>Free AI Trial for Enterprises</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Start a short enterprise AI trial with defined scope, guardrails, and measurable outcomes.
        </p>
        <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>
          Ideal for IT leaders evaluating AI support, automation, and document intelligence.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Explore services</a>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Schedule trial kickoff</a>
        </div>
      </div>
    </main>
  );
}
