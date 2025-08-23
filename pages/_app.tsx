import type { AppProps } from 'next/app';
import React, { useRef } from 'react';
import '../styles/globals.css';
import { SEOContext } from '../components/SEOContext';
import DefaultSEO from '../components/DefaultSEO';
import Analytics from '../components/Analytics';
import { Layout } from '../components/layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}