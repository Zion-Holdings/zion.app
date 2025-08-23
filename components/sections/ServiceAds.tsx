import React from 'react';
import { Check, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export interface ServiceAdItem {
  title: string;
  description: string;
  price: string;
  features: string[];
  link: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
  marketData?: string;
  competitors?: string;
  savings?: string;
}

interface ServiceAdsProps {
  items: ServiceAdItem[];
  heading?: string;
  subheading?: string;
}

const ServiceAds: React.FC<ServiceAdsProps> = ({ items, heading = 'Featured Services', subheading = 'High-impact offerings with transparent pricing and fast time-to-value.' }) => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{heading}</h2>
          <p className="text-lg text-gray-300">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="h-full bg-gradient-to-br from-gray-900/80 to-black/90 border border-gray-700/50 backdrop-blur-xl">
              <div className="p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>

                <div className="text-3xl font-bold text-white">{item.price}</div>

                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-cyan-400">Key Features</h4>
                  <ul className="space-y-2">
                    {item.features.slice(0, 6).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-300">
                        <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(item.marketData || item.competitors || item.savings) && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                    {item.marketData && (
                      <div className="rounded-lg bg-gray-900/50 border border-gray-700/50 p-3">
                        <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Market</div>
                        <div className="text-sm text-gray-200">{item.marketData}</div>
                      </div>
                    )}
                    {item.competitors && (
                      <div className="rounded-lg bg-gray-900/50 border border-gray-700/50 p-3">
                        <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Competitors</div>
                        <div className="text-sm text-gray-200">{item.competitors}</div>
                      </div>
                    )}
                    {item.savings && (
                      <div className="rounded-lg bg-gray-900/50 border border-gray-700/50 p-3">
                        <div className="text-xs uppercase tracking-wider text-gray-400 mb-1">Savings</div>
                        <div className="text-sm text-gray-200">{item.savings}</div>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex space-x-3">
                  {item.link?.startsWith('http') ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Learn More
                    </a>
                  ) : (
                    <Button
                      href={item.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" /> Learn More
                    </Button>
                  )}
                  <Button
                    href="/contact"
                    variant="outline"
                    className="px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all duration-300"
                  >
                    Contact
                  </Button>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                  <div className="flex items-center justify-center gap-2 text-cyan-400">
                    <Phone className="w-4 h-4" />
                    <a
                      href={`tel:${item.contactInfo.mobile.replace(/[^+\d]/g, '')}`}
                      className="hover:text-white"
                    >
                      {item.contactInfo.mobile}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-purple-400">
                    <Mail className="w-4 h-4" />
                    <a
                      href={`mailto:${item.contactInfo.email}`}
                      className="hover:text-white"
                    >
                      {item.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-green-400">
                    <MapPin className="w-4 h-4" />
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(item.contactInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs hover:text-white"
                    >
                      {item.contactInfo.address}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAds;

