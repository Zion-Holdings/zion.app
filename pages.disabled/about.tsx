import React from 'react';
import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group and our mission to provide revolutionary technology solutions." />
      </Head>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-2xl font-semibold">About Zion Tech Group</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Zion Tech Group is a leading provider of revolutionary technology solutions, 
          specializing in micro SaaS services, AI solutions, and cutting-edge innovations. 
          We're building the future today.
        </p>
      </div>
    </>
  );
}
