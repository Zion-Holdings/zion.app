import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class ZionDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
        <title>_document</title>

					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#020617" />
				
        <meta name="description" content="_document — automatically suggested description." />
        <meta property="og:title" content="_document" />
        <meta property="og:description" content="_document — automatically suggested description." />
        <meta name="twitter:card" content="summary_large_image" /></Head>
				<body className="bg-slate-950 text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}


