import type { AppProps } from 'next/app';
import React, { useRef } from 'react';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import { SEOContext } from '../components/SEOContext';

export default function MyApp({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SEOContext.Provider>
	);
}