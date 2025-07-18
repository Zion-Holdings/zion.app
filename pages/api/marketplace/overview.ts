import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Overview: NextPage = () => {
  return (
    <>
      <Head>
        <title>Overview - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Overview</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Overview content will go here */}
        </div>
      </div>
    </>
  );
};

export default Overview;
