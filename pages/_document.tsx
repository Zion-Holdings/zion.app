import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static override async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	override render() {
		const organizationJsonLd = {
			"@context": "https://schema.org",
			"@type": "Organization",
			name: "Zion Tech Group",
			url: "https://ziontechgroup.com",
			sameAs: [
				"https://linkedin.com/company/ziontechgroup",
				"https://github.com/Zion-Holdings",
				"https://instagram.com/ziontechgroup",
				"https://youtube.com/@ziontechgroup"
			]
		};

		return (
			<Html lang="en">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="theme-color" content="#000000" />
					<meta name="color-scheme" content="dark light" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<link rel="dns-prefetch" href="//plausible.io" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<script
						type="application/ld+json"
						dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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