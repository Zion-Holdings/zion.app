import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Onboarding: NextPage = () => {
  return (
    <>
      <Head>
        <title>Onboarding - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Onboarding</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Onboarding content will go here */}
        </div>
      </div>
    </>
  );
};

export default Onboarding;
