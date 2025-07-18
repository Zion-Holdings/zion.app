import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Notifications: NextPage = () => {
  return (
    <>
      <Head>
        <title>Notifications - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Notifications content will go here */}
        </div>
      </div>
    </>
  );
};

export default Notifications;
