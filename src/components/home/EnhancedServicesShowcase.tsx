import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  ArrowRight, 
  Star, 
  Users, 
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  Globe
} from 'lucide-react';

export function EnhancedServicesShowcase() {
  const featuredServices = [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence. Chatbots, content generation, and predictive analytics.",
      icon: <Brain className="w-8 h-8 text-zion-cyan" />,
      link: "/ai-services",
      category: "AI Services",
      price: "From $800/month",
      features: ["Chatbot Development", "Content Generation", "Data Analytics"],
      benefits: ["40% Cost Reduction", "24/7 Availability", "3x Productivity Boost"]
    },
    {
      title: "Micro SAAS Platforms",
      description: "Powerful, affordable software solutions for modern businesses. Inventory management, project management, and CRM systems.",
      icon: <Cloud className="w-8 h-8 text-zion-cyan" />,
      link: "/micro-saas",
      category: "Micro SAAS",
      price: "From $150/month",
      features: ["Cloud-Based", "Mobile Apps", "Analytics Dashboard"],
      benefits: ["99.9% Uptime", "5min Setup", "24/7 Support"]
    },
    {
      title: "IT Infrastructure Services",
      description: "Expert cloud migration, cybersecurity, and DevOps automation. Modernize your technology stack with proven solutions.",
      icon: <Shield className="w-8 h-8 text-zion-cyan" />,
      link: "/comprehensive-services",
      category: "IT Services",
      price: "From $3,000",
      features: ["Cloud Migration", "Security Audits", "DevOps Automation"],
      benefits: ["40% Cost Savings", "Enhanced Security", "Faster Deployment"]
    }
  ];

  return (
    <section className="py-20 bg-zion-blue">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Discover our complete ecosystem of AI services, micro SAAS platforms, IT solutions, and digital transformation consulting. 
            All services include direct contact with our expert team.
          </p>
          
          {/* Contact Info Banner */}
          <div className="bg-zion-blue-dark rounded-lg p-6 mb-8 inline-block">
            <div className="flex flex-col md:flex-row items-center gap-6 text-white">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-zion-cyan" />
                <span className="font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-zion-cyan" />
                <span className="font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-zion-cyan" />
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" 
                   className="font-medium hover:text-zion-cyan transition-colors">
                  ziontechgroup.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light bg-zion-blue-dark">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4">
                  {service.icon}
                </div>
                <Badge className="mx-auto mb-3 bg-zion-purple text-white">
                  {service.category}
                </Badge>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Pricing */}
                <div className="text-center p-4 bg-zion-blue-light rounded-lg">
                  <div className="text-2xl font-bold text-zion-cyan mb-1">
                    {service.price}
                  </div>
                  <div className="text-sm text-zion-slate-light">
                    Professional solutions with proven ROI
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4" />
                    Key Features
                  </h4>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Business Benefits
                  </h4>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zion-slate-light">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                  <Link to={service.link}>
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
                      Explore {service.category}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">
            More Services Available
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/it-onsite-services">
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Globe className="h-4 w-4 mr-2" />
                Global IT Onsite Services
              </Button>
            </Link>
            <Link to="/comprehensive-services">
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                <Users className="h-4 w-4 mr-2" />
                View All Services
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Mail className="h-4 w-4 mr-2" />
                Request Custom Quote
              </Button>
            </Link>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-zion-blue-dark rounded-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h3>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              We combine cutting-edge technology with deep business understanding to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Proven Track Record</h4>
              <p className="text-sm text-zion-slate-light">95% customer satisfaction rate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Expert Team</h4>
              <p className="text-sm text-zion-slate-light">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Fast Implementation</h4>
              <p className="text-sm text-zion-slate-light">Quick deployment with minimal disruption</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Measurable ROI</h4>
              <p className="text-sm text-zion-slate-light">Documented business impact and results</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Contact our expert team for a personalized consultation and discover how our solutions can transform your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Mail className="w-4 h-4 mr-2" />
                Get Custom Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}