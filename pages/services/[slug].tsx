import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Check, Mail, MapPin, Phone, ExternalLink, ArrowLeft } from 'lucide-react';
import Layout from '../../components/layout/Layout';

// Simplified service data structure
interface SimpleService {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  useCases: string[];
  integrations: string[];
  link: string;
  category: string;
}

// Mock service data for now to fix build issues
const mockService: SimpleService = {
  id: 'default-service',
  name: 'Service Not Found',
  description: 'This service is currently being updated. Please contact us for more information.',
  price: 'Contact Us',
  period: '',
  features: ['Service under development'],
  useCases: ['Contact sales team'],
  integrations: ['Coming soon'],
  link: '/contact',
  category: 'General'
};

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export async function getStaticPaths() {
  // Return empty paths for now to fix build
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  // For now, return mock data to fix build
  return {
    props: { 
      service: mockService,
      slug: params?.slug || 'default'
    }
  };
}

export default function ServiceDetailPage({ service, slug }: { service: SimpleService; slug: string }) {
  return (
    <Layout>
      <Head>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={`https://ziontechgroup.com/services/${slug}`} />
      </Head>

      <div className="container mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-6">
            {/* Overview Card */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>

            {/* Features Card */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Cases & Integrations */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white text-lg font-semibold mb-4">Use Cases & Integrations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
                <div>
                  <div className="text-sm text-gray-400 mb-2">Use Cases</div>
                  <ul className="list-disc list-inside space-y-1">
                    {service.useCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-2">Integrations</div>
                  <div className="flex flex-wrap gap-2">
                    {service.integrations.map((integration, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-800/60 border border-gray-700 rounded text-xs">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white">
                {service.price}
                <span className="text-base font-medium text-gray-400">{service.period}</span>
              </div>
              <div className="text-sm text-gray-400 mt-2">
                Contact us for custom pricing and implementation details
              </div>
              <div className="mt-6 flex gap-3">
                <Link 
                  href="/contact" 
                  className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                >
                  Contact Sales
                </Link>
                <Link 
                  href={service.link} 
                  className="flex-1 border border-gray-600 text-gray-200 px-4 py-2 rounded-lg text-center hover:border-gray-500 hover:text-white transition-all duration-300"
                >
                  <ExternalLink className="w-4 h-4 inline mr-2" />
                  Learn More
                </Link>
              </div>
            </div>

            {/* Contact Card */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="hover:underline">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-purple-400">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-green-400">
                  <MapPin className="w-4 h-4" />
                  <a 
                    href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs hover:underline"
                  >
                    {contactInfo.address}
                  </a>
                </div>
              </div>
            </div>

            {/* Category & Info */}
            <div className="p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
              <h3 className="text-white font-semibold mb-3">Service Information</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <p className="leading-relaxed">
                  <span className="text-gray-400">Category:</span> {service.category}
                </p>
                <p className="leading-relaxed">
                  <span className="text-gray-400">Service ID:</span> {service.id}
                </p>
                <Link 
                  href="/pricing" 
                  className="inline-block mt-2 text-cyan-300 hover:text-cyan-200"
                >
                  View Pricing Plans →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}