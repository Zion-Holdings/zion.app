import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="theme-color" content="#000000" />
					<meta name="color-scheme" content="dark light" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}