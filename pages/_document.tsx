import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ziontechgroup.com';
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://plausible.io" />
					<meta name="theme-color" content="#000000" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="dns-prefetch" href="//plausible.io" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
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