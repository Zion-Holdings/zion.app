import React from 'react';
import { Link } from 'react-router-dom';
import { COMPREHENSIVE_SERVICES, SERVICE_CATEGORIES } from '@/data/comprehensiveServices';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ArrowRight, 
  TrendingUp, 
  Star, 
  Clock, 
  Globe,
  Zap,
  Shield,
  Brain,
  Cloud,
  Lock,
  Database,
  Code,
  Link as LinkIcon
} from 'lucide-react';
import Wifi from 'lucide-react/dist/esm/icons/wifi';
import Rocket from 'lucide-react/dist/esm/icons/rocket';

export function ComprehensiveServicesShowcase() {
  // Get featured services (services with featured: true)
  const featuredServices = COMPREHENSIVE_SERVICES.filter(service => service.featured).slice(0, 6);
  
  // Get category icons mapping
  const getCategoryIcon = (category: string) => {
    const categoryData = SERVICE_CATEGORIES.find(cat => cat.name === category);
    return categoryData?.icon || '🔧';
  };

  const getCategoryIconComponent = (category: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'AI & Automation': <Brain className="w-6 h-6" />,
      'Cloud & Infrastructure': <Cloud className="w-6 h-6" />,
      'Cybersecurity': <Shield className="w-6 h-6" />,
      'Data & Analytics': <Database className="w-6 h-6" />,
      'DevOps & Development': <Code className="w-6 h-6" />,
      'IoT & Hardware': <Wifi className="w-6 h-6" />,
      'Blockchain & Web3': <LinkIcon className="w-6 h-6" />,
      'Digital Transformation': <Rocket className="w-6 h-6" />
    };
    return iconMap[category] || <Zap className="w-6 h-6" />;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <GradientHeading level="h2" className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise-Grade Micro SAAS Solutions
          </GradientHeading>
          <p className="text-zion-slate-light text-xl max-w-4xl mx-auto mb-8">
            Transform your business with our comprehensive suite of AI-powered, cloud-native, and innovative technology solutions. 
            From automation to cybersecurity, we deliver results that drive growth and efficiency.
          </p>
          
          {/* Category Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {SERVICE_CATEGORIES.slice(0, 8).map((category) => (
              <div key={category.id} className="text-center p-4 bg-zion-blue-dark/50 rounded-lg border border-zion-blue-light/30">
                <div className="text-3xl mb-2">{category.icon}</div>
                <div className="text-zion-cyan font-semibold text-sm">{category.name}</div>
                <div className="text-zion-slate-light text-xs mt-1">
                  {category.services.length} services
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/comprehensive-services">
              <Button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg">
              Get Free Consultation
            </Button>
          </div>
        </div>

        {/* Featured Services Grid */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-white text-3xl font-bold mb-4">Featured Solutions</h3>
            <p className="text-zion-slate-light text-lg">
              Our most popular and innovative services that are transforming businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-cyan transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
                <div className="relative">
                  <img
                    src={service.images[0]}
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-zion-cyan text-white">
                    Featured
                  </Badge>
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                      {getCategoryIconComponent(service.category)}
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-white text-xl group-hover:text-zion-cyan transition-colors line-clamp-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-zion-blue/30 rounded-lg">
                      <div className="text-zion-cyan font-bold text-lg">
                        {service.currency}{service.price?.toLocaleString()}
                      </div>
                      <div className="text-zion-slate-light text-xs">Starting Price</div>
                    </div>
                    <div className="text-center p-3 bg-zion-blue/30 rounded-lg">
                      <div className="text-zion-cyan font-bold text-lg">
                        {service.aiScore}/100
                      </div>
                      <div className="text-zion-slate-light text-xs">AI Score</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-zion-cyan border-zion-cyan/30 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Service Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{service.availability}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                      <Globe className="w-4 h-4" />
                      <span>{service.location}</span>
                    </div>
                    {service.rating && (
                      <div className="flex items-center gap-2 text-zion-slate-light text-sm">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{service.rating} ({service.reviewCount} reviews)</span>
                      </div>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-zion-cyan hover:bg-zion-cyan-dark text-white text-sm">
                      Get Quote
                    </Button>
                    <Link to={`/comprehensive-services#${service.id}`}>
                      <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white text-sm">
                        Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories Overview */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-white text-3xl font-bold mb-4">Service Categories</h3>
            <p className="text-zion-slate-light text-lg">
              Explore our comprehensive range of technology solutions organized by category
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICE_CATEGORIES.map((category) => (
              <Link key={category.id} to={`/comprehensive-services?category=${category.id}`}>
                <div className="group bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 text-center hover:border-zion-cyan transition-all duration-300 hover:translate-y-[-5px]">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h4 className="text-white text-lg font-bold mb-2 group-hover:text-zion-cyan transition-colors">
                    {category.name}
                  </h4>
                  <p className="text-zion-slate-light text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="text-zion-cyan text-sm font-semibold">
                    {category.services.length} Services
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-white text-3xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light text-lg mb-8">
              Join hundreds of businesses that have already transformed their operations with our innovative solutions. 
              Get started today with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/comprehensive-services">
                <Button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-4 text-lg">
                  Explore All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}