import React, { useRef } from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Analytics from '../components/Analytics';
import { SEOContext } from '../components/SEOContext';
import SEO from '../components/SEO';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

function DefaultSEO() {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Consumer>
			{(ctx) => {
				const alreadyRendered = ctx?.renderedRef?.current;
				if (alreadyRendered) return null;
				if (!renderedRef.current) renderedRef.current = true;
				return <SEO />;
			}}
		</SEOContext.Consumer>
	);
}

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<Analytics />
			<div className={inter.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
			<DefaultSEO />
		</SEOContext.Provider>
	);
}