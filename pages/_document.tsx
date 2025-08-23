import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
	static override async getInitialProps(ctx: any) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	override render() {
		// Note: Using a meta CSP here for static export. Keep permissive enough for inline JSON-LD and plausible analytics.
		const csp = [
			"default-src 'self'",
			"script-src 'self' 'unsafe-inline' 'unsafe-eval' https://plausible.io",
			"style-src 'self' 'unsafe-inline'",
			"img-src 'self' data: https:",
			"font-src 'self' data: https:",
			"connect-src 'self' https://plausible.io",
			"frame-ancestors 'none'",
			"base-uri 'self'",
			"form-action 'self'"
		].join('; ');

		return (
			<Html lang="en">
				<Head>
					<meta httpEquiv="Content-Security-Policy" content={csp} />
					<meta name="theme-color" content="#000000" />
					<link rel="preconnect" href="https://plausible.io" />
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