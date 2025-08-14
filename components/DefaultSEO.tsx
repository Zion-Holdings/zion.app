import Head from 'next/head';
import { useRouter } from 'next/router';

const SITE_NAME = 'Zion Tech Group';
const SITE_URL = 'https://ziontechgroup.com';
const DEFAULT_TITLE = 'Zion Tech Group — Autonomous Cloud Automation';
const DEFAULT_DESC = 'AI-driven, self-improving web platform with autonomous growth, marketing, and optimization.';

export default function DefaultSEO() {
  const { asPath } = useRouter();
  const normalizedPath = asPath === '/' ? '/' : asPath.endsWith('/') ? asPath : `${asPath}/`;
  const url = `${SITE_URL}${normalizedPath === '/' ? '' : normalizedPath}`;
  return (
    <Head>
      <title>{DEFAULT_TITLE}</title>
      <meta name="description" content={DEFAULT_DESC} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={DEFAULT_TITLE} />
      <meta property="og:description" content={DEFAULT_DESC} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE_URL}/og/zion-tech-group.svg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={DEFAULT_TITLE} />
      <meta name="twitter:description" content={DEFAULT_DESC} />
      <meta name="twitter:image" content={`${SITE_URL}/og/zion-tech-group.svg`} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/og/zion-tech-group.svg`,
            sameAs: [
              'https://www.linkedin.com/company/zion-holdings/',
              'https://www.instagram.com/ziontechgroup/'
            ],
            description: DEFAULT_DESC
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SiteNavigationElement',
            name: ['Explore','Services','Automations','Reports','Updates','Search'],
            url: [
              `${SITE_URL}/explore`,
              `${SITE_URL}/services`,
              `${SITE_URL}/automation`,
              `${SITE_URL}/reports`,
              `${SITE_URL}/newsroom`,
              `${SITE_URL}/search`
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            url: SITE_URL,
            name: DEFAULT_TITLE,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE_URL}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string'
            }
          })
        }}
      />
    </Head>
  );
}


