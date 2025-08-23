import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Contact - Zion Tech Solutions</title>
        <meta name="description" content="Contact page" />
      </Head>
      
      <main>
        <h1>Contact</h1>
        <p>This page is under construction.</p>
      </main>
    </div>
  );
};

import React from 'react';

export default function ContactPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-gray-600 dark:text-gray-300">Get in touch.</p>
    </div>
  );
}
=======
export default Contact;
=======
export default function Contact() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-600 dark:text-gray-300">Reach us at contact@zion.holdings</p>
    </div>
  );
}
