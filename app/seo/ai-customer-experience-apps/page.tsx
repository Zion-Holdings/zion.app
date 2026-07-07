import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Customer Experience Applications | Zion Tech Group",
  description:
    "Improve satisfaction across digital touchpoints with AI customer experience applications.",
  alternates: { canonical: "https://ziontechgroup.com/seo/ai-customer-experience-apps" },
};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Customer Experience Applications</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Deliver faster, more relevant service across web, mobile, and support channels.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Journey orchestration</li>
          <li>Personalized offers and follow-up</li>
          <li>Support routing and sentiment routing</li>
          <li>Cross-channel experience analytics</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss customer experience AI</a>
        </p>
      </div>
    </main>
  );
}
