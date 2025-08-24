import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Zap, 
    Circle,
  BarChart3, 
  Star, 
  Clock, 
  ArrowRight, 
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Globe,
  TrendingUp,
  Monitor,
  Database,
  Shield,
  Users,
  Lightbulb,
  Code,
  Eye,
  MessageSquare,
  Bot,
  Network
} from "lucide-react";
import { AI_SERVICES } from "@/data/expandedServices";

const AIServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <Brain className="h-20 w-20 mx-auto text-blue-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI & Machine Learning Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your business with cutting-edge artificial intelligence and machine learning technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/request-quote">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold">
                  Get AI Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact AI Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information Banner */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-blue-600" />
              <a 
                href="https://ziontechgroup.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                ziontechgroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* AI Capabilities Overview */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Capabilities & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI solutions leverage the latest technologies to deliver measurable business outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-gray-600">Custom ML models, predictive analytics, and automated decision-making systems</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Language Processing</h3>
              <p className="text-gray-600">Text analysis, sentiment detection, language translation, and chatbot development</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Computer Vision</h3>
              <p className="text-gray-600">Image recognition, object detection, quality control, and automated inspection</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Process Automation</h3>
              <p className="text-gray-600">AI-powered workflow automation, RPA integration, and intelligent process optimization</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI & Machine Learning Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to drive innovation and competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {AI_SERVICES.map((service) => (
              <Card key={service.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/20">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  {service.featured && (
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white">
                      Featured
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                      {service.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{service.rating}</span>
                      <span className="text-gray-400">({service.reviewCount})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-blue-600">
                      {service.currency}{service.price?.toLocaleString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{service.availability}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <BarChart3 className="h-4 w-4" />
                      <span>AI Score: {service.aiScore}%</span>
                    </div>
                    <Link to={`/services/${service.id}`}>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* AI Benefits Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of AI Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how artificial intelligence can transform your business operations and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Increased Efficiency</h3>
              <p className="text-gray-600">Automate repetitive tasks and optimize workflows to boost productivity by up to 300%</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Circle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Better Decision Making</h3>
              <p className="text-gray-600">Leverage data-driven insights and predictive analytics for informed strategic decisions</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-blue-50">
              <div className="bg-green-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Enhanced Customer Experience</h3>
              <p className="text-gray-600">Personalize interactions and provide 24/7 support through AI-powered chatbots</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-orange-50 to-red-50">
              <div className="bg-orange-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Improved Security</h3>
              <p className="text-gray-600">Advanced threat detection and fraud prevention using machine learning algorithms</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-cyan-50 to-blue-50">
              <div className="bg-cyan-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Data Insights</h3>
              <p className="text-gray-600">Extract valuable patterns and trends from large datasets for strategic advantage</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-yellow-50 to-orange-50">
              <div className="bg-yellow-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Innovation Leadership</h3>
              <p className="text-gray-600">Stay ahead of competitors with cutting-edge AI technologies and solutions</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Implementation Process */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI integration and maximum ROI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Assessment & Strategy</h3>
              <p className="text-gray-600">Evaluate current state, define AI objectives, and create implementation roadmap</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Preparation</h3>
              <p className="text-gray-600">Clean, structure, and prepare data for AI model training and validation</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
              <p className="text-gray-600">Build, train, and validate AI models with comprehensive testing protocols</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Deployment & Optimization</h3>
              <p className="text-gray-600">Deploy to production, monitor performance, and continuously optimize</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Use Cases */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI Use Cases & Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications of AI technology across various industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Monitor className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Manufacturing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Predictive maintenance</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Quality control automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Supply chain optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Finance & Banking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Fraud detection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Risk assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Algorithmic trading</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Customer Service</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Intelligent chatbots</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Sentiment analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Personalized recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Medical image analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Drug discovery</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Patient outcome prediction</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-cyan-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle>Retail & E-commerce</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Demand forecasting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Inventory optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Dynamic pricing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-yellow-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-yellow-600" />
                </div>
                <CardTitle>Marketing & Sales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Lead scoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Content optimization</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>Campaign automation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Let our AI experts help you identify the best opportunities for AI integration and guide you through 
            the implementation process. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/request-quote">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-600 font-semibold">
                Get AI Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Contact */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-blue-400">ZionTech Group</h3>
              <p className="text-gray-300 mb-6">
                Your trusted partner for AI and machine learning solutions. We help businesses leverage 
                artificial intelligence to drive innovation, efficiency, and competitive advantage.
              </p>
              <div className="flex space-x-4">
                <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  <Globe className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <span>364 E Main St STE 1008<br />Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ZionTech Group. All rights reserved. | <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServicesPage;