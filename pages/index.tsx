import Link from 'next/link';
import Head from 'next/head';
import '../styles/futuristic-landing.css';

export default function Home() {
  return (
    <div className="fut-wrapper fut-bg-blobs fut-grid">
      <Head>
        <title>Zion Tech Solutions — Autonomous, Futuristic Engineering</title>
        <meta name="description" content="Cloud-native, autonomous engineering workflows with futuristic UI and continuous improvements." />
      </Head>

      <header className="fut-hero">
        <div className="fut-container">
          <div className="fut-badge"><span className="dot" /> Autonomous • Cloud-native • Always-on</div>
          <h1 className="fut-title">
            Build the Future with <span className="fut-gradient-text">Autonomous Engineering</span>
          </h1>
          <p className="fut-subtitle">
            Operator-grade automations for SEO, content, performance, accessibility, and data. Designed to run 24/7 in the cloud, commit results back to your repo, and keep your site evolving.
          </p>
          <div className="fut-actions">
            <Link href="/products" className="fut-btn fut-btn--primary">Explore Features</Link>
            <a href="/digests/latest.md" className="fut-btn">Daily Tech Digest</a>
          </div>
        </div>
      </header>

      <section className="fut-section">
        <div className="fut-container fut-grid-cards">
          <article className="fut-card">
            <h3>Dynamic SEO & OG Images</h3>
            <p>Auto-generate titles, descriptions, and on-brand OG images for every route.</p>
            <div className="links">
              <Link href="/products" className="fut-link">See Product</Link>
              <a className="fut-link" href="/sitemap.xml">sitemap.xml</a>
              <a className="fut-link" href="/rss.xml">rss.xml</a>
            </div>
          </article>

          <article className="fut-card">
            <h3>Search Index & Sitemap Pings</h3>
            <p>Search index JSON and sitemap updated on schedule, with search engine pings.</p>
            <div className="links">
              <a className="fut-link" href="/search-index.json">search-index.json</a>
            </div>
          </article>

          <article className="fut-card">
            <h3>Lighthouse & Link Checks</h3>
            <p>Scheduled performance audits and broken link checks, opening issues on regressions.</p>
          </article>

          <article className="fut-card">
            <h3>Structured Data (JSON-LD)</h3>
            <p>Validates presence of JobPosting, Product, Person/Organization, and FAQPage schemas.</p>
            <div className="links">
              <Link href="/jobs" className="fut-link">Jobs</Link>
              <Link href="/products" className="fut-link">Products</Link>
              <Link href="/services/ai-seo-auditor" className="fut-link">FAQ Example</Link>
            </div>
          </article>

          <article className="fut-card">
            <h3>Daily Tech Digest</h3>
            <p>Curated headlines from top tech sources, published daily and synced to your repo.</p>
            <div className="links">
              <a className="fut-link" href="/digests/latest.md">Latest Digest</a>
            </div>
          </article>

          <article className="fut-card">
            <h3>Accessibility & Image Optimization</h3>
            <p>Automated axe audits and daily asset compression to keep UX fast and inclusive.</p>
            <div className="links">
              <a className="fut-link" href="/reports/a11y/latest.json">Latest a11y Report</a>
            </div>
          </article>
        </div>
      </section>

      <div className="fut-divider" />

      <footer className="fut-section">
        <div className="fut-container fut-note">
          Running fully in GitHub Actions with zero human interaction — changes sync back automatically.
        </div>
      </footer>
    </div>
  );
}