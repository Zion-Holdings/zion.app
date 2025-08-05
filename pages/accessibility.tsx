import React from 'react;
import { NextPage } from next';
import Head from 'next/head';

const Accessibility: NextPage = () => {
  return (
    <>
      <Head>
        <title>Accessibility - Zion App</title>
        <meta name="description content=Accessibility information for Zion App" />
      </Head>
      <div className="min-h-screen bg-gray-50 py-12>
        <div className=max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8>Accessibility</h1>
          <div className=bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4>Our Commitment</h2>
            <p className=text-gray-600 mb-4">
              Zion App is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone and applying the relevant 
              accessibility standards.
            </p>
            <h2 className="text-xl font-semibold text-gray-900 mb-4 mt-6>Features</h2>
            <ul className=list-disc list-inside text-gray-600 space-y-2">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast mode</li>
              <li>Resizable text</li>
              <li>Alternative text for images</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accessibility;