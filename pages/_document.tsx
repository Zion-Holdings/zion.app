import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class ZionDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="format-detection" content="telephone=no" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link rel="icon" href="/favicon.ico" />
					<meta name="theme-color" content="#0a0a0a" />
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
					<script defer data-domain="ziontechgroup.com" src="https://plausible.io/js/script.js"></script>
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
		)
	}
}

export default ZionDocument