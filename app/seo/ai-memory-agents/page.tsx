import type { Metadata } from "next";

export const metadata = {
  title: "AI Memory Agents | Zion Tech Group",
  description:
    "Implement AI memory agents for long-horizon personalization, context retention, and workflow continuity.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Memory Agents</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve user experience with memory-enabled AI agents that retain context across sessions.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Long-horizon user memory</li>
          <li>Preference and intent retention</li>
          <li>Cross-session continuity</li>
          <li>Privacy-safe memory management</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Explore memory agents</a>
        </p>
      </div>
    </main>
  );
}
