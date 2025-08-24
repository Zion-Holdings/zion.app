import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  Phone, 
  Mail, 
  Globe,
  TrendingUp,
  Shield,
  Zap,
  Brain,
  Clock,
  Users,
  Code,
  Database,
  Smartphone,
  Lock,
  BarChart3,
  Network,
  Cloud,
  Server
} from 'lucide-react';
import { PRICING_TIERS, CONTACT_INFO, SERVICE_CATEGORIES } from '@/data/enhancedServices';

export default function PricingPage() {
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      services: ["AI Development", "Machine Learning Models", "Chatbot Development", "Predictive Analytics"]
    },
    {
      name: "IT Infrastructure",
      icon: <Server className="w-6 h-6" />,
      services: ["Cloud Migration", "DevOps Automation", "Cybersecurity", "Network Management"]
    },
    {
      name: "Web Development",
      icon: <Code className="w-6 h-6" />,
      services: ["Custom Websites", "E-commerce Platforms", "Progressive Web Apps", "API Development"]
    },
    {
      name: "Business Solutions",
      icon: <BarChart3 className="w-6 h-6" />,
      services: ["Process Automation", "CRM Integration", "Data Analytics", "Workflow Optimization"]
    },
    {
      name: "Digital Marketing",
      icon: <Globe className="w-6 h-6" />,
      services: ["SEO Optimization", "Social Media Management", "Content Automation", "Analytics Dashboard"]
    },
    {
      name: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      services: ["Cross-platform Apps", "Native Development", "App Store Optimization", "Maintenance"]
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Service Pricing & Plans - Zion Tech Group" 
        description="Transparent pricing for our comprehensive IT & AI services. Choose from Basic, Professional, or Enterprise plans tailored to your business needs."
        keywords="IT services pricing, AI development cost, cloud migration pricing, cybersecurity pricing, business automation cost"
        canonical="https://ziontechgroup.com/pricing"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <GradientHeading level="h1" className="text-5xl md:text-6xl font-bold mb-6">
            Transparent Pricing Plans
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Choose the perfect plan for your business needs. All plans include our commitment to quality, 
            security, and ongoing support to ensure your success.
          </p>
          
          {/* Contact Banner */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Call for Custom Quote</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-semibold hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Email for Details</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-semibold hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-8 h-8 text-zion-cyan mb-2" />
                <p className="text-zion-slate-light text-sm">Visit Website</p>
                <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Choose Your Plan</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Start with our Basic plan and scale up as your business grows. All plans include our core features and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(PRICING_TIERS).map(([key, tier]) => (
              <Card key={key} className={`relative bg-white/5 backdrop-blur-sm border ${
                key === 'professional' 
                  ? 'border-zion-cyan/50 bg-zion-cyan/10 scale-105' 
                  : 'border-white/20'
              }`}>
                {key === 'professional' && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-cyan to-blue-500 text-white border-0">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className={`text-3xl ${
                    key === 'professional' ? 'text-zion-cyan' : 'text-white'
                  }`}>
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-lg">
                    {tier.description}
                  </CardDescription>
                  <div className="text-4xl font-bold text-white mt-6">
                    {tier.priceRange}
                  </div>
                  <p className="text-zion-slate-light text-sm mt-2">
                    Starting price for standard implementation
                  </p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-4 text-left mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      key === 'professional' 
                        ? 'bg-zion-cyan hover:bg-zion-cyan-dark text-white' 
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/30'
                    }`}
                    onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Pricing Inquiry: ${tier.name} Tier`, '_blank')}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Category Pricing */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Service Category Pricing</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Detailed pricing for each service category. Contact us for custom quotes and enterprise solutions.
            </p>
          </div>

          <Tabs defaultValue="ai-services" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-6 bg-white/10 backdrop-blur-sm border border-white/20">
              {serviceCategories.map((category) => (
                <TabsTrigger 
                  key={category.name} 
                  value={category.name.toLowerCase().replace(/\s+/g, '-')}
                  className="text-white hover:text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white"
                >
                  <span className="mr-2">{category.icon}</span>
                  <span className="hidden lg:inline">{category.name.split(' ')[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {serviceCategories.map((category) => (
              <TabsContent key={category.name} value={category.name.toLowerCase().replace(/\s+/g, '-')} className="mt-8">
                <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-white flex items-center">
                      {category.icon}
                      <span className="ml-3">{category.name}</span>
                    </CardTitle>
                    <CardDescription className="text-zion-slate-light text-lg">
                      Comprehensive solutions for {category.name.toLowerCase()} needs
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Basic</h4>
                        <div className="text-2xl font-bold text-zion-cyan mb-4">$399 - $1,999</div>
                        <ul className="text-left space-y-2 text-zion-slate-light text-sm">
                          {category.services.slice(0, 2).map((service, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                              {service}
                            </li>
                          ))}
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            Email support
                          </li>
                        </ul>
                      </div>
                      
                      <div className="text-center p-6 bg-zion-cyan/10 rounded-lg border border-zion-cyan/30">
                        <h4 className="text-lg font-semibold text-white mb-2">Professional</h4>
                        <div className="text-2xl font-bold text-zion-cyan mb-4">$1,999 - $4,999</div>
                        <ul className="text-left space-y-2 text-zion-slate-light text-sm">
                          {category.services.map((service, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                              {service}
                            </li>
                          ))}
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            Priority support
                          </li>
                        </ul>
                      </div>
                      
                      <div className="text-center p-6 bg-white/5 rounded-lg border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">Enterprise</h4>
                        <div className="text-2xl font-bold text-zion-cyan mb-4">$4,999+</div>
                        <ul className="text-left space-y-2 text-zion-slate-light text-sm">
                          {category.services.map((service, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                              {service}
                            </li>
                          ))}
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            24/7 dedicated support
                          </li>
                          <li className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                            Custom development
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What's Included in Every Plan</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Core features and benefits that come with all our service plans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Enterprise Security</h4>
              <p className="text-zion-slate-light">Bank-level security standards and compliance with industry regulations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Expert Support</h4>
              <p className="text-zion-slate-light">Dedicated support team with deep technical expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Fast Implementation</h4>
              <p className="text-zion-slate-light">Quick deployment with minimal disruption to your business</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Ongoing Optimization</h4>
              <p className="text-zion-slate-light">Continuous improvement and performance optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Common questions about our pricing and services
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">How do you determine pricing for custom projects?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Pricing is based on project complexity, scope, timeline, and specific requirements. 
                  We provide detailed quotes after understanding your needs through a consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Do you offer payment plans or financing?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Yes, we offer flexible payment plans for larger projects. We can structure payments 
                  to align with project milestones or your budget requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">What's included in ongoing support and maintenance?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Ongoing support includes monitoring, updates, security patches, performance optimization, 
                  and technical assistance. Response times vary by plan tier.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <CardTitle className="text-white">Can I upgrade or downgrade my plan?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-zion-slate-light">
                  Absolutely! You can upgrade or downgrade your plan at any time. We'll work with you 
                  to ensure a smooth transition with minimal disruption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-zion-slate-light text-xl mb-8 max-w-3xl mx-auto">
            Contact us today for a personalized quote and consultation. We'll help you choose the right plan for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-10 py-4 text-lg"
              onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Pricing Consultation`, '_blank')}
            >
              Get Custom Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-10 py-4 text-lg"
              onClick={() => window.open(`tel:${CONTACT_INFO.phone}`, '_blank')}
            >
              Call {CONTACT_INFO.phone}
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-zion-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Proven Track Record</h4>
                <p className="text-zion-slate-light text-sm">Successfully delivered 500+ projects</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-zion-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Fast Delivery</h4>
                <p className="text-zion-slate-light text-sm">Average project completion in 4-8 weeks</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-zion-cyan" />
                </div>
                <h4 className="text-white font-semibold mb-2">Expert Team</h4>
                <p className="text-zion-slate-light text-sm">Certified professionals with 10+ years experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}