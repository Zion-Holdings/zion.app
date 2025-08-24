import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Star,
  Clock,
  TrendingUp,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Zap,
  Brain,
  Network,
  Bot,
  Sparkles,
  Users,
  Database,
  Server,
  Key
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { TrustedBySection } from '@/components/TrustedBySection';

const CYBERSECURITY_SERVICES = COMPREHENSIVE_SERVICES.filter(service => 
  service.category === 'Cybersecurity'
);

const SECURITY_SERVICE_CATEGORIES = [
  {
    id: 'threat-detection',
    name: 'Threat Detection & Response',
    description: 'AI-powered security monitoring and incident response',
    icon: Eye,
    services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Threat Detection'))
  },
  {
    id: 'zero-trust',
    name: 'Zero Trust Security',
    description: 'Identity verification and access management',
    icon: Lock,
    services: CYBERSECURITY_SERVICES.filter(s => s.title.includes('Zero Trust'))
  }
];

export default function CybersecurityServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (category: string) => {
    const categoryData = SECURITY_SERVICE_CATEGORIES.find(cat => cat.id === category);
    return categoryData?.icon || Shield;
  };

  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  return (
    <>
      <SEO 
        title="Cybersecurity Services & Solutions - Zion Tech Group" 
        description="Protect your business with enterprise-grade cybersecurity solutions including threat detection, zero trust security, and compliance services. 24/7 monitoring and support."
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue via-red-900 to-zion-blue-dark py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 to-blue-900/20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                  <Shield className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Protect your business with enterprise-grade cybersecurity solutions. From threat detection 
                to zero trust security, we deliver comprehensive protection against modern cyber threats.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Get Security Consultation: +1 302 464 0950
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  kleber@ziontechgroup.com
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Security Service Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Security Service Categories</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Comprehensive cybersecurity solutions designed to protect your business from all angles
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              {SECURITY_SERVICE_CATEGORIES.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.id} className="text-center hover:shadow-lg transition-shadow cursor-pointer border-red-500/20">
                    <CardHeader>
                      <div className="bg-red-500/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-10 w-10 text-red-600" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="bg-red-500/20 text-red-600">
                        {category.services.length} Services
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Services Showcase */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Security Services Showcase</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover how our cybersecurity solutions can protect your business and ensure compliance
              </p>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="all">All Security Services</TabsTrigger>
                {SECURITY_SERVICE_CATEGORIES.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {CYBERSECURITY_SERVICES.map((service) => (
                    <SecurityServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </TabsContent>

              {SECURITY_SERVICE_CATEGORIES.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.services.map((service) => (
                      <SecurityServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Security Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Our Security Solutions?</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Enterprise-grade protection with the agility and pricing of a startup
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  Round-the-clock security monitoring and threat detection
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">AI-Powered Detection</h3>
                <p className="text-muted-foreground text-sm">
                  Advanced AI algorithms for faster threat identification
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Compliance Ready</h3>
                <p className="text-muted-foreground text-sm">
                  Meet SOC2, GDPR, HIPAA, and other compliance requirements
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="font-semibold mb-2">Rapid Response</h3>
                <p className="text-muted-foreground text-sm">
                  Automated incident response and threat mitigation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Implementation Process */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Security Implementation Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology ensures comprehensive security implementation and ongoing protection
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Comprehensive security audit and vulnerability assessment
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  Develop security roadmap and compliance strategy
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Implementation</h3>
                <p className="text-muted-foreground text-sm">
                  Deploy security solutions and monitoring systems
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Monitoring</h3>
                <p className="text-muted-foreground text-sm">
                  24/7 security monitoring and ongoing support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Standards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Compliance & Standards</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our security solutions help you meet industry standards and regulatory requirements
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
              {[
                { name: 'SOC2', icon: '🔒', description: 'Security Controls' },
                { name: 'GDPR', icon: '🇪🇺', description: 'Data Protection' },
                { name: 'HIPAA', icon: '🏥', description: 'Healthcare' },
                { name: 'PCI DSS', icon: '💳', description: 'Payment Security' },
                { name: 'ISO 27001', icon: '🌐', description: 'Information Security' },
                { name: 'NIST', icon: '🇺🇸', description: 'Cybersecurity Framework' }
              ].map((standard) => (
                <Card key={standard.name} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-3xl mb-2">{standard.icon}</div>
                    <CardTitle className="text-lg">{standard.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{standard.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-zion-blue">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Secure Your Business?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get in touch with our cybersecurity experts to discuss your security needs and discover 
              how we can protect your business from evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <Phone className="mr-2 h-4 w-4" />
                Call: +1 302 464 0950
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" />
                Email: kleber@ziontechgroup.com
              </Button>
            </div>
            <div className="mt-8 text-zion-slate-light">
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="text-zion-cyan hover:underline">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </section>

        <TrustedBySection />
      </main>
      
      <Footer />
    </>
  );
}

// Security Service Card Component
function SecurityServiceCard({ service }: { service: any }) {
  const getPricingModelLabel = (model: string) => {
    switch (model) {
      case 'one-time': return 'One-time';
      case 'monthly': return 'Monthly';
      case 'hourly': return 'Hourly';
      case 'project-based': return 'Project-based';
      default: return model;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow border-red-500/20">
      <div className="relative">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {service.featured && (
          <Badge className="absolute top-3 left-3 bg-red-600">
            Featured
          </Badge>
        )}
        <Badge className="absolute top-3 right-3 bg-green-600">
          AI Score: {service.aiScore}
        </Badge>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="text-2xl">🔒</div>
          <div className="text-right">
            <div className="text-2xl font-bold text-red-600">
              {service.currency}{service.price.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">
              {getPricingModelLabel(service.pricingModel)}
            </div>
          </div>
        </div>
        
        <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {service.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Rating and Reviews */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{service.rating}</span>
          </div>
          <span className="text-muted-foreground">
            ({service.reviewCount} reviews)
          </span>
        </div>
        
        {/* Market Price */}
        <div className="flex items-center gap-2 text-sm">
          <TrendingUp className="h-4 w-4 text-green-600" />
          <span className="text-muted-foreground">Market Price:</span>
          <span className="font-medium">{service.marketPrice}</span>
        </div>
        
        {/* Delivery Time */}
        <div className="flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4 text-blue-600" />
          <span className="text-muted-foreground">Delivery:</span>
          <span className="font-medium">{service.deliveryTime}</span>
        </div>
        
        {/* Key Features */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Key Features:</h4>
          <ul className="space-y-1">
            {service.features.slice(0, 3).map((feature: string, index: number) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-green-600" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Contact Information */}
        <div className="pt-4 border-t">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-muted-foreground" />
              <span>{service.contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-muted-foreground" />
              <span>{service.contactInfo.email}</span>
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button className="flex-1 bg-red-600 hover:bg-red-700">
            Get Security Quote
          </Button>
          <Button variant="outline" className="flex-1">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}