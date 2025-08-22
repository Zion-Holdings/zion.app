import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
														<meta name="theme-color" content="#000000" />
									<link rel="icon" href="/logo.png" />
					<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link
						href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					/>
					<link rel="dns-prefetch" href="//fonts.gstatic.com" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="color-scheme" content="dark light" />
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
										"https://linkedin.com/company/ziontechgroup",
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

export default MyDocument;