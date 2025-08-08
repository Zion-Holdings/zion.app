import type { NextPage } from 'next';
import Head from 'next/head';

// Using an explicit empty object type for props to satisfy lint rules
type Props = Record<string, never>;

const ServicePage: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>Landing Page Generator | Services</title>
        <meta name="description" content="Form-driven landing page generator with templates and analytics." />
      </Head>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Landing Page Generator</h1>
        <p className="text-lg text-gray-700 mb-6">Form-driven landing page generator with templates and analytics.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Who is it for?</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>startups</li>
              <li>agencies</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg border">
            <h2 className="text-2xl font-semibold mb-2">Pricing</h2>
            <p className="text-gray-700">From $299 to $999 (one-time/setup)</p>
          </div>
        </div>
        <a href="#contact" className="inline-block bg-black text-white px-6 py-3 rounded-md">Book a demo</a>
      </div>
    </>
  );
};

export default ServicePage;
