import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
	title?: string;
	description?: string;
	canonical?: string;
	ogImage?: string;
	image?: string;
	noIndex?: boolean;
	noindex?: boolean;
	nofollow?: boolean;
	jsonLd?: Record<string, any> | Record<string, any>[];
}

const DEFAULTS = {
	title: 'Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS',
	description:
		"Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth.",
	url: 'https://ziontechgroup.com',
	image: 'https://ziontechgroup.com/og-image.svg'
};

export default function SEO({ title, description, canonical, ogImage, image, noIndex, noindex, nofollow, jsonLd }: SEOProps) {
	const router = useRouter();
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULTS.url;
	const pageTitle = title || DEFAULTS.title;
	const pageDescription = description || DEFAULTS.description;
	const pagePath = typeof router?.asPath === 'string' ? router.asPath : '/';
	// Derive canonical from baseUrl + path, ensure single slash and trailing slash
	const rawDerived = baseUrl.replace(/\/$/, '') + (pagePath.startsWith('/') ? pagePath : `/${pagePath}`);
	const normalizedCanonical = rawDerived.endsWith('/') ? rawDerived : `${rawDerived}/`;
	const canonicalUrl = canonical || normalizedCanonical;
	// Prefer explicit image, then ogImage, then default; resolve to absolute URL
	const requestedImage = image || ogImage || DEFAULTS.image;
	const imageUrl = /^(https?:)?\/\//.test(requestedImage)
		? requestedImage
		: baseUrl.replace(/\/$/, '') + (requestedImage.startsWith('/') ? requestedImage : `/${requestedImage}`);
	const isNoIndex = (noIndex ?? false) || (noindex ?? false);
	const robotsContent = `${isNoIndex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;
	const imageAlt = 'Zion Tech Group - Revolutionary Technology Solutions';

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			<meta name="robots" content={robotsContent} />
			<link rel="canonical" href={canonicalUrl} />
			<link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
			<link rel="alternate" hrefLang="en" href={canonicalUrl} />
			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={pageDescription} />
			<meta property="og:url" content={canonicalUrl} />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="Zion Tech Group" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:image:alt" content={imageAlt} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={imageUrl} />
			<meta name="twitter:image:alt" content={imageAlt} />
			{jsonLd ? (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			) : null}
		</Head>
	);
}