import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head><title>Contact | Zion</title></Head>
      <div className="py-12">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="text-gray-600 mt-2">Reach us at founders@zion.ai</p>
      </div>
    </>
  );
}
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
import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => (
  <>
    <Head>
      <title>Contact - Zion Tech Solutions</title>
    </Head>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p>Contact content coming soon.</p>
    </div>
  </>
);

export default Contact;
