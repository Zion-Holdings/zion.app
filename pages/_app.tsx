import React, { useRef } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Analytics from '../components/Analytics';
import { SEOContext } from '../components/SEOContext';

export default function ZionApp({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);

	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
			</Head>
			<Analytics />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SEOContext.Provider>
	);
}