import type { Metadata } from "next";

export const metadata = {
  title: "Enterprise AI Free Trial | Zion Tech Group",
  description: "Start an enterprise AI free trial with Zion Tech Group. Hands-on onboarding, no long-term lock-in.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.4rem", fontWeight: 700, marginBottom: "1rem" }}>Enterprise AI Free Trial</h1>
        <p style={{ color: "#94a3b8", fontSize: "1.05rem", marginBottom: "1rem" }}>
          Try Zion Tech Group AI services with guided setup and measurable outcomes.
        </p>
        <p style={{ color: "#cbd5e1", marginBottom: "1rem" }}>
          Visit https://ziontechgroup.com to explore more free services and tools before you commit.
        </p>
        <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>
          Book your onboarding call
        </a>
      </div>
    </main>
  );
}
