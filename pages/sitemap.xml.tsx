import { GetServerSideProps } from 'next';

const EXTERNAL_DATA_URL = 'https://zion.app';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!-- Main Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/about</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/services</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/contact</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.7</priority>
     </url>
     
     <!-- New Content Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>0.9</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/blog/ai-automation-trends-2025</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/case-studies</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/resources</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     
     <!-- Report Pages -->
     <url>
       <loc>${EXTERNAL_DATA_URL}/reports/updates/update-2025-08-15-0406</loc>
       <lastmod>2025-08-15T04:06:00.000Z</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/reports/updates/update-2025-08-15-0405</loc>
       <lastmod>2025-08-15T04:05:00.000Z</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/reports/updates/update-2025-08-15-0404</loc>
       <lastmod>2025-08-15T04:04:00.000Z</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/reports/updates/update-2025-08-15-0111</loc>
       <lastmod>2025-08-15T01:11:00.000Z</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/reports/updates/update-2025-08-15-0403</loc>
       <lastmod>2025-08-15T04:03:00.000Z</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
     <url>
       <loc>${EXTERNAL_DATA_URL}/reports/updates/update-2025-08-15-0402</loc>
       <lastmod>2025-08-15T04:02:00.000Z</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.6</priority>
     </url>
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will handle the XML generation
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap();

  res.setHeader('Content-Type', 'text/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default SiteMap;