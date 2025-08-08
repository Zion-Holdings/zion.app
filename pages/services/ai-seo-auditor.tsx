import type { NextPage } from 'next';
import Head from 'next/head';

interface Props {}

const ServicePage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>AI SEO Auditor | Services</title>
        <meta name="description" content="Automated SEO audit and recommendations for Next.js websites." />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">AI SEO Auditor</h1>
        <p className="text-lg text-gray-700 mb-6">Automated SEO audit and recommendations for Next.js websites.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Who is it for?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>SMBs</li>
              <li>agencies</li>
              <li>founders</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
            <p className="text-gray-700">From $499 to $1499 (one-time/setup)</p>
          </div>
        </div>
        <a href="#contact" className="inline-block bg-black text-white px-6 py-3 rounded-md">Book a demo</a>
      </div>
    </>
  );
};

export default ServicePage;
