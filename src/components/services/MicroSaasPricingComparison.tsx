import React, { useState } from 'react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap,
  Globe,
  Users,
  BarChart3,
  Phone,
  Mail
} from 'lucide-react';

interface PricingComparisonProps {
  showTitle?: boolean;
}

export function MicroSaasPricingComparison({ showTitle = true }: PricingComparisonProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Services', icon: <Globe className="h-4 w-4" /> },
    { value: 'AI Services', label: 'AI Services', icon: <Zap className="h-4 w-4" /> },
    { value: 'IT Services', label: 'IT Services', icon: <Shield className="h-4 w-4" /> },
    { value: 'Business Solutions', label: 'Business Solutions', icon: <Users className="h-4 w-4" /> },
    { value: 'Specialized Services', label: 'Specialized Services', icon: <BarChart3 className="h-4 w-4" /> }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? MICRO_SAAS_SERVICES 
    : MICRO_SAAS_SERVICES.filter(service => service.category === selectedCategory);

  const getMarketComparison = (service: any) => {
    const marketData = {
      'ai-chatbot-builder': {
        competitors: ['Intercom', 'Drift', 'Zendesk'],
        avgPrice: 150,
        ourAdvantage: '40% more affordable, advanced AI features',
        marketSize: '$1.2B',
        growthRate: '25% YoY'
      },
      'ai-content-generator': {
        competitors: ['Jasper', 'Copy.ai', 'Writesonic'],
        avgPrice: 200,
        ourAdvantage: '25% cost savings, better SEO tools',
        marketSize: '$800M',
        growthRate: '30% YoY'
      },
      'ai-data-analytics': {
        competitors: ['Tableau', 'Power BI', 'Looker'],
        avgPrice: 500,
        ourAdvantage: '40% lower cost, AI-powered insights',
        marketSize: '$2.1B',
        growthRate: '20% YoY'
      },
      'cloud-migration-pro': {
        competitors: ['Accenture', 'Deloitte', 'AWS Professional Services'],
        avgPrice: 15000,
        ourAdvantage: '67% cost savings, faster delivery',
        marketSize: '$5.2B',
        growthRate: '18% YoY'
      },
      'cybersecurity-suite': {
        competitors: ['CrowdStrike', 'SentinelOne', 'Palo Alto Networks'],
        avgPrice: 1200,
        ourAdvantage: '25% more affordable, comprehensive coverage',
        marketSize: '$3.8B',
        growthRate: '22% YoY'
      },
      'devops-automation': {
        competitors: ['GitLab', 'Jenkins', 'CircleCI'],
        avgPrice: 300,
        ourAdvantage: '33% cost savings, better integration',
        marketSize: '$1.5B',
        growthRate: '28% YoY'
      },
      'workflow-automation': {
        competitors: ['Zapier', 'Integromat', 'n8n'],
        avgPrice: 120,
        ourAdvantage: '34% more affordable, AI optimization',
        marketSize: '$900M',
        growthRate: '35% YoY'
      },
      'project-management-ai': {
        competitors: ['Asana', 'Monday.com', 'ClickUp'],
        avgPrice: 180,
        ourAdvantage: '28% cost savings, AI insights',
        marketSize: '$1.1B',
        growthRate: '32% YoY'
      },
      'green-it-consulting': {
        competitors: ['Accenture', 'Deloitte', 'EY'],
        avgPrice: 5000,
        ourAdvantage: '50% cost savings, specialized expertise',
        marketSize: '$400M',
        growthRate: '40% YoY'
      },
      'blockchain-consulting': {
        competitors: ['Consensys', 'Chainalysis', 'Blockchain.com'],
        avgPrice: 8000,
        ourAdvantage: '56% cost savings, comprehensive services',
        marketSize: '$600M',
        growthRate: '45% YoY'
      }
    };

    return marketData[service.id] || {
      competitors: ['Industry Average'],
      avgPrice: service.price * 1.5,
      ourAdvantage: 'Competitive pricing with superior features',
      marketSize: 'N/A',
      growthRate: 'N/A'
    };
  };

  const getPricingDisplay = (service: any) => {
    if (service.pricingModel === 'monthly') {
      return `${service.currency}${service.price}/month`;
    } else if (service.pricingModel === 'yearly') {
      return `${service.currency}${service.price}/year`;
    } else if (service.pricingModel === 'one-time') {
      return `${service.currency}${service.price}`;
    } else {
      return `${service.currency}${service.price}`;
    }
  };

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Micro SAAS Services Pricing & Market Analysis
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Competitive pricing with superior features. See how our services compare to market leaders 
              and discover why ZionTech Group is the smart choice for your business.
            </p>
          </div>
        )}

        {/* Category Tabs */}
        <div className="mb-12">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 bg-zion-blue-dark border border-zion-blue-light">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category.value} 
                  value={category.value}
                  className="data-[state=active]:bg-zion-purple data-[state=active]:text-white"
                >
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <span className="hidden sm:inline">{category.label}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const marketData = getMarketComparison(service);
            const savings = Math.round(((marketData.avgPrice - service.price) / marketData.avgPrice) * 100);
            
            return (
              <Card key={service.id} className="border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-white text-lg mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-zion-slate-light text-sm">
                        {service.description}
                      </CardDescription>
                    </div>
                    {service.featured && (
                      <Badge className="bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-xs">
                        Featured
                      </Badge>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Pricing Section */}
                  <div className="bg-zion-blue/50 border border-zion-blue-light rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zion-cyan font-bold text-xl">
                        {getPricingDisplay(service)}
                      </span>
                      <Badge className="bg-green-600 text-white">
                        Save {savings}%
                      </Badge>
                    </div>
                    <p className="text-zion-slate-light text-sm">
                      vs. market average of ${marketData.avgPrice}
                    </p>
                  </div>

                  {/* Market Analysis */}
                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Market Analysis</h4>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-zion-blue/30 rounded p-2">
                        <div className="text-zion-cyan font-medium">Market Size</div>
                        <div className="text-zion-slate-light">{marketData.marketSize}</div>
                      </div>
                      <div className="bg-zion-blue/30 rounded p-2">
                        <div className="text-zion-cyan font-medium">Growth Rate</div>
                        <div className="text-zion-slate-light">{marketData.growthRate}</div>
                      </div>
                    </div>

                    <div className="bg-zion-blue/30 rounded p-3">
                      <div className="text-zion-cyan font-medium mb-1">Our Advantage</div>
                      <div className="text-zion-slate-light text-sm">{marketData.ourAdvantage}</div>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-white font-medium mb-2">Key Features</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                          <CheckCircle className="h-3 w-3 text-zion-cyan" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Support Level */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-slate-light text-sm">Support Level:</span>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan">
                      {service.supportLevel}
                    </Badge>
                  </div>
                </CardContent>

                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Button asChild className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
                        <a href={`mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`}>
                          <Mail className="h-4 w-4 mr-2" />
                          Get Quote
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                        <a href={`tel:+13024640950`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Call
                        </a>
                      </Button>
                    </div>
                    
                    {service.freeTier && (
                      <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 text-center">
                        <div className="text-green-400 font-medium text-sm">Free Tier Available</div>
                        <div className="text-green-300 text-xs">{service.freeTierLimits}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Market Summary */}
        <div className="mt-16 bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Why Choose ZionTech Group?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-zion-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-zion-purple" />
              </div>
              <h4 className="text-white font-semibold mb-2">Cost Savings</h4>
              <p className="text-zion-slate-light text-sm">
                Average 40% cost savings compared to market leaders while maintaining superior quality and features.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-cyan/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-zion-cyan" />
              </div>
              <h4 className="text-white font-semibold mb-2">Expert Support</h4>
              <p className="text-zion-slate-light text-sm">
                Dedicated support teams with deep technical expertise and personalized service for your business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-zion-purple/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-zion-purple" />
              </div>
              <h4 className="text-white font-semibold mb-2">Innovation First</h4>
              <p className="text-zion-slate-light text-sm">
                Cutting-edge AI and technology solutions that give you a competitive advantage in the market.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
              <a href="tel:+13024640950">
                <Phone className="h-5 w-5 mr-2" />
                Schedule a Consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}