export default function Contact() { return <main className="p-8">Contact page coming soon.</main>; }
=======
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

export default Contact;
=======
export default function Contact() { return <div className="py-10">Contact us</div> }
