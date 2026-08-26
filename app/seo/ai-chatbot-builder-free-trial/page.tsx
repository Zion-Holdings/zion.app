import type { Metadata } from "next";

export const metadata = {
  title: "AI Chatbot Builder Free Trial | Zion Tech Group",
  description:
    "Build and test an AI chatbot with Zion Tech Group using our guided free trial and prebuilt integrations.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Chatbot Builder Free Trial</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Evaluate an AI chatbot builder with conversation design, integrations, and analytics—no long-term lock-in.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Conversation flow templates</li>
          <li>CRM and helpdesk integrations</li>
          <li>Escalation and handoff rules</li>
          <li>Free trial with real use cases</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Start chatbot trial</a>
        </p>
      </div>
    </main>
  );
}
