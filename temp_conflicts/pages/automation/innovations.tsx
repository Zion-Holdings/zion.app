import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Innovations: NextPage = () => {
  const functions = [
    {
      name: 'Repository Sync (Auto Pages)',
      id: 'auto_repo_sync',
      desc: 'Periodically commits a timestamped auto-update page to the repo to verify pipeline health and trigger deploys.'
    },
    {
      name: 'Link Health Monitor',
      id: 'link_health',
      desc: 'Checks key routes and commits a JSON report with availability and status codes.'
    },
    {
      name: 'Homepage Promo Rotator',
      id: 'promo_rotator',
      desc: 'Rotates highlighted content and commits data for the homepage to use.'
    },
    {
      name: 'Site Index Builder',
      id: 'site_index',
      desc: 'Crawls key pages, extracts internal links, and commits a site index JSON.'
    },
    {
      name: 'SEO Audit',
      id: 'seo_audit',
      desc: 'Audits TSX pages for Head/title/meta description and commits an SEO report.'
    },
    {
      name: 'Daily Status Reporter',
      id: 'daily_status_report',
      desc: 'Composes a daily markdown report from automation outputs and commits it.'
    },
    {
      name: 'Link Health Issue Manager',
      id: 'issue_link_health',
      desc: 'Opens or updates a GitHub issue when link health failures are detected.'
    },
    {
      name: 'PageSpeed Audit',
      id: 'pagespeed_audit',
      desc: 'Runs Google PageSpeed Insights for key routes and commits performance scores.'
    },
    {
      name: 'Security Headers Audit',
      id: 'security_headers_audit',
      desc: 'Checks for recommended security headers across key routes and commits a report.'
    },
    {
      name: 'Stale Content Issues',
      id: 'stale_content_issues',
      desc: 'Flags stale blog posts and opens/updates a GitHub issue with details.'
    },
    {
      name: 'Sitemap from Site Index',
      id: 'sitemap_from_index',
      desc: 'Generates sitemap.xml from the site index and commits to the repository.'
    },
    {
      name: 'OG/Twitter Meta Audit',
      id: 'og_meta_audit',
      desc: 'Audits OG and Twitter meta tags on key routes and commits a JSON report.'
    },
    {
      name: 'RSS Generator',
      id: 'rss_generator',
      desc: 'Generates an RSS feed from blog pages and commits it to public/feed.xml.'
    },
    {
      name: 'Broken Image Checker',
      id: 'broken_image_checker',
      desc: 'Scans for broken images across key routes and commits a report.'
    },
    {
      name: 'Commit Changelog',
      id: 'commit_changelog',
      desc: 'Summarizes recent commits into a daily changelog markdown file.'
    },
    {
      name: 'Deep Link Health (from Site Index)',
      id: 'deep_link_health_from_index',
      desc: 'Checks all discovered links from the site index and commits a deep health report; optionally opens an issue on high failure ratio.'
    },
    {
      name: 'Sitemap Submitter',
      id: 'sitemap_submitter',
      desc: 'Submits the sitemap to Google and Bing, committing a ping log to the repository.'
    },
    {
      name: 'OSV Dependency Audit',
      id: 'osv_dependency_audit',
      desc: 'Audits npm dependencies via OSV API and commits a security report.'
    },
    {
      name: 'External Link Audit',
      id: 'external_link_audit',
      desc: 'Audits external links discovered across key pages and commits a health report; opens an issue if failure rate is high.'
    },
    {
      name: 'Automation Summary',
      id: 'automation_summary',
      desc: 'Aggregates the latest outputs from multiple automations into a single summary JSON.'
    },
    {
      name: 'README Badges Updater',
      id: 'readme_badges_updater',
      desc: 'Updates README.md badges to reflect the latest automation status.'
    }
  ];

  return (
    <div>
      <Head>
        <title>Autonomous Innovations - Zion</title>
        <meta name="description" content="Autonomous cloud automations running on schedule with Netlify Functions." />
      </Head>
      <main>
        <h1 className="text-3xl font-bold mb-4">Autonomous Cloud Automations</h1>
        <p className="text-gray-700 mb-8">These automations run in the cloud on a schedule, without human interaction. You can also invoke them manually:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {functions.map(f => (
            <div key={f.id} className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-2">{f.name}</h2>
              <p className="text-gray-600 mb-4">{f.desc}</p>
              <a href={`/.netlify/functions/${f.id}`} className="inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Run now</a>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/">
            <a className="text-indigo-700 font-semibold hover:underline">← Back to Home</a>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Innovations;