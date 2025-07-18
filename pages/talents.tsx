import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Talents: NextPage = () => {
  return (
    <>
      <Head>
        <title>Talents - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Talents</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Talents content will go here */}
        </div>
      </div>
    </>
  );
};

export default Talents;
