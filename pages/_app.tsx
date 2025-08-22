import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import '../styles/globals.css'

export default function ZionApp({ Component, pageProps }: AppProps) {
	const router = useRouter()
	const baseUrl = 'https://ziontechgroup.com'
	const canonicalUrl = (baseUrl + (router.asPath === '/' ? '/' : router.asPath)).replace(/\/$/, '/')

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#0f172a" />
				<meta name="color-scheme" content="dark light" />
				<meta name="author" content="Zion Tech Group" />
				<meta name="robots" content="index,follow" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="canonical" href={canonicalUrl} />
				<meta property="og:site_name" content="Zion Tech Group" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={canonicalUrl} />
				<meta property="og:title" content="Zion Tech Group" />
				<meta property="og:description" content="Revolutionary AI, quantum computing, and micro SAAS solutions." />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}