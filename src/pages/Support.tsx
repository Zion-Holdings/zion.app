import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  MessageSquare, 
  Phone, 
  Mail, 
  BookOpen, 
  Video,
  FileText,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap
} from 'lucide-react';

const Support = () => {
  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our support team",
      details: "+1 302 464 0950",
      availability: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      details: "support@ziontechgroup.com",
      availability: "24/7 response within 4 hours",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help from our team",
      details: "Available on all pages",
      availability: "Mon - Fri: 9:00 AM - 6:00 PM EST",
      color: "from-green-500 to-teal-500"
    }
  ];

  const helpResources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "/docs",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides",
      link: "/tutorials",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Knowledge Base",
      description: "Searchable articles and FAQs",
      link: "/kb",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Community Forum",
      description: "Connect with other users",
      link: "/community",
      color: "from-orange-500 to-red-500"
    }
  ];

  const faqs = [
    {
      question: "How do I get started with Zion Tech Group services?",
      answer: "Getting started is easy! Simply schedule a free consultation call, and our team will assess your needs and design a customized solution. Visit our Get Started page for more details."
    },
    {
      question: "What is the typical implementation timeline?",
      answer: "Implementation timelines vary based on project complexity. Simple integrations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during planning."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes! All our solutions include ongoing support and maintenance. We offer different support tiers to meet your needs, from basic email support to 24/7 dedicated support teams."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We serve clients across all major industries including healthcare, finance, manufacturing, retail, government, and more. Our solutions are designed to be industry-agnostic while addressing specific sector challenges."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "Security is our top priority. We implement enterprise-grade security measures including encryption, access controls, and compliance frameworks. All solutions are designed to meet industry standards like SOC2, HIPAA, and GDPR."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely! We specialize in seamless integrations with existing infrastructure. Our team will assess your current systems and design solutions that work with your existing technology stack."
    }
  ];

  const supportTiers = [
    {
      name: "Basic Support",
      description: "Perfect for small implementations",
      features: [
        "Email support",
        "Basic documentation access",
        "Community forum access",
        "Response within 24 hours"
      ],
      price: "Included"
    },
    {
      name: "Professional Support",
      description: "Ideal for growing businesses",
      features: [
        "Phone and email support",
        "Priority response (4 hours)",
        "Video consultation",
        "Advanced documentation",
        "Training sessions"
      ],
      price: "$299/month"
    },
    {
      name: "Enterprise Support",
      description: "For mission-critical operations",
      features: [
        "24/7 dedicated support",
        "1-hour response guarantee",
        "Dedicated support engineer",
        "Custom training programs",
        "SLA guarantees",
        "On-site support available"
      ],
      price: "$999/month"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/20 to-indigo-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
            Support Center
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We're here to help you succeed with our technology solutions. 
            Get the support you need through multiple channels and resources.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/docs" 
              className="btn-secondary text-lg px-8 py-4"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Get Help When You Need It
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multiple support channels available to meet your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-r ${channel.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <channel.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{channel.title}</h3>
                <p className="text-gray-300 mb-4">{channel.description}</p>
                <div className="text-cyan-400 font-medium mb-2">{channel.details}</div>
                <div className="text-gray-400 text-sm">{channel.availability}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Resources */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Self-Service Resources
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers quickly with our comprehensive help resources
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpResources.map((resource, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${resource.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{resource.description}</p>
                <Link 
                  to={resource.link} 
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  <span>Access</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quick answers to common questions
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Support Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the support level that fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportTiers.map((tier, index) => (
              <div key={index} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{tier.price}</div>
                  <p className="text-gray-300">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to="/contact" 
                  className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium text-center transition-all duration-300 hover:from-cyan-600 hover:to-blue-600 block"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Our support team is ready to assist you with any questions or issues
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="btn-primary text-lg px-8 py-4"
            >
              Contact Support Team
            </Link>
            <Link 
              to="/get-started" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;