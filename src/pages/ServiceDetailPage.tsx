import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Check, Star, TrendingUp, Clock, Shield, Zap, Cloud, BarChart3, Smartphone, Link as LinkIcon, Phone, Mail, MapPin, ArrowLeft } from 'lucide-react';
import { EXPANDED_SERVICES } from '@/data/expandedServices';
import { SEO } from '@/components/SEO';
import { TrustedBySection } from '@/components/TrustedBySection';

const categoryIcons: Record<string, React.ReactNode> = {
  "AI & Automation": <Zap className="w-6 h-6" />,
  "Cybersecurity": <Shield className="w-6 h-6" />,
  "Cloud & DevOps": <Cloud className="w-6 h-6" />,
  "Data & Analytics": <BarChart3 className="w-6 h-6" />,
  "Digital Transformation": <TrendingUp className="w-6 h-6" />,
  "IoT & Edge Computing": <Smartphone className="w-6 h-6" />,
  "Blockchain & Web3": <LinkIcon className="w-6 h-6" />,
};

const pricingModelColors: Record<string, string> = {
  "subscription": "bg-blue-100 text-blue-800",
  "project-based": "bg-purple-100 text-purple-800",
  "one-time": "bg-green-100 text-green-800",
  "usage-based": "bg-orange-100 text-orange-800",
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = EXPANDED_SERVICES.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
        <Link to="/services">
          <Button>Back to Services</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={`${service.title} | Zion Tech Group`}
        description={service.description}
        keywords={service.tags.join(', ')}
        canonical={`https://ziontechgroup.com/services/${service.id}`}
      />

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to="/services" className="text-gray-500 hover:text-gray-700">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/services">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                {categoryIcons[service.category]}
                <Badge variant="secondary" className="text-sm">
                  {service.subcategory}
                </Badge>
                {service.isNew && (
                  <Badge className="bg-green-500 text-white text-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    New
                  </Badge>
                )}
                {service.isFeatured && (
                  <Badge className="bg-yellow-500 text-white text-sm">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              
              <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 text-white">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold">{service.rating}</span>
                  <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-lg font-semibold">AI Score: {service.aiScore}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Call
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={service.images[0]} 
                alt={service.title}
                className="w-full h-80 object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Quick Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-zion-blue">
                  {service.currency}{service.price.toLocaleString()}
                </CardTitle>
                <CardDescription className="text-lg">
                  Starting Price
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className={`${pricingModelColors[service.pricingModel]} text-sm px-3 py-1`}>
                  {service.pricingModel.replace('-', ' ')}
                </Badge>
                <p className="text-sm text-gray-600 mt-2">
                  Market Price: {service.marketPrice}
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-zion-blue">
                  {service.features.length}
                </CardTitle>
                <CardDescription className="text-lg">
                  Key Features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Comprehensive solution with advanced capabilities
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-zion-blue">
                  {service.useCases.length}
                </CardTitle>
                <CardDescription className="text-lg">
                  Use Cases
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Versatile applications across industries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes our {service.title.toLowerCase()} solution stand out from the competition
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{feature}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Business Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your business operations and achieve measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-lg font-medium text-gray-900">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Use Cases</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how our solution can be applied across different industries and scenarios
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases.map((useCase, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent>
                  <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-zion-blue" />
                  </div>
                  <p className="font-medium text-gray-900">{useCase}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-zion-slate-light mb-8">
                Contact our experts today for a free consultation and customized proposal. 
                We'll help you understand how our {service.title.toLowerCase()} can transform your business.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Phone className="w-5 h-5 text-zion-cyan" />
                  <a href="tel:+13024640950" className="text-zion-cyan hover:underline">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Mail className="w-5 h-5 text-zion-cyan" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:underline">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <MapPin className="w-5 h-5 text-zion-cyan" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                  <LinkIcon className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Demo
                </Button>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Expert team with 10+ years experience</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Proven track record of successful implementations</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>24/7 support and maintenance</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Competitive pricing and flexible payment options</span>
                </div>
                <div className="flex items-center gap-3 text-zion-slate-light">
                  <Check className="w-5 h-5 text-zion-cyan" />
                  <span>Customized solutions for your specific needs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
    </>
  );
}