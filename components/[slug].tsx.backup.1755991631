import React, { useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Phone, Mail, MapPin, Check, ArrowRight, Star } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import Button from '../components/ui/Button';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';

export default function ServiceDynamicPage() {
  const router = useRouter();
  const slug = typeof router.query.slug === 'string' ? router.query.slug : '';

  const service = useMemo(() => {
    if (!slug) return undefined;
    return enhancedRealMicroSaasServices.find(s => {
      try {
        const url = new URL(s.link);
        const last = url.pathname.split('/').filter(Boolean).pop();
        return last === slug;
      } catch {
        return false;
      }
    });
  }, [slug]);

  if (!service) {
    return (
      <UltraAdvancedFuturisticBackground>
        <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Service Not Found</h1>
            <p className="mt-4 text-slate-300">We couldn't find the service you were looking for.</p>
            <div className="mt-8">
              <Button href="/services" variant="quantum" size="lg">Browse All Services<ArrowRight className="w-5 h-5 ml-2" /></Button>
            </div>
          </div>
        </div>
      </UltraAdvancedFuturisticBackground>
    );
  }

  const canonical = service.link;

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={`${service.name} - Zion Tech Group`} />
        <meta property="og:description" content={service.tagline} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
      </Head>
      <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className={`text-5xl md:text-7xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>{service.name}</h1>
            <p className="mt-4 text-xl text-slate-300 max-w-3xl mx-auto">{service.tagline}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-black/30 rounded-2xl border border-cyan-500/30 p-6">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-slate-300 mb-6">{service.description}</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features.slice(0, 14).map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-slate-200"><Check className="w-5 h-5 text-cyan-400 mt-0.5" /><span>{feat}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-black/30 rounded-2xl border border-cyan-500/30 p-6 h-fit">
              <div className="flex items-end justify-between mb-3">
                <div>
                  <div className="text-3xl font-bold text-white">{service.price}<span className="text-slate-400 text-base">{service.period}</span></div>
                  <div className="text-slate-400">{service.trialDays}-day free trial • Setup: {service.setupTime}</div>
                </div>
                <div className="flex items-center text-yellow-400"><Star className="w-4 h-4 mr-1" />{service.rating.toFixed(1)}</div>
              </div>
              <Button href="/contact" variant="quantum" size="lg" className="w-full">Get Started<ArrowRight className="w-5 h-5 ml-2" /></Button>
              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-center space-x-2"><Phone className="w-4 h-4 text-cyan-400" /><span>{service.contactInfo.mobile}</span></div>
                <div className="flex items-center space-x-2"><Mail className="w-4 h-4 text-purple-400" /><span>{service.contactInfo.email}</span></div>
                <div className="flex items-center space-x-2"><MapPin className="w-4 h-4 text-green-400" /><span className="text-xs">{service.contactInfo.address}</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
}

