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
import { ENHANCED_SERVICES } from '@/data/enhancedServices';

// Filter AI services
const AI_SERVICES = ENHANCED_SERVICES.filter(service => 
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
          <div className="flex items-center justify-center mb-6">
            <Brain className="h-16 w-16 text-zion-cyan mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              AI Services
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-zion-cyan-light max-w-4xl mx-auto">
            Transform Your Business with Cutting-Edge Artificial Intelligence Solutions
          </p>
          <p className="text-lg text-zion-cyan-light mb-12 max-w-3xl mx-auto">
            From process automation to predictive analytics, our AI services deliver measurable results and competitive advantages.
          </p>
          
          {/* Contact CTA */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Mail className="mr-2 h-5 w-5" />
              kleber@ziontechgroup.com
            </Button>
          </div>

          {/* AI Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-zion-cyan-light">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-zion-cyan-light">Operation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">80%</div>
              <div className="text-zion-cyan-light">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-zion-cyan mb-2">300%</div>
              <div className="text-zion-cyan-light">ROI Average</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="overview" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Services
            </TabsTrigger>
            <TabsTrigger value="use-cases" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Use Cases
            </TabsTrigger>
            <TabsTrigger value="pricing" className="text-zion-cyan-light data-[state=active]:text-white data-[state=active]:bg-zion-purple">
              Pricing
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Why AI Matters for Your Business</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Artificial Intelligence is no longer a luxury—it's a necessity for businesses that want to stay competitive in today's digital economy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <Zap className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Automation & Efficiency</h3>
                  <p className="text-zion-cyan-light">
                    Automate repetitive tasks, reduce manual errors, and increase operational efficiency by up to 80%.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <TrendingUp className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Data-Driven Insights</h3>
                  <p className="text-zion-cyan-light">
                    Transform raw data into actionable insights that drive better decision-making and strategic planning.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 text-center">
                <CardContent className="p-8">
                  <Users className="h-16 w-16 mx-auto mb-4 text-zion-cyan" />
                  <h3 className="text-2xl font-bold text-white mb-4">Customer Experience</h3>
                  <p className="text-zion-cyan-light">
                    Deliver personalized experiences, predict customer needs, and increase satisfaction and retention rates.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* AI Capabilities */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Our AI Capabilities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Brain className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Machine Learning</h4>
                  <p className="text-sm text-zion-cyan-light">Custom ML models for your specific needs</p>
                </div>
                <div className="text-center">
                  <Network className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Neural Networks</h4>
                  <p className="text-sm text-zion-cyan-light">Deep learning for complex pattern recognition</p>
                </div>
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Predictive Analytics</h4>
                  <p className="text-sm text-zion-cyan-light">Forecast trends and behaviors</p>
                </div>
                <div className="text-center">
                  <Smartphone className="h-12 w-12 mx-auto mb-3 text-zion-cyan" />
                  <h4 className="font-semibold text-white mb-2">Natural Language Processing</h4>
                  <p className="text-sm text-zion-cyan-light">Understand and process human language</p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Services Tab */}
          <TabsContent value="services" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">AI Service Portfolio</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address your specific business challenges and opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {AI_SERVICES.map((service) => (
                <AIServiceCard key={service.id} service={service} />
              ))}
            </div>
          </TabsContent>

          {/* Use Cases Tab */}
          <TabsContent value="use-cases" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Real-World AI Applications</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Discover how AI is transforming industries and creating new opportunities for businesses like yours.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <UseCaseCard
                icon={<BarChart3 className="h-8 w-8" />}
                title="Financial Services"
                description="Fraud detection, risk assessment, algorithmic trading, and personalized financial advice."
                examples={["Credit scoring", "Market prediction", "Compliance automation"]}
              />
              <UseCaseCard
                icon={<Users className="h-8 w-8" />}
                title="Healthcare"
                description="Medical diagnosis, drug discovery, patient monitoring, and treatment optimization."
                examples={["Disease prediction", "Medical imaging", "Drug development"]}
              />
              <UseCaseCard
                icon={<Globe className="h-8 w-8" />}
                title="Retail & E-commerce"
                description="Customer segmentation, demand forecasting, inventory optimization, and personalized marketing."
                examples={["Recommendation engines", "Price optimization", "Supply chain management"]}
              />
              <UseCaseCard
                icon={<Shield className="h-8 w-8" />}
                title="Cybersecurity"
                description="Threat detection, anomaly identification, and automated response systems."
                examples={["Intrusion detection", "Malware analysis", "Behavioral analysis"]}
              />
              <UseCaseCard
                icon={<TrendingUp className="h-8 w-8" />}
                title="Manufacturing"
                description="Predictive maintenance, quality control, supply chain optimization, and process automation."
                examples={["Equipment monitoring", "Quality assurance", "Production planning"]}
              />
              <UseCaseCard
                icon={<Lightbulb className="h-8 w-8" />}
                title="Research & Development"
                description="Data analysis, pattern recognition, hypothesis generation, and experimental design."
                examples={["Literature review", "Data mining", "Simulation modeling"]}
              />
            </div>
          </TabsContent>

          {/* Pricing Tab */}
          <TabsContent value="pricing" className="space-y-12">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-white mb-6">AI Service Pricing</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Transparent pricing for our AI services with flexible options to fit your budget and requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <PricingCard
                title="Starter AI Package"
                price="$2,999"
                description="Perfect for small businesses starting their AI journey"
                features={[
                  "Basic AI integration",
                  "Process automation",
                  "Data analysis tools",
                  "5 hours of consultation",
                  "Email support"
                ]}
                popular={false}
              />
              <PricingCard
                title="Professional AI Suite"
                price="$7,999"
                description="Comprehensive AI solution for growing businesses"
                features={[
                  "Advanced AI models",
                  "Custom automation",
                  "Predictive analytics",
                  "20 hours of consultation",
                  "Priority support",
                  "Training & documentation"
                ]}
                popular={true}
              />
              <PricingCard
                title="Enterprise AI Platform"
                price="$19,999"
                description="Full-scale AI transformation for large organizations"
                features={[
                  "Custom AI development",
                  "Full automation suite",
                  "Advanced analytics",
                  "Unlimited consultation",
                  "24/7 dedicated support",
                  "Custom training programs",
                  "Ongoing optimization"
                ]}
                popular={false}
              />
            </div>

            {/* ROI Calculator */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">ROI Calculator</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Investment Benefits</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Cost Reduction:</span>
                      <span className="text-white font-semibold">20-40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Efficiency Gain:</span>
                      <span className="text-white font-semibold">60-80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Revenue Increase:</span>
                      <span className="text-white font-semibold">15-30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Time Savings:</span>
                      <span className="text-white font-semibold">40-60%</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Expected Returns</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Payback Period:</span>
                      <span className="text-white font-semibold">6-12 months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">3-Year ROI:</span>
                      <span className="text-white font-semibold">300-500%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Risk Reduction:</span>
                      <span className="text-white font-semibold">50-70%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zion-cyan-light">Competitive Advantage:</span>
                      <span className="text-white font-semibold">Significant</span>
                    </div>
                  </div>
                </div>
              </div>
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
            Let's discuss how AI can transform your business operations and drive unprecedented growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-purple hover:bg-zion-cyan px-8 py-3">
              <Brain className="mr-2 h-5 w-5" />
              Start AI Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-zion-blue-dark py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Ready to explore AI solutions for your business? Contact our experts today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Phone className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
              <p className="text-zion-cyan-light">+1 302 464 0950</p>
              <p className="text-sm text-zion-cyan-light">Mon-Fri 9AM-6PM EST</p>
            </div>
            <div className="text-center">
              <Mail className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
              <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              <p className="text-sm text-zion-cyan-light">24/7 Response</p>
            </div>
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-4 text-zion-cyan" />
              <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-zion-cyan-light">364 E Main St STE 1008</p>
              <p className="text-sm text-zion-cyan-light">Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Service Card Component
function AIServiceCard({ service }: { service: any }) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="bg-zion-purple/20 text-zion-purple border-zion-purple/30">
            {service.category}
          </Badge>
          {service.featured && (
            <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
              Featured
            </Badge>
          )}
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
              <span className="text-zion-cyan-light">({service.reviewCount})</span>
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

          <div className="flex flex-wrap gap-2">
            {service.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs border-zion-cyan/30 text-zion-cyan-light">
                {tag}
              </Badge>
            ))}
          </div>

          <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// Use Case Card Component
function UseCaseCard({ icon, title, description, examples }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string, 
  examples: string[] 
}) {
  return (
    <Card className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 text-zion-cyan">
          {icon}
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <h4 className="font-semibold text-white mb-3">Examples:</h4>
          {examples.map((example, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-sm text-zion-cyan-light">{example}</span>
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
    <Card className={`relative ${popular ? 'border-zion-cyan border-2' : 'border-zion-cyan/30'} bg-white/10 backdrop-blur-sm hover:border-zion-cyan/60 transition-all duration-300`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-zion-cyan text-white px-4 py-1">Most Popular</Badge>
        </div>
      )}
      <CardHeader className="text-center pt-8">
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
        <CardDescription className="text-zion-cyan-light">{description}</CardDescription>
        <div className="text-4xl font-bold text-zion-cyan mt-4">{price}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <span className="text-zion-cyan-light">{feature}</span>
            </div>
          ))}
        </div>
        <Button className="w-full mt-6 bg-zion-purple hover:bg-zion-purple-dark text-white">
          Get Started
        </Button>
      </CardContent>
    </Card>
  );
}