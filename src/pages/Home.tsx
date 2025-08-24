
import React from 'react';
import { CategoriesSection } from "@/components/CategoriesSection";
import { SEO } from "@/components/SEO";
import { HeroSection } from "@/components/HeroSection";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EXPANDED_SERVICES } from "@/data/expandedServices";
import { Phone, Mail, MapPin, ArrowRight, Star, Brain, Shield, Zap, Globe, Database, Network, HardDrive, Leaf, Eye, CreditCard, Users } from 'lucide-react';

export default function Home() {
  const featuredServices = EXPANDED_SERVICES.slice(0, 6);
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-5 h-5" />,
      'Cybersecurity': <Shield className="w-5 h-5" />,
      'Cloud & DevOps': <Globe className="w-5 h-5" />,
      'Data & Analytics': <Database className="w-5 h-5" />,
      'Blockchain & Web3': <Network className="w-5 h-5" />,
      'IoT & Edge Computing': <HardDrive className="w-5 h-5" />,
      'Quantum Computing': <Zap className="w-5 h-5" />,
      'Green Tech & Sustainability': <Leaf className="w-5 h-5" />,
      'AR/VR & Metaverse': <Eye className="w-5 h-5" />,
      'FinTech & Digital Banking': <CreditCard className="w-5 h-5" />,
      'Healthcare Technology': <Users className="w-5 h-5" />,
      'Manufacturing & Industry 4.0': <HardDrive className="w-5 h-5" />,
      'Retail & E-commerce': <Globe className="w-5 h-5" />,
      'Education Technology': <Brain className="w-5 h-5" />,
      'Government & Public Sector': <Shield className="w-5 h-5" />
    };
    return iconMap[category] || <Globe className="w-5 h-5" />;
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Zion - The Tech & AI Marketplace" 
        description="Discover top AI and tech talent, services, and equipment in one place."
        keywords="AI, technology, marketplace, services, talent"
        canonical="https://app.ziontechgroup.com/"
      />

      <HeroSection />
      
      <CategoriesSection />

      {/* Featured Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Explore our most popular and highly-rated technology solutions designed to transform your business operations and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map(service => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {service.aiScore >= 95 && (
                      <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
                        AI Score: {service.aiScore}
                      </Badge>
                    )}
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      ${service.price.toLocaleString()}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{service.rating}</span>
                    <span className="text-gray-300">({service.reviewCount})</span>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {service.category}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {service.subcategory}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-blue-600">
                      ${service.price.toLocaleString()}
                    </div>
                    <a
                      href={`mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`}
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                    >
                      Get Quote
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a
              href="/expanded-services"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Our team of technology experts is ready to help you implement cutting-edge AI and IT solutions. 
            Get in touch today for a free consultation and custom quote.
          </p>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+1 302 464 0950</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">kleber@ziontechgroup.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kleber@ziontechgroup.com?subject=Business Transformation Consultation"
              className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Schedule Free Consultation
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Call Now
              <Phone className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-8 text-blue-100">
            <p className="text-lg">Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </section>
    </div>
  );
}
