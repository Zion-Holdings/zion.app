import type { Metadata } from "next";

export const metadata = {
  title: "AI Agriculture and Agritech | Zion Tech Group",
  description:
    "Apply AI agriculture and agritech solutions for yield estimation, pest detection, and resource optimization.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Agriculture and Agritech</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve crop outcomes with AI-assisted monitoring, pest detection, and irrigation planning.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Yield estimation and anomaly alerts</li>
          <li>Pest and disease detection</li>
          <li>Water and nutrient optimization</li>
          <li>Satellite and drone data fusion</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Review agritech AI</a>
        </p>
      </div>
    </main>
  );
}
