import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		const siteName = 'Zion Tech Group';
		const themeColor = '#000000';
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<meta name="theme-color" content={themeColor} />
					<meta name="color-scheme" content="dark light" />
					<meta name="application-name" content={siteName} />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//plausible.io" />
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