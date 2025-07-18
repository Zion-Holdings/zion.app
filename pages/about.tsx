import React from 'react;
import { NextPage } from 'next;
import Head from 'next/head;

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About - Zion App</title>
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">About Zion</h1>
        <p className="text-lg text-gray-600">
          Zion is a comprehensive platform for talent marketplace and project management.
        </p>
      </div>
    </>
  );
};

export default About;
