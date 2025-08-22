import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static override async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	override render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/site.webmanifest" />
					<meta name="theme-color" content="#000000" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="dns-prefetch" href="//plausible.io" />
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
					<meta name="format-detection" content="telephone=no, address=no, email=no" />
					<meta name="color-scheme" content="dark light" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}