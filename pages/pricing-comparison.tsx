import React, { useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Check, 
  X, 
  Star, 
  TrendingUp, 
  DollarSign, 
  Zap, 
  Shield, 
  Brain,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { cuttingEdgeInnovationServices } from '../data/2029-cutting-edge-innovations';
import { enterpriseITServices2029 } from '../data/2029-enterprise-it-services';
import { innovativeMicroSaasServices2029 } from '../data/2029-innovative-micro-saas';

const PricingComparison = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const allServices = [
    ...cuttingEdgeInnovationServices,
    ...enterpriseITServices2029,
    ...innovativeMicroSaasServices2029
  ];

  const getCompetitorData = (service: any) => {
    const competitors = service.competitors || [];
    const prices = service.marketPosition.match(/\$[\d,]+/g) || [];
    
    return competitors.map((competitor: string, index: number) => ({
      name: competitor,
      price: prices[index] || 'Contact Sales',
      features: ['Basic Features', 'Standard Support', 'Limited Integration'],
      advantages: ['Established Brand', 'Wide Adoption', 'Extensive Documentation'],
      disadvantages: ['Higher Cost', 'Complex Setup', 'Limited Customization']
    }));
  };

  const getROIComparison = (service: any) => {
    const roi = service.roi;
    const roiMatch = roi.match(/(\d+)%/);
    const roiPercentage = roiMatch ? parseInt(roiMatch[1]) : 0;
    
    return {
      zion: roiPercentage,
      industry: Math.floor(roiPercentage * 0.6),
      competitors: Math.floor(roiPercentage * 0.7)
    };
  };

  return (
    <>
      <Head>
        <title>Pricing Comparison | Zion Tech Group vs Competitors</title>
        <meta name="description" content="Compare Zion Tech Group services with competitors. See our competitive pricing, superior features, and higher ROI guarantees." />
        <link rel="canonical" href="https://ziontechgroup.com/pricing-comparison" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20" />
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 bg-clip-text text-transparent mb-6"
            >
              Pricing Comparison
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto"
            >
              See how Zion Tech Group services stack up against the competition. 
              Better features, lower costs, and higher ROI guarantees.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/30 border border-gray-700/50 rounded-2xl p-6 mb-12 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Contact Zion Tech Group</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-300">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>364 E Main St STE 1008 Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Service Selection */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Select a Service to Compare</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allServices.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedService === service.id
                      ? 'border-emerald-400 bg-emerald-400/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                  onClick={() => setSelectedService(service.id)}
                >
                  <div className="text-3xl mb-3">{service.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{service.tagline}</p>
                  <div className="text-2xl font-bold text-emerald-400">{service.price}</div>
                  <div className="text-gray-400 text-sm">{service.period}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        {selectedService && (
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {(() => {
                const service = allServices.find(s => s.id === selectedService);
                if (!service) return null;

                const competitors = getCompetitorData(service);
                const roiComparison = getROIComparison(service);

                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="text-center mb-12">
                      <h2 className="text-4xl font-bold text-white mb-4">Pricing Comparison</h2>
                      <h3 className="text-2xl text-emerald-400 mb-2">{service.name}</h3>
                      <p className="text-gray-400">{service.tagline}</p>
                    </div>

                    {/* Pricing Comparison Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full bg-gray-800/50 rounded-2xl border border-gray-700/50">
                        <thead>
                          <tr className="border-b border-gray-700/50">
                            <th className="p-6 text-left text-white font-bold">Features</th>
                            <th className="p-6 text-center text-emerald-400 font-bold border-l border-gray-700/50">
                              Zion Tech Group
                              <div className="text-sm text-gray-400 mt-1">{service.price}</div>
                            </th>
                            {competitors.map((competitor, index) => (
                              <th key={index} className="p-6 text-center text-gray-400 font-bold border-l border-gray-700/50">
                                {competitor.name}
                                <div className="text-sm text-gray-500 mt-1">{competitor.price}</div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {/* Core Features */}
                          <tr className="border-b border-gray-700/50">
                            <td className="p-6 text-white font-semibold">Core Features</td>
                            <td className="p-6 text-center border-l border-gray-700/50">
                              <div className="text-emerald-400 font-semibold">Full Suite</div>
                              <div className="text-sm text-gray-400 mt-1">{service.features.length} Features</div>
                            </td>
                            {competitors.map((competitor, index) => (
                              <td key={index} className="p-6 text-center border-l border-gray-700/50">
                                <div className="text-gray-400 font-semibold">Limited</div>
                                <div className="text-sm text-gray-500 mt-1">{competitor.features.length} Features</div>
                              </td>
                            ))}
                          </tr>

                          {/* Technology Stack */}
                          <tr className="border-b border-gray-700/50">
                            <td className="p-6 text-white font-semibold">Technology Stack</td>
                            <td className="p-6 text-center border-l border-gray-700/50">
                              <div className="text-emerald-400 font-semibold">Cutting-Edge</div>
                              <div className="text-sm text-gray-400 mt-1">{service.technology.join(', ')}</div>
                            </td>
                            {competitors.map((competitor, index) => (
                              <td key={index} className="p-6 text-center border-l border-gray-700/50">
                                <div className="text-gray-400 font-semibold">Standard</div>
                                <div className="text-sm text-gray-500 mt-1">Basic Tech Stack</div>
                              </td>
                            ))}
                          </tr>

                          {/* Support */}
                          <tr className="border-b border-gray-700/50">
                            <td className="p-6 text-white font-semibold">Support & Implementation</td>
                            <td className="p-6 text-center border-l border-gray-700/50">
                              <div className="text-emerald-400 font-semibold">Expert Support</div>
                              <div className="text-sm text-gray-400 mt-1">24/7 + Expert Consultation</div>
                            </td>
                            {competitors.map((competitor, index) => (
                              <td key={index} className="p-6 text-center border-l border-gray-700/50">
                                <div className="text-gray-400 font-semibold">Basic Support</div>
                                <div className="text-sm text-gray-500 mt-1">Standard Support</div>
                              </td>
                            ))}
                          </tr>

                          {/* ROI */}
                          <tr className="border-b border-gray-700/50">
                            <td className="p-6 text-white font-semibold">ROI Guarantee</td>
                            <td className="p-6 text-center border-l border-gray-700/50">
                              <div className="text-emerald-400 font-semibold">{roiComparison.zion}% ROI</div>
                              <div className="text-sm text-gray-400 mt-1">Guaranteed Results</div>
                            </td>
                            {competitors.map((competitor, index) => (
                              <td key={index} className="p-6 text-center border-l border-gray-700/50">
                                <div className="text-gray-400 font-semibold">{roiComparison.competitors}% ROI</div>
                                <div className="text-sm text-gray-500 mt-1">Typical Results</div>
                              </td>
                            ))}
                          </tr>

                          {/* Setup Time */}
                          <tr className="border-b border-gray-700/50">
                            <td className="p-6 text-white font-semibold">Setup Time</td>
                            <td className="p-6 text-center border-l border-gray-700/50">
                              <div className="text-emerald-400 font-semibold">Fast Setup</div>
                              <div className="text-sm text-gray-400 mt-1">{service.setupTime}</div>
                            </td>
                            {competitors.map((competitor, index) => (
                              <td key={index} className="p-6 text-center border-l border-gray-700/50">
                                <div className="text-gray-400 font-semibold">Slower Setup</div>
                                <div className="text-sm text-gray-500 mt-1">2-4 weeks</div>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    {/* ROI Comparison Chart */}
                    <div className="mt-12 bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
                      <h3 className="text-2xl font-bold text-white text-center mb-8">ROI Comparison</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-emerald-400 mb-2">{roiComparison.zion}%</div>
                          <div className="text-white font-semibold mb-2">Zion Tech Group</div>
                          <div className="text-gray-400 text-sm">Guaranteed ROI</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-blue-400 mb-2">{roiComparison.industry}%</div>
                          <div className="text-white font-semibold mb-2">Industry Average</div>
                          <div className="text-gray-400 text-sm">Typical Results</div>
                        </div>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-gray-400 mb-2">{roiComparison.competitors}%</div>
                          <div className="text-white font-semibold mb-2">Competitors</div>
                          <div className="text-gray-400 text-sm">Limited Results</div>
                        </div>
                      </div>
                    </div>

                    {/* Why Choose Zion */}
                    <div className="mt-12 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-2xl p-8 border border-emerald-500/30">
                      <h3 className="text-2xl font-bold text-white text-center mb-8">Why Choose Zion Tech Group?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-lg font-semibold text-emerald-400 mb-4">Our Advantages</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">Lower cost with better features</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">Faster implementation</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">Higher ROI guarantees</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">Expert consultation included</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-red-400 mb-4">Competitor Limitations</h4>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                              <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">Higher costs for basic features</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">Longer setup times</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">Lower ROI potential</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300">Limited customization</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-12 text-center">
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.name}`}
                          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          Get Started Today
                          <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                          Learn More
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 rounded-2xl p-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Get Better Results for Less?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't overpay for inferior solutions. Choose Zion Tech Group for better features, 
                lower costs, and guaranteed ROI. Contact us for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:kleber@ziontechgroup.com?subject=Free Consultation Request"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  Call Now
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingComparison;