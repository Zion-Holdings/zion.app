import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* ... existing hero and content ... */}

      <section className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-bold mb-4">Autonomous Cloud Automations</h2>
        <p className="text-gray-600 mb-6">These automations run continuously in the cloud without human intervention, improving the site and publishing results.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc pl-5">
          <li>
            <strong>Marketing (LinkedIn)</strong> – posts latest blog updates automatically.
            {' '}<Link className="text-blue-600 underline" href="/api/health">Status</Link>
          </li>
          <li>
            <strong>Performance Audits</strong> – daily Google PageSpeed Insights reports.
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/performance/psi" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Link Integrity</strong> – daily broken link scans.
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/link-audit" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Sitemap Refresh</strong> – auto-updates sitemap.xml from live crawl.
            {' '}<Link className="text-blue-600 underline" href="/sitemap.xml" target="_blank">View sitemap</Link>
          </li>
          <li>
            <strong>SEO Audit</strong> – daily checks for titles, descriptions, and OG tags.
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/seo" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Image Audit</strong> – verifies optimal formats and sizes.
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/image-audit" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Accessibility Audit</strong> – PSI-based a11y scores across key pages.
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/a11y" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Security Headers</strong> – checks CSP, X-Frame-Options, and more.
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/security" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>RSS Health</strong> – validates /feed.xml regularly.
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/rss" target="_blank">View reports</Link>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold mb-3">SEO & Integrity Automations</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc pl-5">
          <li>
            <strong>Canonical Tag Audit</strong>
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/seo/canonical" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Structured Data Audit</strong>
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/seo/structured-data" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Sitemap Integrity</strong>
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/sitemap" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Robots.txt Enforcer</strong>
            {' '}<Link className="text-blue-600 underline" href="/robots.txt" target="_blank">View robots.txt</Link>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold mb-3">More Autonomous Audits</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 list-disc pl-5">
          <li>
            <strong>Dependencies Vulnerability</strong>
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/security/dependencies" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>External Links</strong>
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/link-audit" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>OG Image</strong>
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/og" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Uptime Synthetic Checks</strong>
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/uptime" target="_blank">View reports</Link>
          </li>
          <li>
            <strong>Content Freshness</strong>
            {' '}<Link className="text-blue-600 underline" href="https://github.com/Zion-Holdings/zion.app/tree/main/data/reports/content" target="_blank">View reports</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}