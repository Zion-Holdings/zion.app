import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
		return (
			<Html lang="en" data-theme="dark">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#000000" />
					<meta name="color-scheme" content="dark light" />
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//plausible.io" />
					<link rel="preload" as="image" href="/og-image.svg" imageSrcSet={`${siteUrl.replace(/\/$/, '')}/og-image.svg`} />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="application-name" content="Zion Tech Group" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
					<meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
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