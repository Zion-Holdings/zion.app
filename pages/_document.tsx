import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class ZionDocument extends Document {
	render() {
		return (
			<Html lang="en">
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="theme-color" content="#020617" />
					<meta name="color-scheme" content="dark light" />
					<link rel="icon" href="/og/zion-tech-group.svg" type="image/svg+xml" />
					<link rel="manifest" href="/manifest.webmanifest" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Orbitron:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
					</Head>
				<body className="bg-slate-950 text-white">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}


