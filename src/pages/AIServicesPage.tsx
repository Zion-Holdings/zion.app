import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Brain, 
  Zap, 
  TrendingUp, 
  Shield, 
  Users, 
  BarChart3, 
  Network, 
  Smartphone, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  ExternalLink, 
  Lightbulb, 
  Award, 
  Clock, 
  DollarSign, 
  PieChart 
} from 'lucide-react';
import { comprehensiveServices } from '@/data/comprehensiveServices';

const AI_SERVICES = comprehensiveServices.filter(service => 
  service.category.includes('AI') || 
  service.category.includes('Machine Learning') || 
  service.category.includes('Automation')
);

export default function AIServicesPage() {
  const [selectedTab, setSelectedTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center text-white">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-zion-cyan/20 rounded-full">
              <Brain className="h-16 w-16 text-zion-cyan" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            AI Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Transform your business with cutting-edge artificial intelligence solutions designed for the modern enterprise
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>
        </div>
      </div>

      {/* AI Statistics */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">95%</h3>
              <p className="text-zion-cyan-light">Increase in Efficiency</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">$2.9T</h3>
              <p className="text-zion-cyan-light">AI Market Value by 2025</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Users className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">87%</h3>
              <p className="text-zion-cyan-light">Customer Satisfaction</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Clock className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-3xl font-bold text-white mb-2">24/7</h3>
              <p className="text-zion-cyan-light">AI-Powered Operations</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-sm border-zion-cyan/30">
            <TabsTrigger value="overview" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              AI Services
            </TabsTrigger>
            <TabsTrigger value="use-cases" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Use Cases
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan data-[state=active]:bg-zion-cyan data-[state=active]:text-white">
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="mt-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Why AI is Critical for Your Business
                </h2>
                <p className="text-lg text-zion-cyan-light mb-6">
                  In today's competitive landscape, artificial intelligence isn't just a luxury—it's a necessity. 
                  Our AI solutions help businesses automate processes, gain insights from data, and create 
                  personalized customer experiences that drive growth and efficiency.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Process Automation</h3>
                      <p className="text-zion-cyan-light">Streamline operations and reduce manual tasks by up to 80%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Predictive Analytics</h3>
                      <p className="text-zion-cyan-light">Make data-driven decisions with advanced forecasting capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-white">Customer Intelligence</h3>
                      <p className="text-zion-cyan-light">Understand customer behavior and preferences in real-time</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">AI Capabilities</h3>
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Machine Learning</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">95%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Natural Language Processing</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">88%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Computer Vision</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">92%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zion-cyan-light">Predictive Analytics</span>
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-zion-blue-light rounded-full h-2">
                          <div className="bg-zion-cyan h-2 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <span className="text-zion-cyan font-semibold">90%</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* AI Services Tab */}
          <TabsContent value="services" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our AI Service Portfolio</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Comprehensive AI solutions designed to transform every aspect of your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AI_SERVICES.map((service) => (
                <AIServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          {/* Use Cases Tab */}
          <TabsContent value="use-cases" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Real-World AI Applications</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Discover how AI is transforming industries and creating new opportunities for growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UseCaseCard
                icon={<Brain className="h-8 w-8 text-zion-cyan" />}
                title="Customer Service Automation"
                description="AI-powered chatbots and virtual assistants that provide 24/7 customer support"
                examples={[
                  "Intelligent ticket routing",
                  "Automated responses to common queries",
                  "Sentiment analysis for customer satisfaction"
                ]}
              />
              <UseCaseCard
                icon={<BarChart3 className="h-8 w-8 text-zion-cyan" />}
                title="Predictive Analytics"
                description="Forecast trends and make data-driven decisions with machine learning models"
                examples={[
                  "Sales forecasting",
                  "Inventory optimization",
                  "Risk assessment and management"
                ]}
              />
              <UseCaseCard
                icon={<Shield className="h-8 w-8 text-zion-cyan" />}
                title="Fraud Detection"
                description="Advanced AI systems that identify and prevent fraudulent activities in real-time"
                examples={[
                  "Transaction monitoring",
                  "Behavioral analysis",
                  "Anomaly detection"
                ]}
              />
              <UseCaseCard
                icon={<Network className="h-8 w-8 text-zion-cyan" />}
                title="Process Optimization"
                description="Streamline operations and improve efficiency with intelligent automation"
                examples={[
                  "Workflow automation",
                  "Resource allocation",
                  "Performance monitoring"
                ]}
              />
              <UseCaseCard
                icon={<Smartphone className="h-8 w-8 text-zion-cyan" />}
                title="Personalization"
                description="Create tailored experiences for customers using AI-driven insights"
                examples={[
                  "Product recommendations",
                  "Content personalization",
                  "Dynamic pricing"
                ]}
              />
              <UseCaseCard
                icon={<Globe className="h-8 w-8 text-zion-cyan" />}
                title="Market Intelligence"
                description="Gain competitive advantages with AI-powered market analysis and insights"
                examples={[
                  "Competitor monitoring",
                  "Trend analysis",
                  "Opportunity identification"
                ]}
              />
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="mt-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">AI Service Pricing Plans</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Flexible pricing options designed to meet your business needs and budget
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter AI"
                price="$2,999"
                description="Perfect for small businesses starting their AI journey"
                features={[
                  "Basic AI consultation",
                  "Process automation setup",
                  "Data analysis tools",
                  "Email support",
                  "Monthly maintenance"
                ]}
                popular={false}
              />
              <PricingCard
                title="Professional AI"
                price="$7,999"
                description="Comprehensive AI solutions for growing businesses"
                features={[
                  "Advanced AI implementation",
                  "Custom machine learning models",
                  "Predictive analytics",
                  "Priority support",
                  "Weekly maintenance",
                  "Performance optimization"
                ]}
                popular={true}
              />
              <PricingCard
                title="Enterprise AI"
                price="$19,999"
                description="Full-scale AI transformation for large organizations"
                features={[
                  "End-to-end AI strategy",
                  "Custom AI development",
                  "24/7 monitoring",
                  "Dedicated support team",
                  "Continuous optimization",
                  "Scalability planning"
                ]}
                popular={false}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl text-zion-cyan-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI solutions can transform your business and drive unprecedented growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Schedule AI Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              Request AI Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
            Ready to start your AI transformation journey? Contact our experts today.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Phone className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <Mail className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
            <CardContent className="p-6">
              <MapPin className="h-8 w-8 mx-auto mb-3 text-zion-cyan" />
              <h3 className="font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// AI Service Card Component
function AIServiceCard({ service }: { service: any }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
            {service.category}
          </Badge>
          <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            {service.subcategory}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white mb-2">{service.title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-zion-cyan">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-white">{service.rating}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-zion-cyan-light">AI Score:</span>
            <div className="flex items-center gap-2">
              <div className="w-16 bg-zion-blue-light rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-zion-cyan to-zion-purple h-2 rounded-full" 
                  style={{ width: `${service.aiScore}%` }}
                ></div>
              </div>
              <span className="text-zion-cyan font-semibold">{service.aiScore}%</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className="flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white">
              Learn More
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Use Case Card Component
function UseCaseCard({ icon, title, description, examples }: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  examples: string[]; 
}) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">{icon}</div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {examples.map((example, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-zion-cyan-light text-sm">{example}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Pricing Card Component
function PricingCard({ title, price, description, features, popular }: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  popular: boolean; 
}) {
  return (
    <Card className={`relative bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 ${popular ? 'ring-2 ring-zion-cyan' : ''}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-zion-cyan text-white px-3 py-1">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <div className="text-4xl font-bold text-zion-cyan mb-2">{price}</div>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-white text-sm">{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}