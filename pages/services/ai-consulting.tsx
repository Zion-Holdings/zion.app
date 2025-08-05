import React from 'react';
// import ModernLayout from '../components/layout/ModernLayout';

import Head from 'next/head';
import Layout from '../../components/Layout';

const AiConsulting = () => {
  return (
    <Layout>
      <Head>
        <title>Ai Consulting Services - Zion App</title>
        <meta name="description" content="Professional ai consulting services to transform your business. > </meta name="description" content="Professional ai consulting services to transform your business." ><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100>
        <section className="py-40 px-4 sm:px-6 lg px-8>"
          <div className=""max-w-7xl" mx-auto text-center>
            <h1 className=text-4xl md text-6xl font-bold text-gray-900 mb-6>
              Ai Consulting Services
            </h1>
            <p className=text-xl text-gray-600 mb-8 max-w-3xl mx-auto >
              Professional ai consulting services designed to accelerate your business growth and success.
            </p>
            <div className="flex flex-col sm flex-row  gap-4 justify-center>
              <button className=bg-green-600 hover:bg-green-700  text-white px-8 py-3 rounded-lg font-semibold transition-colors>
                Get Started
              </button>
              <button className=""border" border-green-600 text-green-600 hover:bg-green-50  px-8 py-3 rounded-lg:font-semibold transition-colors>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  
  </div>;
  );,
};

export default AiConsulting;