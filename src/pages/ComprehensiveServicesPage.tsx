import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Smartphone, 
  Database, 
  Link as LinkIcon, 
  Zap,
  Settings,
  BarChart3,
  Users,
  BookOpen,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  DollarSign
} from "lucide-react";
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES, SERVICE_SUBCATEGORIES } from "@/data/comprehensiveServices";
import { SEO } from "@/components/SEO";

export default function ComprehensiveServicesPage() {
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured);
  const categories = SERVICE_CATEGORIES;

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'ai-development': <Brain className="h-6 w-6" />,
      'ai-services': <Zap className="h-6 w-6" />,
      'cloud-services': <Cloud className="h-6 w-6" />,
      'cybersecurity': <Shield className="h-6 w-6" />,
      'web-development': <Globe className="h-6 w-6" />,
      'mobile-development': <Smartphone className="h-6 w-6" />,
      'data-services': <Database className="h-6 w-6" />,
      'blockchain': <LinkIcon className="h-6 w-6" />,
      'iot-services': <Settings className="h-6 w-6" />,
      'enterprise-solutions': <Users className="h-6 w-6" />,
      'digital-marketing': <BarChart3 className="h-6 w-6" />,
      'training-consulting': <BookOpen className="h-6 w-6" />
    };
    return iconMap[category] || <Zap className="h-6 w-6" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'ai-development': 'from-purple-500 to-indigo-600',
      'ai-services': 'from-pink-500 to-rose-600',
      'cloud-services': 'from-blue-500 to-cyan-600',
      'cybersecurity': 'from-red-500 to-orange-600',
      'web-development': 'from-green-500 to-emerald-600',
      'mobile-development': 'from-indigo-500 to-purple-600',
      'data-services': 'from-teal-500 to-cyan-600',
      'blockchain': 'from-yellow-500 to-orange-600',
      'iot-services': 'from-emerald-500 to-green-600',
      'enterprise-solutions': 'from-slate-500 to-gray-600',
      'digital-marketing': 'from-rose-500 to-pink-600',
      'training-consulting': 'from-violet-500 to-purple-600'
    };
    return colorMap[category] || 'from-gray-500 to-slate-600';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive IT & AI Services - Zion Tech Group" 
        description="Discover our complete range of micro SAAS services, IT solutions, and AI services. From AI development to cybersecurity, we provide expert solutions for your business needs."
        keywords="AI services, IT solutions, micro SAAS, cybersecurity, cloud services, web development, mobile apps, blockchain, IoT, enterprise solutions"
        canonical="https://ziontechgroup.com/comprehensive-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover our complete ecosystem of micro SAAS services, cutting-edge IT solutions, and innovative AI services designed to transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue px-8 py-3">
                Contact Our Experts
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-purple text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Our most popular and innovative solutions that are transforming businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-zion-cyan">
                      <DollarSign className="h-4 w-4" />
                      <span className="font-bold text-lg">{service.price?.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{service.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-zion-purple/20 flex items-center justify-center">
                        <Brain className="h-4 w-4 text-zion-purple" />
                      </div>
                      <span className="text-sm text-zion-slate-light">AI Score: {service.aiScore}</span>
                    </div>
                    <Link to={`/services?service=${service.id}`}>
                      <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explore Our Service Categories
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              From AI development to enterprise solutions, we cover every aspect of modern technology needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => {
              const services = COMPREHENSIVE_SERVICES.filter(s => 
                s.category.toLowerCase().replace(/\s+/g, '-') === category.value
              );
              const avgPrice = services.length > 0 
                ? Math.round(services.reduce((sum, s) => sum + (s.price || 0), 0) / services.length)
                : 0;
              
              return (
                <Link key={category.value} to={`/services?category=${category.value}`}>
                  <div className="group block">
                    <div className="rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]">
                      <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${getCategoryColor(category.value)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="text-white">
                          {getCategoryIcon(category.value)}
                        </div>
                      </div>
                      <h3 className="text-white text-xl font-bold mb-2">{category.label}</h3>
                      <p className="text-zion-slate-light mb-4">
                        {services.length} services available
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-cyan font-medium">
                          From ${avgPrice.toLocaleString()}
                        </span>
                        <ExternalLink className="h-4 w-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Zion Tech Group */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">AI-First Approach</h3>
              <p className="text-zion-slate-light">
                Leverage the latest AI technologies to automate processes, gain insights, and stay ahead of the competition
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-zion-slate-light">
                Our services are available worldwide with local expertise and 24/7 support across all time zones
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security with compliance certifications and comprehensive data protection measures
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-zion-slate-light">
                Quick implementation with proven methodologies and dedicated project management teams
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
              <p className="text-zion-slate-light">
                Certified professionals with deep expertise in the latest technologies and industry best practices
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-zion-slate-light">
                Track record of successful implementations with measurable ROI and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Competitive pricing with no hidden fees. All our services include comprehensive support and documentation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Starter Services</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $899 - $2,500
              </div>
              <p className="text-zion-slate-light mb-6">
                Perfect for small businesses and startups looking to establish their digital presence
              </p>
              <ul className="text-zion-slate-light text-left mb-8 space-y-2">
                <li>• AI Content Generation</li>
                <li>• Basic SEO Optimization</li>
                <li>• Progressive Web Apps</li>
                <li>• Social Media Automation</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-zion-purple border border-zion-purple-light rounded-lg p-8 text-center transform scale-105">
              <div className="bg-zion-cyan text-zion-blue px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Services</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $2,500 - $6,000
              </div>
              <p className="text-zion-slate-light mb-6">
                Ideal for growing businesses requiring advanced solutions and custom development
              </p>
              <ul className="text-zion-slate-light text-left mb-8 space-y-2">
                <li>• Custom AI Chatbots</li>
                <li>• Cloud Migration</li>
                <li>• Mobile App Development</li>
                <li>• Cybersecurity Audits</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-white text-zion-purple hover:bg-zion-slate-light">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Solutions</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $6,000 - $15,000+
              </div>
              <p className="text-zion-slate-light mb-6">
                Comprehensive solutions for large organizations with complex requirements
              </p>
              <ul className="text-zion-slate-light text-left mb-8 space-y-2">
                <li>• ERP System Integration</li>
                <li>• Data Warehouse Design</li>
                <li>• Zero Trust Security</li>
                <li>• Digital Transformation</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let our experts help you choose the right services and create a customized solution that fits your needs and budget
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3">
                Request Free Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}