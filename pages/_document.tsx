import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#0a0a0a" />
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//fonts.gstatic.com" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<meta name="format-detection" content="telephone=no" />
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(
								{
									"@context": "https://schema.org",
									"@type": "Organization",
									name: "Zion Tech Group",
									url: "https://ziontechgroup.com",
									logo: "https://ziontechgroup.com/logo.png",
									sameAs: [
										"https://www.linkedin.com/company/zion-tech-group",
										"https://github.com/Zion-Holdings",
										"https://www.instagram.com/ziontechgroup",
										"https://www.youtube.com/@ziontechgroup"
									],
									contactPoint: [
										{
											"@type": "ContactPoint",
											telephone: "+13024640950",
											email: "kleber@ziontechgroup.com",
											contactType: "customer service",
											areaServed: "US",
											availableLanguage: ["English"]
										}
									],
									address: {
										"@type": "PostalAddress",
										streetAddress: "364 E Main St STE 1008",
										addressLocality: "Middletown",
										addressRegion: "DE",
										postalCode: "19709",
										addressCountry: "US"
									}
								},
								null,
								2
								)
							}}
					/>
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{
							__html: JSON.stringify(
								{
									"@context": "https://schema.org",
									"@type": "WebSite",
									name: "Zion Tech Group",
									url: "https://ziontechgroup.com",
									potentialAction: {
										"@type": "SearchAction",
										target: "https://ziontechgroup.com/services?search={search_term_string}",
										"query-input": "required name=search_term_string"
									}
								},
								null,
								2
								)
							}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}