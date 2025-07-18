import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const AdminDashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>AdminDashboard - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">AdminDashboard</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* AdminDashboard content will go here */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
