import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Health: NextPage = () => {
  return (
    <>
      <Head>
        <title>Health - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Health</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Health content will go here */}
        </div>
      </div>
    </>
  );
};

export default Health;
