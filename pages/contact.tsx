import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact — Zion Tech Solutions</title>
        <meta name="description" content="Get in touch with Zion Tech Solutions." />
      </Head>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="opacity-80">Email: kleber@ziontechgroup.com</p>
      <p className="opacity-80 mt-1">Phone: +1 302 464 0950</p>
    </div>
  );
}