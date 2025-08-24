import React from 'react';
import { ENHANCED_SERVICES, ENHANCED_SERVICE_CATEGORIES } from '@/data/enhancedServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Shield, 
  Database, 
  Briefcase, 
  
  DollarSign,
  Heart,
  GraduationCap,
  Truck,
  Home,
  Zap,
  Users,
  BarChart3,
  Lock,
  Eye,
  BookOpen,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Globe,
  Clock,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCategoryProps {
  category: string;
  services: typeof ENHANCED_SERVICES;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ category, services }) => {
  const categoryServices = services.filter(service => 
    service.category.toLowerCase().includes(category.toLowerCase())
  );

  if (categoryServices.length === 0) return null;

  const getCategoryIcon = (categoryName: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Machine Learning': <Brain className="w-6 h-6" />,
      'Cybersecurity & Compliance': <Shield className="w-6 h-6" />,
      'Data & Analytics': <Database className="w-6 h-6" />,
      'Business Process': <Briefcase className="w-6 h-6" />,
      'Marketing & Sales': <TrendingUp className="w-6 h-6" />,
      'Financial Services': <DollarSign className="w-6 h-6" />,
      'Healthcare & Life Sciences': <Heart className="w-6 h-6" />,
      'Education & Training': <GraduationCap className="w-6 h-6" />,
      'Supply Chain & Logistics': <Truck className="w-6 h-6" />,
      'Real Estate & Property': <Home className="w-6 h-6" />,
      'Legal & Compliance': <Lock className="w-6 h-6" />,
    };
    return iconMap[categoryName] || <Briefcase className="w-6 h-6" />;
  };

  const getCategoryColor = (categoryName: string) => {
    const colorMap: { [key: string]: string } = {
      'AI & Machine Learning': 'from-purple-500 to-indigo-600',
      'Cybersecurity & Compliance': 'from-red-500 to-pink-600',
      'Data & Analytics': 'from-blue-500 to-cyan-600',
      'Business Process': 'from-green-500 to-emerald-600',
      'Marketing & Sales': 'from-orange-500 to-red-600',
      'Financial Services': 'from-yellow-500 to-orange-600',
      'Healthcare & Life Sciences': 'from-pink-500 to-rose-600',
      'Education & Training': 'from-indigo-500 to-purple-600',
      'Supply Chain & Logistics': 'from-teal-500 to-green-600',
      'Real Estate & Property': 'from-amber-500 to-yellow-600',
      'Legal & Compliance': 'from-slate-500 to-gray-600',
    };
    return colorMap[categoryName] || 'from-zion-purple to-zion-purple-dark';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(category)}`}>
          {getCategoryIcon(category)}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{category}</h3>
          <p className="text-zion-slate-light">{categoryServices.length} services available</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryServices.map((service) => (
          <Card key={service.id} className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                  {service.category}
                </Badge>
                {service.featured && (
                  <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white">
                    Featured
                  </Badge>
                )}
              </div>
              <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
              <CardDescription className="text-zion-slate-light text-sm leading-relaxed">
                {service.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                <div className="flex items-center justify-between text-sm text-zion-slate-light">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{service.rating}</span>
                      <span className="text-zion-slate">({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Brain className="w-4 h-4 text-zion-cyan" />
                      <span>{service.aiScore}%</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{service.availability}</span>
                  </div>
                </div>

                {/* Pricing */}
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-white">
                      ${service.price?.toLocaleString()}
                      <span className="text-sm text-zion-slate-light font-normal">/month</span>
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      Starting from
                    </div>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    onClick={() => window.open('https://ziontechgroup.com', '_blank')}
                  >
                    Get Started
                  </Button>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-2 text-sm text-zion-slate-light">
                  <Globe className="w-4 h-4" />
                  <span>{service.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const BenefitsSection: React.FC = () => (
  <section className="py-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Why Choose Zion Tech Group Services?</h2>
        <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
          Our comprehensive suite of micro SAAS services is designed to transform your business operations 
          with cutting-edge technology and proven solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI-Powered Solutions</h3>
          <p className="text-zion-slate-light">
            Leverage the latest artificial intelligence and machine learning technologies to automate 
            processes and gain valuable insights.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
          <p className="text-zion-slate-light">
            Built with enterprise-grade security and compliance standards to protect your data 
            and meet regulatory requirements.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Rapid Implementation</h3>
          <p className="text-zion-slate-light">
            Quick deployment and setup with minimal disruption to your existing operations, 
            delivering value in weeks, not months.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
          <p className="text-zion-slate-light">
            24/7 technical support and dedicated account management to ensure your success 
            and maximize ROI.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Scalable Architecture</h3>
          <p className="text-zion-slate-light">
            Cloud-native solutions that grow with your business, from startup to enterprise, 
            with flexible pricing options.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
          <p className="text-zion-slate-light">
            Trusted by thousands of businesses worldwide with proven track records of 
            improving efficiency and reducing costs.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ContactSection: React.FC = () => (
  <section className="py-16 bg-gradient-to-br from-zion-blue to-zion-blue-dark border border-zion-blue-light rounded-lg">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
      <p className="text-zion-slate-light text-lg max-w-2xl mx-auto mb-8">
        Contact our team to discuss your specific needs and find the perfect solution for your business transformation journey.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
          <Mail className="w-6 h-6 text-zion-cyan" />
          <div className="text-left">
            <p className="font-medium text-white">Email</p>
            <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline text-sm">
              kleber@ziontechgroup.com
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
          <Phone className="w-6 h-6 text-zion-cyan" />
          <div className="text-left">
            <p className="font-medium text-white">Phone</p>
            <a href="tel:+13024640950" className="text-zion-cyan hover:underline text-sm">
              +1 302 464 0950
            </a>
          </div>
        </div>
        
        <div className="flex items-center justify-center space-x-3 p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
          <MapPin className="w-6 h-6 text-zion-cyan" />
          <div className="text-left">
            <p className="font-medium text-white">Address</p>
            <p className="text-zion-slate-light text-sm">
              364 E Main St STE 1008<br />
              Middletown DE 19709
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          size="lg"
          className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
          onClick={() => window.open('mailto:kleber@ziontechgroup.com', '_blank')}
        >
          Contact Sales Team
        </Button>
        <Button 
          size="lg"
          variant="outline"
          className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
          onClick={() => window.open('https://ziontechgroup.com', '_blank')}
        >
          Visit Our Website
        </Button>
        <Link to="/services-comparison">
          <Button 
            size="lg"
            variant="outline"
            className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
          >
            Compare Services
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default function EnhancedServicesOverview() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Comprehensive Micro SAAS Services
        </h1>
        <p className="text-xl text-zion-slate-light max-w-4xl mx-auto mb-8">
          Transform your business with our innovative suite of micro SAAS solutions, AI-powered services, 
          and cutting-edge IT solutions. From startups to enterprises, we have the tools you need to succeed.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
            onClick={() => window.open('https://ziontechgroup.com', '_blank')}
          >
            Get Started Today
          </Button>
          <Link to="/services-comparison">
            <Button 
              size="lg"
              variant="outline"
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10"
            >
              Compare Services
            </Button>
          </Link>
        </div>
      </div>

      {/* Service Categories */}
      <div className="space-y-16">
        {ENHANCED_SERVICE_CATEGORIES.map((category) => (
          <ServiceCategory 
            key={category.value} 
            category={category.label} 
            services={ENHANCED_SERVICES} 
          />
        ))}
      </div>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}