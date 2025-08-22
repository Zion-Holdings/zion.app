import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="theme-color" content="#0a0a0a" />
					<meta name="color-scheme" content="dark light" />
					<meta name="format-detection" content="telephone=no" />
					<link rel="dns-prefetch" href="https://plausible.io" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					{/* Plausible is injected via components/Analytics.tsx */}
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