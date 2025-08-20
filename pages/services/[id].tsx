import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getServiceById } from '../../data/micro-saas-services';
import ServiceDetail from '../../components/sections/ServiceDetail';
import Button from '../../components/ui/Button';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function ServiceDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  
  if (!id || typeof id !== 'string') {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  const service = getServiceById(id);

  if (!service) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-400 mb-6">The requested service "{id}" could not be found.</p>
          <Button href="/services" variant="primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{service.name} | Zion Tech Group - Micro SaaS Services</title>
        <meta name="description" content={service.description} />
        <meta property="og:title" content={`${service.name} | Zion Tech Group`} />
        <meta property="og:description" content={service.description} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="min-h-screen bg-black">
        {/* Navigation */}
        <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Button
                href="/services"
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
              <Button
                href={service.website}
                variant="primary"
                size="sm"
                icon={<ExternalLink className="w-4 h-4" />}
              >
                Visit Service
              </Button>
            </div>
          </div>
        </nav>

        {/* Service Detail Content */}
        <ServiceDetail service={service} />

        {/* Related Services CTA */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Looking for Something Else?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Explore our complete portfolio of micro SaaS services to find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="/services"
                variant="primary"
                size="lg"
                className="shadow-2xl shadow-blue-500/25"
              >
                View All Services
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-white/40"
              >
                Get Custom Solution
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}