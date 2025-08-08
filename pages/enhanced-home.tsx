import Head from 'next/head';

export default function EnhancedHome() {
  return (
    <>
      <Head><title>Enhanced Home | Zion</title></Head>
      <div className="py-12">
        <h1 className="text-2xl font-semibold">Enhanced Home</h1>
        <p className="text-gray-600 mt-2">Showcase enhanced components here.</p>
      </div>
    </>
  );
}