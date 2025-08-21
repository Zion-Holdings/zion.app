import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';


import { Shield, Check, Phone, Mail, MapPin, ExternalLink, Lock } from 'lucide-react';

export default function TLSCertificateMonitorPage() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const features = [
    'Expiry alerts with safe lead windows',
    'Chain trust and intermediate CA checks',
    'OCSP stapling and revocation status',
    'HSTS and weak cipher detection',
    'SAN/hostname drift and redirect loops',
    'Slack/Email/PagerDuty alerts with runbooks'
  ];

  return (
    <Layout>
      <Head>
        <title>TLS/SSL Certificate Monitor | Zion Tech Group</title>
        <meta name="description" content="Continuously monitor TLS/SSL certificates for expiry, chain trust, OCSP, HSTS and ciphers. Prevent outages with proactive alerts." />
        <link rel="canonical" href="https://ziontechgroup.com/tls-certificate-monitor" />
      </Head>

      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
              <Lock className="w-10 h-10" /> TLS/SSL Certificate Monitor
            </h1>
            <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">Expiry, chain, OCSP, HSTS and cipher checks with proactive alerts to prevent outages.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 bg-black/40 border border-gray-700/50 p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <h2 className="text-2xl font-semibold text-white mb-4">Overview</h2>
              <p className="text-gray-300 mb-6">Continuously monitor TLS/SSL certificates across your critical domains and services. Catch issues like expiring certs, missing intermediates, broken OCSP stapling, weak ciphers, and HSTS misconfigurations before customers notice.</p>
              <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2 w-4 h-4 text-emerald-400 mt-0.5"><Check /> <span>{f}</span></li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-black/40 border border-gray-700/50 p-6 bg-black/40 border border-gray-700/50 rounded-lg backdrop-blur-sm">
              <div className="text-sm text-gray-400 mb-1">Pricing</div>
              <div className="text-3xl font-bold text-white text-base text-gray-400">$39<span >/month</span></div>
              <div className="text-sm text-gray-400 mt-2">Trial: 14 days • Setup: 10 minutes</div>
              <div className="mt-6 flex gap-3">
                <a href="/contact" className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Contact Sales</a>
                <a href="https://ziontechgroup.com/tls-certificate-monitor" className="flex-1 border border-gray-600 text-gray-200 w-4 h-4 mr-2"><ExternalLink /> Learn More</a>
              </div>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-400 w-4 h-4 hover:underline"><Phone /><a href={`tel:${contactInfo.mobile.replace(/[^+\\d]/g, '')}`} >{contactInfo.mobile}</a></div>
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

