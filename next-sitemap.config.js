/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com',
  generateRobotsTxt: true,
  sitemapSize: 50000,
  changefreq: 'daily',
  priority: 0.8,
  defaultPriority: 0.8,
  sitemapFile: 'sitemap.xml',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
