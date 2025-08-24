import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Check, 
  Star, 
  Zap, 
  Brain, 
  Code, 
  Shield, 
  BarChart3, 
  TrendingUp,
  MessageSquare,
  Cloud,
  Lock,
  Users,
  Globe,
  Clock,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { MICRO_SAAS_SERVICES, getServiceByCategory } from '@/data/microSaasServices';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...Array.from(new Set(MICRO_SAAS_SERVICES.map(service => service.category)))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning':
        return <Brain className="h-6 w-6" />;
      case 'IT Services':
        return <Code className="h-6 w-6" />;
      case 'Business Intelligence':
        return <BarChart3 className="h-6 w-6" />;
      case 'Digital Marketing':
        return <TrendingUp className="h-6 w-6" />;
      default:
        return <Zap className="h-6 w-6" />;
    }
  };

  const getSubcategoryIcon = (subcategory: string) => {
    switch (subcategory) {
      case 'Content Generation':
        return <MessageSquare className="h-4 w-4" />;
      case 'Developer Tools':
        return <Code className="h-4 w-4" />;
      case 'Conversational AI':
        return <MessageSquare className="h-4 w-4" />;
      case 'Cloud Solutions':
        return <Cloud className="h-4 w-4" />;
      case 'Cybersecurity':
        return <Shield className="h-4 w-4" />;
      case 'Analytics':
        return <BarChart3 className="h-4 w-4" />;
      case 'SEO Services':
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Zap className="h-4 w-4" />;
    }
  };

  const getPrice = (service: any, plan: 'starter' | 'professional' | 'enterprise') => {
    const basePrice = service.pricing[plan];
    if (billingCycle === 'yearly' && service.pricing.billing === 'monthly') {
      return Math.round(basePrice * 12 * 0.8); // 20% discount for yearly
    }
    return basePrice;
  };

  const getBillingText = (service: any) => {
    if (billingCycle === 'yearly' && service.pricing.billing === 'monthly') {
      return '/year (20% off)';
    }
    return `/${service.pricing.billing}`;
  };

  const filteredServices = selectedCategory === 'all' 
    ? MICRO_SAAS_SERVICES 
    : getServiceByCategory(selectedCategory);

  return (
    <>
      <SEO 
        title="Pricing - Zion Tech Group Micro SAAS Services" 
        description="Transparent pricing for our comprehensive suite of micro SAAS services. Choose the perfect plan for your business needs."
        keywords="pricing, micro SAAS, AI services, IT solutions, business intelligence, digital marketing"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple-dark/80"></div>
          
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
              Choose the perfect plan for your business. All our micro SAAS services come with flexible pricing options 
              designed to scale with your growth.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Monthly
              </span>
              <Switch
                checked={billingCycle === 'yearly'}
                onCheckedChange={(checked) => setBillingCycle(checked ? 'yearly' : 'monthly')}
                className="data-[state=checked]:bg-zion-purple"
              />
              <span className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-zion-slate-light'}`}>
                Yearly <Badge variant="secondary" className="ml-2 bg-zion-cyan/20 text-zion-cyan">Save 20%</Badge>
              </span>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-background/95">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-zion-purple hover:bg-zion-purple-light text-white" 
                    : "border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? 'All Categories' : category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Grid */}
        <section className="py-16 bg-zion-blue-dark/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <Card key={service.id} className="bg-card/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                  <CardHeader className="pb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-lg bg-zion-purple/20 text-zion-purple">
                        {getCategoryIcon(service.category)}
                      </div>
                      {service.featured && (
                        <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                          Featured
                        </Badge>
                      )}
                    </div>
                    
                    <CardTitle className="text-2xl text-white mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    
                    <div className="flex items-center gap-2 mt-4">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-white">{service.rating}</span>
                      <span className="text-zion-slate-light">({service.reviewCount} reviews)</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Pricing Plans */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Pricing Plans</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <span className="text-white font-medium">Starter</span>
                            <p className="text-sm text-zion-slate-light">Perfect for small teams</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-zion-cyan">
                              ${getPrice(service, 'starter')}
                            </div>
                            <div className="text-sm text-zion-slate-light">
                              {getBillingText(service)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-zion-purple/10 rounded-lg border border-zion-purple/30">
                          <div>
                            <span className="text-white font-medium">Professional</span>
                            <p className="text-sm text-zion-slate-light">Ideal for growing businesses</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-zion-cyan">
                              ${getPrice(service, 'professional')}
                            </div>
                            <div className="text-sm text-zion-slate-light">
                              {getBillingText(service)}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                          <div>
                            <span className="text-white font-medium">Enterprise</span>
                            <p className="text-sm text-zion-slate-light">For large organizations</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-zion-cyan">
                              ${getPrice(service, 'enterprise')}
                            </div>
                            <div className="text-sm text-zion-slate-light">
                              {getBillingText(service)}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.features.slice(0, 5).map((feature, index) => (
                          <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                            <Check className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                            <span>{feature}</span>
                          </div>
                        ))}
                        {service.features.length > 5 && (
                          <p className="text-xs text-zion-slate-light text-center">
                            +{service.features.length - 5} more features
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs border-zion-purple/30 text-zion-purple">
                        {getSubcategoryIcon(service.subcategory)}
                        {service.subcategory}
                      </Badge>
                      {service.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-zion-purple/20">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10"
                        asChild
                      >
                        <a href={service.demoUrl} target="_blank" rel="noopener noreferrer">
                          <Clock className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                      <Button 
                        className="flex-1 bg-zion-purple hover:bg-zion-purple-light text-white"
                        asChild
                      >
                        <a href={service.websiteUrl} target="_blank" rel="noopener noreferrer">
                          Get Started
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-zion-slate-light text-lg">No services found in this category.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-zion-purple/30 text-zion-purple hover:bg-zion-purple/10"
                  onClick={() => setSelectedCategory('all')}
                >
                  View All Services
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="py-16 bg-zion-blue-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Enterprise Solutions?
            </h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto mb-8">
              We offer custom enterprise packages with dedicated support, custom integrations, and white-label solutions 
              for large organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-zion-purple hover:bg-zion-purple-light text-white px-8 h-12"
                asChild
              >
                <a href="mailto:kleber@ziontechgroup.com">
                  Contact Sales Team
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 h-12"
                asChild
              >
                <a href="tel:+13024640950">
                  Call +1 302 464 0950
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}