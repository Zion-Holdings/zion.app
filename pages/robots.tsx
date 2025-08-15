import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
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

  res.setHeader('Content-Type', 'text/plain');
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default function RobotsPage() {
  // This page should never render as it's handled by getServerSideProps
  return null;
}
