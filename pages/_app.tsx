import type { AppProps } from 'next/app';
import React, { useRef } from 'react';
import Layout from '../components/layout/Layout';
import Analytics from '../components/Analytics';
import { SEOContext } from '../components/SEOContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
			<Analytics />
		</SEOContext.Provider>
	);
}