import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head><title>About | Zion</title></Head>
      <div className="py-12">
        <h1 className="text-2xl font-semibold">About</h1>
        <p className="text-gray-600 mt-2">Zion builds AI-native tools for founders and operators.</p>
      </div>
    </>
  );
}