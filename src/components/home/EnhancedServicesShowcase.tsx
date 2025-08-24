import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Zap, 
  Shield, 
  Globe, 
  TrendingUp, 
  ArrowUpRight, 
  Award, 
  Users, 
  Brain,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';

const featuredServices = [
  {
    id: "ai-ml-001",
    title: "AI-Powered Customer Service Bot",
    description: "Custom AI chatbot with NLP, sentiment analysis, and multi-language support",
    category: "AI & Machine Learning",
    price: "$3,500",
    rating: 4.9,
    reviewCount: 127,
    icon: <Brain className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-600",
    link: "/comprehensive-services",
    features: ["NLP Processing", "Multi-language", "CRM Integration", "24/7 Support"]
  },
  {
    id: "cybersecurity-001",
    title: "Comprehensive Security Audit",
    description: "Full security assessment with penetration testing and compliance review",
    category: "Cybersecurity",
    price: "$6,500",
    rating: 4.9,
    reviewCount: 178,
    icon: <Shield className="h-6 w-6" />,
    color: "from-red-500 to-pink-600",
    link: "/comprehensive-services",
    features: ["Vulnerability Scan", "Penetration Testing", "Compliance Review", "Security Roadmap"]
  },
  {
    id: "cloud-devops-001",
    title: "Multi-Cloud Migration",
    description: "End-to-end cloud migration with optimization across AWS, Azure, and GCP",
    category: "Cloud & DevOps",
    price: "$8,500",
    rating: 4.9,
    reviewCount: 203,
    icon: <Globe className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-600",
    link: "/comprehensive-services",
    features: ["Cloud Assessment", "Multi-cloud Design", "Security Setup", "24/7 Monitoring"]
  },
  {
    id: "data-analytics-001",
    title: "Big Data Pipeline & Analytics",
    description: "Enterprise-scale data processing with ML-powered insights and visualization",
    category: "Data & Analytics",
    price: "$15,000",
    rating: 4.9,
    reviewCount: 67,
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
    link: "/comprehensive-services",
    features: ["Data Ingestion", "Real-time Processing", "ML Analytics", "Scalable Infrastructure"]
  }
];

const serviceCategories = [
  {
    name: "AI & Machine Learning",
    description: "Intelligent automation and predictive analytics",
    icon: <Zap className="h-8 w-8" />,
    color: "from-purple-500 to-indigo-600",
    link: "/comprehensive-services",
    count: "12+ Services"
  },
  {
    name: "Cybersecurity",
    description: "Advanced protection and compliance solutions",
    icon: <Shield className="h-8 w-8" />,
    color: "from-red-500 to-pink-600",
    link: "/comprehensive-services",
    count: "8+ Services"
  },
  {
    name: "Cloud & DevOps",
    description: "Scalable infrastructure and automation",
    icon: <Globe className="h-8 w-8" />,
    color: "from-blue-500 to-cyan-600",
    link: "/comprehensive-services",
    count: "15+ Services"
  },
  {
    name: "Data & Analytics",
    description: "Business intelligence and insights",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/comprehensive-services",
    count: "10+ Services"
  }
];

export function EnhancedServicesShowcase() {
  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Comprehensive IT & AI Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our extensive range of micro SAAS services, enterprise IT solutions, and cutting-edge AI services. 
            From AI-powered chatbots to zero-trust security, we deliver innovative solutions that drive business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comprehensive-services">
              <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                Explore All Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Star className="h-5 w-5 mr-2" />
              View Pricing
            </Button>
          </div>
        </div>

        {/* Featured Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Featured Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service) => (
              <Card key={service.id} className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-3 bg-gradient-to-br ${service.color} rounded-full w-16 h-16 flex items-center justify-center`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan mb-2">
                    {service.category}
                  </Badge>
                  <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Price:</span>
                      <span className="text-white font-semibold">{service.price}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light text-sm">Rating:</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white text-sm">{service.rating}</span>
                        <span className="text-zion-slate-light text-xs ml-1">({service.reviewCount})</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <h4 className="text-white font-semibold text-sm mb-2">Key Features:</h4>
                      <div className="space-y-1">
                        {service.features.map((feature, index) => (
                          <div key={index} className="flex items-center text-xs text-zion-slate-light">
                            <CheckCircle className="h-3 w-3 text-zion-cyan mr-2 flex-shrink-0" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="pt-4">
                  <Link to={service.link} className="w-full">
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                      Learn More
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Categories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCategories.map((category) => (
              <Link key={category.name} to={category.link} className="group block">
                <Card className="bg-zion-blue-dark border-zion-blue-light hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl cursor-pointer">
                  <CardHeader className="text-center">
                    <div className={`mx-auto mb-4 p-3 bg-gradient-to-br ${category.color} rounded-full w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-white text-lg">{category.name}</CardTitle>
                    <CardDescription className="text-zion-slate-light text-sm">
                      {category.description}
                    </CardDescription>
                    <Badge variant="outline" className="border-zion-cyan text-zion-cyan mt-2">
                      {category.count}
                    </Badge>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-purple to-zion-purple-dark border-0 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-white text-3xl mb-4">
                Ready to Transform Your Business?
              </CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Our team of experts is ready to help you implement the perfect solution for your business needs.
                Get in touch today for a free consultation and quote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-zion-cyan font-semibold">Phone</div>
                  <div className="text-zion-slate-light">+1 302 464 0950</div>
                </div>
                <div className="text-center">
                  <div className="text-zion-cyan font-semibold">Email</div>
                  <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
                </div>
                <div className="text-center">
                  <div className="text-zion-cyan font-semibold">Website</div>
                  <div className="text-zion-slate-light">ziontechgroup.com</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link to="/comprehensive-services">
                <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan-light">
                  <ArrowUpRight className="h-5 w-5 mr-2" />
                  Explore All Services
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}