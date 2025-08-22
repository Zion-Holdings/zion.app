import React from 'react';
import SiteLayout from '../components/layout/Layout';
import '../styles/globals.css';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: any) {
	const router = useRouter();
	const isHome = router.pathname === '/';
	return (
		<SiteLayout>
			<Script strategy="afterInteractive" data-domain="ziontechgroup.com" src="https://plausible.io/js/script.js" />
			<Component {...pageProps} />
		</SiteLayout>
	);
}