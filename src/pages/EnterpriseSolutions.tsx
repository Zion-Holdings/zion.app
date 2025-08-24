import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Building, Users, Shield, Database, Cloud, Zap, Star, DollarSign, Clock, CheckCircle, ArrowRight, Phone, Mail, Globe, TrendingUp, Lightbulb, BarChart3, Lock, Network, Server, Monitor, Smartphone
} from 'lucide-react';

interface EnterpriseSolution {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  duration: string;
  features: string[];
  benefits: string[];
  targetIndustries: string[];
  icon: React.ReactNode;
  color: string;
  marketPrice: string;
  enterpriseScore: number;
  contactInfo: {
    phone: string;
    email: string;
    website: string;
  };
}

const enterpriseSolutions: EnterpriseSolution[] = [
  {
    id: "enterprise-ai",
    title: "Enterprise AI Platform",
    description: "Comprehensive AI platform for large organizations with multi-tenant architecture and enterprise-grade security.",
    category: "AI Platform",
    price: 50000,
    currency: "$",
    duration: "16-32 weeks",
    features: [
      "Multi-tenant architecture",
      "Enterprise security (SOC2, ISO27001)",
      "Scalable AI model deployment",
      "Advanced analytics dashboard",
      "API management and documentation"
    ],
    benefits: [
      "Centralized AI operations",
      "Reduced development time",
      "Improved data governance",
      "Cost optimization",
      "Competitive advantage"
    ],
    targetIndustries: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Technology"
    ],
    icon: <Database className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    marketPrice: "$75,000 - $150,000",
    enterpriseScore: 98,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cloud-migration",
    title: "Enterprise Cloud Migration",
    description: "End-to-end cloud migration services for large-scale enterprise applications and infrastructure.",
    category: "Cloud Services",
    price: 35000,
    currency: "$",
    duration: "12-24 weeks",
    features: [
      "Cloud readiness assessment",
      "Migration strategy planning",
      "Data migration and validation",
      "Performance optimization",
      "Post-migration support"
    ],
    benefits: [
      "Reduced infrastructure costs",
      "Improved scalability",
      "Enhanced security",
      "Better disaster recovery",
      "Operational efficiency"
    ],
    targetIndustries: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Education"
    ],
    icon: <Cloud className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    marketPrice: "$50,000 - $100,000",
    enterpriseScore: 95,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "cybersecurity-suite",
    title: "Enterprise Cybersecurity Suite",
    description: "Comprehensive cybersecurity solution including threat detection, prevention, and compliance management.",
    category: "Security",
    price: 45000,
    currency: "$",
    duration: "8-16 weeks",
    features: [
      "Advanced threat detection",
      "Security information management",
      "Compliance automation",
      "Incident response",
      "Security awareness training"
    ],
    benefits: [
      "Enhanced security posture",
      "Regulatory compliance",
      "Reduced security risks",
      "Customer trust",
      "Business continuity"
    ],
    targetIndustries: [
      "Financial Services",
      "Healthcare",
      "Government",
      "Technology",
      "Manufacturing"
    ],
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-pink-600",
    marketPrice: "$60,000 - $120,000",
    enterpriseScore: 97,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "data-governance",
    title: "Enterprise Data Governance",
    description: "Comprehensive data governance framework for managing data quality, privacy, and compliance across the organization.",
    category: "Data Management",
    price: 30000,
    currency: "$",
    duration: "12-20 weeks",
    features: [
      "Data quality management",
      "Privacy compliance (GDPR, CCPA)",
      "Data lineage tracking",
      "Master data management",
      "Data catalog and discovery"
    ],
    benefits: [
      "Improved data quality",
      "Regulatory compliance",
      "Better decision making",
      "Reduced data risks",
      "Operational efficiency"
    ],
    targetIndustries: [
      "Financial Services",
      "Healthcare",
      "Retail",
      "Manufacturing",
      "Technology"
    ],
    icon: <Database className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    marketPrice: "$40,000 - $80,000",
    enterpriseScore: 93,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation Consulting",
    description: "Strategic consulting and implementation services for enterprise digital transformation initiatives.",
    category: "Consulting",
    price: 75000,
    currency: "$",
    duration: "24-48 weeks",
    features: [
      "Digital maturity assessment",
      "Transformation roadmap",
      "Change management",
      "Technology implementation",
      "ROI measurement"
    ],
    benefits: [
      "Competitive advantage",
      "Operational efficiency",
      "Customer experience improvement",
      "Revenue growth",
      "Future readiness"
    ],
    targetIndustries: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Transportation"
    ],
    icon: <Lightbulb className="w-8 h-8" />,
    color: "from-orange-500 to-yellow-600",
    marketPrice: "$100,000 - $200,000",
    enterpriseScore: 96,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "enterprise-integration",
    title: "Enterprise System Integration",
    description: "Seamless integration of enterprise systems, applications, and data sources for unified operations.",
    category: "Integration",
    price: 25000,
    currency: "$",
    duration: "8-16 weeks",
    features: [
      "API development and management",
      "Data integration",
      "Workflow automation",
      "Real-time synchronization",
      "Integration monitoring"
    ],
    benefits: [
      "Unified data view",
      "Improved efficiency",
      "Reduced manual work",
      "Better decision making",
      "Cost savings"
    ],
    targetIndustries: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Logistics"
    ],
    icon: <Network className="w-8 h-8" />,
    color: "from-indigo-500 to-purple-600",
    marketPrice: "$35,000 - $70,000",
    enterpriseScore: 91,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "enterprise-mobile",
    title: "Enterprise Mobile Solutions",
    description: "Secure mobile applications and platforms for enterprise workforce productivity and customer engagement.",
    category: "Mobile Development",
    price: 40000,
    currency: "$",
    duration: "12-24 weeks",
    features: [
      "Cross-platform development",
      "Enterprise security",
      "Offline capabilities",
      "Integration with enterprise systems",
      "Mobile device management"
    ],
    benefits: [
      "Improved productivity",
      "Enhanced customer experience",
      "Better data access",
      "Reduced operational costs",
      "Competitive advantage"
    ],
    targetIndustries: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Field Services"
    ],
    icon: <Smartphone className="w-8 h-8" />,
    color: "from-teal-500 to-cyan-600",
    marketPrice: "$55,000 - $110,000",
    enterpriseScore: 94,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  },
  {
    id: "enterprise-analytics",
    title: "Enterprise Analytics Platform",
    description: "Comprehensive business intelligence and analytics platform for enterprise-wide data insights and reporting.",
    category: "Analytics",
    price: 35000,
    currency: "$",
    duration: "16-28 weeks",
    features: [
      "Real-time dashboards",
      "Advanced reporting",
      "Predictive analytics",
      "Data visualization",
      "Self-service analytics"
    ],
    benefits: [
      "Data-driven decisions",
      "Improved performance",
      "Cost optimization",
      "Competitive insights",
      "Operational efficiency"
    ],
    targetIndustries: [
      "Financial Services",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Technology"
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    color: "from-pink-500 to-rose-600",
    marketPrice: "$45,000 - $90,000",
    enterpriseScore: 92,
    contactInfo: {
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      website: "https://ziontechgroup.com"
    }
  }
];

export default function EnterpriseSolutions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Enterprise Solutions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your enterprise with scalable, secure, and innovative technology solutions. 
            We deliver enterprise-grade platforms that drive growth, efficiency, and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                Start Enterprise Journey
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get Enterprise Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enterprise Stats */}
      <section className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-slate-light">Enterprise Score</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">40%</div>
              <div className="text-zion-slate-light">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">8+</div>
              <div className="text-zion-slate-light">Solution Categories</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-slate-light">Enterprise Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-zion-blue py-8">
        <div className="container mx-auto px-4">
          <div className="bg-zion-blue-light rounded-lg p-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-zion-cyan">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Globe className="w-5 h-5" />
                <span>ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">Enterprise Solution Portfolio</h2>
            <p className="text-zion-slate text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of enterprise solutions, each designed to address complex business challenges 
              and deliver measurable value to large organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseSolutions.map((solution) => (
              <Card key={solution.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-lg flex items-center justify-center mb-4`}>
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {solution.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-zion-purple">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">Score: {solution.enterpriseScore}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-zion-slate">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Pricing */}
                  <div className="flex items-center justify-between p-3 bg-zion-blue-light rounded-lg">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-zion-cyan" />
                      <span className="text-sm text-zion-slate">Our Price:</span>
                    </div>
                    <span className="text-2xl font-bold text-zion-purple">
                      {solution.currency}{solution.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Market Comparison */}
                  <div className="text-center p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-sm text-amber-800">
                      <span className="font-medium">Market Price:</span> {solution.marketPrice}
                    </p>
                    <p className="text-xs text-amber-600 mt-1">
                      You save up to 40% with Zion Tech Group
                    </p>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-sm text-zion-slate">
                    <Clock className="w-4 h-4" />
                    <span>Duration: {solution.duration}</span>
                  </div>

                  {/* Target Industries */}
                  <div>
                    <h4 className="font-medium text-zion-blue mb-2 flex items-center gap-2">
                      <Building className="w-4 h-4" />
                      Target Industries
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {solution.targetIndustries.slice(0, 3).map((industry, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-medium text-zion-blue mb-2 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {solution.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-zion-slate flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-zion-cyan" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-medium text-zion-blue mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Business Benefits
                    </h4>
                    <ul className="space-y-1">
                      {solution.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-zion-slate flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-zion-purple rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-4 border-t border-zion-blue-light">
                    <div className="text-center space-y-2">
                      <p className="text-xs text-zion-slate">Contact us for enterprise solutions:</p>
                      <div className="flex flex-col gap-1 text-xs">
                        <a 
                          href={`tel:${solution.contactInfo.phone}`}
                          className="text-zion-cyan hover:text-zion-purple transition-colors"
                        >
                          {solution.contactInfo.phone}
                        </a>
                        <a 
                          href={`mailto:${solution.contactInfo.email}`}
                          className="text-zion-cyan hover:text-zion-purple transition-colors"
                        >
                          {solution.contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Link to="/contact" className="flex-1">
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        Get Started
                      </Button>
                    </Link>
                    <Link to="/request-quote" className="flex-1">
                      <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Success Stories */}
      <section className="bg-zion-blue py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Enterprise Success Stories</h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              See how leading enterprises are transforming their operations with our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zion-blue-light rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Fortune 500 Manufacturing</h3>
              <p className="text-zion-slate-light">
                Achieved 40% cost reduction and 60% efficiency improvement through our enterprise AI platform.
              </p>
            </div>
            
            <div className="bg-zion-blue-light rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Global Financial Institution</h3>
              <p className="text-zion-slate-light">
                Enhanced security posture and achieved 100% compliance with our cybersecurity suite.
              </p>
            </div>
            
            <div className="bg-zion-blue-light rounded-lg p-6 text-center">
              <div className="w-16 h-16 bg-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Healthcare Enterprise</h3>
              <p className="text-zion-slate-light">
                Successfully migrated to cloud with 99.9% uptime and 50% cost savings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-zion-purple to-zion-purple-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Join leading enterprises that have already transformed their operations with our innovative technology solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-slate-light">
                Start Enterprise Journey
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Get Free Enterprise Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}