import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import SiteLayout from '../components/layout/Layout';
import '../styles/globals.css';
import SEO from '../components/SEO';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SiteLayout>
			{/* Plausible Analytics */}
			<Script
				strategy="afterInteractive"
				data-domain="ziontechgroup.com"
				src="https://plausible.io/js/script.js"
			/>
			<SEO />
			<Component {...pageProps} />
		</SiteLayout>
	);
}