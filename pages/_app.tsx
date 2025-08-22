import React from 'react';
import SiteLayout from '../components/layout/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }: any) {
	return (
		<SiteLayout>
			<Component {...pageProps} />
		</SiteLayout>
	);
}