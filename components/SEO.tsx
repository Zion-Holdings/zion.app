import React from 'react';
import Head from 'next/head';

interface SEOProps {
	title?: string;
	description?: string;
	canonical?: string;
	ogImage?: string;
	noIndex?: boolean;
	jsonLd?: Record<string, any> | Record<string, any>[];
}

const DEFAULTS = {
	title: 'Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS',
	description:
		"Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth.",
	url: 'https://ziontechgroup.com',
	ogImage: 'https://ziontechgroup.com/og-image.png'
};

export default function SEO({ title, description, canonical, ogImage, noIndex, jsonLd }: SEOProps) {
	const pageTitle = title || DEFAULTS.title;
	const pageDescription = description || DEFAULTS.description;
	const canonicalUrl = canonical || DEFAULTS.url;
	const openGraphImage = ogImage || DEFAULTS.ogImage;
	const imageAlt = 'Zion Tech Group - Revolutionary Technology Solutions';

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			<meta name="robots" content={noIndex ? 'noindex,nofollow' : 'index,follow'} />
			<link rel="canonical" href={canonicalUrl} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Zion Tech Group" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:image" content={openGraphImage} />
			<meta property="og:image:alt" content={imageAlt} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={openGraphImage} />
			<meta name="twitter:image:alt" content={imageAlt} />
			{jsonLd ? (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			) : null}
		</Head>
	);
}