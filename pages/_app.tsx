import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import Layout from '../components/layout/Layout';
import Analytics from '../components/Analytics';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Analytics />
			<div className={inter.className}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</div>
		</>
	);
}