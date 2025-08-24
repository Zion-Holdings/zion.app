import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  Brain, 
  Cloud, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Phone,
  Mail,
  ExternalLink
} from 'lucide-react';
import { CONTACT_INFO } from '@/data/comprehensiveServices';

export function ServicesBenefitsShowcase() {
  const serviceBenefits = [
    {
      category: "AI Services",
      icon: <Brain className="w-12 h-12" />,
      color: "from-purple-500 to-indigo-600",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions",
      benefits: [
        "Advanced AI algorithms and models",
        "Real-time data processing and insights",
        "Scalable machine learning infrastructure",
        "Custom AI model development",
        "Natural language processing capabilities",
        "Computer vision and image recognition",
        "Predictive analytics and forecasting",
        "AI-powered automation workflows"
      ],
      useCases: [
        "Customer service chatbots",
        "Predictive maintenance systems",
        "Fraud detection and prevention",
        "Content generation and optimization",
        "Recommendation engines",
        "Process automation",
        "Data analysis and insights",
        "Intelligent document processing"
      ],
      marketPosition: "Industry-leading AI solutions with proven ROI",
      startingPrice: "$299",
      implementationTime: "1-6 weeks",
      support: "24/7 expert support included"
    },
    {
      category: "IT Services",
      icon: <Cloud className="w-12 h-12" />,
      color: "from-cyan-500 to-blue-600",
      description: "Enterprise-grade IT infrastructure and consulting services for modern businesses",
      benefits: [
        "Cloud migration and optimization",
        "Cybersecurity and compliance",
        "DevOps automation and CI/CD",
        "Infrastructure as code",
        "24/7 monitoring and support",
        "Disaster recovery planning",
        "Performance optimization",
        "Scalable architecture design"
      ],
      useCases: [
        "Digital transformation initiatives",
        "Cloud infrastructure setup",
        "Security audits and compliance",
        "Application modernization",
        "Data center consolidation",
        "Business continuity planning",
        "Performance monitoring",
        "Cost optimization strategies"
      ],
      marketPosition: "Trusted IT partner for enterprise transformation",
      startingPrice: "$4,499",
      implementationTime: "2-6 weeks",
      support: "24/7 dedicated support team"
    },
    {
      category: "Micro SAAS",
      icon: <Zap className="w-12 h-12" />,
      color: "from-emerald-500 to-green-600",
      description: "Specialized software-as-a-service solutions designed for specific business needs",
      benefits: [
        "Ready-to-use business applications",
        "Cloud-based accessibility",
        "Automatic updates and maintenance",
        "Scalable user management",
        "API integrations",
        "Customizable workflows",
        "Real-time collaboration",
        "Mobile-first design"
      ],
      useCases: [
        "Inventory management",
        "Project management",
        "Customer support automation",
        "HR and employee management",
        "Financial analytics",
        "Supply chain optimization",
        "Marketing automation",
        "Sales pipeline management"
      ],
      marketPosition: "Affordable, scalable solutions for growing businesses",
      startingPrice: "$199",
      implementationTime: "Immediate - 3 weeks",
      support: "Business hours support with priority options"
    }
  ];

  const industryStats = [
    { metric: "95%", label: "Client Satisfaction Rate" },
    { metric: "24/7", label: "Support Availability" },
    { metric: "50+", label: "Countries Served" },
    { metric: "10+", label: "Years Experience" }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Discover the unique advantages and proven benefits that make our services the preferred choice 
            for businesses worldwide. From cutting-edge AI to enterprise IT solutions, we deliver results.
          </p>
        </div>

        {/* Industry Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {industryStats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.metric}</div>
              <div className="text-slate-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Service Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {serviceBenefits.map((service, index) => (
            <Card key={service.category} className="bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center pb-4">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-white mb-2">{service.category}</CardTitle>
                <CardDescription className="text-slate-300 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Key Benefits */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400" />
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-slate-300 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div>
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                    Common Use Cases
                  </h4>
                  <ul className="space-y-2">
                    {service.useCases.map((useCase, useCaseIndex) => (
                      <li key={useCaseIndex} className="text-slate-300 text-sm flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Market Position */}
                <div className="bg-slate-700/50 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Market Position</h4>
                  <p className="text-slate-300 text-sm mb-3">{service.marketPosition}</p>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400">Starting Price:</span>
                      <div className="text-cyan-400 font-semibold">{service.startingPrice}</div>
                    </div>
                    <div>
                      <span className="text-slate-400">Implementation:</span>
                      <div className="text-cyan-400 font-semibold">{service.implementationTime}</div>
                    </div>
                  </div>
                  <div className="mt-3 text-xs">
                    <span className="text-slate-400">Support:</span>
                    <div className="text-cyan-400 font-semibold">{service.support}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Explore {service.category}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Competitive Advantages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Enterprise Security</h4>
              <p className="text-slate-300 text-sm">SOC 2, ISO 27001, GDPR compliant with enterprise-grade security</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Expert Team</h4>
              <p className="text-slate-300 text-sm">Certified professionals with 10+ years of industry experience</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Global Reach</h4>
              <p className="text-slate-300 text-sm">Serving clients in 50+ countries with localized support</p>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-white font-semibold mb-2">Proven Results</h4>
              <p className="text-slate-300 text-sm">95% client satisfaction rate with measurable business outcomes</p>
            </div>
          </div>
        </div>

        {/* ROI and Success Metrics */}
        <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border border-cyan-500/30 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Proven ROI and Success Metrics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40%</div>
              <h4 className="text-white font-semibold mb-2">Cost Reduction</h4>
              <p className="text-slate-300 text-sm">Average cost savings through automation and optimization</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">3x</div>
              <h4 className="text-white font-semibold mb-2">Efficiency Gain</h4>
              <p className="text-slate-300 text-sm">Improved operational efficiency and productivity</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">6 Months</div>
              <h4 className="text-white font-semibold mb-2">ROI Timeline</h4>
              <p className="text-slate-300 text-sm">Typical time to achieve positive return on investment</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-700/50 border border-slate-600 rounded-2xl p-12">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Benefits?
          </h3>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
              <Phone className="w-4 h-4 mr-2" />
              {CONTACT_INFO.mobile}
            </Button>
            <Button size="lg" variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white">
              <Mail className="w-4 h-4 mr-2" />
              {CONTACT_INFO.email}
            </Button>
            <Button size="lg" variant="ghost" className="text-cyan-400 hover:text-white">
              <ExternalLink className="w-4 h-4 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}