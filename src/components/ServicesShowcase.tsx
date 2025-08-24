import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Phone,
  Mail,
  MapPin,
  ExternalLink
} from "lucide-react";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import { Link } from "react-router-dom";

export function ServicesShowcase() {
  const keyFeatures = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Rapid Deployment",
      description: "Get your services up and running in days, not months. Our proven methodologies ensure quick implementation without compromising quality.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and regular security audits. Your data and systems are protected.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business. Our solutions scale from startup to enterprise with zero downtime and optimal performance.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Support",
      description: "24/7 support from certified professionals. Get help when you need it with dedicated account managers and priority support.",
      color: "from-orange-500 to-red-500"
    }
  ];

  const serviceHighlights = [
    {
      category: "AI & Machine Learning",
      services: [
        { name: "AI Chatbot Platform", price: "$299", features: ["Multi-language", "NLP", "Analytics"] },
        { name: "ML Model Optimization", price: "$1,499", features: ["Performance", "A/B Testing", "Monitoring"] },
        { name: "Content Moderation API", price: "$199", features: ["Real-time", "Multi-format", "Custom Rules"] }
      ],
      color: "from-purple-500 to-indigo-600"
    },
    {
      category: "Cloud & DevOps",
      services: [
        { name: "Kubernetes Management", price: "$799", features: ["Auto-scaling", "Monitoring", "24/7 Support"] },
        { name: "CI/CD Automation", price: "$599", features: ["Testing", "Deployment", "Rollback"] },
        { name: "Cost Optimization", price: "$399", features: ["Multi-cloud", "Analytics", "Alerts"] }
      ],
      color: "from-blue-500 to-cyan-600"
    },
    {
      category: "Cybersecurity",
      services: [
        { name: "Penetration Testing", price: "$2,499", features: ["Comprehensive", "Reporting", "Remediation"] },
        { name: "GDPR Compliance", price: "$1,899", features: ["Audit", "Implementation", "Monitoring"] },
        { name: "Zero Trust Framework", price: "$3,499", features: ["Architecture", "Training", "Policy"] }
      ],
      color: "from-red-500 to-pink-600"
    }
  ];

  const competitiveAdvantages = [
    {
      title: "Competitive Pricing",
      description: "Our micro SAAS model allows us to offer enterprise-quality services at startup-friendly prices. No hidden fees, transparent pricing.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Global Reach",
      description: "Serve customers worldwide with our distributed infrastructure and multi-region support. Local compliance and global scalability.",
      icon: <Globe className="h-6 w-6" />
    },
    {
      title: "Proven Track Record",
      description: "Trusted by hundreds of businesses worldwide. High customer satisfaction scores and successful implementations across industries.",
      icon: <Star className="h-6 w-6" />
    },
    {
      title: "Future-Proof Technology",
      description: "Built on cutting-edge technologies and best practices. Regular updates and innovation to keep you ahead of the competition.",
      icon: <CheckCircle className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Zion Tech Group Services?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We combine cutting-edge technology with proven business solutions to deliver exceptional results. 
            Our micro SAAS approach makes enterprise-grade services accessible to businesses of all sizes.
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {keyFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Service Categories
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {serviceHighlights.map((category, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="border-l-4 border-gray-200 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {service.price}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <Badge key={featureIndex} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitive Advantages */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Sets Us Apart
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-zion-purple rounded-full flex items-center justify-center text-white flex-shrink-0">
                  {advantage.icon}
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{advantage.title}</h4>
                  <p className="text-gray-600">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Comparison */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Transparent, Competitive Pricing
          </h3>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-zion-purple mb-4">Startup</h4>
                <div className="text-4xl font-bold mb-2">15% OFF</div>
                <p className="text-gray-600 mb-4">Perfect for early-stage companies</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Basic support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Standard SLA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Community access</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center border-l border-r border-gray-200 px-8">
                <h4 className="text-2xl font-bold text-zion-purple mb-4">Business</h4>
                <div className="text-4xl font-bold mb-2">5% OFF</div>
                <p className="text-gray-600 mb-4">Ideal for growing businesses</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Enhanced SLA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Account manager</span>
                  </li>
                </ul>
              </div>
              
              <div className="text-center">
                <h4 className="text-2xl font-bold text-zion-purple mb-4">Enterprise</h4>
                <div className="text-4xl font-bold mb-2">Custom</div>
                <p className="text-gray-600 mb-4">For large organizations</p>
                <ul className="text-left space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>24/7 support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Custom SLA</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>On-site consultation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-zion-blue to-zion-blue-dark rounded-2xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-zion-slate-light">
              Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
              Get a free consultation and custom quote today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Call +1 302 464 0950
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
                <Mail className="h-5 w-5 mr-2" />
                Email kleber@ziontechgroup.com
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/comprehensive-services">
                <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View All Services
                </Button>
              </Link>
              <Link to="/request-quote">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
                  Get Custom Quote
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 text-zion-cyan text-sm">
              <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
              <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}