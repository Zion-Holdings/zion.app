import type { Metadata } from "next";

export const metadata = {
  title: "AI Adaptive Education | Zion Tech Group",
  description:
    "Build adaptive learning experiences with AI tutoring, content recommendation, and progress analytics.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Adaptive Education</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve learning outcomes with AI-generated content, tutoring, and adaptive pathways.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Personalized learning paths</li>
          <li>Automated assessment and feedback</li>
          <li>Content generation at scale</li>
          <li>Progress and retention analytics</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Explore adaptive learning</a>
        </p>
      </div>
    </main>
  );
}
