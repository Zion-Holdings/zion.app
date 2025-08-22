import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="preconnect" href="https://plausible.io" />
					<link rel="manifest" href="/site.webmanifest" />
					<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
					<meta name="theme-color" content="#000000" />
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