import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Login - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Login content will go here */}
        </div>
      </div>
    </>
  );
};

export default Login;
