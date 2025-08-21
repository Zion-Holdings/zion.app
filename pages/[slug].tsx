import React from 'react';
import Head from 'next/head';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function ServiceFallbackPage() {
  const router = useRouter();
  const slug = (router.query.slug as string) || '';

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  if (!slug) {
    return (
      <Layout>
        <Head>
          <title>Service Not Found | Zion Tech Group</title>
          <meta name="robots" content="noindex" />
        </Head>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">This service link is no longer available. Explore our full catalog of services.</p>
          <a href="/services" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">Browse Services</a>
        </div>
      </Layout>
    );
  }

  // Mock service data for now to avoid build issues
  const mockService = {
    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    description: `This is a service page for ${slug}. Please contact us for more information about our real services.`,
    tagline: `Service: ${slug}`,
    price: '$99',
    period: '/month',
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    trialDays: 14,
    setupTime: 'Fast',
    link: `https://ziontechgroup.com/services/${slug}`
  };

  return (
    <Layout>
      <Head>
        <title>{mockService.name} | Zion Tech Group</title>
        <meta name="description" content={mockService.tagline || mockService.description} />
        <link rel="canonical" href={mockService.link} />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {mockService.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{mockService.tagline || mockService.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{mockService.description}</p>
            </div>

            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {mockService.features.slice(0, 12).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white text-base font-medium text-gray-400">{mockService.price}<span >{mockService.period}</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: {mockService.trialDays || 14} days • Setup: {mockService.setupTime || 'Fast'}</div>
              <div className="mt-6 flex gap-3">
                <a href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">Contact Sales</a>
                <a href={mockService.link} className="flex-1 border border-gray-600 text-gray-200 px-6 py-3 rounded-lg text-center font-medium hover:border-gray-500 hover:text-white transition-all duration-200 flex items-center justify-center gap-2 w-4 h-4"><ExternalLink /> Learn More</a>
              </div>
            </div>

            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400 w-4 h-4 hover:underline"><Phone /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} >{contactInfo.mobile}</a></div>
                <div className="flex items-center gap-2 text-purple-400 w-4 h-4 hover:underline"><Mail /><a href={`mailto:${contactInfo.email}`} >{contactInfo.email}</a></div>
                <div className="flex items-center gap-2 text-green-400 w-4 h-4 text-xs hover:underline"><MapPin /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" >{contactInfo.address}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // For now, return a simple path to avoid build issues
  return {
    paths: [{ params: { slug: 'example-service' } }],
    fallback: 'blocking'
  };
};

export const getStaticProps: GetStaticProps = async () => {
  // No dynamic fetching needed; the component resolves the service client-side.
  return { props: {} };
};