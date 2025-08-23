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

export default function ContactPage() { return null; }
=======
import React from "react";

export default function ContactPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-gray-600">Reach us at support@zion.ai</p>
    </main>
  );
}
=======
export default Contact;
