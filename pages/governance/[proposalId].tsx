import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const [proposalId]: NextPage = () => {
  return (
    <>
      <Head>
        <title>[proposalId] - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">[proposalId]</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* [proposalId] content will go here */}
        </div>
      </div>
    </>
  );
};

export default [proposalId];
