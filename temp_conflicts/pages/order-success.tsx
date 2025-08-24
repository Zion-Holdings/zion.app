import React from 'react';
import Head from 'next/head';

export default function OrderSuccessPage() {
  return (
    <>
      <Head>
        <title>Order Success - Zion Tech Group</title>
        <meta name="description" content="Your order has been successfully placed" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Order Success!</h1>
        <p className="text-lg mb-4">Your order has been successfully placed. Thank you for choosing Zion Tech Group!</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}
