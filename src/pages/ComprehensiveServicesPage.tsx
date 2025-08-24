import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  Zap,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Globe,
  Code,
  Database,
  Brain,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Cloud,
  Lock,
  Smartphone,
  Monitor,
  Server,
  Network,
  HardDrive,
  Eye,
  Smartphone as MobileIcon,
  Globe as WebIcon,
  Database as DataIcon,
  Shield as SecurityIcon,
  Cloud as CloudIcon,
  Zap as AutomationIcon,
  Brain as AIIcon,
  BarChart3 as AnalyticsIcon,
  MessageSquare as ChatIcon,
  FileText as ContentIcon,
  Settings as ConfigIcon
} from 'lucide-react';
import { MICRO_SAAS_SERVICES } from '@/data/microSaasServices';
import { ENHANCED_IT_SERVICES } from '@/data/enhancedITServices';
import { ENHANCED_AI_SERVICES } from '@/data/enhancedAIServices';
import { Link } from 'react-router-dom';

interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  badge?: string;
  link: string;
  pricing?: any;
  features?: string[];
  benefits?: string[];
}

export default function ComprehensiveServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeTab, setActiveTab] = useState('micro-saas');

  // Combine all services for search
  const allServices: Service[] = [
    ...MICRO_SAAS_SERVICES.map(service => ({
      ...service,
      type: 'Micro SAAS',
      pricing: service.pricing
    })),
    ...ENHANCED_IT_SERVICES.map(service => ({
      ...service,
      type: 'IT Services',
      pricing: service.pricing
    })),
    ...ENHANCED_AI_SERVICES.map(service => ({
      ...service,
      type: 'AI Services',
      pricing: service.pricing
    }))
  ];

  // Filter services based on search and category
  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allServices.map(service => service.category)))];

  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Content & Marketing': <FileText className="h-6 w-6" />,
      'Finance & Accounting': <BarChart3 className="h-6 w-6" />,
      'Project Management': <Settings className="h-6 w-6" />,
      'Customer Support': <MessageSquare className="h-6 w-6" />,
      'Analytics & BI': <BarChart3 className="h-6 w-6" />,
      'HR & Recruitment': <Users className="h-6 w-6" />,
      'Cybersecurity': <Shield className="h-6 w-6" />,
      'Cloud Management': <Cloud className="h-6 w-6" />,
      'Marketing Automation': <Zap className="h-6 w-6" />,
      'Developer Tools': <Code className="h-6 w-6" />,
      'AI & Machine Learning': <Brain className="h-6 w-6" />,
      'Cloud Services': <Cloud className="h-6 w-6" />,
      'Data & Analytics': <Database className="h-6 w-6" />,
      'Digital Transformation': <TrendingUp className="h-6 w-6" />,
      'DevOps': <Settings className="h-6 w-6" />,
      'Network Infrastructure': <Network className="h-6 w-6" />,
      'Mobile Development': <MobileIcon className="h-6 w-6" />,
      'Web Development': <WebIcon className="h-6 w-6" />,
      'IT Consulting': <Monitor className="h-6 w-6" />,
      'Conversational AI': <MessageSquare className="h-6 w-6" />,
      'Computer Vision': <Eye className="h-6 w-6" />,
      'Predictive Analytics': <TrendingUp className="h-6 w-6" />,
      'Process Automation': <Zap className="h-6 w-6" />,
      'Customer Analytics': <Users className="h-6 w-6" />,
      'Voice AI': <MessageSquare className="h-6 w-6" />,
      'Data Quality': <Database className="h-6 w-6" />,
      'Language AI': <Globe className="h-6 w-6" />,
      'Recommendation Systems': <Star className="h-6 w-6" />
    };
    return iconMap[category] || <Settings className="h-6 w-6" />;
  };

  const getServiceTypeColor = (type: string) => {
    const colorMap: { [key: string]: string } = {
      'Micro SAAS': 'bg-blue-100 text-blue-800',
      'IT Services': 'bg-green-100 text-green-800',
      'AI Services': 'bg-purple-100 text-purple-800'
    };
    return colorMap[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <>
      <SEO 
        title="Comprehensive Services - Zion Tech Group" 
        description="Discover our complete range of micro SAAS, IT services, and AI solutions. Transform your business with cutting-edge technology."
        keywords="micro SAAS, IT services, AI solutions, technology services, business solutions"
      />
      <Header />
      
      <main className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="container mx-auto relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive
              <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
                Technology Services
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
              Transform your business with our complete suite of micro SAAS solutions, 
              professional IT services, and cutting-edge AI technology.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl">🤖</span>
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl">⚡</span>
                <span>Micro SAAS Platform</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="text-2xl">🔧</span>
                <span>Professional IT Services</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white px-8 py-3">
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                <Link to="/request-quote">Request Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services Navigation */}
        <section className="py-12 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-zion-blue-dark/50 border border-zion-purple/20">
                <TabsTrigger value="micro-saas" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                  <span className="text-2xl mr-2">⚡</span>
                  Micro SAAS Services
                </TabsTrigger>
                <TabsTrigger value="it-services" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                  <span className="text-2xl mr-2">🔧</span>
                  IT Services
                </TabsTrigger>
                <TabsTrigger value="ai-services" className="data-[state=active]:bg-zion-purple data-[state=active]:text-white">
                  <span className="text-2xl mr-2">🤖</span>
                  AI Solutions
                </TabsTrigger>
              </TabsList>

              {/* Search and Filter */}
              <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
                  <Input
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white/10 border-zion-purple/20 text-white placeholder-zion-slate-light"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-zion-slate-light" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="bg-zion-blue-dark/50 border border-zion-purple/20 text-white rounded-md px-3 py-2"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === 'all' ? 'All Categories' : category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Micro SAAS Services */}
              <TabsContent value="micro-saas" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {MICRO_SAAS_SERVICES
                    .filter(service => 
                      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.category.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
                    .map((service) => (
                    <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-4xl">{service.icon}</span>
                          {service.badge && (
                            <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                              {service.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan font-semibold">
                            {service.pricing.currency}{service.pricing.monthly}/month
                          </span>
                          <span className="text-zion-slate-light text-sm">
                            {service.pricing.currency}{service.pricing.yearly}/year
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <CheckCircle className="h-3 w-3 text-zion-cyan" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <TrendingUp className="h-3 w-3 text-zion-cyan" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                          <Link to={service.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* IT Services */}
              <TabsContent value="it-services" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ENHANCED_IT_SERVICES
                    .filter(service => 
                      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.category.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
                    .map((service) => (
                    <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-4xl">{service.icon}</span>
                          {service.badge && (
                            <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                              {service.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan font-semibold">
                            {service.pricing.currency}{service.pricing.hourly}/hr
                          </span>
                          <span className="text-zion-slate-light text-sm">
                            {service.pricing.currency}{service.pricing.project} project
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Timeline:</h4>
                          <p className="text-zion-slate-light text-sm">{service.timeline}</p>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <CheckCircle className="h-3 w-3 text-zion-cyan" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                          <Link to={service.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* AI Services */}
              <TabsContent value="ai-services" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ENHANCED_AI_SERVICES
                    .filter(service => 
                      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      service.category.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .filter(service => selectedCategory === 'all' || service.category === selectedCategory)
                    .map((service) => (
                    <Card key={service.id} className="bg-white/5 backdrop-blur-sm border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <div className="flex justify-between items-start mb-4">
                          <span className="text-4xl">{service.icon}</span>
                          {service.badge && (
                            <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                              {service.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-zion-cyan font-semibold">
                            {service.pricing.currency}{service.pricing.monthly}/month
                          </span>
                          <span className="text-zion-slate-light text-sm">
                            {service.pricing.currency}{service.pricing.yearly}/year
                          </span>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <CheckCircle className="h-3 w-3 text-zion-cyan" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-white font-semibold text-sm">Benefits:</h4>
                          <ul className="space-y-1">
                            {service.benefits.slice(0, 2).map((benefit, index) => (
                              <li key={index} className="flex items-center gap-2 text-zion-slate-light text-sm">
                                <TrendingUp className="h-3 w-3 text-zion-cyan" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                      <div className="p-4 pt-0">
                        <Button className="w-full bg-zion-purple hover:bg-zion-purple-light text-white" asChild>
                          <Link to={service.link}>
                            Learn More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you implement the perfect solution 
              for your business needs. Get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light px-8 py-3" asChild>
                <Link to="/contact">Contact Our Experts</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3" asChild>
                <Link to="/request-quote">Request Custom Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}