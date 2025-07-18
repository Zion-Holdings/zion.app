import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Dashboard content will go here */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
