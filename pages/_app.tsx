import React from 'react';
import SiteLayout from '../components/layout/Layout';
import '../styles/globals.css';
import SEO from '../components/SEO';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: any) {
	const router = useRouter();
	const isHome = router.pathname === '/';
	const canonical = isHome ? 'https://ziontechgroup.com' : undefined;
	return (
		<SiteLayout>
			<Script strategy="afterInteractive" data-domain="ziontechgroup.com" src="https://plausible.io/js/script.js" />
			<SEO canonical={canonical} />
			<Component {...pageProps} />
		</SiteLayout>
	);
}