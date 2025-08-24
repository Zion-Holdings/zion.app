import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  TrendingUp, 
  Monitor, 
  Link as LinkIcon,
  Phone,
  Mail,
  MapPin,
  Star,
  Clock,
  Globe,
  Zap,
  Users,
  Circle,
  BarChart3,
  Lock,
  Server,
  Code,
  Smartphone,
  Network,
  Wallet,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { ALL_EXPANDED_SERVICES, EXPANDED_SERVICE_CATEGORIES } from "@/data/expandedServices";

const ComprehensiveServicesPage = () => {
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai development':
        return <Brain className="h-6 w-6 text-blue-500" />;
      case 'cybersecurity':
        return <Shield className="h-6 w-6 text-red-500" />;
      case 'cloud services':
      case 'devops':
        return <Cloud className="h-6 w-6 text-green-500" />;
      case 'data analytics':
        return <Database className="h-6 w-6 text-purple-500" />;
      case 'digital transformation':
        return <TrendingUp className="h-6 w-6 text-orange-500" />;
      case 'iot & edge computing':
        return <Monitor className="h-6 w-6 text-cyan-500" />;
      case 'blockchain & web3':
        return <Wallet className="h-6 w-6 text-yellow-500" />;
      default:
        return <Code className="h-6 w-6 text-gray-500" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'ai automation':
      case 'ai analytics':
      case 'ai development':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cybersecurity':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'cloud services':
      case 'devops':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'data analytics':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'digital transformation':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'iot & edge computing':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'blockchain & web3':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Comprehensive IT & AI Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-zion-cyan">
              Transform your business with cutting-edge technology services from ZionTech Group
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark font-semibold">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-zion-purple" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-zion-purple" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zion-purple" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-zion-purple" />
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-zion-purple hover:underline font-medium"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose ZionTech Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ZionTech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative, scalable, and cost-effective technology solutions that drive real business transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-zion-blue-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-zion-blue-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">Certified professionals with 10+ years of experience in cutting-edge technologies</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Circle className="h-8 w-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored approaches designed specifically for your business needs and objectives</p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan-light rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rapid Delivery</h3>
              <p className="text-gray-600">Agile methodology ensuring quick turnaround times without compromising quality</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600">Track record of successful implementations and measurable business outcomes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Service Categories */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions across all major domains
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPANDED_SERVICE_CATEGORIES.map((category) => {
              let linkPath = `/services/${category.value}`;
              if (category.value === 'ai-ml') linkPath = '/ai-services';
              if (category.value === 'cybersecurity') linkPath = '/cybersecurity-services';
              
              return (
                <Card key={category.value} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4">
                      {getCategoryIcon(category.label)}
                    </div>
                    <CardTitle className="text-xl">{category.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-4">
                      Cutting-edge solutions in {category.label.toLowerCase()} to drive innovation and growth
                    </p>
                    <Link to={linkPath}>
                      <Button variant="outline" className="w-full">
                        Explore Services
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and innovative solutions that deliver exceptional value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_EXPANDED_SERVICES.filter(service => service.featured).slice(0, 6).map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-zion-purple/20">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={getCategoryColor(service.category)}>
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-zion-purple">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BarChart3 className="h-4 w-4" />
                      <span>AI Score: {service.aiScore}%</span>
                    </div>
                    <Link to={`/services/${service.id}`}>
                      <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-dark">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Information */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Competitive Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent pricing with flexible engagement models to fit your budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Starter</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$2,499</div>
                <CardDescription>Perfect for small businesses</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic AI Integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Security Assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Cloud Migration Support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Basic Analytics Dashboard</span>
                  </li>
                </ul>
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-zion-purple relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-zion-purple text-white px-4 py-2">Most Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Professional</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$7,999</div>
                <CardDescription>Ideal for growing companies</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Advanced AI Solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Comprehensive Security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Full Cloud Migration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom Analytics Platform</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>24/7 Support</span>
                  </li>
                </ul>
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800">Enterprise</CardTitle>
                <div className="text-4xl font-bold text-zion-purple">$19,999</div>
                <CardDescription>For large organizations</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-left mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Custom AI Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Enterprise Security Suite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Multi-Cloud Strategy</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Advanced Analytics & ML</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Dedicated Team</span>
                  </li>
                </ul>
                <Link to="/request-quote">
                  <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                    Get Started
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-zion-blue-dark to-zion-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-zion-cyan max-w-3xl mx-auto">
            Let our expert team help you leverage cutting-edge technology to achieve your business goals. 
            Get a free consultation and discover how we can drive innovation and growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/90 text-zion-blue-dark font-semibold">
                Request Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-zion-cyan">ZionTech Group</h3>
              <p className="text-gray-300 mb-6">
                Your trusted partner for innovative technology solutions. We specialize in AI, cybersecurity, 
                cloud services, and digital transformation to help businesses thrive in the digital age.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan/80">
                  <Globe className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-zion-cyan">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveServicesPage;