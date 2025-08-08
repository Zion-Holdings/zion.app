import type { NextPage } from 'next';
import Head from 'next/head';

const AboutPage: NextPage = () => (
  <div>
    <Head><title>About - Zion</title></Head>
    <h1 className="text-2xl font-semibold">About</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Zion OS provides AI-native infrastructure for digital nations and micro-DAOs.</p>
  </div>
);

export default AboutPage;