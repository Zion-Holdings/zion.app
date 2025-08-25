import React from 'react';
import { Link } from 'react-router-dom';
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
  CheckCircle,
  ArrowRight,
  Brain,
  Palette
} from 'lucide-react';

const AIMarketingAutomation = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Targeting",
      description: "Advanced algorithms that automatically identify and segment your most valuable customers."
    },
    {
      icon: Mail,
      title: "Smart Email Campaigns",
      description: "Automated email sequences that adapt based on customer behavior and engagement patterns."
    },
    {
      icon: MessageSquare,
      title: "Chatbot Marketing",
      description: "Intelligent chatbots that qualify leads and guide customers through the sales funnel."
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Live performance tracking with AI insights to optimize campaigns in real-time."
    },
    {
      icon: Palette,
      title: "Dynamic Content",
      description: "Automatically personalize content, offers, and messaging for each individual customer."
    },
    {
      icon: Zap,
      title: "Cross-Channel Automation",
      description: "Seamlessly coordinate marketing efforts across email, social media, and web channels."
    }
  ];

  const useCases = [
    {
      title: "Lead Generation & Nurturing",
      description: "Automatically identify prospects, score leads, and nurture them through personalized content.",
      icon: Target
    },
    {
      title: "Customer Retention",
      description: "Predict churn risk and automatically engage customers with relevant offers and content.",
      icon: Users
    },
    {
      title: "Product Recommendations",
      description: "AI-powered product suggestions that increase conversion rates and average order value.",
      icon: TrendingUp
    },
    {
      title: "Social Media Marketing",
      description: "Automated social media posting, engagement, and audience growth strategies.",
      icon: Globe
    }
  ];

  const benefits = [
    "Increase conversion rates by 40-60%",
    "Reduce marketing costs by 30-50%",
    "Improve customer lifetime value",
    "24/7 automated customer engagement",
    "Personalized customer experiences at scale",
    "Data-driven marketing decisions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Marketing Automation
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Automate your marketing with AI intelligence that personalizes customer experiences and drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="px-8 py-4 border border-purple-400/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/20 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Intelligent Marketing Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform automates complex marketing tasks while delivering personalized experiences
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Marketing Automation Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how AI marketing automation is revolutionizing customer engagement across industries
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;
              return (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                      <p className="text-gray-300">{useCase.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Marketing Automation?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your marketing from manual processes to intelligent, automated systems that scale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Automate Your Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join forward-thinking companies using AI to create personalized marketing experiences that convert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105">
              Start Free Trial
            </button>
              <button className="px-8 py-4 border border-purple-400/50 text-purple-400 font-semibold rounded-lg hover:bg-purple-400/20 transition-all duration-300">
                Schedule Demo
              </button>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Explore More Services</h3>
            <p className="text-gray-300">Discover our complete range of AI and technology solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/services/ai-business-intelligence" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">AI Business Intelligence</h4>
                    <p className="text-gray-300 text-sm">Transform data into actionable insights</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-hr-recruitment" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">AI HR & Recruitment</h4>
                    <p className="text-gray-300 text-sm">Revolutionize talent acquisition and management</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>
            </Link>
            
            <Link to="/services/ai-legal-tech" className="group">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">AI Legal Tech</h4>
                    <p className="text-gray-300 text-sm">Streamline legal processes with AI</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMarketingAutomation;