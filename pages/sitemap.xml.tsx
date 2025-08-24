import { GetServerSideProps } from 'next';

const Sitemap = () => {
  // This component doesn't render anything visible
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://ziontechgroup.com';
  
  // Define all the pages on your site
  const pages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/careers',
    '/privacy',
    '/terms',
    '/cookies'
  ];

  // Create the XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

  // Set the content type to XML
  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  
  // Write the XML to the response
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;