export const lastVerified = '2026-07-04T06:00:00.000Z';

export const integrityChecks = [
  {
    name: 'Static HTML generation',
    ok: true,
    detail: '1,312 HTML pages generated, including / and /services.'
  },
  {
    name: 'Service catalog index',
    ok: true,
    detail: '1,614 services indexed in out/service-index.json'
  },
  {
    name: 'Sitemap + feed',
    ok: true,
    detail: 'sitemap.xml = 1,255 URLs; feed.xml = 1,614 services + 57 blog items'
  },
  {
    name: 'Tools directory',
    ok: true,
    detail: '44 tool pages present in out/tools'
  }
];

export default {
  lastVerified,
  integrityChecks
};
