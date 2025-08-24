import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Eye, 
  Leaf, 
  DollarSign, 
  ArrowRight,
  Star,
  Clock,
  Globe
} from 'lucide-react';

// Mock data for enhanced services
const ENHANCED_SERVICES = [
  {
    id: "ai-1",
    title: "AI-Powered Business Intelligence",
    description: "Advanced AI algorithms that transform your data into actionable business insights",
    category: "AI & Machine Learning",
    pricingModel: "subscription",
    availability: "immediate",
    rating: 4.9,
    price: 2999,
    features: ["Predictive analytics", "Natural language processing", "Real-time insights", "Custom dashboards"],
    benefits: ["Increased efficiency", "Better decision making", "Cost reduction"],
    tags: ["AI", "Analytics", "Business Intelligence"],
    location: "Global"
  },
  {
    id: "security-1",
    title: "Enterprise Cybersecurity Suite",
    description: "Comprehensive security solution protecting your business from modern threats",
    category: "Cybersecurity",
    pricingModel: "subscription",
    availability: "immediate",
    rating: 4.8,
    price: 1999,
    features: ["Threat detection", "24/7 monitoring", "Incident response", "Compliance reporting"],
    benefits: ["Enhanced security", "Compliance assurance", "Risk mitigation"],
    tags: ["Security", "Compliance", "Enterprise"],
    location: "Global"
  },
  {
    id: "cloud-1",
    title: "Cloud Infrastructure Optimization",
    description: "Optimize your cloud costs and performance with intelligent automation",
    category: "Cloud & DevOps",
    pricingModel: "usage-based",
    availability: "within-week",
    rating: 4.7,
    price: 1499,
    features: ["Cost optimization", "Performance monitoring", "Auto-scaling", "Security compliance"],
    benefits: ["Cost savings", "Improved performance", "Scalability"],
    tags: ["Cloud", "DevOps", "Optimization"],
    location: "Global"
  }
];

const EnhancedServicesOverview: React.FC = () => {
  // Get featured services (first 6)
  const featuredServices = ENHANCED_SERVICES.slice(0, 6);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'AI & Machine Learning': return <Brain className="w-6 h-6" />;
      case 'Cybersecurity': return <Shield className="w-6 h-6" />;
      case 'Cloud & DevOps': return <Cloud className="w-6 h-6" />;
      case 'Data & Analytics': return <Database className="w-6 h-6" />;
      case 'Blockchain & Web3': return <Zap className="w-6 h-6" />;
      case 'IoT & Edge Computing': return <Eye className="w-6 h-6" />;
      case 'Quantum Computing': return <Brain className="w-6 h-6" />;
      case 'AR/VR & Metaverse': return <Eye className="w-6 h-6" />;
      case 'Green Tech & Sustainability': return <Leaf className="w-6 h-6" />;
      case 'FinTech & Digital Banking': return <DollarSign className="w-6 h-6" />;
      default: return <Zap className="w-6 h-6" />;
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'immediate': return 'text-green-400';
      case 'within-week': return 'text-yellow-400';
      case 'within-month': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cutting-Edge
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Technology Services
            </span>
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with our comprehensive suite of next-generation technology services. 
            From AI and cybersecurity to blockchain and quantum computing, we deliver innovative solutions 
            that drive real business results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
                          <Link href="/enhanced-services">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                Explore All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              Schedule Consultation
            </Button>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <Card key={service.id} className="bg-zion-blue-dark/50 border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 hover:-translate-y-2">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-zion-cyan">
                    {getCategoryIcon(service.category)}
                    <span className="text-sm font-medium">{service.category}</span>
                  </div>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
                    {service.pricingModel}
                  </Badge>
                </div>
                
                <CardTitle className="text-lg text-white mb-2 line-clamp-2">
                  {service.title}
                </CardTitle>
                
                <CardDescription className="text-zion-slate-light line-clamp-2">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold text-zion-cyan">
                    ${service.price.toLocaleString()}
                    <span className="text-sm text-zion-slate-light font-normal">
                      /{service.pricingModel === 'subscription' ? 'month' : 'project'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-white font-medium">{service.rating}</span>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2">
                  {service.benefits.slice(0, 2).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-zion-slate-light">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      {benefit}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-zion-purple/30 text-zion-cyan">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Availability and Location */}
                <div className="flex items-center justify-between text-sm">
                  <div className={`flex items-center gap-2 ${getAvailabilityColor(service.availability)}`}>
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">
                      {service.availability === 'immediate' ? 'Available Now' :
                       service.availability === 'within-week' ? 'Within 1 Week' :
                       service.availability === 'within-month' ? 'Within 1 Month' : 'Contact Us'}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-zion-slate-light">
                    <Globe className="w-4 h-4" />
                    {service.location}
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Categories Overview */}
        <div className="bg-zion-blue/20 rounded-2xl p-8 border border-zion-blue-light">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Service Categories</h3>
            <p className="text-zion-slate-light">
              Comprehensive coverage across all major technology domains
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {ENHANCED_SERVICES.reduce((acc, service) => {
              if (!acc.find(cat => cat.category === service.category)) {
                acc.push({
                  category: service.category,
                  count: ENHANCED_SERVICES.filter(s => s.category === service.category).length,
                  icon: getCategoryIcon(service.category)
                });
              }
              return acc;
            }, [] as Array<{category: string, count: number, icon: React.ReactNode}>).map((cat, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-zion-blue-dark/50 border border-zion-blue-light hover:border-zion-purple/50 transition-colors">
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {cat.icon}
                </div>
                <div className="text-white font-medium text-sm mb-1">{cat.category}</div>
                <div className="text-zion-slate-light text-xs">{cat.count} services</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-8 border border-zion-purple/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light max-w-2xl mx-auto mb-6">
              Our team of technology experts is ready to help you implement cutting-edge solutions 
              that drive real business results. Contact us today for a free consultation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                Schedule Free Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Download Service Catalog
              </Button>
            </div>
            <div className="mt-6 text-zion-slate-light text-sm">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-zion-cyan" />
                  <span>https://ziontechgroup.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesOverview;