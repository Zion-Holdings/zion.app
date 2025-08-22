import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const siteName = 'Zion Tech Group';
		const themeColor = '#0b0f1a';
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//plausible.io" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<meta name="application-name" content={siteName} />
					<meta name="theme-color" content={themeColor} />
					<meta name="color-scheme" content="dark light" />
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