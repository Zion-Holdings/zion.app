import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta name="theme-color" content="#000000" />
					<meta name="color-scheme" content="dark light" />
					<link rel="preconnect" href="https://plausible.io" />
					<link rel="dns-prefetch" href="https://plausible.io" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}