import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Launch: NextPage = () => {
  return (
    <>
      <Head>
        <title>Launch - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Launch</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Launch content will go here */}
        </div>
      </div>
    </>
  );
};

export default Launch;
