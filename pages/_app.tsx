import React from 'react';
import SiteLayout from '../components/layout/Layout';
import '../styles/globals.css';
import SEO from '../components/SEO';

export default function App({ Component, pageProps }: any) {
	return (
		<SiteLayout>
			<SEO />
			<Component {...pageProps} />
		</SiteLayout>
	);
}