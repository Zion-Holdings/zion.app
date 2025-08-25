import React from 'react';
import { comprehensiveServices } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  MessageSquare, 
  PenTool, 
  BarChart3, 
  CheckCircle, 
  TrendingUp,
  Phone,
  Mail,
  Globe,
  ArrowRight,
  Sparkles,
  Zap,
  Users,
  Clock,
  Star
} from 'lucide-react';
import Target from 'lucide-react/dist/esm/icons/target';
import { Link } from 'react-router-dom';

const aiServices = comprehensiveServices.filter(service => service.category === 'AI Services');

export default function AIServicesShowcase() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue via-zion-purple to-zion-blue-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <Brain className="w-20 h-20 text-zion-cyan mx-auto mb-4" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence. From chatbots to content generation, 
            our AI services deliver measurable results and competitive advantages.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
                <Sparkles className="w-4 h-4 mr-2" />
                Start AI Journey
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Target className="w-4 h-4 mr-2" />
                Get AI Assessment
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Stats Banner */}
      <section className="bg-zion-blue-dark py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">95%</div>
              <div className="text-sm text-zion-slate-light">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">40%</div>
              <div className="text-sm text-zion-slate-light">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">24/7</div>
              <div className="text-sm text-zion-slate-light">AI Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-zion-cyan mb-2">3x</div>
              <div className="text-sm text-zion-slate-light">Productivity Boost</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              AI Services Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive AI solutions are designed to address real business challenges 
              with proven results and measurable ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <Card key={service.id} className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-zion-blue-light">
                <div className="relative">
                  <img 
                    src={service.images[0]} 
                    alt={service.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-zion-purple text-white">
                    {service.subcategory}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-zion-blue">{service.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center p-4 bg-zion-blue-light rounded-lg">
                    <div className="text-3xl font-bold text-zion-purple mb-1">
                      ${service.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">
                      {service.pricingModel === 'monthly' ? 'per month' : 
                       service.pricingModel === 'project-based' ? 'project-based' : 
                       service.pricingModel === 'one-time' ? 'one-time' : 'hourly'}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-zion-blue mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4" />
                      Key Features
                    </h4>
                    <div className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="font-semibold text-zion-blue mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Business Benefits
                    </h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full flex-shrink-0"></div>
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{service.rating}</span>
                      <span>({service.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{service.estimatedDelivery}</span>
                    </div>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <h4 className="font-semibold text-zion-blue mb-3 flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      Perfect For
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetAudience.slice(0, 3).map((audience, index) => (
                        <Badge key={index} variant="secondary" className="text-xs bg-zion-blue-light text-zion-blue">
                          {audience}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact CTA */}
                  <div className="text-center space-y-4">
                    <div className="text-sm text-gray-600">
                      Ready to implement AI in your business?
                    </div>
                    <div className="flex flex-col gap-2">
                      <a 
                        href={`tel:${service.contactInfo.phone}`}
                        className="flex items-center justify-center gap-2 text-zion-cyan hover:text-zion-cyan-dark transition-colors font-medium"
                      >
                        <Phone className="w-4 h-4" />
                        {service.contactInfo.phone}
                      </a>
                      <a 
                        href={`mailto:${service.contactInfo.email}`}
                        className="flex items-center justify-center gap-2 text-zion-cyan hover:text-zion-cyan-dark transition-colors font-medium"
                      >
                        <Mail className="w-4 h-4" />
                        {service.contactInfo.email}
                      </a>
                    </div>
                    <Link 
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm text-zion-purple hover:text-zion-purple-dark transition-colors font-medium"
                    >
                      Get AI Consultation <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* AI Implementation Process */}
      <section className="bg-zion-blue-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures successful AI integration with minimal disruption to your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Assessment</h3>
              <p className="text-gray-600">Evaluate your current systems and identify AI opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Strategy</h3>
              <p className="text-gray-600">Develop a customized AI implementation roadmap</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Implementation</h3>
              <p className="text-gray-600">Deploy AI solutions with expert guidance and support</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Optimization</h3>
              <p className="text-gray-600">Continuous improvement and performance monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zion-blue mb-4">
              Why Choose Zion Tech Group AI Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge AI technology with deep business understanding to deliver solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-zion-blue-light rounded-lg">
              <Brain className="w-12 h-12 text-zion-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Expert AI Team</h3>
              <p className="text-gray-600">Certified AI engineers and data scientists with years of experience</p>
            </div>
            <div className="text-center p-6 border border-zion-blue-light rounded-lg">
                              <Target className="w-12 h-12 text-zion-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Custom Solutions</h3>
              <p className="text-gray-600">Tailored AI implementations designed for your specific business needs</p>
            </div>
            <div className="text-center p-6 border border-zion-blue-light rounded-lg">
              <TrendingUp className="w-12 h-12 text-zion-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Proven ROI</h3>
              <p className="text-gray-600">Measurable results and documented business impact</p>
            </div>
            <div className="text-center p-6 border border-zion-blue-light rounded-lg">
              <Zap className="w-12 h-12 text-zion-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Fast Implementation</h3>
              <p className="text-gray-600">Quick deployment with minimal business disruption</p>
            </div>
            <div className="text-center p-6 border border-zion-blue-light rounded-lg">
              <CheckCircle className="w-12 h-12 text-zion-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and validation processes</p>
            </div>
            <div className="text-center p-6 border border-zion-blue-light rounded-lg">
              <Users className="w-12 h-12 text-zion-purple mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-zion-blue mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous monitoring, updates, and technical support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-zion-blue to-zion-purple py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Join the AI revolution and gain a competitive edge. Our expert team is ready to help you 
            implement intelligent solutions that drive growth and efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-zion-blue font-bold">
                <Brain className="w-4 h-4 mr-2" />
                Start AI Consultation
              </Button>
            </Link>
            <Link to="/request-quote">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Target className="w-4 h-4 mr-2" />
                Get AI Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-zion-cyan" />
              <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-zion-cyan transition-colors">
                ziontechgroup.com
              </a>
            </div>
          </div>
          <div className="mt-6 text-zion-slate-light">
            <p>364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
}