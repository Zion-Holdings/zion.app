import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Cloud, 
  Database, 
  TrendingUp, 
  Mail,
  Phone,
  MapPin,
  Globe,
  Award,
  Users,
  Clock,
  ArrowRight,
  CheckCircle,
  DollarSign
} from "lucide-react";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import { Link as LinkIcon } from "lucide-react";
import Target from "lucide-react/dist/esm/icons/target";
import Rocket from "lucide-react/dist/esm/icons/rocket";
import { ALL_EXPANDED_SERVICES } from '@/data/expandedServices';

interface ServicePricing {
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  bestFor: string;
  category: string;
  icon: React.ReactNode;
  color: string;
}

const SERVICE_PRICING_DATA: ServicePricing[] = [
  // AI & Automation Services
  {
    name: "AI Process Automation Suite",
    description: "End-to-end automation solution for business processes using AI",
    price: "$8,999",
    duration: "2-4 weeks",
    features: [
      "RPA integration and custom AI model training",
      "Document processing automation",
      "Customer service automation",
      "Workflow management",
      "24/7 monitoring and support",
      "Custom integrations"
    ],
    bestFor: "Medium to large enterprises looking to automate complex business processes",
    category: "AI & Automation",
    icon: <Zap className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Enterprise AI Chatbot Platform",
    description: "Multi-language AI chatbot platform with advanced NLP capabilities",
    price: "$5,999",
    duration: "1-2 weeks",
    features: [
      "Multi-language support",
      "Sentiment analysis",
      "CRM integration",
      "Voice, text, and video interactions",
      "99.9% uptime guarantee",
      "Custom training and deployment"
    ],
    bestFor: "Businesses requiring intelligent customer support automation",
    category: "AI & Automation",
    icon: <Zap className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-600"
  },
  {
    name: "Predictive Analytics & Forecasting",
    description: "Advanced ML platform for sales forecasting and market analysis",
    price: "$7,499",
    duration: "3-5 weeks",
    features: [
      "Sales forecasting and demand planning",
      "Risk assessment and market trend analysis",
      "Real-time data processing",
      "Automated reporting",
      "Custom ML model development",
      "API access and integrations"
    ],
    bestFor: "Companies needing data-driven decision making and forecasting",
    category: "AI & Automation",
    icon: <Zap className="h-6 w-6" />,
    color: "from-purple-500 to-indigo-600"
  },

  // Cybersecurity Services
  {
    name: "Advanced Threat Detection & Response",
    description: "24/7 cybersecurity monitoring with AI-powered threat detection",
    price: "$12,999",
    duration: "Immediate",
    features: [
      "AI-powered threat detection",
      "Automated incident response",
      "Real-time security analytics",
      "Penetration testing",
      "Vulnerability assessment",
      "Compliance reporting"
    ],
    bestFor: "Organizations requiring enterprise-grade security protection",
    category: "Cybersecurity",
    icon: <Shield className="h-6 w-6" />,
    color: "from-red-500 to-pink-600"
  },
  {
    name: "GDPR & Compliance Management",
    description: "Comprehensive compliance management for multiple regulations",
    price: "$8,999",
    duration: "2-3 weeks",
    features: [
      "GDPR, HIPAA, SOC2, ISO27001 compliance",
      "Automated compliance monitoring",
      "Audit trails and reporting",
      "Data protection impact assessments",
      "Regulatory updates",
      "Training and documentation"
    ],
    bestFor: "Companies needing comprehensive compliance management",
    category: "Cybersecurity",
    icon: <Shield className="h-6 w-6" />,
    color: "from-red-500 to-pink-600"
  },
  {
    name: "Zero Trust Security Architecture",
    description: "Implementation of zero trust security model with identity verification",
    price: "$15,999",
    duration: "4-6 weeks",
    features: [
      "Identity verification and management",
      "Micro-segmentation",
      "Continuous monitoring",
      "Multi-factor authentication",
      "Privileged access management",
      "Security policy automation"
    ],
    bestFor: "Enterprises implementing modern security architectures",
    category: "Cybersecurity",
    icon: <Shield className="h-6 w-6" />,
    color: "from-red-500 to-pink-600"
  },

  // Cloud & DevOps Services
  {
    name: "Enterprise Cloud Migration",
    description: "End-to-end cloud migration for AWS, Azure, and Google Cloud",
    price: "$24,999",
    duration: "6-8 weeks",
    features: [
      "Multi-cloud migration support",
      "Cost optimization and performance tuning",
      "Security hardening",
      "Disaster recovery planning",
      "99.99% uptime guarantee",
      "Ongoing support and optimization"
    ],
    bestFor: "Large enterprises migrating to cloud infrastructure",
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "DevOps Automation & CI/CD",
    description: "Complete DevOps automation with GitOps and infrastructure as code",
    price: "$15,999",
    duration: "3-5 weeks",
    features: [
      "GitOps implementation",
      "Infrastructure as code (Terraform)",
      "Automated testing and deployment",
      "Kubernetes and Docker support",
      "Multi-cloud provider support",
      "Monitoring and alerting"
    ],
    bestFor: "Development teams implementing DevOps practices",
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-600"
  },
  {
    name: "Kubernetes Management",
    description: "Enterprise-grade Kubernetes management with monitoring and scaling",
    price: "$11,999",
    duration: "2-4 weeks",
    features: [
      "Automated scaling and load balancing",
      "Monitoring and troubleshooting",
      "Grafana dashboards",
      "Prometheus metrics",
      "Automated backup solutions",
      "Performance optimization"
    ],
    bestFor: "Organizations using Kubernetes in production",
    category: "Cloud & DevOps",
    icon: <Cloud className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-600"
  },

  // Data & Analytics Services
  {
    name: "Data Engineering & ETL Pipeline",
    description: "Scalable data engineering with Apache Kafka, Spark, and Airflow",
    price: "$18,999",
    duration: "4-6 weeks",
    features: [
      "Real-time data pipelines",
      "Data lakes and warehouses",
      "Data quality monitoring",
      "Governance and compliance",
      "Custom ETL development",
      "Performance optimization"
    ],
    bestFor: "Companies building data infrastructure and analytics platforms",
    category: "Data & Analytics",
    icon: <Database className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Business Intelligence & Visualization",
    description: "Interactive dashboards and reports with real-time data visualization",
    price: "$12,999",
    duration: "3-4 weeks",
    features: [
      "Interactive dashboards",
      "Real-time data visualization",
      "KPI tracking and reporting",
      "Tableau and Power BI integration",
      "Custom report development",
      "Automated reporting"
    ],
    bestFor: "Businesses needing executive dashboards and reporting",
    category: "Data & Analytics",
    icon: <Database className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600"
  },
  {
    name: "Data Governance & Privacy",
    description: "Comprehensive data governance framework with compliance monitoring",
    price: "$16,999",
    duration: "5-7 weeks",
    features: [
      "Data cataloging and lineage",
      "Privacy controls and monitoring",
      "GDPR and CCPA compliance",
      "Data quality management",
      "Audit and reporting",
      "Training and documentation"
    ],
    bestFor: "Organizations requiring data governance and privacy management",
    category: "Data & Analytics",
    icon: <Database className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600"
  },

  // Digital Transformation Services
  {
    name: "Digital Transformation Strategy",
    description: "End-to-end digital transformation consulting and implementation",
    price: "$34,999",
    duration: "8-12 weeks",
    features: [
      "Strategy development and planning",
      "Change management",
      "Process optimization",
      "Technology selection",
      "ROI measurement",
      "Ongoing support and guidance"
    ],
    bestFor: "Large enterprises undergoing digital transformation",
    category: "Digital Transformation",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-orange-500 to-yellow-600"
  },
  {
    name: "Legacy System Modernization",
    description: "Modernize legacy applications with microservices and cloud migration",
    price: "$28,999",
    duration: "6-10 weeks",
    features: [
      "Microservices architecture",
      "Cloud migration",
      "API integration",
      "Performance optimization",
      "Security updates",
      "User experience improvements"
    ],
    bestFor: "Companies with legacy systems requiring modernization",
    category: "Digital Transformation",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-orange-500 to-yellow-600"
  },
  {
    name: "Change Management & Training",
    description: "Comprehensive change management program for digital transformation",
    price: "$19,999",
    duration: "4-6 weeks",
    features: [
      "Stakeholder engagement",
      "Training programs",
      "Communication strategies",
      "Resistance management",
      "Success measurement",
      "Ongoing support"
    ],
    bestFor: "Organizations implementing change management programs",
    category: "Digital Transformation",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-orange-500 to-yellow-600"
  },

  // IoT & Edge Computing Services
  {
    name: "IoT Platform & Device Management",
    description: "Enterprise IoT platform with device provisioning and monitoring",
    price: "$24,999",
    duration: "6-8 weeks",
    features: [
      "Device provisioning and management",
      "Real-time data collection",
      "Edge computing capabilities",
      "Scalable architecture",
      "Security and compliance",
      "Analytics and reporting"
    ],
    bestFor: "Companies building IoT solutions and connected products",
    category: "IoT & Edge Computing",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-600"
  },
  {
    name: "Edge Computing & Analytics",
    description: "Edge computing solutions for real-time data processing",
    price: "$18,999",
    duration: "4-6 weeks",
    features: [
      "Edge AI models",
      "Local data storage",
      "Cloud integration",
      "Real-time analytics",
      "Distributed computing",
      "Performance optimization"
    ],
    bestFor: "Organizations requiring edge computing and real-time analytics",
    category: "IoT & Edge Computing",
    icon: <Cpu className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-600"
  },

  // Blockchain & Web3 Services
  {
    name: "Blockchain Development & Smart Contracts",
    description: "Custom blockchain development with DeFi protocols and NFT marketplaces",
    price: "$29,999",
    duration: "8-12 weeks",
    features: [
      "Custom blockchain development",
      "Smart contract creation",
      "DeFi protocol development",
      "NFT marketplace development",
      "Multi-blockchain support",
      "Security auditing"
    ],
    bestFor: "Companies building blockchain applications and DeFi solutions",
    category: "Blockchain & Web3",
    icon: <LinkIcon className="h-6 w-6" />,
    color: "from-teal-500 to-blue-600"
  },
  {
    name: "Web3 Integration & Wallet Solutions",
    description: "Web3 integration services with wallet connectivity and decentralized identity",
    price: "$19,999",
    duration: "5-7 weeks",
    features: [
      "Wallet connectivity",
      "Decentralized identity",
      "Blockchain data integration",
      "MetaMask integration",
      "WalletConnect support",
      "Custom wallet development"
    ],
    bestFor: "Applications requiring Web3 integration and wallet connectivity",
    category: "Blockchain & Web3",
    icon: <LinkIcon className="h-6 w-6" />,
    color: "from-teal-500 to-blue-600"
  }
];

const categories = [
  { value: "all", label: "All Services" },
  { value: "ai-automation", label: "AI & Automation" },
  { value: "cybersecurity", label: "Cybersecurity" },
  { value: "cloud-devops", label: "Cloud & DevOps" },
  { value: "data-analytics", label: "Data & Analytics" },
  { value: "digital-transformation", label: "Digital Transformation" },
  { value: "iot-edge", label: "IoT & Edge Computing" },
  { value: "blockchain-web3", label: "Blockchain & Web3" }
];

export default function ServicesPricingGuide() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredServices = SERVICE_PRICING_DATA.filter(service => 
    selectedCategory === "all" || 
    service.category.toLowerCase().includes(selectedCategory.toLowerCase())
  );

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      'AI & Automation': <Zap className="h-5 w-5" />,
      'Cybersecurity': <Shield className="h-5 w-5" />,
      'Cloud & DevOps': <Cloud className="h-5 w-5" />,
      'Data & Analytics': <Database className="h-5 w-5" />,
      'Digital Transformation': <TrendingUp className="h-5 w-5" />,
      'IoT & Edge Computing': <Cpu className="h-5 w-5" />,
      'Blockchain & Web3': <LinkIcon className="h-5 w-5" />
    };
    return icons[category] || <Zap className="h-5 w-5" />;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Services Pricing Guide
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto">
            Transparent pricing for all our professional technology services. 
            Find the perfect solution for your business needs with our comprehensive pricing guide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-zion-cyan hover:text-white">
              <DollarSign className="h-5 w-5 mr-2" />
              View Pricing
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Target className="h-5 w-5 mr-2" />
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-zion-blue-dark py-6 border-b border-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 text-zion-cyan">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <span className="font-medium">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <span className="font-medium">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Overview */}
      <section className="py-16 bg-gradient-to-b from-background to-zion-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Pricing Overview</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our services are priced competitively based on complexity, scope, and value delivered. 
              All prices include comprehensive support and ongoing maintenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center border-zion-blue-light">
              <CardHeader>
                <div className="bg-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-zion-blue">Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Market-competitive rates with transparent pricing and no hidden fees
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-zion-purple">
              <CardHeader>
                <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-zion-purple">Value Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  All services include comprehensive support and satisfaction guarantees
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-zion-cyan">
              <CardHeader>
                <div className="bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-zion-cyan">ROI Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Services designed to deliver measurable business value and ROI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Detailed Service Pricing</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive service offerings with detailed pricing, features, and benefits
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className="mb-2"
              >
                {category.label}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.name} className="overflow-hidden hover:shadow-lg transition-all duration-300 border-zion-blue-light hover:border-zion-purple">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-full w-12 h-12 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2">
                          {service.category}
                        </Badge>
                        <CardTitle className="text-lg">{service.name}</CardTitle>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-purple">{service.price}</div>
                      <div className="text-sm text-muted-foreground">{service.duration}</div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-zion-blue">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-zion-blue">Best For:</h4>
                    <p className="text-sm text-muted-foreground">{service.bestFor}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark">
                      <Mail className="h-4 w-4 mr-2" />
                      Get Quote
                    </Button>
                    <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Target className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No services found</h3>
              <p className="text-muted-foreground">
                Try selecting a different category or contact us for custom solutions
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Zion Section */}
      <div className="bg-zion-blue py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Why Choose Zion Technology Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Providers</h3>
              <p className="text-zion-slate-light">
                All service providers are vetted experts with proven track records and industry certifications
              </p>
            </div>
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Global Reach</h3>
              <p className="text-zion-slate-light">
                Services available worldwide with local expertise and 24/7 support across all time zones
              </p>
            </div>
            <div className="text-center">
              <div className="bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Quality Guaranteed</h3>
              <p className="text-zion-slate-light">
                Comprehensive quality assurance with satisfaction guarantees and ongoing support
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-zion-cyan mb-8 max-w-2xl mx-auto">
            Contact our team to discuss your specific needs and get a customized quote for your project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan hover:text-white">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
              <Mail className="h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}