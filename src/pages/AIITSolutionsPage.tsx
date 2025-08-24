import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  Star,
  TrendingUp,
  Users
} from "lucide-react";

const AI_SOLUTIONS = [
  {
    id: "ai-automation",
    title: "AI Process Automation",
    description: "Transform your business operations with intelligent automation",
    features: [
      "Document processing automation",
      "Customer service chatbots",
      "Workflow optimization",
      "RPA integration",
      "Custom model training"
    ],
    benefits: [
      "Reduce operational costs by 40-60%",
      "Improve accuracy by 95%+",
      "24/7 automated operations",
      "Scalable business processes"
    ],
    price: "From $2,499",
    delivery: "2-3 weeks",
    category: "AI & Automation"
  },
  {
    id: "ai-content",
    title: "AI Content Intelligence",
    description: "Advanced content analysis and optimization platform",
    features: [
      "NLP-powered content analysis",
      "SEO optimization recommendations",
      "Content performance prediction",
      "Automated content generation",
      "Sentiment analysis"
    ],
    benefits: [
      "Increase content engagement by 35%",
      "Improve SEO rankings",
      "Reduce content creation time by 50%",
      "Data-driven content strategy"
    ],
    price: "From $899",
    delivery: "Immediate",
    category: "AI & Content"
  },
  {
    id: "ai-analytics",
    title: "AI-Powered Predictive Analytics",
    description: "Enterprise-grade predictive analytics with machine learning",
    features: [
      "Sales forecasting models",
      "Customer behavior prediction",
      "Risk assessment algorithms",
      "Market trend analysis",
      "Real-time insights dashboard"
    ],
    benefits: [
      "Improve decision accuracy by 80%",
      "Reduce forecasting errors by 60%",
      "Identify new business opportunities",
      "Optimize resource allocation"
    ],
    price: "From $3,999",
    delivery: "3-4 weeks",
    category: "AI & Analytics"
  }
];

const IT_SOLUTIONS = [
  {
    id: "cybersecurity",
    title: "Zero Trust Security Implementation",
    description: "Complete zero trust security framework implementation",
    features: [
      "Identity verification systems",
      "Device trust scoring",
      "Network segmentation",
      "Continuous monitoring",
      "NIST & ISO compliance"
    ],
    benefits: [
      "Reduce security breaches by 90%",
      "Meet regulatory compliance",
      "Real-time threat detection",
      "Simplified security management"
    ],
    price: "From $12,999",
    delivery: "4-6 weeks",
    category: "Cybersecurity"
  },
  {
    id: "cloud-devops",
    title: "Multi-Cloud Orchestration",
    description: "Unified platform for managing workloads across clouds",
    features: [
      "AWS, Azure, Google Cloud support",
      "Cost optimization",
      "Performance monitoring",
      "Automated scaling",
      "Unified management console"
    ],
    benefits: [
      "Reduce cloud costs by 25-40%",
      "Improve performance by 30%",
      "Single pane of glass management",
      "Avoid vendor lock-in"
    ],
    price: "From $4,999",
    delivery: "2-3 weeks",
    category: "Cloud & DevOps"
  },
  {
    id: "data-analytics",
    title: "Real-Time Data Pipeline",
    description: "High-performance real-time data processing platform",
    features: [
      "Apache Kafka integration",
      "Real-time streaming analytics",
      "Event processing capabilities",
      "Data transformation tools",
      "Scalable architecture"
    ],
    benefits: [
      "Process data 10x faster",
      "Real-time business insights",
      "Scalable data infrastructure",
      "Reduced data latency"
    ],
    price: "From $8,999",
    delivery: "4-5 weeks",
    category: "Data & Analytics"
  }
];

const SPECIALIZED_SERVICES = [
  {
    id: "iot-edge",
    title: "IoT Platform & Edge Computing",
    description: "Complete IoT platform with edge computing capabilities",
    features: [
      "Device management",
      "Real-time data collection",
      "Edge AI processing",
      "Cloud integration",
      "Industrial IoT support"
    ],
    benefits: [
      "Reduce bandwidth costs by 60%",
      "Improve response time by 90%",
      "Enhanced data privacy",
      "Scalable IoT deployment"
    ],
    price: "From $15,999",
    delivery: "6-8 weeks",
    category: "IoT & Edge"
  },
  {
    id: "blockchain",
    title: "Enterprise Blockchain Platform",
    description: "Enterprise-grade blockchain with Web3 capabilities",
    features: [
      "Smart contract development",
      "DeFi integration",
      "NFT marketplace",
      "Cross-chain interoperability",
      "Regulatory compliance"
    ],
    benefits: [
      "Increase transparency",
      "Reduce transaction costs",
      "Enhanced security",
      "New revenue streams"
    ],
    price: "From $19,999",
    delivery: "8-10 weeks",
    category: "Blockchain & Web3"
  }
];

export default function AIITSolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI & IT Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan max-w-4xl mx-auto">
            Cutting-edge artificial intelligence and information technology solutions designed to accelerate your business transformation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              Request Proposal
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Banner */}
      <div className="bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:underline">
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="ai-solutions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ai-solutions" className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              AI Solutions
            </TabsTrigger>
            <TabsTrigger value="it-solutions" className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              IT Solutions
            </TabsTrigger>
            <TabsTrigger value="specialized" className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Specialized Services
            </TabsTrigger>
          </TabsList>

          {/* AI Solutions Tab */}
          <TabsContent value="ai-solutions" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Artificial Intelligence Solutions</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Leverage the power of AI to automate processes, gain insights, and transform your business operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {AI_SOLUTIONS.map((solution) => (
                <Card key={solution.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Brain className="h-6 w-6 text-zion-purple" />
                      <Badge variant="secondary">{solution.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Business Benefits:</h4>
                      <ul className="space-y-1">
                        {solution.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <TrendingUp className="h-4 w-4 text-blue-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-zion-purple">{solution.price}</span>
                        <Badge variant="outline">{solution.delivery}</Badge>
                      </div>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* IT Solutions Tab */}
          <TabsContent value="it-solutions" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Information Technology Solutions</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Robust IT infrastructure and security solutions to protect, optimize, and scale your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {IT_SOLUTIONS.map((solution) => (
                <Card key={solution.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-6 w-6 text-zion-purple" />
                      <Badge variant="secondary">{solution.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Business Benefits:</h4>
                      <ul className="space-y-1">
                        {solution.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <TrendingUp className="h-4 w-4 text-blue-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-zion-purple">{solution.price}</span>
                        <Badge variant="outline">{solution.delivery}</Badge>
                      </div>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Specialized Services Tab */}
          <TabsContent value="specialized" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Specialized Technology Services</h2>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
                Cutting-edge solutions in emerging technologies to give you a competitive advantage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {SPECIALIZED_SERVICES.map((solution) => (
                <Card key={solution.id} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                  <CardHeader className="pb-4">
                                       <div className="flex items-center gap-2 mb-2">
                     <Zap className="h-6 w-6 text-zion-purple" />
                     <Badge variant="secondary">{solution.category}</Badge>
                   </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                    <CardDescription>{solution.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Key Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-zinc-700 dark:text-zinc-300">Business Benefits:</h4>
                      <ul className="space-y-1">
                        {solution.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                            <TrendingUp className="h-4 w-4 text-blue-500" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-zion-purple">{solution.price}</span>
                        <Badge variant="outline">{solution.delivery}</Badge>
                      </div>
                      <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Why Choose Us Section */}
        <div className="mt-20 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
              We combine cutting-edge technology with proven business expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-zion-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-zion-cyan" />
              </div>
              <h3 className="font-semibold mb-2">Expert Team</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Certified professionals with 10+ years of experience
              </p>
            </div>
            
                         <div className="text-center">
               <div className="bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                 <Zap className="h-8 w-8 text-zion-purple" />
               </div>
               <h3 className="font-semibold mb-2">Custom Solutions</h3>
               <p className="text-sm text-zinc-600 dark:text-zinc-400">
                 Tailored to your specific business needs
               </p>
             </div>
            
            <div className="text-center">
              <div className="bg-zion-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-zion-blue" />
              </div>
              <h3 className="font-semibold mb-2">Proven Results</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                95%+ client satisfaction rate
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Rapid implementation and deployment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-zion-blue-dark to-zion-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-zion-cyan max-w-2xl mx-auto">
            Let's discuss how our AI and IT solutions can drive your business forward. 
            Get a free consultation and customized proposal today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90">
              <Phone className="h-5 w-5 mr-2" />
              Call: +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Mail className="h-5 w-5 mr-2" />
              Email: kleber@ziontechgroup.com
            </Button>
          </div>
          <div className="mt-8 text-zion-cyan">
            <p className="text-lg">
              Visit: <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">ziontechgroup.com</a>
            </p>
            <p className="text-sm mt-2">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}