// app/utils/seoConstants.ts
export const SITE_URL = 'https://ziontechgroup.com';

export const CONTACT_INFO = {
  email: 'kleber@ziontechgroup.com',
  phone: '+1 302 464 0950',
  address: {
    street: '123 Tech Boulevard',
    city: 'San Francisco',
    state: 'CA',
    zipCode: '94105',
  },
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/ziontechgroup',
  github: 'https://github.com/ziontechgroup',
  twitter: 'https://twitter.com/ziontechgroup',
};

export const STRUCTURED_DATA = {
  ORGANIZATION: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: SITE_URL,
    email: CONTACT_INFO.email,
    telephone: CONTACT_INFO.phone,
  },
  WEBSITE: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SITE_URL,
    name: 'Zion Tech Group',
  },
};