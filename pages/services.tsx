import React, { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Check, Star, TrendingUp, Clock, DollarSign, ShieldCheck, Search, Filter, Grid3X3, List, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import UltraFuturisticMatrixBackground from '../components/ui/UltraFuturisticMatrixBackground';
import UltraFuturisticServiceCard from '../components/ui/UltraFuturisticServiceCard';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';
import { enhancedRealMicroSaasServices, serviceCategories } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'rating' | 'roi' | 'category'>('name');
  const router = useRouter();

  useEffect(() => {
    const categoryFromQuery = (router.query.category as string) || (router.query.cat as string);
    if (categoryFromQuery) {
      try {
        setSelectedCategory(decodeURIComponent(categoryFromQuery));
      } catch {
        setSelectedCategory(categoryFromQuery);
      }
    }
  }, [router.query.category, router.query.cat]);

  const allServices = useMemo(() => {
    return enhancedRealMicroSaasServices
      .concat(extraServices)
      .concat(additionalEnhancedServices);
  }, []);

  const filteredServices = useMemo(() => {
    let filtered = allServices.slice();

    if (selectedCategory) {
      filtered = filtered.filter(s => s.category === selectedCategory);
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter(s =>
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q)
      );
    }

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'roi': {
          const ra = parseFloat((a.roi.match(/(\d+)/)?.[1] || '0'));
          const rb = parseFloat((b.roi.match(/(\d+)/)?.[1] || '0'));
          return rb - ra;
        }
        case 'category':
          return a.category.localeCompare(b.category);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, allServices]);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const heroStats = [
    { value: '200+', label: 'Revolutionary Services', icon: <ShieldCheck className="w-6 h-6 text-cyan-400" /> },
    { value: '99.99%', label: 'Uptime Guarantee', icon: <ShieldCheck className="w-6 h-6 text-fuchsia-400" /> },
    { value: '30+', label: 'Day Free Trials', icon: <Clock className="w-6 h-6 text-blue-400" /> },
    { value: '800%+', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6 text-green-400" /> }
  ];

  return (
    <UltraFuturisticMatrixBackground>
      <Head>
        <title>Services - Zion Tech Group | Micro SaaS, IT and AI Solutions</title>
        <meta name="description" content="Explore 200+ micro SaaS, IT services and AI solutions delivering measurable ROI. Transparent pricing, secure, and production-ready." />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">All Services</h1>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Real, production-grade micro SaaS products, IT services, and AI solutions. Built for impact, secured for scale.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            {heroStats.map((s, i) => (
              <div key={i} className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-700/50">
                <div className="mb-1 flex justify-center">{s.icon}</div>
                <div className="text-2xl font-bold text-white">{s.value}</div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Contact quick */}
          <div className="mt-8 bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2"><Phone className="w-5 h-5 text-cyan-400" /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="text-sm text-gray-300 hover:text-white">{contactInfo.mobile}</a></div>
              <div className="flex flex-col items-center gap-2"><Mail className="w-5 h-5 text-cyan-400" /><a href={`mailto:${contactInfo.email}`} className="text-sm text-gray-300 hover:text-white">{contactInfo.email}</a></div>
              <div className="flex flex-col items-center gap-2"><MapPin className="w-5 h-5 text-cyan-400" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 hover:text-white">{contactInfo.address}</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Service Ads */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: '💸 Cloud Cost Optimizer Pro',
                desc: 'Rightsizing, off-hours and anomaly detection with IaC outputs.',
                price: '$149/month',
                link: 'https://ziontechgroup.com/cloud-cost-optimizer'
              },
              {
                title: '📈 Uptime & SLO Monitor',
                desc: 'Error budgets, burn-rate alerts and synthetic checks. OTel-native.',
                price: 'From $89/month',
                link: 'https://ziontechgroup.com/uptime-slo-monitor'
              }
            ].map((ad) => (
              <Card key={ad.title} className="bg-gray-900/60 border border-gray-700/50">
                <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{ad.title}</h3>
                    <p className="text-gray-300">{ad.desc}</p>
                    <div className="text-cyan-400 font-semibold mt-2">{ad.price}</div>
                    <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-300">
                      <a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4 text-cyan-400" /> {contactInfo.mobile}</a>
                      <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4 text-purple-400" /> {contactInfo.email}</a>
                    </div>
                  </div>
                  <Button href={ad.link} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-3 rounded-lg font-semibold">View Details</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-6 px-4">
        <div className="container mx-auto">
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-6 flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-gray-400" />
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white">
                <option value="">All Categories</option>
                {serviceCategories.map((c) => (
                  <option key={c.name} value={c.name}>{c.name}</option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value as any)} className="px-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white">
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="rating">Rating</option>
                <option value="roi">ROI</option>
                <option value="category">Category</option>
              </select>
            </div>

            <div className="flex items-center gap-2 bg-gray-800/50 rounded-lg p-1">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                <Grid3X3 className="w-5 h-5" />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-cyan-500 text-white' : 'text-gray-400 hover:text-white'}`}>
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-10 px-4">
        <div className="container mx-auto">
          <div className="mb-6 text-gray-300">Showing <span className="text-white font-semibold">{filteredServices.length}</span> of <span className="text-white font-semibold">{allServices.length}</span> services</div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div key={service.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} viewport={{ once: true }}>
                  <UltraFuturisticServiceCard service={service} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredServices.map((service, index) => (
                <motion.div key={service.id} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: index * 0.03 }} viewport={{ once: true }}>
                  <Card className="bg-gray-900/80 border border-gray-700/50 backdrop-blur-xl">
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold rounded-full">{service.category}</span>
                            <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs font-semibold rounded-full">{service.variant}</span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-1">{service.name}</h3>
                          <p className="text-gray-300 mb-3">{service.description}</p>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400" /><span>{service.rating}/5.0</span></div>
                            <div className="flex items-center gap-1"><TrendingUp className="w-4 h-4 text-green-400" /><span>ROI</span></div>
                            <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-purple-400" /><span>{service.trialDays} days trial</span></div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-3">
                          <div className="text-right">
                            <div className="text-3xl font-bold text-white">{service.price}</div>
                            <div className="text-gray-400 text-sm">{service.period}</div>
                          </div>
                          <div className="flex gap-2">
                            <Button href={service.link} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold"><ArrowRight className="w-4 h-4 mr-2" />Details</Button>
                            <Button href="/contact" variant="outline" className="px-4 py-2 border border-gray-600 text-gray-300 rounded-lg">Contact</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No services found</div>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory(''); }} className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold">Clear Filters</Button>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 text-lg mb-8">Talk to our experts to design your roadmap. Transparent pricing, measurable outcomes.</p>
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center gap-2"><Phone className="w-6 h-6 text-cyan-400" /><a href={`tel:${contactInfo.mobile.replace(/[^+\d]/g, '')}`} className="text-white font-semibold hover:text-cyan-300">{contactInfo.mobile}</a></div>
              <div className="flex flex-col items-center gap-2"><Mail className="w-6 h-6 text-cyan-400" /><a href={`mailto:${contactInfo.email}`} className="text-white font-semibold hover:text-cyan-300">{contactInfo.email}</a></div>
              <div className="flex flex-col items-center gap-2"><MapPin className="w-6 h-6 text-cyan-400" /><a href={`https://maps.google.com/?q=${encodeURIComponent(contactInfo.address)}`} target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-sm hover:text-cyan-300">{contactInfo.address}</a></div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Start Free Consultation
            </Button>
            <Button href="/pricing" variant="outline" className="border-2 border-cyan-500 text-cyan-400 px-8 py-4 text-lg font-semibold rounded-xl">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </UltraFuturisticMatrixBackground>
  );
}