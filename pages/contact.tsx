export default function Contact() {
  return <div>Contact Us</div>;
}
=======
export default function Page(){return null}
=======
=======
import React from 'react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold">Contact</h1>
import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => (
  <div className="py-10">
    <Head><title>Contact - Zion</title></Head>
    <h1 className="text-2xl font-semibold text-white">Contact</h1>
    <p className="text-white/80 mt-2">Get in touch at contact@zion.ai</p>
  </div>
);

export default Contact;
=======
      <p className="mt-2 text-gray-600 dark:text-gray-300">Get in touch with us.</p>
    </div>
  );
}
