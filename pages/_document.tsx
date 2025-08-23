import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content="#000000" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//plausible.io" />
					<link rel="icon" href="/favicon.svg" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="theme-color" content="#0a0a0a" />
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
					<link rel="icon" href="/favicon.ico" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//fonts.gstatic.com" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Zion Tech Group" />
					<meta property="og:image" content="https://ziontechgroup.com/og-default.png" />
					<meta name="twitter:card" content="summary_large_image" />
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