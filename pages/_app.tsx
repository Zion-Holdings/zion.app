import React from 'react';
import SiteLayout from '../components/layout/Layout';
import '../styles/globals.css';
import SEO from '../components/SEO';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: any) {
	const router = useRouter();
	const baseUrl = 'https://ziontechgroup.com';
	const canonical = `${baseUrl}${router.asPath === '/' ? '' : router.asPath}`.replace(/\/$/, '/');
	return (
		<SiteLayout>
			<Script strategy="afterInteractive" data-domain="ziontechgroup.com" src="https://plausible.io/js/script.js" />
			<SEO canonical={canonical} url={canonical} />
			<Component {...pageProps} />
		</SiteLayout>
	);
}