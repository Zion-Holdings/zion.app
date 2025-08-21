import React, { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';

export default function ServiceFallbackPage() {
  const router = useRouter();
  const slug = (router.query.slug as string) || '';

  const service = useMemo(() => {
    if (!slug) return undefined;
    const all = enhancedRealMicroSaasServices.concat(extraServices, additionalEnhancedServices);
    const byLink = all.find(s => {
      try {
        const url = new URL(s.link);
        return url.pathname.replace(/^\/+|\/+$/g, '') === slug.replace(/^\/+|\/+$/g, '');
      } catch {
        return false;
      }
    });
    if (byLink) return byLink;

    const normalized = slug.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    return all.find(s => {
      const idMatch = (s.id || '').toLowerCase().replace(/[^a-z0-9]+/g, '-') === normalized;
      const nameMatch = (s.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-') === normalized;
      return idMatch || nameMatch;
    });
  }, [slug]);

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
    );
  }

  return (
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
                {(service.features || []).slice(0, 12).map((f) => (
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
                <div className="flex items-center gap-2 text-cyan-400"><Phone className="w-4 h-4" /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} className="hover:underline">{contactInfo.mobile}</a></div>
                <div className="flex items-center gap-2 text-purple-400"><Mail className="w-4 h-4" /><a href={`mailto:${contactInfo.email}`} className="hover:underline">{contactInfo.email}</a></div>
                <div className="flex items-center gap-2 text-green-400"><MapPin className="w-4 h-4" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-xs hover:underline">{contactInfo.address}</a></div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}

