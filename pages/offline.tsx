import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Offline: NextPage = () => {
  return (
    <>
      <Head>
        <title>Offline - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Offline</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Offline content will go here */}
        </div>
      </div>
    </>
  );
};

export default Offline;
