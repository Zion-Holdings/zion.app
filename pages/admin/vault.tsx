import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Vault: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vault - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Vault</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Vault content will go here */}
        </div>
      </div>
    </>
  );
};

export default Vault;
