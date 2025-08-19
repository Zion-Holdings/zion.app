import { GetServerSideProps } from 'next';

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://ziontechgroup.com';
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  </url>
  </url>
  </url>
  </url>
  </url>
  </url>
  </url>
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};