import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Faq: NextPage = () => {
  return (
    <>
      <Head>
        <title>Faq - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Faq</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Faq content will go here */}
        </div>
      </div>
    </>
  );
};

export default Faq;
