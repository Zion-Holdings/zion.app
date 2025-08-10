import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* ... existing hero and content ... */}

      <section className="mt-16 border-t pt-10">
        <h2 className="text-2xl font-bold mb-4">Autonomous Cloud Automations</h2>
        <p className="text-gray-600 mb-6">These automations run continuously in the cloud without human intervention, improving the site and publishing results.</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-disc pl-5">
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
        </ul>
      </section>
    </div>
  );
}