// app/utils/seoConstants.ts
export const SITE_URL = 'https://ziontechgroup.com';

export const CONTACT_INFO = {
  email: 'kleber@ziontechgroup.com',
  phone: '+1 302 464 0950',
  address: {
    street: '364 E Main St STE 1008',
    city: 'Middletown',
    state: 'DE',
    zipCode: '19709',
    country: 'US',
    full: '364 E Main St STE 1008, Middletown DE 19709',
  },
};

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_INFO.phone,
    contactType: 'sales',
    email: CONTACT_INFO.email,
    areaServed: 'US',
    availableLanguage: ['English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: CONTACT_INFO.address.street,
    addressLocality: CONTACT_INFO.address.city,
    addressRegion: CONTACT_INFO.address.state,
    postalCode: CONTACT_INFO.address.zipCode,
    addressCountry: 'US',
  },
  sameAs: [
    'https://github.com/zion-support',
    'https://www.linkedin.com/company/ziontechgroup/',
    'https://x.com/ziontechgroup',
  ],
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/ziontechgroup/',
  twitter: 'https://x.com/ziontechgroup',
  github: 'https://github.com/zion-support',
};

export const STRUCTURED_DATA = {
  ORGANIZATION: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: CONTACT_INFO.phone,
      contactType: 'sales',
      email: CONTACT_INFO.email,
      areaServed: 'US',
      availableLanguage: ['English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT_INFO.address.street,
      addressLocality: CONTACT_INFO.address.city,
      addressRegion: CONTACT_INFO.address.state,
      postalCode: CONTACT_INFO.address.zipCode,
      addressCountry: 'US',
    },
    sameAs: [
      SOCIAL_LINKS.linkedin,
      SOCIAL_LINKS.twitter,
      SOCIAL_LINKS.github,
    ],
  },
  WEBSITE: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion Tech Group',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  },
};
