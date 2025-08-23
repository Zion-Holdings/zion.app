import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>About - Zion Tech Solutions</title>
        <meta name="description" content="About page" />
      </Head>
      
      <main>
        <h1>About</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

export default About;
=======
import React from 'react';

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About</h1>
      <p className="text-gray-600 dark:text-gray-300">Zion app.</p>
    </div>
  );
}
