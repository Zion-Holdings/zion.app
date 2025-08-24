import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Globe, 
  Shield, 
  Brain, 
  Cloud, 
  Database, 
  Lock, 
  Zap, 
  Users, 
  BarChart3, 
  Settings,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Star,
  CheckCircle
} from "lucide-react";

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  services: Service[];
}

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  pricing: {
    startingPrice: number;
    pricingModel: string;
    includes: string[];
  };
  benefits: string[];
  useCases: string[];
  rating: number;
  reviewCount: number;
  link: string;
}

const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "ai-ml",
    name: "AI & Machine Learning",
    description: "Cutting-edge artificial intelligence and machine learning solutions to transform your business",
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    services: [
      {
        id: "ai-development",
        title: "AI Development & Integration",
        description: "Full-stack AI development services to integrate advanced machine learning models into your existing business systems.",
        features: [
          "Custom ML model development",
          "AI integration with existing systems",
          "Real-time data processing",
          "Scalable AI infrastructure",
          "Model monitoring & optimization"
        ],
        pricing: {
          startingPrice: 5000,
          pricingModel: "Project-based",
          includes: [
            "AI strategy consultation",
            "Custom model development",
            "Integration & testing",
            "Training & documentation",
            "3 months support"
          ]
        },
        benefits: [
          "Automate complex decision-making",
          "Improve operational efficiency",
          "Gain competitive advantage",
          "Reduce manual errors",
          "Scalable AI solutions"
        ],
        useCases: [
          "Predictive analytics",
          "Process automation",
          "Customer behavior analysis",
          "Quality control systems",
          "Intelligent chatbots"
        ],
        rating: 4.9,
        reviewCount: 124,
        link: "https://ziontechgroup.com/services/ai-development"
      },
      {
        id: "nlp-solutions",
        title: "Natural Language Processing (NLP) Solutions",
        description: "Advanced NLP services including chatbots, sentiment analysis, document processing, and multilingual support systems.",
        features: [
          "Multi-language support",
          "Sentiment analysis",
          "Document classification",
          "Entity recognition",
          "Conversational AI"
        ],
        pricing: {
          startingPrice: 9500,
          pricingModel: "Project-based",
          includes: [
            "NLP model development",
            "API integration",
            "Training data preparation",
            "Performance optimization",
            "Ongoing maintenance"
          ]
        },
        benefits: [
          "Improve customer interactions",
          "Automate document processing",
          "Multi-language capabilities",
          "Real-time insights",
          "Cost-effective automation"
        ],
        useCases: [
          "Customer support chatbots",
          "Document analysis",
          "Social media monitoring",
          "Voice assistants",
          "Content moderation"
        ],
        rating: 4.7,
        reviewCount: 53,
        link: "https://ziontechgroup.com/services/nlp-solutions"
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    name: "Cloud & Infrastructure",
    description: "Scalable cloud solutions and modern infrastructure management for growing businesses",
    icon: <Cloud className="h-8 w-8 text-green-500" />,
    services: [
      {
        id: "cloud-management",
        title: "Cloud Infrastructure Management",
        description: "24/7 monitoring and management of your cloud infrastructure to ensure optimal performance, security, and cost efficiency.",
        features: [
          "24/7 infrastructure monitoring",
          "Cost optimization",
          "Security management",
          "Performance tuning",
          "Disaster recovery"
        ],
        pricing: {
          startingPrice: 3000,
          pricingModel: "Monthly subscription",
          includes: [
            "Infrastructure monitoring",
            "Security updates",
            "Performance optimization",
            "Cost analysis reports",
            "Emergency support"
          ]
        },
        benefits: [
          "Reduce operational costs",
          "Improve system reliability",
          "Enhanced security posture",
          "Faster issue resolution",
          "Scalable infrastructure"
        ],
        useCases: [
          "Multi-cloud environments",
          "High-availability systems",
          "Compliance requirements",
          "Cost optimization",
          "Performance monitoring"
        ],
        rating: 4.7,
        reviewCount: 92,
        link: "https://ziontechgroup.com/services/cloud-management"
      },
      {
        id: "edge-computing",
        title: "Edge Computing & 5G Optimization",
        description: "Edge computing infrastructure design and 5G network optimization for ultra-low latency applications and IoT deployments.",
        features: [
          "Edge node deployment",
          "5G network optimization",
          "Low-latency applications",
          "IoT integration",
          "Real-time processing"
        ],
        pricing: {
          startingPrice: 15000,
          pricingModel: "Project-based",
          includes: [
            "Edge infrastructure design",
            "5G optimization",
            "IoT integration",
            "Performance testing",
            "Deployment support"
          ]
        },
        benefits: [
          "Ultra-low latency",
          "Improved user experience",
          "Reduced bandwidth costs",
          "Enhanced security",
          "Scalable architecture"
        ],
        useCases: [
          "Autonomous vehicles",
          "Industrial IoT",
          "Real-time gaming",
          "Smart cities",
          "Healthcare monitoring"
        ],
        rating: 4.7,
        reviewCount: 28,
        link: "https://ziontechgroup.com/services/edge-computing"
      }
    ]
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity & Compliance",
    description: "Comprehensive security solutions and regulatory compliance management",
    icon: <Shield className="h-8 w-8 text-red-500" />,
    services: [
      {
        id: "security-assessment",
        title: "Cybersecurity Assessment & Protection",
        description: "Comprehensive security audits and implementation of robust protection systems against modern cyber threats.",
        features: [
          "Security vulnerability assessment",
          "Penetration testing",
          "Security architecture design",
          "Incident response planning",
          "Security awareness training"
        ],
        pricing: {
          startingPrice: 6000,
          pricingModel: "Project-based",
          includes: [
            "Security assessment",
            "Vulnerability report",
            "Remediation plan",
            "Security implementation",
            "Ongoing monitoring"
          ]
        },
        benefits: [
          "Protect sensitive data",
          "Meet compliance requirements",
          "Reduce security risks",
          "Build customer trust",
          "Prevent costly breaches"
        ],
        useCases: [
          "Financial services",
          "Healthcare organizations",
          "E-commerce platforms",
          "Government agencies",
          "Educational institutions"
        ],
        rating: 4.9,
        reviewCount: 103,
        link: "https://ziontechgroup.com/services/cybersecurity"
      },
      {
        id: "compliance-management",
        title: "Data Privacy & GDPR Compliance",
        description: "Comprehensive data privacy solutions including GDPR compliance, data governance, and privacy-by-design implementation.",
        features: [
          "GDPR compliance assessment",
          "Data governance framework",
          "Privacy impact assessments",
          "Data protection implementation",
          "Compliance monitoring"
        ],
        pricing: {
          startingPrice: 6500,
          pricingModel: "Project-based",
          includes: [
            "Compliance assessment",
            "Policy development",
            "Implementation support",
            "Staff training",
            "Audit preparation"
          ]
        },
        benefits: [
          "Avoid regulatory fines",
          "Build customer trust",
          "Improve data practices",
          "Reduce legal risks",
          "Competitive advantage"
        ],
        useCases: [
          "EU market access",
          "Healthcare compliance",
          "Financial regulations",
          "E-commerce privacy",
          "Employee data protection"
        ],
        rating: 4.6,
        reviewCount: 76,
        link: "https://ziontechgroup.com/services/compliance"
      }
    ]
  },
  {
    id: "business-automation",
    name: "Business Automation & RPA",
    description: "Intelligent automation solutions to streamline operations and improve efficiency",
    icon: <Zap className="h-8 w-8 text-yellow-500" />,
    services: [
      {
        id: "workflow-automation",
        title: "No-Code Workflow Automation Platform",
        description: "Drag-and-drop workflow automation tool that connects 500+ apps and services. Automate repetitive tasks, data synchronization, and business processes without coding.",
        features: [
          "Visual workflow designer",
          "500+ app integrations",
          "No-code automation",
          "Real-time monitoring",
          "Analytics dashboard"
        ],
        pricing: {
          startingPrice: 299,
          pricingModel: "Monthly subscription",
          includes: [
            "Unlimited workflows",
            "Standard integrations",
            "Email support",
            "Basic analytics",
            "Community forum"
          ]
        },
        benefits: [
          "Reduce manual work",
          "Improve accuracy",
          "Faster processing",
          "Cost savings",
          "Scalable automation"
        ],
        useCases: [
          "Lead management",
          "Invoice processing",
          "Customer onboarding",
          "Data synchronization",
          "Report generation"
        ],
        rating: 4.8,
        reviewCount: 156,
        link: "https://ziontechgroup.com/services/workflow-automation"
      },
      {
        id: "rpa-solutions",
        title: "Robotic Process Automation (RPA)",
        description: "Automate repetitive business processes with intelligent bots that can handle complex workflows and decision-making tasks.",
        features: [
          "Intelligent process bots",
          "Cognitive automation",
          "Process mining",
          "Exception handling",
          "Performance analytics"
        ],
        pricing: {
          startingPrice: 8000,
          pricingModel: "Project-based",
          includes: [
            "Process analysis",
            "Bot development",
            "Testing & deployment",
            "Training & documentation",
            "Ongoing support"
          ]
        },
        benefits: [
          "24/7 operation",
          "Error-free execution",
          "Scalable automation",
          "Cost reduction",
          "Improved compliance"
        ],
        useCases: [
          "Data entry automation",
          "Invoice processing",
          "Customer service",
          "HR operations",
          "Financial reporting"
        ],
        rating: 4.6,
        reviewCount: 67,
        link: "https://ziontechgroup.com/services/rpa"
      }
    ]
  },
  {
    id: "data-analytics",
    name: "Data Analytics & Business Intelligence",
    description: "Transform raw data into actionable insights for data-driven decision making",
    icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
    services: [
      {
        id: "big-data-analytics",
        title: "Big Data Analysis & Insights",
        description: "Transform your raw data into actionable business insights with our advanced analytics and visualization services.",
        features: [
          "Data processing & cleaning",
          "Advanced analytics",
          "Interactive dashboards",
          "Predictive modeling",
          "Real-time insights"
        ],
        pricing: {
          startingPrice: 4500,
          pricingModel: "Project-based",
          includes: [
            "Data analysis setup",
            "Dashboard development",
            "Insight generation",
            "Training & documentation",
            "Ongoing support"
          ]
        },
        benefits: [
          "Data-driven decisions",
          "Identify opportunities",
          "Improve efficiency",
          "Customer insights",
          "Competitive advantage"
        ],
        useCases: [
          "Customer behavior analysis",
          "Market trend analysis",
          "Operational optimization",
          "Risk assessment",
          "Performance tracking"
        ],
        rating: 4.8,
        reviewCount: 78,
        link: "https://ziontechgroup.com/services/big-data-analytics"
      },
      {
        id: "customer-analytics",
        title: "Real-Time Customer Analytics Dashboard",
        description: "Live customer behavior tracking with heatmaps, session recordings, and conversion funnel analysis. Optimize your website and increase conversion rates.",
        features: [
          "Real-time tracking",
          "Heatmap analysis",
          "Session recordings",
          "Conversion funnels",
          "A/B testing support"
        ],
        pricing: {
          startingPrice: 199,
          pricingModel: "Monthly subscription",
          includes: [
            "Unlimited tracking",
            "Advanced analytics",
            "Custom dashboards",
            "Email support",
            "API access"
          ]
        },
        benefits: [
          "Improve conversion rates",
          "Better user experience",
          "Data-driven decisions",
          "Reduce bounce rates",
          "Increase engagement"
        ],
        useCases: [
          "E-commerce optimization",
          "Website improvement",
          "User experience design",
          "Marketing optimization",
          "Conversion optimization"
        ],
        rating: 4.9,
        reviewCount: 89,
        link: "https://ziontechgroup.com/services/customer-analytics"
      }
    ]
  }
];

export default function ServicesShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Comprehensive IT & AI Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Discover our extensive range of micro SAAS services, IT solutions, and AI-powered tools designed to transform your business operations and drive growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <ExternalLink className="h-5 w-5 mr-2" />
              View All Services
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white dark:bg-zinc-800 py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <Phone className="h-6 w-6 text-zion-blue mb-2" />
              <h3 className="font-semibold">Phone</h3>
              <p className="text-zinc-600 dark:text-zinc-400">+1 302 464 0950</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-6 w-6 text-zion-blue mb-2" />
              <h3 className="font-semibold">Email</h3>
              <p className="text-zinc-600 dark:text-zinc-400">kleber@ziontechgroup.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-6 w-6 text-zion-blue mb-2" />
              <h3 className="font-semibold">Address</h3>
              <p className="text-zinc-600 dark:text-zinc-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Categories */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Service Categories
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From cutting-edge AI solutions to essential business automation tools, we offer comprehensive services to meet all your technology needs.
          </p>
        </div>

        {SERVICE_CATEGORIES.map((category) => (
          <div key={category.id} className="mb-20">
            <div className="flex items-center mb-8">
              {category.icon}
              <div className="ml-4">
                <h3 className="text-2xl md:text-3xl font-bold">{category.name}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{category.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="ml-1 text-sm font-medium">{service.rating}</span>
                        <span className="ml-1 text-sm text-zinc-500">({service.reviewCount})</span>
                      </div>
                    </div>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div>
                      <h4 className="font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Pricing</h4>
                      <div className="bg-zinc-50 dark:bg-zinc-700 p-4 rounded-lg">
                        <div className="flex items-baseline mb-2">
                          <span className="text-2xl font-bold text-zion-blue">${service.pricing.startingPrice.toLocaleString()}</span>
                          <span className="ml-2 text-zinc-600 dark:text-zinc-400">starting</span>
                        </div>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{service.pricing.pricingModel}</p>
                        <ul className="space-y-1">
                          {service.pricing.includes.map((item, index) => (
                            <li key={index} className="flex items-center text-sm">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Benefits</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="font-semibold mb-3 text-zinc-800 dark:text-zinc-200">Use Cases</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.useCases.map((useCase, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {useCase}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button className="flex-1 bg-zion-blue hover:bg-zion-blue-dark">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                      <Button variant="outline" className="flex-1">
                        <Phone className="h-4 w-4 mr-2" />
                        Get Quote
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let our expert team help you choose the right solutions and implement them successfully. Get started with a free consultation today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Schedule Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="h-5 w-5 mr-2" />
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}