import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <h1>Zion Tech Solutions</h1>
      <p>Cloud-native, autonomous engineering workflows that improve continuously — no human intervention required.</p>

      <h2>Autonomous Automations</h2>
      <ul>
        <li>
          <strong>Dynamic SEO & OG Images</strong>: Titles, descriptions, and social share images generated automatically.
          <div>
            <Link href="/products">See Product page</Link>
          </div>
        </li>
        <li>
          <strong>Sitemap, RSS, Search Index</strong>: Auto-generated and kept fresh; search engines pinged on update.
          <div>
            <a href="/sitemap.xml">sitemap.xml</a> · <a href="/rss.xml">rss.xml</a> · <a href="/search-index.json">search-index.json</a>
          </div>
        </li>
        <li>
          <strong>Lighthouse CI & Link Checker</strong>: Scheduled quality checks; creates issues on regressions.
        </li>
        <li>
          <strong>JSON-LD Validation</strong>: Ensures structured data is present where expected.
          <div>
            <Link href="/jobs">Jobs</Link> · <Link href="/products">Products</Link> · <Link href="/services/ai-seo-auditor">AI SEO Auditor</Link>
          </div>
        </li>
        <li>
          <strong>Daily Tech Digest</strong>: Curated headlines published automatically.
          <div>
            <a href="/digests/latest.md">Latest Digest</a>
          </div>
        </li>
        <li>
          <strong>Image Optimization</strong>: Public assets compressed daily for faster loads.
        </li>
      </ul>

      <p>
        All workflows run in GitHub Actions and auto-commit changes back to this repository.
      </p>
    </div>
  );
}