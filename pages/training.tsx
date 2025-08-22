import Head from 'next/head';
import Link from 'next/link';

export default function TrainingPage() {
  return (
    <>
      <Head>
        <title>Training & Certification | Zion Tech Group</title>
        <meta name="description" content="Workshops, enablement, and certifications for your teams." />
        <link rel="canonical" href="https://ziontechgroup.com/training" />
      </Head>
      <section className="pt-28 pb-16 bg-gradient-to-b from-black to-gray-950">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Training & Certification</h1>
          <p className="text-gray-400 mt-4">Hands-on sessions for AI platforms, SRE/DevOps, security, and data. Custom curricula available.</p>
          <div className="mt-6 text-cyan-300">
            <Link href="/contact" className="underline">Request a syllabus</Link>
          </div>
        </div>
      </section>
    </>
  );
}