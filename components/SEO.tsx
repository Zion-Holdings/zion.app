import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useSEOContext } from './SEOContext';

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
	// Optional Twitter metadata overrides
	twitterSite?: string;
	twitterCreator?: string;
}

const DEFAULTS = {
	title: 'Zion Tech Group - Revolutionary Technology Solutions | AI, Quantum Computing, Micro SAAS',
	description:
		"Transform your business with Zion Tech Group's revolutionary AI, quantum computing, and micro SAAS solutions. Leading-edge technology for unprecedented growth.",
	url: 'https://ziontechgroup.com',
	image: 'https://ziontechgroup.com/og-image.svg'
};

export default function SEO({ title, description, canonical, ogImage, image, noIndex, noindex, nofollow, jsonLd, twitterSite, twitterCreator }: SEOProps) {
	const router = useRouter();
	const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || DEFAULTS.url;
	const pageTitle = title || DEFAULTS.title;
	const pageDescription = description || DEFAULTS.description;
	const pagePath = typeof router?.asPath === 'string' ? router.asPath : '/';
	// Derive canonical from baseUrl + path, ensure single slash and trailing slash
	const rawDerived = baseUrl.replace(/\/$/, '') + (pagePath.startsWith('/') ? pagePath : `/${pagePath}`);
	const normalizedCanonical = rawDerived.endsWith('/') ? rawDerived : `${rawDerived}/`;
	// Prefer explicit image, then ogImage, then default; resolve to absolute URL
	const requestedImage = image || ogImage || DEFAULTS.image;
	const imageUrl = /^(https?:)?\/\//.test(requestedImage)
		? requestedImage
		: baseUrl.replace(/\/$/, '') + (requestedImage.startsWith('/') ? requestedImage : `/${requestedImage}`);
	const envNoIndex = process.env.NEXT_PUBLIC_NOINDEX === 'true';
	const isNoIndex = envNoIndex || (noIndex ?? false) || (noindex ?? false);
	const robotsContent = `${isNoIndex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;
	const imageAlt = 'Zion Tech Group - Revolutionary Technology Solutions';

	// Normalize provided canonical (if any) to an absolute URL with trailing slash
	function toAbsoluteUrl(urlOrPath: string): string {
		if (/^(https?:)?\/\//.test(urlOrPath)) return urlOrPath;
		return baseUrl.replace(/\/$/, '') + (urlOrPath.startsWith('/') ? urlOrPath : `/${urlOrPath}`);
	}
	function withTrailingSlash(u: string): string {
		return u.endsWith('/') ? u : `${u}/`;
	}
	const canonicalUrl = withTrailingSlash(canonical ? toAbsoluteUrl(canonical) : normalizedCanonical);

	// Mark SEO rendered synchronously to avoid duplicate default + page-level SEO
	const seoCtx = useSEOContext();
	if (seoCtx && !seoCtx.renderedRef.current) {
		seoCtx.renderedRef.current = true;
	}

	// Determine image MIME type for social meta tags
	const lowerImageUrl = imageUrl.toLowerCase();
	const imageType = lowerImageUrl.endsWith('.png')
		? 'image/png'
		: lowerImageUrl.endsWith('.jpg') || lowerImageUrl.endsWith('.jpeg')
		? 'image/jpeg'
		: lowerImageUrl.endsWith('.webp')
		? 'image/webp'
		: lowerImageUrl.endsWith('.gif')
		? 'image/gif'
		: lowerImageUrl.endsWith('.svg')
		? 'image/svg+xml'
		: undefined;

	// Default JSON-LD if none provided (removed SearchAction because no /search route exists)
	const defaultJsonLd = [
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "Zion Tech Group",
			"url": baseUrl,
			"logo": `${baseUrl.replace(/\/$/, '')}/favicon.svg`,
			"sameAs": [
				"https://www.linkedin.com/company/zion-tech-group",
				"https://github.com/Zion-Holdings",
				"https://www.instagram.com/ziontechgroup",
				"https://www.youtube.com/@ziontechgroup"
			],
			"contactPoint": [
				{
					"@type": "ContactPoint",
					"telephone": "+1-302-464-0950",
					"contactType": "customer support",
					"email": "kleber@ziontechgroup.com",
					"areaServed": "US"
				}
			],
			"address": {
				"@type": "PostalAddress",
				"streetAddress": "364 E Main St STE 1008",
				"addressLocality": "Middletown",
				"addressRegion": "DE",
				"postalCode": "19709",
				"addressCountry": "US"
			}
		},
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"url": baseUrl,
			"name": "Zion Tech Group"
		}
	];

	// Merge default JSON-LD with any provided jsonLd entries
	const mergedJsonLd = Array.isArray(jsonLd)
		? [...defaultJsonLd, ...jsonLd]
		: jsonLd
		? [...defaultJsonLd, jsonLd]
		: defaultJsonLd;

	// Derive Twitter meta from env if not provided
	const envTwitterSite = process.env.NEXT_PUBLIC_TWITTER_SITE;
	const envTwitterCreator = process.env.NEXT_PUBLIC_TWITTER_CREATOR;
	const finalTwitterSite = twitterSite || envTwitterSite;
	const finalTwitterCreator = twitterCreator || envTwitterCreator;

	return (
		<Head>
			<title>{pageTitle}</title>
			<meta name="description" content={pageDescription} />
			<meta name="robots" content={robotsContent} />
			{/* Bot-specific directives for richer previews */}
			<meta name="googlebot" content={`${robotsContent},max-snippet:-1,max-image-preview:large,max-video-preview:-1`} />
			<meta name="bingbot" content={`${robotsContent},max-snippet:-1,max-image-preview:large,max-video-preview:-1`} />
			<link rel="canonical" href={canonicalUrl} />
			<link rel="alternate" hrefLang="en" href={canonicalUrl} />
			<link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
			{/* Optional sitemap link for crawlers */}
			<link rel="sitemap" type="application/xml" href={`${baseUrl.replace(/\/$/, '')}/sitemap.xml`} />
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
			{imageType ? <meta property="og:image:type" content={imageType} /> : null}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={pageTitle} />
			<meta name="twitter:description" content={pageDescription} />
			<meta name="twitter:image" content={imageUrl} />
			<meta name="twitter:image:alt" content={imageAlt} />
			{imageType ? <meta name="twitter:image:type" content={imageType} /> : null}
			{finalTwitterSite ? <meta name="twitter:site" content={finalTwitterSite} /> : null}
			{finalTwitterCreator ? <meta name="twitter:creator" content={finalTwitterCreator} /> : null}
			{mergedJsonLd ? (
				<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mergedJsonLd) }} />
			) : null}
		</Head>
	);
}