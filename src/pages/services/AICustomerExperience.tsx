import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Brain, 
  MessageCircle, 
  Users, 
  BarChart3, 
  Shield, 
  Globe, 
  TrendingUp, 
  Cpu, 
  Target,
  Heart,
  Star,
  Zap,
  CheckCircle,
  ArrowRight,
  Play,
  Headphones,
  Smartphone,
  Monitor,
  Bot,
  FileText,
  Settings,
  Palette
} from 'lucide-react';

export default function AICustomerExperience() {
  const features = [
    {
      title: "Intelligent Chatbots",
      description: "AI-powered chatbots that understand context and provide human-like responses 24/7",
      icon: Bot,
      benefits: ["24/7 availability", "Context awareness", "Multi-language support", "Seamless handoff"]
    },
    {
      title: "Personalized Recommendations",
      description: "Machine learning algorithms that deliver hyper-personalized product and content recommendations",
      icon: Brain,
      benefits: ["Behavioral analysis", "Real-time personalization", "A/B testing", "Conversion optimization"]
    },
    {
      title: "Sentiment Analysis",
      description: "Advanced NLP that analyzes customer emotions and satisfaction in real-time",
      icon: Heart,
      benefits: ["Emotion detection", "Satisfaction tracking", "Proactive intervention", "Trend analysis"]
    },
    {
      title: "Predictive Customer Service",
      description: "AI predicts customer issues before they arise and proactively addresses them",
      icon: Cpu,
      benefits: ["Issue prevention", "Proactive support", "Customer satisfaction", "Reduced churn"]
    },
    {
      title: "Omnichannel Experience",
      description: "Seamless customer experience across all touchpoints with unified AI intelligence",
      icon: Globe,
      benefits: ["Cross-channel consistency", "Unified customer view", "Seamless transitions", "Brand consistency"]
    },
    {
      title: "Voice & Video AI",
      description: "Advanced speech recognition and video analysis for enhanced customer interactions",
      icon: Headphones,
      benefits: ["Voice commands", "Video analysis", "Accessibility", "Multi-modal support"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 199,
      period: "month",
      description: "Perfect for small businesses starting their AI customer experience journey",
      features: [
        "Basic chatbot (up to 1,000 conversations/month)",
        "Email support",
        "Standard templates",
        "Basic analytics",
        "2 integrations",
        "Mobile responsive"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: 599,
      period: "month",
      description: "Ideal for growing businesses with advanced customer experience needs",
      features: [
        "Advanced chatbot (up to 10,000 conversations/month)",
        "Priority support",
        "Custom AI models",
        "Advanced analytics",
        "10 integrations",
        "Multi-language support",
        "Sentiment analysis",
        "API access"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: 1499,
      period: "month",
      description: "For large organizations requiring enterprise-grade AI customer experience",
      features: [
        "Unlimited conversations",
        "Custom AI development",
        "24/7 dedicated support",
        "Advanced security",
        "Unlimited integrations",
        "Multi-tenant support",
        "SLA guarantees",
        "White-label options"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      examples: [
        "Personalized product recommendations",
        "Intelligent search and filtering",
        "Automated customer support",
        "Shopping cart optimization"
      ],
      roi: "35-60% increase in conversion rates"
    },
    {
      industry: "Banking & Finance",
      examples: [
        "Intelligent fraud detection",
        "Personalized financial advice",
        "Automated account management",
        "Proactive security alerts"
      ],
      roi: "40-70% improvement in customer satisfaction"
    },
    {
      industry: "Healthcare",
      examples: [
        "Patient appointment scheduling",
        "Symptom assessment",
        "Medication reminders",
        "Health monitoring alerts"
      ],
      roi: "50-80% reduction in wait times"
    },
    {
      industry: "Travel & Hospitality",
      examples: [
        "Personalized travel recommendations",
        "Intelligent booking assistance",
        "Real-time customer support",
        "Loyalty program optimization"
      ],
      roi: "30-55% increase in customer loyalty"
    }
  ];

  const benefits = [
    {
      metric: "90%",
      description: "Faster response times",
      icon: Zap
    },
    {
      metric: "75%",
      description: "Higher customer satisfaction",
      icon: Heart
    },
    {
      metric: "60%",
      description: "Reduced support costs",
      icon: TrendingUp
    },
    {
      metric: "85%",
      description: "Improved conversion rates",
      icon: Target
    }
  ];

  const technologies = [
    {
      name: "Natural Language Processing",
      description: "Advanced NLP for understanding customer intent and context",
      icon: Brain
    },
    {
      name: "Machine Learning",
      description: "ML algorithms that continuously improve customer experience",
      icon: Cpu
    },
    {
      name: "Computer Vision",
      description: "AI-powered image and video analysis for enhanced interactions",
      icon: Monitor
    },
    {
      name: "Voice Recognition",
      description: "State-of-the-art speech recognition and synthesis",
      icon: Headphones
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple">
      <SEO 
        title="AI-Powered Customer Experience - Zion Tech Group" 
        description="Revolutionize your customer experience with AI-powered solutions. Personalized interactions, intelligent support, and seamless omnichannel experiences that drive loyalty and growth."
        keywords="AI customer experience, customer service AI, personalized recommendations, intelligent chatbots, customer analytics"
        canonical="https://ziontechgroup.com/services/ai-customer-experience"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 to-zion-purple/80"></div>
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-zion-cyan/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-cyan mr-4">
              <span className="text-zion-cyan font-semibold">AI-Powered</span>
            </div>
            <div className="bg-zion-purple/20 backdrop-blur-sm rounded-full px-6 py-3 border border-zion-purple">
              <span className="text-zion-purple font-semibold">Customer Experience</span>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Customer Experience
            <span className="block text-3xl md:text-4xl text-zion-cyan mt-2">
              Transform Customer Interactions with Intelligence
            </span>
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Deliver exceptional customer experiences with AI-powered personalization, intelligent support, 
            and seamless omnichannel interactions that drive loyalty and business growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Deliver Exceptional Customer Experiences
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI-powered platform delivers measurable improvements in customer satisfaction, 
              response times, and business outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-zion-cyan mb-2">
                  {benefit.metric}
                </div>
                <p className="text-zion-slate font-medium">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Advanced AI-Powered Features
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with intuitive design to deliver 
              the most advanced customer experience solution available.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-zion-blue-light hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-zion-slate mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-zion-slate">
                      <CheckCircle className="w-4 h-4 text-zion-cyan mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Cutting-Edge AI Technology
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Built on the latest advancements in artificial intelligence and machine learning 
              to deliver superior customer experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  <tech.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {tech.name}
                </h3>
                <p className="text-zion-slate">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Choose the plan that best fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg p-8 border-2 ${
                plan.popular 
                  ? 'border-zion-cyan scale-105' 
                  : 'border-zion-blue-light'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-zion-cyan text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-zion-blue-dark mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-zion-slate mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-zion-cyan">
                    ${plan.price}
                    <span className="text-lg text-zion-slate font-normal">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-zion-slate">
                      <CheckCircle className="w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-zion-cyan hover:bg-zion-cyan-light text-white'
                    : 'bg-zion-blue-light hover:bg-zion-blue text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI customer experience platform is designed to meet the unique needs of various industries, 
              delivering measurable ROI and customer satisfaction improvements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-zion-blue-light rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-zion-blue-dark mb-3 text-center">
                  {useCase.industry}
                </h3>
                <ul className="space-y-2 mb-4">
                  {useCase.examples.map((example, idx) => (
                    <li key={idx} className="text-sm text-zion-slate flex items-start">
                      <ArrowRight className="w-3 h-3 text-zion-cyan mr-2 mt-1 flex-shrink-0" />
                      {example}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-sm font-semibold text-zion-cyan">
                    {useCase.roi}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Comparison */}
      <section className="py-20 bg-zion-blue-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Our AI customer experience platform stands out from the competition with advanced features, 
              superior performance, and exceptional support.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Advanced AI Technology
                  </h3>
                  <p className="text-zion-slate text-sm">
                    State-of-the-art machine learning algorithms that continuously improve customer interactions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    Enterprise Security
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Bank-level security with SOC 2 compliance, encryption, and advanced access controls.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                    24/7 Expert Support
                  </h3>
                  <p className="text-zion-slate text-sm">
                    Dedicated support team with deep expertise in AI and customer experience technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have revolutionized their customer interactions with AI-powered solutions. 
            Start your free trial today and see the difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-zion-cyan hover:bg-zion-cyan-light text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center">
              <Play className="w-5 h-5 mr-2" />
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-zion-blue-dark px-8 py-3 rounded-lg font-semibold transition-colors">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Phone</h4>
                <p className="text-white">+1 302 464 0950</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Email</h4>
                <p className="text-white">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Website</h4>
                <p className="text-white">https://ziontechgroup.com</p>
              </div>
              <div>
                <h4 className="text-zion-cyan font-semibold mb-2">Address</h4>
                <p className="text-white">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}