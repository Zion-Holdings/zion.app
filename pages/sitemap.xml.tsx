import { GetServerSideProps } from 'next';

const EXTERNAL_DATA_URL = 'https://ziontechgroup.com';

function generateSiteMap(pages: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map((page) => {
         return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}${page}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.8</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will handle the XML generation
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const pages = [
    '/',
    '/about',
    '/contact',
    '/portfolio',
    '/pricing-2025',
    '/comprehensive-2025-services-showcase',
    '/whitepapers',
    '/quantum-neural-network-platform',
    '/autonomous-business-operations-platform',
    '/ai-powered-it-asset-management',
  ];

  // Generate the XML sitemap
  const sitemap = generateSiteMap(pages);

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;