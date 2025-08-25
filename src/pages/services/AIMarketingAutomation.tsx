import React from 'react';
import { SEO } from '../../components/SEO';
import { 
  Target, 
  TrendingUp, 
  Users, 
  Mail, 
  MessageSquare, 
  BarChart3, 
  Zap, 
  Globe,
  Smartphone,
  Video,
  Camera,
  Palette,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function AIMarketingAutomation() {
  const features = [
    {
      title: "AI-Powered Audience Targeting",
      description: "Intelligent customer segmentation and targeting using machine learning algorithms",
      icon: Target,
      benefits: ["95% targeting accuracy", "Real-time audience insights", "Predictive customer behavior"]
    },
    {
      title: "Automated Content Generation",
      description: "AI-generated marketing content that adapts to your brand voice and audience preferences",
      icon: Palette,
      benefits: ["Personalized content", "Multi-language support", "Brand consistency"]
    },
    {
      title: "Smart Campaign Optimization",
      description: "Continuous campaign performance optimization using real-time data and AI insights",
      icon: TrendingUp,
      benefits: ["Real-time optimization", "A/B testing automation", "Performance prediction"]
    },
    {
      title: "Multi-Channel Orchestration",
      description: "Seamless coordination across email, social media, SMS, and advertising platforms",
      icon: Globe,
      benefits: ["Unified dashboard", "Cross-channel analytics", "Consistent messaging"]
    },
    {
      title: "Predictive Analytics",
      description: "Forecast campaign performance and customer lifetime value with AI-powered insights",
      icon: BarChart3,
      benefits: ["ROI prediction", "Customer churn prevention", "Optimal timing analysis"]
    },
    {
      title: "Personalization Engine",
      description: "Dynamic content personalization based on real-time user behavior and preferences",
      icon: Users,
      benefits: ["Real-time personalization", "Behavioral triggers", "Contextual messaging"]
    }
  ];

  const marketingChannels = [
    {
      name: "Email Marketing",
      description: "AI-powered email campaigns with personalized content and optimal send times",
      icon: Mail,
      features: ["Smart subject lines", "Dynamic content", "Send time optimization", "A/B testing"]
    },
    {
      name: "Social Media",
      description: "Automated social media management with content scheduling and engagement tracking",
      icon: MessageSquare,
      features: ["Content scheduling", "Engagement monitoring", "Trend analysis", "Community management"]
    },
    {
      name: "SMS Marketing",
      description: "Intelligent SMS campaigns with personalized messaging and delivery optimization",
      icon: Smartphone,
      features: ["Personalized content", "Delivery timing", "Response tracking", "Compliance management"]
    },
    {
      name: "Video Marketing",
      description: "AI-generated video content and automated video marketing campaigns",
      icon: Video,
      features: ["Auto-generated videos", "Thumbnail optimization", "Performance tracking", "Platform optimization"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199/month",
      description: "Perfect for small businesses starting with marketing automation",
      features: [
        "Up to 5,000 contacts",
        "Basic email automation",
        "Social media scheduling",
        "Email support",
        "Standard templates",
        "Basic analytics"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$499/month",
      description: "Ideal for growing businesses with advanced marketing needs",
      features: [
        "Up to 25,000 contacts",
        "Advanced automation workflows",
        "AI content generation",
        "Priority support",
        "Custom templates",
        "Advanced analytics",
        "Multi-channel campaigns",
        "A/B testing"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299/month",
      description: "For large organizations requiring enterprise-grade marketing automation",
      features: [
        "Unlimited contacts",
        "Custom automation workflows",
        "Advanced AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom integrations",
        "Advanced reporting",
        "API access",
        "On-premise option",
        "SLA guarantees"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const successMetrics = [
    {
      metric: "3.5x",
      description: "Increase in email open rates",
      detail: "AI-optimized subject lines and send times"
    },
    {
      metric: "2.8x",
      description: "Higher conversion rates",
      detail: "Personalized content and targeting"
    },
    {
      metric: "40%",
      description: "Reduction in customer acquisition costs",
      detail: "Optimized campaigns and targeting"
    },
    {
      metric: "5.2x",
      description: "ROI improvement",
      detail: "Automated optimization and personalization"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-pink-900">
      <SEO 
        title="AI Marketing Automation Platform - Zion Tech Group" 
        description="Revolutionize your marketing with AI-powered automation. Personalized campaigns, intelligent targeting, and automated optimization."
        keywords="AI marketing automation, marketing automation, AI content generation, customer targeting, campaign optimization"
        canonical="https://ziontechgroup.com/services/ai-marketing-automation"
      />

      {/* Hero Section with Futuristic Background */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-600/20 to-cyan-500/20"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-500/50 rounded-full text-purple-400 text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              AI-Powered Marketing Automation
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              AI Marketing Automation
            </span>
            <span className="block text-3xl md:text-4xl text-gray-300 mt-4">
              Transform Marketing with Intelligent Automation
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Leverage artificial intelligence to automate your marketing campaigns, personalize customer experiences, 
            and optimize performance in real-time. Our AI platform handles everything from content creation to 
            campaign optimization.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">3.5x</div>
              <div className="text-gray-400 text-sm">Email Open Rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400 mb-2">2.8x</div>
              <div className="text-gray-400 text-sm">Conversion Rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-gray-400 text-sm">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">5.2x</div>
              <div className="text-gray-400 text-sm">ROI Improvement</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful AI Marketing Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with marketing expertise 
              to deliver results that drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section className="py-20 bg-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Multi-Channel Marketing Automation
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Orchestrate campaigns across all your marketing channels with intelligent automation 
              and unified analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketingChannels.map((channel, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                    <channel.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{channel.name}</h3>
                </div>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <ul className="space-y-2">
                  {channel.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact our AI marketing automation platform delivers for businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-2">{metric.metric}</div>
                <div className="text-white font-semibold mb-2">{metric.description}</div>
                <div className="text-gray-400 text-sm">{metric.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your marketing needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-purple-500/50 shadow-2xl shadow-purple-500/25' 
                  : 'border-gray-700/50 hover:border-purple-500/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-purple-400 mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 via-pink-900/50 to-cyan-900/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of businesses that have already transformed their marketing with 
            AI-powered automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Schedule Demo
            </button>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              Need enterprise pricing? <a href="/contact" className="text-purple-400 hover:text-purple-300 underline">Contact our sales team</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}