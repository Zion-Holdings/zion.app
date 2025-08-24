import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SERVICE_CATEGORIES } from '@/data/enhancedServices';
import { 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  BarChart3,
  ArrowUpRight,
  Heart,
  DollarSign
} from 'lucide-react';

const getCategoryIcon = (icon: string) => {
  return <span className="text-3xl">{icon}</span>;
};

const getCategoryColor = (categoryId: string) => {
  const colors = {
    'ai-ml': 'from-purple-500 to-indigo-600',
    'cybersecurity': 'from-red-500 to-pink-600',
    'cloud-devops': 'from-blue-500 to-cyan-600',
    'business-intelligence': 'from-green-500 to-emerald-600',
    'digital-transformation': 'from-orange-500 to-yellow-600',
    'healthcare-it': 'from-teal-500 to-blue-600',
    'financial-services': 'from-amber-500 to-orange-600'
  };
  return colors[categoryId as keyof typeof colors] || 'from-gray-500 to-gray-600';
};

export function EnhancedServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT & AI Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our extensive range of innovative technology services designed to transform your business. 
            From AI automation to cybersecurity, we deliver enterprise-grade solutions at competitive prices.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/enhanced-services">
              <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {SERVICE_CATEGORIES.map((category) => (
            <Link key={category.id} to={`/enhanced-services?category=${category.id}`}>
              <Card className="h-full bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 hover:translate-y-[-5px] transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${getCategoryColor(category.id)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white text-2xl">
                      {getCategoryIcon(category.icon)}
                    </div>
                  </div>
                  <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-center">
                    <Badge variant="secondary" className="text-xs">
                      {category.services.length} Services
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Featured Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Featured Solutions
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* AI Customer Service */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-purple-600" />
                  <Badge variant="secondary" className="text-xs">AI & ML</Badge>
                </div>
                <CardTitle className="text-lg">AI-Powered Customer Service</CardTitle>
                <CardDescription>
                  Intelligent chatbots handling 80% of inquiries automatically
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$2,500</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>4.9 (156 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>AI Score: 95</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Zero-Trust Security */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <Badge variant="secondary" className="text-xs">Cybersecurity</Badge>
                </div>
                <CardTitle className="text-lg">Zero-Trust Security</CardTitle>
                <CardDescription>
                  Comprehensive security framework with 90% breach risk reduction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$8,000</span>
                  <span className="text-sm text-gray-500">project</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>4.9 (134 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>AI Score: 96</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Multi-Cloud Management */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Cloud className="w-5 h-5 text-blue-600" />
                  <Badge variant="secondary" className="text-xs">Cloud & DevOps</Badge>
                </div>
                <CardTitle className="text-lg">Multi-Cloud Management</CardTitle>
                <CardDescription>
                  Optimize costs by 20-40% across AWS, Azure, and Google Cloud
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$5,000</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>4.7 (112 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>AI Score: 91</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Industry Solutions */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Industry-Specific Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Healthcare IT */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Heart className="w-5 h-5 text-teal-600" />
                  <Badge variant="secondary" className="text-xs">Healthcare</Badge>
                </div>
                <CardTitle className="text-lg">Healthcare IT Compliance</CardTitle>
                <CardDescription>
                  HIPAA compliance, medical device security, and EHR integration
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$6,000</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>4.9 (89 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>AI Score: 95</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Financial Services */}
            <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-amber-600" />
                  <Badge variant="secondary" className="text-xs">Financial</Badge>
                </div>
                <CardTitle className="text-lg">Financial Services Tech</CardTitle>
                <CardDescription>
                  Regulatory compliance, fraud detection, and digital banking platforms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">$8,000</span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
                <div className="text-sm text-gray-600">
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span>4.8 (67 reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span>AI Score: 93</span>
                  </div>
                </div>
                <Button className="w-full" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-zion-purple rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Our expert team is ready to help you implement the right technology solutions. 
              Get started with a free consultation and discover how we can accelerate your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100">
                  <Zap className="w-5 h-5 mr-2" />
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
                  <ArrowUpRight className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}