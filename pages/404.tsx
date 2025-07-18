import React from 'react;
import Head from 'next/head;

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Zion App</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900">404</h1>
          <p className="text-xl text-gray-600 mt-4">
            Page not found
          </p>
          <a href="/" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg">
            Go Home
          </a>
        </div>
      </div>
    </>
  );
