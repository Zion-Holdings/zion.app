import Head from 'next/head';

export default function AutomationStatus() {
  return (
    <>
      <Head><title>Automation Status | Admin</title></Head>
      <div className="py-12">
        <h1 className="text-2xl font-semibold">Automation Status</h1>
        <p className="text-gray-600 mt-2">No active issues.</p>
      </div>
    </>
  );
}