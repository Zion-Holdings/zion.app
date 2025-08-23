import type { AppProps } from 'next/app';
import React, { useRef } from 'react';
import '../styles/globals.css';
import { SEOContext } from '../components/SEOContext';
import DefaultSEO from '../components/DefaultSEO';
import Analytics from '../components/Analytics';
import { Layout } from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<DefaultSEO />
			<Analytics />
			<a href="#main-content" className="skip-link">Skip to content</a>
			<main id="main-content">
				<Component {...pageProps} />
			</main>
		</SEOContext.Provider>
	);
}