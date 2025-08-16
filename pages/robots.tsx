import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: https://ziontechgroup.com/sitemap.xml

# Disallow admin and private areas
Disallow: /admin/
Disallow: /private/
Disallow: /api/
Disallow: /_next/
Disallow: /automation/

# Allow important pages
Allow: /
Allow: /about
Allow: /privacy
Allow: /terms
Allow: /services
Allow: /reports/
Allow: /blog/
Allow: /news/
Allow: /events/
Allow: /resources/
Allow: /downloads/

# Crawl delay (optional)
Crawl-delay: 1`;

  return {
    props: {
      robotsTxt,
    },
  };
};

export default function RobotsPage({ robotsTxt }: { robotsTxt: string }) {
  return (
    <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
      {robotsTxt}
    </pre>
  );
}
