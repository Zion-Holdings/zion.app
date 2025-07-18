import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Podcast: NextPage = () => {
  return (
    <>
      <Head>
        <title>Podcast - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Podcast</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Podcast content will go here */}
        </div>
      </div>
    </>
  );
};

export default Podcast;
