import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X, Star, Shield, Zap, Users, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { SERVICE_PRICING_TIERS } from '@/data/enhancedServices';
import { SEO } from '@/components/SEO';

const pricingFeatures = {
  starter: [
    "Core functionality implementation",
    "Basic technical support (8/5)",
    "Comprehensive documentation",
    "Online training sessions",
    "Email support",
    "Basic customization",
    "Standard deployment",
    "Monthly reporting"
  ],
  professional: [
    "Advanced features & capabilities",
    "Priority support (12/7)",
    "Custom documentation",
    "On-site training available",
    "Phone & email support",
    "Advanced customization",
    "Integration support",
    "Performance optimization",
    "Weekly reporting",
    "SLA guarantees",
    "Dedicated account manager"
  ],
  enterprise: [
    "Custom development & features",
    "24/7 dedicated support",
    "Custom documentation & training",
    "On-site training & workshops",
    "Priority phone, email & chat",
    "Full customization & integration",
    "Custom integrations",
    "Performance & security audit",
    "Real-time monitoring",
    "Custom reporting & analytics",
    "Dedicated project manager",
    "On-site implementation support",
    "Custom SLA agreements",
    "Quarterly business reviews"
  ]
};

const additionalServices = [
  {
    name: "AI Model Training",
    description: "Custom AI model development and training",
    price: "$5,000 - $25,000",
    features: ["Data preparation", "Model training", "Performance optimization", "Deployment support"]
  },
  {
    name: "Cybersecurity Audit",
    description: "Comprehensive security assessment and recommendations",
    price: "$3,000 - $15,000",
    features: ["Vulnerability assessment", "Penetration testing", "Compliance review", "Security roadmap"]
  },
  {
    name: "Cloud Migration",
    description: "Complete cloud infrastructure migration",
    price: "$10,000 - $50,000",
    features: ["Architecture design", "Data migration", "Testing & validation", "Go-live support"]
  },
  {
    name: "Digital Transformation",
    description: "End-to-end business transformation consulting",
    price: "$25,000 - $100,000+",
    features: ["Strategy development", "Technology assessment", "Change management", "Implementation oversight"]
  }
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pricing & Service Tiers - Zion Tech Group" 
        description="Transparent pricing for enterprise IT services, AI solutions, and digital transformation. Choose from Starter, Professional, or Enterprise tiers with flexible billing options."
        keywords="IT services pricing, AI solutions cost, enterprise pricing, digital transformation pricing"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Choose the right service level for your business needs. All tiers include expert consultation, 
            implementation support, and ongoing maintenance.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`text-sm ${billingCycle === 'monthly' ? 'text-zion-cyan' : 'text-zion-slate-light'}`}>
              Monthly
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="bg-white/20 hover:bg-white/30"
            >
              <div className={`w-6 h-4 bg-white rounded-full p-0.5 transition-all duration-300 ${billingCycle === 'annual' ? 'translate-x-2' : ''}`}>
                <div className="w-3 h-3 bg-zion-blue rounded-full"></div>
              </div>
            </Button>
            <span className={`text-sm ${billingCycle === 'annual' ? 'text-zion-cyan' : 'text-zion-slate-light'}`}>
              Annual <Badge className="ml-1 bg-zion-cyan text-white">Save 20%</Badge>
            </span>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-zion-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Phone</p>
              <p className="text-white font-semibold">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Email</p>
              <p className="text-white font-semibold">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-6 h-6 text-zion-cyan mb-2" />
              <p className="text-zion-slate-light">Address</p>
              <p className="text-white font-semibold">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Pricing Tiers */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(SERVICE_PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`h-full ${key === 'professional' ? 'border-zion-purple shadow-xl scale-105' : 'border-zion-blue-light'}`}>
                <CardHeader className="text-center">
                  {key === 'professional' && (
                    <Badge className="w-fit mx-auto mb-2 bg-zion-purple text-white">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl text-zion-blue">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-zion-purple mb-2">
                    {tier.price}
                  </div>
                  <CardDescription className="text-zion-slate">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-zion-slate">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-3">
                    <Button className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                      Choose {tier.name}
                    </Button>
                    <Link to="/contact">
                      <Button variant="outline" className="w-full">
                        Contact Sales
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-16 bg-zion-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Additional Services</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Need specialized services? We offer custom solutions tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalServices.map((service) => (
              <Card key={service.name} className="h-full">
                <CardHeader>
                  <CardTitle className="text-xl text-zion-blue">{service.name}</CardTitle>
                  <CardDescription className="text-zion-slate">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-zion-purple">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-green-500" />
                        <span className="text-zion-slate text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-zion-blue hover:bg-zion-blue-dark">
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Zion Tech Group */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-zion-slate text-lg max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-zion-blue" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Global Reach</h3>
              <p className="text-zion-slate">Serving clients worldwide with 24/7 support and local expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-zion-purple" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Enterprise Security</h3>
              <p className="text-zion-slate">Bank-grade security and compliance with industry standards</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-zion-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Innovation First</h3>
              <p className="text-zion-slate">Cutting-edge AI and emerging technology solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert Team</h3>
              <p className="text-zion-slate">Certified professionals with deep industry expertise</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-zion-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Frequently Asked Questions</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Get answers to common questions about our services and pricing.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What's included in the pricing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate">
                  All pricing includes implementation, training, documentation, and support. Enterprise tiers include 
                  dedicated project management and on-site support. Additional customization and integration work 
                  may incur additional costs.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer custom pricing for large projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate">
                  Yes, we offer custom pricing for enterprise projects and large-scale implementations. 
                  Contact our sales team for a personalized quote based on your specific requirements.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What kind of support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate">
                  Support varies by tier: Starter includes email support, Professional includes phone and email, 
                  and Enterprise includes 24/7 dedicated support with dedicated account managers.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate">
                  Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, 
                  while downgrades take effect at the next billing cycle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-slate-light">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/enhanced-services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                View All Services
              </Button>
            </Link>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p className="text-sm">
              <strong>Contact:</strong> +1 302 464 0950 | kleber@ziontechgroup.com
            </p>
            <p className="text-sm">
              <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}