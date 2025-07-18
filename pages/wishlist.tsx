import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const Wishlist: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wishlist - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Wishlist</h1>
        <div className="bg-white rounded-lg shadow p-6">
          {/* Wishlist content will go here */}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
