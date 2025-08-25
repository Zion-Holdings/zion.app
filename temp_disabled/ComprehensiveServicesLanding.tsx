import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, PRICING_TIERS, CONTACT_INFO } from '@/data/comprehensiveServices';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  Building,
  Brain,
  Cloud,
  Database,
  Code,
  Link as LinkIcon,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import Rocket from 'lucide-react/dist/esm/icons/rocket';
import Wifi from 'lucide-react/dist/esm/icons/wifi';

export default function ComprehensiveServicesLanding() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  // Get category from URL params
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  const filteredServices = COMPREHENSIVE_SERVICES.filter(service => {
    const matchesCategory = selectedCategory === 'all' || 
                          (selectedCategory === 'ai-automation' && service.category === 'AI & Automation') ||
                          (selectedCategory === 'cloud-infrastructure' && service.category === 'Cloud & Infrastructure') ||
                          (selectedCategory === 'cybersecurity' && service.category === 'Cybersecurity') ||
                          (selectedCategory === 'data-analytics' && service.category === 'Data & Analytics') ||
                          (selectedCategory === 'devops-development' && service.category === 'DevOps & Development') ||
                          (selectedCategory === 'iot-hardware' && service.category === 'IoT & Hardware') ||
                          (selectedCategory === 'blockchain-web3' && service.category === 'Blockchain & Web3') ||
                          (selectedCategory === 'digital-transformation' && service.category === 'Digital Transformation');
    
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '🔧';
  };

  const getCategoryIconComponent = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Automation': <Brain className="w-6 h-6" />,
      'Cloud & Infrastructure': <Cloud className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Data & Analytics': <Database className="w-6 h-6" />,
      'DevOps & Development': <Code className="w-6 h-6" />,
      'IoT & Hardware': <Wifi className="w-6 h-6" />,
      'Blockchain & Web3': <LinkIcon className="w-6 h-6" />,
      'Digital Transformation': <Rocket className="w-6 h-6" />
    };
    return iconMap[category] || <Zap className="w-6 h-6" />;
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <GradientHeading level="h1" className="text-5xl md:text-6xl font-bold mb-6">
            Comprehensive Micro SAAS Solutions
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8">
            Discover our complete portfolio of enterprise-grade technology solutions designed to accelerate your business growth, 
            enhance security, and drive innovation across all operations.
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
              onClick={() => handleCategoryChange('all')}
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white border-zion-cyan"
            >
              All Services ({COMPREHENSIVE_SERVICES.length})
            </Button>
            {SERVICE_CATEGORIES.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(category.id)}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-cyan text-white">
                      Featured
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                      {getCategoryIconComponent(service.category)}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-white text-2xl flex-1 mr-4">
                      {service.title}
                    </CardTitle>
                    <div className="text-right">
                      <div className="text-zion-cyan font-bold text-3xl">
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-zion-cyan border-zion-cyan/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">Availability: {service.availability}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zion-slate-light">
                        <Globe className="w-4 h-4" />
                        <span className="text-sm">Location: {service.location}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {service.aiScore && (
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm">AI Score: {service.aiScore}/100</span>
                        </div>
                      )}
                      {service.rating && (
                        <div className="flex items-center gap-2 text-zion-slate-light">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm">{service.rating} ({service.reviewCount} reviews)</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expandable Details */}
                  <div className="mb-6">
                    <Button
                      variant="ghost"
                      onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                      className="text-zion-cyan hover:text-zion-cyan-dark p-0 h-auto"
                    >
                      {expandedService === service.id ? (
                        <>
                          <ChevronUp className="w-4 h-4 mr-2" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-4 h-4 mr-2" />
                          Show Details
                        </>
                      )}
                    </Button>
                    
                    {expandedService === service.id && (
                      <div className="mt-4 p-4 bg-zion-blue/30 rounded-lg border border-zion-blue-light">
                        <h4 className="text-white font-semibold mb-3">Service Features & Benefits</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h5 className="text-zion-cyan font-medium mb-2">Key Features</h5>
                            <ul className="space-y-2 text-zion-slate-light text-sm">
                              <li>• Advanced AI-powered automation</li>
                              <li>• Real-time monitoring & analytics</li>
                              <li>• Enterprise-grade security</li>
                              <li>• Scalable cloud infrastructure</li>
                              <li>• 24/7 technical support</li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="text-zion-cyan font-medium mb-2">Business Benefits</h5>
                            <ul className="space-y-2 text-zion-slate-light text-sm">
                              <li>• 80% reduction in manual tasks</li>
                              <li>• 60% improvement in efficiency</li>
                              <li>• Enhanced security & compliance</li>
                              <li>• Faster time to market</li>
                              <li>• Cost optimization</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                      Schedule Demo
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
              <Button onClick={() => { setSearchTerm(''); handleCategoryChange('all'); }}>
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