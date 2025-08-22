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
					<link rel="robots" href="/robots.txt" />
					<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
					<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
					<meta name="color-scheme" content="dark light" />
					<meta name="format-detection" content="telephone=no" />
					<link rel="alternate" hrefLang="en" href="https://ziontechgroup.com/" />
					<link rel="alternate" hrefLang="x-default" href="https://ziontechgroup.com/" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}