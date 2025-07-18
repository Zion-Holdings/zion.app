import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const [...nextauth]: NextPage = () => {
  return (
    <>
      <Head>
        <title>[...nextauth] - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">[...nextauth]</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* [...nextauth] content will go here */}
        </div>
      </div>
    </>
  );
};

export default [...nextauth];
