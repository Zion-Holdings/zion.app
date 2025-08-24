import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Brain, 
  MessageSquare, 
  BarChart3, 
  PenTool, 
  Eye, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Database,
  Network,
  Bot,
  Sparkles
} from 'lucide-react';
import { COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';
import { TrustedBySection } from '@/components/TrustedBySection';

const AI_SERVICES = COMPREHENSIVE_SERVICES.filter(service => 
  service.category === 'AI & Machine Learning'
);

const AI_SERVICE_CATEGORIES = [
  {
    id: 'conversational-ai',
    name: 'Conversational AI',
    description: 'Chatbots, voice assistants, and natural language processing solutions',
    icon: MessageSquare,
    services: AI_SERVICES.filter(s => s.subcategory === 'Chatbots & Conversational AI')
  },
  {
    id: 'predictive-analytics',
    name: 'Predictive Analytics',
    description: 'Machine learning models for forecasting and business intelligence',
    icon: BarChart3,
    services: AI_SERVICES.filter(s => s.title.includes('Predictive'))
  },
  {
    id: 'content-generation',
    name: 'AI Content Generation',
    description: 'Automated content creation and optimization tools',
    icon: PenTool,
    services: AI_SERVICES.filter(s => s.title.includes('Content'))
  }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const getCategoryIcon = (category: string) => {
    const categoryData = AI_SERVICE_CATEGORIES.find(cat => cat.id === category);
    return categoryData?.icon || Brain;
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
        title="AI Services & Solutions - Zion Tech Group" 
        description="Transform your business with cutting-edge AI services including chatbots, predictive analytics, content generation, and machine learning solutions. Competitive pricing and global delivery."
      />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                  <Brain className="h-16 w-16 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6">
                AI-Powered Solutions
              </h1>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Leverage the power of artificial intelligence to automate processes, gain insights, 
                and transform your business operations. From chatbots to predictive analytics, 
                we deliver enterprise-grade AI solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
                  <Phone className="mr-2 h-4 w-4" />
                  Get AI Consultation: +1 302 464 0950
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                  <Mail className="mr-2 h-4 w-4" />
                  kleber@ziontechgroup.com
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Service Categories */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">AI Service Categories</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Explore our comprehensive range of AI-powered solutions designed to meet every business need
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {AI_SERVICE_CATEGORIES.map((category) => {
                const IconComponent = category.icon;
                return (
                  <Card key={category.id} className="text-center hover:shadow-lg transition-shadow cursor-pointer border-zion-purple/20">
                    <CardHeader>
                      <div className="bg-zion-purple/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-10 w-10 text-zion-purple" />
                      </div>
                      <CardTitle className="text-xl">{category.name}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple">
                        {category.services.length} Services
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Services Showcase */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">AI Services Showcase</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Discover how our AI solutions can transform your business operations and drive growth
              </p>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All AI Services</TabsTrigger>
                {AI_SERVICE_CATEGORIES.map((category) => (
                  <TabsTrigger key={category.id} value={category.id}>
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {AI_SERVICES.map((service) => (
                    <AIServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </TabsContent>

              {AI_SERVICE_CATEGORIES.map((category) => (
                <TabsContent key={category.id} value={category.id} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.services.map((service) => (
                      <AIServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* AI Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose AI Solutions?</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                AI-powered solutions offer unprecedented opportunities for business transformation
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="text-center">
                <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="font-semibold mb-2">10x Faster Operations</h3>
                <p className="text-muted-foreground text-sm">
                  Automate repetitive tasks and processes to dramatically increase efficiency
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="font-semibold mb-2">Data-Driven Insights</h3>
                <p className="text-muted-foreground text-sm">
                  Make informed decisions based on real-time analytics and predictions
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="font-semibold mb-2">Enhanced Security</h3>
                <p className="text-muted-foreground text-sm">
                  AI-powered threat detection and security monitoring
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-zion-purple" />
                </div>
                <h3 className="font-semibold mb-2">Innovation Edge</h3>
                <p className="text-muted-foreground text-sm">
                  Stay ahead of competitors with cutting-edge AI capabilities
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Implementation Process */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">AI Implementation Process</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology ensures successful AI implementation and maximum ROI
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="bg-zion-purple text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Assessment</h3>
                <p className="text-muted-foreground text-sm">
                  Analyze your business needs and identify AI opportunities
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Strategy</h3>
                <p className="text-muted-foreground text-sm">
                  Develop comprehensive AI implementation roadmap
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Development</h3>
                <p className="text-muted-foreground text-sm">
                  Build and train AI models with your data
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-zion-purple text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h3 className="font-semibold mb-2">Deployment</h3>
                <p className="text-muted-foreground text-sm">
                  Launch and monitor AI solutions with ongoing support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-zion-blue">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Get in touch with our AI experts to discuss your needs and discover how artificial intelligence 
              can transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
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

// AI Service Card Component
function AIServiceCard({ service }: { service: any }) {
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
    <Card className="hover:shadow-lg transition-shadow border-zion-purple/20">
      <div className="relative">
        <img
          src={service.images[0]}
          alt={service.title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {service.featured && (
          <Badge className="absolute top-3 left-3 bg-zion-purple">
            Featured
          </Badge>
        )}
        <Badge className="absolute top-3 right-3 bg-green-600">
          AI Score: {service.aiScore}
        </Badge>
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="text-2xl">🤖</div>
          <div className="text-right">
            <div className="text-2xl font-bold text-zion-purple">
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
        
        {/* Key Benefits */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Key Benefits:</h4>
          <ul className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit: string, index: number) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-green-600" />
                {benefit}
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
          <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-light">
            Get AI Quote
          </Button>
          <Button variant="outline" className="flex-1">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}