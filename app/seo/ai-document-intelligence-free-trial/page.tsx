import type { Metadata } from "next";

export const metadata = {
  title: "AI Document Intelligence Free Trial | Zion Tech Group",
  description:
    "Start an AI document intelligence free trial with Zion Tech Group: extraction, classification, and workflow integration.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>
          AI Document Intelligence Free Trial
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Evaluate document intelligence with a guided free trial and real document samples.
        </p>
        <p style={{ color: "#94a3b8", marginBottom: "1rem" }}>
          Visit https://ziontechgroup.com to learn more about our new AI services and free tools.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>
            Explore services
          </a>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>
            Start trial kickoff
          </a>
        </div>
      </div>
    </main>
  );
}
