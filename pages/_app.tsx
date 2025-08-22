import type { AppProps } from 'next/app';
import React, { useRef } from 'react';
import '../styles/globals.css';
import { SEOContext } from '../components/SEOContext';
import DefaultSEO from '../components/DefaultSEO';
import Analytics from '../components/Analytics';

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<a href="#main" className="skip-link">Skip to main content</a>
			{/* Anchor target for skip link; avoids nested main landmarks */}
			<div id="main" tabIndex={-1} />
			<Analytics />
			<Component {...pageProps} />
			<DefaultSEO />
		</SEOContext.Provider>
	);
}