import React, { useState } from 'react';
import { 
  MICRO_SERVICES, 
  MicroService,
  getServicesByCategory
} from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Bot, 
  BarChart3, 
  PenTool, 
  MessageSquare, 
  Zap,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  TrendingUp,
  Users,
  Award,
  Mail,
  Phone,
  Globe,
  ArrowRight,
  Lightbulb,
  Shield
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const aiServices = getServicesByCategory('ai-services');

const AIServiceCard: React.FC<{ service: MicroService }> = ({ service }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="h-full border-zion-blue-light bg-zion-blue-dark hover:border-zion-purple/50 transition-all duration-300 group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-white text-lg mb-2 group-hover:text-zion-cyan transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="text-zion-slate-light text-sm line-clamp-2">
              {service.description}
            </CardDescription>
          </div>
          {service.featured && (
            <Badge variant="secondary" className="bg-zion-purple text-white text-xs">
              <Award className="w-3 h-3 mr-1" />
              Featured
            </Badge>
          )}
        </div>
        
        <div className="flex items-center gap-2 mt-3">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{service.rating}</span>
            <span className="text-zion-slate-light text-sm">({service.reviewCount})</span>
          </div>
          <Badge variant="outline" className="border-zion-purple text-zion-cyan text-xs">
            AI Score: {service.aiScore}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-white font-semibold">
                ${service.price.toLocaleString()}
              </span>
              <span className="text-zion-slate-light text-sm">
                {service.pricingModel === 'monthly' ? '/month' : 'one-time'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-zion-slate-light text-sm">
              <Clock className="w-3 h-3" />
              {service.deliveryTime}
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {service.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs border-zion-blue-light text-zion-slate-light">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <TrendingUp className="w-4 h-4 text-zion-purple" />
              <span>Market Price: {service.marketPrice}</span>
            </div>
            
            <div className="flex items-center gap-2 text-zion-slate-light text-sm">
              <Users className="w-4 h-4 text-zion-cyan" />
              <span>{service.author.name}</span>
              {service.author.verified && (
                <CheckCircle className="w-4 h-4 text-green-400" />
              )}
            </div>
          </div>

          <Button
            onClick={() => setShowDetails(!showDetails)}
            variant="outline"
            className="w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan transition-colors"
          >
            {showDetails ? 'Hide Details' : 'View Details'}
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
          </Button>

          {showDetails && (
            <div className="space-y-4 pt-3 border-t border-zion-blue-light">
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-zion-purple" />
                  Key Features
                </h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-zion-cyan" />
                  Benefits
                </h4>
                <ul className="space-y-1">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="text-zion-slate-light text-sm flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zion-blue p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Mail className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={`mailto:${service.contactInfo.email}`}
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Phone className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={`tel:${service.contactInfo.phone}`}
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-zion-slate-light">
                    <Globe className="w-4 h-4 text-zion-purple" />
                    <a 
                      href={service.contactInfo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zion-cyan hover:underline"
                    >
                      {service.contactInfo.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const AIFeatureSection: React.FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Brain className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Machine Learning</h3>
      <p className="text-zion-slate-light text-sm">Advanced ML models and algorithms for predictive analytics</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Bot className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">AI Automation</h3>
      <p className="text-zion-slate-light text-sm">Intelligent automation for business processes</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <BarChart3 className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Data Intelligence</h3>
      <p className="text-zion-slate-light text-sm">Deep insights from complex data analysis</p>
    </div>
    
    <div className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg">
      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <PenTool className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-white font-semibold mb-2">Content Creation</h3>
      <p className="text-zion-slate-light text-sm">AI-powered content generation and optimization</p>
    </div>
  </div>
);

const AIBenefitsSection: React.FC = () => (
  <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 mb-12">
    <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose AI Solutions?</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Precision & Accuracy</h3>
          <p className="text-zion-slate-light text-sm">AI systems provide consistent, accurate results with minimal errors</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Speed & Efficiency</h3>
          <p className="text-zion-slate-light text-sm">Process large amounts of data and tasks in seconds, not hours</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <TrendingUp className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Scalability</h3>
          <p className="text-zion-slate-light text-sm">Grow your operations without proportional cost increases</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Innovation</h3>
          <p className="text-zion-slate-light text-sm">Stay ahead of competition with cutting-edge AI capabilities</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Shield className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Security</h3>
          <p className="text-zion-slate-light text-sm">Advanced threat detection and security automation</p>
        </div>
      </div>
      
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-zion-purple rounded-full flex items-center justify-center flex-shrink-0">
          <Zap className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold mb-2">Integration</h3>
          <p className="text-zion-slate-light text-sm">Seamlessly integrate with existing systems and workflows</p>
        </div>
      </div>
    </div>
  </div>
);

const AICaseStudiesSection: React.FC = () => (
  <div className="space-y-6 mb-12">
    <h2 className="text-3xl font-bold text-white text-center mb-8">AI Success Stories</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Customer Service AI</h3>
            <p className="text-zion-slate-light text-sm">E-commerce Company</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm mb-4">
          Implemented AI chatbot that handles 80% of customer inquiries, reducing response time from 2 hours to 30 seconds.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-green-400">↑ 300%</span>
          <span className="text-zion-slate-light">Customer Satisfaction</span>
        </div>
      </div>
      
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Predictive Analytics</h3>
            <p className="text-zion-slate-light text-sm">Financial Services</p>
          </div>
        </div>
        <p className="text-zion-slate-light text-sm mb-4">
          AI-powered risk assessment system that predicts market trends with 92% accuracy, improving investment decisions.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-green-400">↑ 25%</span>
          <span className="text-zion-slate-light">Portfolio Returns</span>
        </div>
      </div>
    </div>
  </div>
);

export default function AIServicesPage() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="AI & Machine Learning Services - Zion Tech Group" 
        description="Expert AI development, machine learning, and intelligent automation services. Transform your business with cutting-edge AI solutions at competitive prices."
        keywords="AI services, machine learning, chatbot development, data analytics, content generation, AI automation, predictive analytics"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue-dark to-zion-blue py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Brain className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI & Machine Learning Services
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge AI solutions. From intelligent chatbots to predictive analytics, 
            we deliver innovative AI services that drive growth and efficiency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get AI Consultation
            </Button>
            <Button 
              variant="outline" 
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8"
              onClick={() => window.location.href = 'tel:+13024640950'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <AIFeatureSection />
        <AIBenefitsSection />
        <AICaseStudiesSection />
        
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our AI Services</h2>
            <p className="text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive AI solutions designed to meet your business needs. Each service is crafted with expertise 
              and delivered with precision to ensure maximum value and impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiServices.map((service) => (
              <AIServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-zion-blue-dark border-t border-zion-blue-light py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Harness the Power of AI?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto mb-8">
            Let's discuss how AI can transform your business operations, improve efficiency, and drive innovation. 
            Our experts are ready to help you implement the right AI solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8"
              onClick={() => window.location.href = 'mailto:kleber@ziontechgroup.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Start AI Project
            </Button>
            <Button 
              variant="outline" 
              className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 px-8"
              onClick={() => window.location.href = 'tel:+13024640950'}
            >
              <Phone className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Mobile: +1 302 464 0950</p>
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}