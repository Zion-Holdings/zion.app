import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content="#0a0a0a" />
					<meta name="color-scheme" content="dark light" />
					<meta name="format-detection" content="telephone=no" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="manifest" href="/site.webmanifest" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}