import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static override async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<meta name="theme-color" content="#000000" />
					<meta name="color-scheme" content="dark light" />
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