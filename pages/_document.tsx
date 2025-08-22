import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="color-scheme" content="dark light" />
					<meta name="theme-color" content="#0a0a0a" />
					<link rel="preconnect" href="https://plausible.io" crossOrigin="anonymous" />
					<link rel="icon" href="/favicon.svg" />
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