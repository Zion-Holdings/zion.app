import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TrustedBySection } from '@/components/TrustedBySection';
import { QuoteFormSection } from '@/components/QuoteFormSection';
import { 
  Brain, 
  Bot, 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Globe, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

const aiServices = [
  {
    id: 1,
    title: "AI-Powered Customer Support Automation",
    description: "Transform your customer service with intelligent chatbots and automated support systems that provide 24/7 assistance.",
    features: [
      "Natural language processing for human-like conversations",
      "Multi-language support for global customers",
      "Integration with existing CRM systems",
      "Real-time learning and improvement",
      "Analytics and performance insights"
    ],
    price: 2800,
    currency: "$",
    duration: "4-6 weeks",
    icon: <Bot className="w-8 h-8" />,
    category: "Customer Experience",
    benefits: [
      "Reduce support costs by up to 60%",
      "Improve customer satisfaction scores",
      "24/7 availability without additional staff",
      "Scalable support during peak periods"
    ]
  },
  {
    id: 2,
    title: "AI-Powered Content Generation",
    description: "Create high-quality, engaging content automatically for marketing, documentation, and creative projects.",
    features: [
      "SEO-optimized content creation",
      "Multiple content formats (blogs, social media, emails)",
      "Brand voice consistency",
      "Plagiarism-free original content",
      "Content performance analytics"
    ],
    price: 2200,
    currency: "$",
    duration: "2-3 weeks",
    icon: <Zap className="w-8 h-8" />,
    category: "Content Marketing",
    benefits: [
      "10x faster content creation",
      "Consistent brand messaging",
      "SEO optimization built-in",
      "Cost-effective content strategy"
    ]
  },
  {
    id: 3,
    title: "AI-Powered Predictive Analytics",
    description: "Leverage machine learning to predict trends, optimize decisions, and reduce business risks.",
    features: [
      "Advanced forecasting models",
      "Risk assessment and mitigation",
      "Customer behavior prediction",
      "Market trend analysis",
      "Real-time data processing"
    ],
    price: 3800,
    currency: "$",
    duration: "6-8 weeks",
    icon: <BarChart3 className="w-8 h-8" />,
    category: "Business Intelligence",
    benefits: [
      "Improve decision accuracy by 40%",
      "Reduce operational risks",
      "Identify new business opportunities",
      "Optimize resource allocation"
    ]
  },
  {
    id: 4,
    title: "AI-Powered Business Process Automation",
    description: "Streamline operations with intelligent automation that learns and improves over time.",
    features: [
      "RPA with AI enhancement",
      "Process optimization recommendations",
      "Exception handling and learning",
      "Integration with existing systems",
      "Performance monitoring and reporting"
    ],
    price: 4800,
    currency: "$",
    duration: "8-10 weeks",
    icon: <Brain className="w-8 h-8" />,
    category: "Process Optimization",
    benefits: [
      "Reduce manual work by 70%",
      "Improve process accuracy",
      "Faster processing times",
      "Cost savings and efficiency gains"
    ]
  },
  {
    id: 5,
    title: "AI Ethics & Governance Framework",
    description: "Ensure responsible AI implementation with comprehensive ethics policies and governance structures.",
    features: [
      "AI ethics policy development",
      "Bias detection and mitigation",
      "Transparency and explainability",
      "Compliance framework design",
      "Ongoing monitoring and auditing"
    ],
    price: 6800,
    currency: "$",
    duration: "10-12 weeks",
    icon: <Shield className="w-8 h-8" />,
    category: "Compliance & Ethics",
    benefits: [
      "Build trust with stakeholders",
      "Ensure regulatory compliance",
      "Mitigate AI risks and biases",
      "Future-proof your AI strategy"
    ]
  },
  {
    id: 6,
    title: "AI Strategy & Implementation Consulting",
    description: "Strategic guidance to help businesses leverage AI for competitive advantage and growth.",
    features: [
      "AI readiness assessment",
      "Technology roadmap development",
      "Implementation planning",
      "Change management support",
      "ROI measurement framework"
    ],
    price: 7500,
    currency: "$",
    duration: "12-16 weeks",
    icon: <Globe className="w-8 h-8" />,
    category: "Strategic Consulting",
    benefits: [
      "Clear AI implementation roadmap",
      "Maximize ROI on AI investments",
      "Competitive advantage through AI",
      "Risk mitigation and success planning"
    ]
  }
];

const aiTechnologies = [
  "Machine Learning & Deep Learning",
  "Natural Language Processing (NLP)",
  "Computer Vision & Image Recognition",
  "Predictive Analytics & Forecasting",
  "Robotic Process Automation (RPA)",
  "Recommendation Systems",
  "Sentiment Analysis",
  "Anomaly Detection"
];

const industries = [
  "Healthcare & Life Sciences",
  "Financial Services & Banking",
  "Retail & E-commerce",
  "Manufacturing & Logistics",
  "Education & Training",
  "Real Estate & Construction",
  "Media & Entertainment",
  "Government & Public Sector"
];

export default function AIServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Solutions for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple-light">
              Modern Businesses
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Transform your business with cutting-edge AI solutions designed to drive innovation, 
            efficiency, and competitive advantage. From automation to predictive analytics, 
            we deliver intelligent solutions that scale with your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Get AI Solution Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Schedule AI Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive AI Services
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Choose from our range of AI services designed to address specific business challenges 
              and drive measurable results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service) => (
              <div key={service.id} className="bg-zion-blue border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple/50 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-lg mr-4">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-zion-cyan text-sm font-medium">{service.category}</span>
                  </div>
                </div>
                
                <h3 className="text-white text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-zion-slate-light text-sm flex items-center">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-zion-blue-light pt-4 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-zion-cyan">
                      <DollarSign className="w-4 h-4 mr-1" />
                      <span className="font-semibold">{service.currency}{service.price.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-zion-slate-light">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/request-quote">
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    Get Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Technologies */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Technologies
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We leverage cutting-edge AI technologies to deliver innovative solutions 
              that address complex business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {aiTechnologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue-dark border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities 
              across diverse industry sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="text-center p-6 bg-zion-blue border border-zion-blue-light rounded-lg hover:border-zion-purple/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ZionTech for AI */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ZionTech Group for AI Solutions?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              We combine deep AI expertise with industry knowledge to deliver 
              solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Proven Expertise</h3>
              <p className="text-zion-slate-light">
                Over 5 years of experience in AI implementation across multiple industries 
                with a track record of successful projects.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Enterprise Security</h3>
              <p className="text-zion-slate-light">
                Bank-level security standards with SOC 2 compliance and enterprise-grade 
                data protection for all AI solutions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-white text-xl font-bold mb-3">Rapid Deployment</h3>
              <p className="text-zion-slate-light">
                Agile development methodology with rapid prototyping and deployment 
                to get your AI solution running quickly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Information */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent AI Solution Pricing
            </h2>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Competitive pricing for enterprise-grade AI solutions with flexible 
              payment options and ROI guarantees.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Starter AI</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $2,200<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Basic AI implementation</li>
                <li>Standard features</li>
                <li>Email support</li>
                <li>2-week delivery</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark border border-zion-purple rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-zion-cyan text-zion-blue px-4 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-white text-2xl font-bold mb-4">Professional AI</h3>
              <div className="text-4xl font-bold text-white mb-6">
                $4,800<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-white space-y-2 mb-8">
                <li>Advanced AI features</li>
                <li>Custom integrations</li>
                <li>Priority support</li>
                <li>6-8 week delivery</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-white text-zion-purple hover:bg-zion-slate-light">
                  Get Started
                </Button>
              </Link>
            </div>
            
            <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-bold mb-4">Enterprise AI</h3>
              <div className="text-4xl font-bold text-zion-cyan mb-6">
                $12,000<span className="text-lg text-zion-slate-light">/project</span>
              </div>
              <ul className="text-zion-slate-light space-y-2 mb-8">
                <li>Full AI transformation</li>
                <li>Custom development</li>
                <li>24/7 dedicated support</li>
                <li>12-16 week delivery</li>
              </ul>
              <Link to="/request-quote">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
            Contact our AI experts today to discuss how we can help you leverage 
            artificial intelligence for business growth and innovation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Visit Us</h3>
              <p className="text-zion-slate-light text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Call Us</h3>
              <p className="text-zion-cyan font-semibold">
                +1 302 464 0950
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-white font-bold mb-2">Email Us</h3>
              <p className="text-zion-cyan font-semibold">
                kleber@ziontechgroup.com
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/request-quote">
              <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3">
                Request AI Solution Quote
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
                Schedule AI Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <TrustedBySection />
      <QuoteFormSection />
    </>
  );
}