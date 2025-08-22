import React from 'react';
import Head from 'next/head';

export default function TrainingPage() {
  return (
    <>
      <Head>
        <title>Training & Certification | Zion Tech Group</title>
        <meta name="description" content="Hands-on workshops and certifications for AI, cloud, DevOps, and data." />
        <link rel="canonical" href="https://ziontechgroup.com/training" />
      </Head>
      <div className="container mx-auto px-4 py-16 text-gray-200">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Training & Certification</h1>
        <p className="text-gray-300 mb-6">Instructor-led workshops and certification paths across AI, micro SaaS, cloud, security, and FinOps.</p>
        <p className="text-gray-300">Call +1 302 464 0950 or email <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 underline">kleber@ziontechgroup.com</a> to book a cohort.</p>
      </div>
    </>
  );
}