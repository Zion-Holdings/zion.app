import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '@/data/comprehensiveServices';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  CheckCircle,
  ArrowRight,
  Users,
  Building
} from 'lucide-react';
import Rocket from 'lucide-react/dist/esm/icons/rocket';

export default function ComprehensiveServices() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '🔧';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <GradientHeading level="h1" className="text-5xl md:text-6xl font-bold mb-6">
            Enterprise-Grade Micro SAAS Solutions
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI-powered, cloud-native, and innovative technology solutions. 
            From automation to cybersecurity, we deliver results that drive growth and efficiency.
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search services, features, or use cases..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white border-zion-cyan"
            >
              All Services ({COMPREHENSIVE_SERVICES.length})
            </Button>
            {SERVICE_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.name ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category.name)}
                className="bg-zion-cyan hover:bg-zion-cyan-dark text-white border-zion-cyan"
              >
                {category.icon} {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-cyan text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <Badge variant="secondary" className="bg-black/50 text-white">
                      {getCategoryIcon(service.category)}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-white text-xl group-hover:text-zion-cyan transition-colors">
                      {service.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-zion-cyan font-bold text-2xl">
                        {service.currency}{service.price?.toLocaleString()}
                      </div>
                      <div className="text-zion-slate-light text-sm">
                        Starting Price
                      </div>
                    </div>
                  </div>
                  
                  <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-zion-cyan border-zion-cyan/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">Availability: {service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">Location: {service.location}</span>
                    </div>
                    {service.aiScore && (
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">AI Score: {service.aiScore}/100</span>
                      </div>
                    )}
                  </div>

                  {/* Rating */}
                  {service.rating && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating!) 
                                ? 'text-yellow-400 fill-current' 
                                : 'text-zion-slate-light'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-zion-slate-light text-sm">
                        {service.rating} ({service.reviewCount} reviews)
                      </span>
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="text-zion-slate-light text-xl mb-4">
                No services found matching your criteria
              </div>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <GradientHeading level="h2" className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Pricing Plans
            </GradientHeading>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core services with scalable features and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PRICING_TIERS.map((tier, index) => (
              <Card key={tier.name} className={`bg-zion-blue border-zion-blue-light ${
                index === 1 ? 'border-zion-cyan scale-105' : ''
              }`}>
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-white text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-zion-cyan text-4xl font-bold mb-2">{tier.price}</div>
                  <CardDescription className="text-zion-slate-light">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <GradientHeading level="h2" className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Zion Tech Group?
            </GradientHeading>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              We're not just another tech company. We're your strategic technology partner, committed to delivering innovative solutions that drive real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-zion-slate-light">
                Certified professionals with 10+ years of experience in cutting-edge technologies
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security with SOC 2 compliance and 24/7 threat monitoring
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Rapid Deployment</h3>
              <p className="text-zion-slate-light">
                Get your solutions up and running in weeks, not months
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Innovation First</h3>
              <p className="text-zion-slate-light">
                Always at the forefront of emerging technologies and industry trends
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-zion-blue-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <GradientHeading level="h2" className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business?
            </GradientHeading>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Let's discuss how our innovative solutions can drive your business forward. 
              Our experts are ready to help you choose the perfect services for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="text-zion-slate-light text-lg mb-8">
                  We're here to help you succeed. Reach out to us through any of these channels:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <a href={`tel:${CONTACT_INFO.mobile}`} className="text-zion-cyan hover:text-zion-cyan-dark">
                      {CONTACT_INFO.mobile}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-zion-cyan hover:text-zion-cyan-dark">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-zion-slate-light">
                      {CONTACT_INFO.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zion-cyan rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Website</div>
                    <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-dark">
                      {CONTACT_INFO.website}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zion-blue-light">
                <div className="text-white font-semibold mb-2">Business Hours</div>
                <div className="text-zion-slate-light">{CONTACT_INFO.businessHours}</div>
                <div className="text-zion-cyan text-sm mt-2">{CONTACT_INFO.emergencySupport}</div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-light">
              <h3 className="text-white text-2xl font-bold mb-6">Request a Consultation</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zion-slate-light mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-zion-slate-light mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-zion-slate-light mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    placeholder="Your Company Name"
                  />
                </div>

                <div>
                  <label className="block text-zion-slate-light mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-zion-slate-light mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-zion-slate-light mb-2">Service Interest</label>
                  <select className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan">
                    <option value="">Select a service category</option>
                    {SERVICE_CATEGORIES.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-zion-slate-light mb-2">Project Details</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan"
                    placeholder="Tell us about your project requirements, timeline, and goals..."
                  ></textarea>
                </div>

                <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white py-3 text-lg">
                  Request Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <GradientHeading level="h2" className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Digital Transformation Today
            </GradientHeading>
            <p className="text-zion-slate-light text-xl mb-8">
              Join hundreds of businesses that have already transformed their operations with our innovative solutions. 
              Don't wait to gain the competitive advantage you deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}