import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Admin: NextPage = () => {
  return (
    <>
      <Head>
        <title>Admin Dashboard - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Admin widgets will go here */}
        </div>
      </div>
    </>
  );
};

export default Admin;
