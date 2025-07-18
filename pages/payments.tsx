import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Payments: NextPage = () => {
  return (
    <>
      <Head>
        <title>Payments - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Payments</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Payments content will go here */}
        </div>
      </div>
    </>
  );
};

export default Payments;
