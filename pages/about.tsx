import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => (
  <div>
    <Head>
      <title>About — Zion Tech Solutions</title>
    </Head>
    <h1 className="text-2xl font-semibold mb-2">About</h1>
    <p className="text-gray-700 dark:text-gray-300">Information about our company.</p>
  </div>
);

export default About;