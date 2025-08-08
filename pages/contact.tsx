import type { NextPage } from 'next';
import Head from 'next/head';

const ContactPage: NextPage = () => (
  <div>
    <Head><title>Contact - Zion</title></Head>
    <h1 className="text-2xl font-semibold">Contact</h1>
    <p className="text-gray-600 dark:text-gray-400 mt-2">Reach us at hello@zion.example (placeholder).</p>
  </div>
);

export default ContactPage;