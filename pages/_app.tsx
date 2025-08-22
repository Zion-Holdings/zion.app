import React from 'react';
import SiteLayout from '../components/layout/Layout';
import '../styles/globals.css';
import Head from 'next/head';

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  telephone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '364 E Main St STE 1008',
    addressLocality: 'Middletown',
    addressRegion: 'DE',
    postalCode: '19709',
    addressCountry: 'US'
  }
};

export default function App({ Component, pageProps }: any) {
	return (
		<SiteLayout>
			<Head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
				/>
			</Head>
			<Component {...pageProps} />
		</SiteLayout>
	);
}