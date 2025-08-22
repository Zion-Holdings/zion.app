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
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="theme-color" content="#000000" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//plausible.io" />
					<link rel="robots" href="/robots.txt" />
					<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
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