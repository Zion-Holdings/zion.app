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