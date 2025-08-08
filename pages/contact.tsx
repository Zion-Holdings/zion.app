import Head from 'next/head';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Contact</h1>
        <p className="text-gray-600 dark:text-gray-300">For inquiries, email: hello@zion.foundation</p>
      </div>
    </>
  );
}