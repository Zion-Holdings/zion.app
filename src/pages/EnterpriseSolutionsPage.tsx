import React, { useState } from 'react';
import { comprehensiveServices } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Building, 
  Users, 
  Shield, 
  Database, 
  Cloud, 
  Globe,
  Star,
  CheckCircle,
  TrendingUp,
  ArrowRight,
  Phone,
  Mail,
  Circle,
  Zap,
  Monitor,
  Lock,
  BarChart3,
  Zap as Rocket,
  Volume2,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const enterpriseServices = comprehensiveServices.filter(service => 
  service.category === 'IT Consulting & Strategy' || 
  service.category === 'Cloud & DevOps' ||
  service.category === 'Cybersecurity'
);

const enterpriseSolutions = [
  {
    icon: <Building className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Complete business transformation with modern technology infrastructure",
    features: ["Process Optimization", "Technology Modernization", "Change Management", "ROI Analysis"],
    benefits: ["Increased Efficiency", "Cost Reduction", "Competitive Advantage", "Future-Proof Operations"]
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Enterprise Cloud Solutions",
    description: "Scalable cloud infrastructure for enterprise workloads and applications",
    features: ["Multi-cloud Strategy", "Hybrid Cloud", "Cloud Security", "Cost Optimization"],
    benefits: ["Scalability", "Cost Efficiency", "Global Reach", "Disaster Recovery"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Enterprise Security",
    description: "Comprehensive security solutions for enterprise environments",
    features: ["Zero Trust Architecture", "Threat Intelligence", "Compliance Management", "Incident Response"],
    benefits: ["Risk Mitigation", "Regulatory Compliance", "Business Continuity", "Customer Trust"]
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data & Analytics Platform",
    description: "Enterprise-grade data infrastructure and analytics capabilities",
    features: ["Data Warehouse", "Real-time Analytics", "Business Intelligence", "Data Governance"],
    benefits: ["Data-Driven Decisions", "Operational Insights", "Customer Intelligence", "Performance Optimization"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Enterprise Integration",
    description: "Seamless integration of legacy and modern systems",
    features: ["API Management", "Data Integration", "System Migration", "Legacy Modernization"],
    benefits: ["Operational Efficiency", "Data Consistency", "Reduced Complexity", "Improved User Experience"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global IT Support",
    description: "24/7 global IT support and managed services",
    features: ["Global Coverage", "24/7 Support", "Proactive Monitoring", "Rapid Response"],
    benefits: ["Business Continuity", "Reduced Downtime", "Global Operations", "Cost Predictability"]
  }
];

const enterpriseIndustries = [
  {
    name: "Financial Services",
    description: "Banking, insurance, and fintech solutions",
    icon: "🏦",
    challenges: ["Regulatory Compliance", "Security Threats", "Legacy Systems", "Digital Innovation"],
    solutions: ["Compliance Automation", "Advanced Security", "Cloud Migration", "API Banking"]
  },
  {
    name: "Healthcare",
    description: "Digital health and medical technology solutions",
    icon: "🏥",
    challenges: ["Data Privacy", "Interoperability", "Patient Experience", "Operational Efficiency"],
    solutions: ["HIPAA Compliance", "System Integration", "Patient Portals", "Process Automation"]
  },
  {
    name: "Manufacturing",
    description: "Industry 4.0 and smart manufacturing",
    icon: "🏭",
    challenges: ["Supply Chain", "Quality Control", "Predictive Maintenance", "Digital Twins"],
    solutions: ["IoT Integration", "AI Analytics", "Predictive Maintenance", "Digital Transformation"]
  },
  {
    name: "Retail & E-commerce",
    description: "Omnichannel retail and digital commerce",
    icon: "🛍️",
    challenges: ["Customer Experience", "Inventory Management", "Omnichannel Integration", "Data Analytics"],
    solutions: ["Personalization", "Real-time Inventory", "Unified Commerce", "Customer Insights"]
  },
  {
    name: "Energy & Utilities",
    description: "Smart grid and energy management",
    icon: "⚡",
    challenges: ["Grid Modernization", "Renewable Integration", "Customer Engagement", "Operational Efficiency"],
    solutions: ["Smart Grid", "Energy Analytics", "Customer Portals", "Process Optimization"]
  },
  {
    name: "Transportation & Logistics",
    description: "Supply chain and mobility solutions",
    icon: "🚚",
    challenges: ["Route Optimization", "Real-time Tracking", "Supply Chain Visibility", "Sustainability"],
    solutions: ["AI Routing", "IoT Tracking", "Blockchain", "Green Logistics"]
  }
];

const enterpriseFeatures = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2, ISO 27001, and GDPR compliance"
  },
  {
    icon: <Monitor className="w-6 h-6" />,
    title: "Scalable Architecture",
    description: "Built to handle enterprise workloads and scale with your business"
  },
  {
    icon: <Volume2 className="w-6 h-6" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and monitoring"
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Performance Analytics",
    description: "Comprehensive monitoring and performance optimization"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Deployment",
    description: "Deploy anywhere with multi-region and multi-cloud support"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Rapid Implementation",
    description: "Quick deployment with minimal business disruption"
  }
];

export default function EnterpriseSolutionsPage() {
  const [selectedTab, setSelectedTab] = useState('solutions');

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-6">
            <Building className="w-8 h-8 text-zion-cyan mr-3" />
            <h1 className="text-4xl md:text-6xl font-bold text-white">
              Enterprise Solutions
            </h1>
          </div>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your enterprise with scalable, secure, and innovative technology solutions. 
            From digital transformation to global IT support, we deliver enterprise-grade results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/comprehensive-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Circle className="w-5 h-5 mr-2" />
                Explore Solutions
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Overview */}
      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions designed for enterprise-scale operations and growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enterpriseSolutions.map((solution, index) => (
              <Card key={index} className="border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-full flex items-center justify-center text-zion-cyan mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-lg text-zion-blue">{solution.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features:</h4>
                    <div className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-zion-slate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-zion-blue mb-2">Business Benefits:</h4>
                    <div className="space-y-1">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <TrendingUp className="w-3 h-3 text-blue-500" />
                          <span className="text-xs text-zion-slate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Services Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-zion-blue mb-4">
                Enterprise Services Portfolio
              </h2>
              <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
                Comprehensive services designed for enterprise-scale operations and digital transformation
              </p>
            </div>
            
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="solutions" className="text-zion-blue">Solutions</TabsTrigger>
              <TabsTrigger value="industries" className="text-zion-blue">Industries</TabsTrigger>
              <TabsTrigger value="features" className="text-zion-blue">Features</TabsTrigger>
            </TabsList>

            <TabsContent value="solutions" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enterpriseServices.map((service) => (
                  <Card key={service.id} className="h-full border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {service.subcategory}
                        </Badge>
                        {service.featured && (
                          <Badge className="bg-zion-purple text-white text-xs">
                            <Star className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg text-zion-blue line-clamp-2">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-zion-slate-light line-clamp-3">
                        {service.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pb-3">
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 3).map((feature, index) => (
                            <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-zion-blue">
                            {service.currency}{service.price.toLocaleString()}
                          </span>
                          <Badge variant="outline" className="text-xs">
                            {service.pricingModel}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm text-zion-slate-light">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span>{service.rating}</span>
                          </div>
                          <div className="text-xs text-zion-slate-light">
                            AI Score: {service.aiScore}
                          </div>
                        </div>
                      </div>
                    </CardContent>

                    <CardFooter className="pt-0">
                      <div className="w-full space-y-3">
                        <div className="flex gap-2">
                          <Button 
                            size="sm" 
                            className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white"
                            onClick={() => window.open(`tel:${service.contactInfo.phone}`)}
                          >
                            <Phone className="w-3 h-3 mr-1" />
                            Call Now
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 border-zion-blue-light text-zion-blue hover:bg-zion-blue/10"
                            onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
                          >
                            <Mail className="w-3 h-3 mr-1" />
                            Email
                          </Button>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="industries" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enterpriseIndustries.map((industry, index) => (
                  <Card key={index} className="border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <div className="text-4xl mb-4">{industry.icon}</div>
                      <CardTitle className="text-lg text-zion-blue">{industry.name}</CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {industry.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-zion-blue mb-2">Key Challenges:</h4>
                        <div className="space-y-1">
                          {industry.challenges.map((challenge, challengeIndex) => (
                            <div key={challengeIndex} className="flex items-center gap-2">
                              <Circle className="w-3 h-3 text-red-500" />
                              <span className="text-xs text-zion-slate">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-zion-blue mb-2">Our Solutions:</h4>
                        <div className="space-y-1">
                          {industry.solutions.map((solution, solutionIndex) => (
                            <div key={solutionIndex} className="flex items-center gap-2">
                              <Zap className="w-3 h-3 text-green-500" />
                              <span className="text-xs text-zion-slate">{solution}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {enterpriseFeatures.map((feature, index) => (
                  <Card key={index} className="border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg">
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-full flex items-center justify-center text-zion-cyan mb-4">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-lg text-zion-blue">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-zion-slate-light text-sm text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Enterprise Process */}
      <section className="py-16 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              Enterprise Implementation Process
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful enterprise transformation with minimal disruption
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discovery & Assessment",
                description: "Comprehensive analysis of current systems and business requirements",
                icon: "🔍",
                duration: "1-2 weeks"
              },
              {
                step: "02",
                title: "Strategy & Planning",
                description: "Detailed roadmap and implementation strategy aligned with business goals",
                icon: "📋",
                duration: "2-3 weeks"
              },
              {
                step: "03",
                title: "Implementation",
                description: "Phased deployment with continuous testing and validation",
                icon: "⚡",
                duration: "4-12 weeks"
              },
              {
                step: "04",
                title: "Optimization & Support",
                description: "Ongoing optimization, monitoring, and support services",
                icon: "🚀",
                duration: "Ongoing"
              }
            ].map((phase, index) => (
              <Card key={index} className="text-center border-zion-blue-light">
                <CardHeader>
                  <div className="text-4xl mb-4">{phase.icon}</div>
                  <div className="text-sm text-zion-purple font-bold mb-2">{phase.step}</div>
                  <CardTitle className="text-lg text-zion-blue">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light text-sm mb-3">{phase.description}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-zion-slate">
                    <Clock className="w-3 h-3" />
                    <span>{phase.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Let our enterprise experts help you navigate digital transformation and achieve your business objectives. 
            Schedule a consultation to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <div className="flex items-center justify-center gap-2 text-zion-cyan">
              <Phone className="w-5 h-5" />
              <span className="text-lg font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zion-cyan">
              <Mail className="w-5 h-5" />
              <span className="text-lg font-semibold">kleber@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white">
                <Circle className="w-5 h-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/comprehensive-services">
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Building className="w-5 h-5 mr-2" />
                Explore Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}