import React from 'react';
import Head from 'next/head';
<<<<<<< HEAD
import { GetStaticPaths, GetStaticProps } from 'next';
import UltraFuturisticBackground from '../../components/ui/UltraFuturisticBackground';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { EnhancedRealMicroSaasService, enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';

interface ServicePageProps {
  service: EnhancedRealMicroSaasService | null;
}

export default function ServiceDetailsPage({ service }: ServicePageProps) {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  if (!service) {
    return (
      <UltraFuturisticBackground>
        <Head>
          <title>Service Not Found | Zion Tech Group</title>
          <meta name="robots" content="noindex" />
        </Head>
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Service Not Found</h1>
          <p className="text-gray-300 mb-8">This service link is no longer available. Explore our full catalog of services.</p>
          <Button href="/services" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl">Browse Services</Button>
        </div>
      </UltraFuturisticBackground>
=======
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
>>>>>>> origin/cursor/enhance-app-with-micro-saas-and-deploy-a78d
    );
  }

  return (
<<<<<<< HEAD
    <UltraFuturisticBackground variant="quantum" intensity="high">
      <Head>
        <title>{service.name} | Zion Tech Group</title>
        <meta name="description" content={service.tagline || service.description} />
        <link rel="canonical" href={service.link} />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            {service.name}
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">{service.tagline || service.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-black/40 border border-gray-700/50">
              <h2 className="text-white text-xl font-semibold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </Card>

            <Card className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white text-lg font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {(service.features || []).slice(0, 16).map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="w-4 h-4 mt-0.5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-black/40 border border-gray-700/50">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white">{service.price}<span className="text-base font-medium text-gray-400">{service.period}</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: {service.trialDays || 14} days • Setup: {service.setupTime || 'Fast'}</div>
              <div className="mt-6 flex gap-3">
                <Button href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</Button>
                <Button href={service.link} variant="outline" className="flex-1 border border-gray-600 text-gray-200"><ExternalLink className="w-4 h-4 mr-2" /> Learn More</Button>
              </div>
            </Card>

            <Card className="p-6 bg-black/40 border border-gray-700/50">
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><span>{contactInfo.mobile}</span></div>
                <div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><span>{contactInfo.email}</span></div>
                <div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><span className="text-xs">{contactInfo.address}</span></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = enhancedRealMicroSaasServices.map((s) => ({ params: { id: s.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ServicePageProps> = async (context) => {
  const id = (context.params?.id as string) || '';
  const service = enhancedRealMicroSaasServices.find((s) => s.id === id) || null;
  return { props: { service } };
};

=======
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
>>>>>>> origin/cursor/enhance-app-with-micro-saas-and-deploy-a78d
