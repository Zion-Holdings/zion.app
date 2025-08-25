import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  Clock, 
  Users,
  FileText,
  Video,
  Calendar,
  MapPin,
  Globe,
  ChevronRight,
  CheckCircle,
  AlertCircle,
  XCircle,
  Star,
  Rocket,
  Brain,
  Shield
} from 'lucide-react';

const Support = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const supportCategories = [
    {
      id: 'general',
      title: 'General Support',
      icon: Users,
      description: 'General questions and account support',
      priority: 'medium',
      responseTime: '2-4 hours'
    },
    {
      id: 'technical',
      title: 'Technical Support',
      icon: FileText,
      description: 'Technical issues and troubleshooting',
      priority: 'high',
      responseTime: '1-2 hours'
    },
    {
      id: 'billing',
      title: 'Billing Support',
      icon: CheckCircle,
      description: 'Billing, payments, and subscription issues',
      priority: 'high',
      responseTime: '1-2 hours'
    },
    {
      id: 'ai-services',
      title: 'AI Services Support',
      icon: Brain,
      description: 'AI and machine learning service support',
      priority: 'high',
      responseTime: '1-3 hours'
    },
    {
      id: 'security',
      title: 'Security Support',
      icon: Shield,
      description: 'Security incidents and compliance questions',
      priority: 'critical',
      responseTime: '30 minutes - 1 hour'
    },
    {
      id: 'enterprise',
      title: 'Enterprise Support',
      icon: Rocket,
      description: 'Enterprise customer support and account management',
      priority: 'critical',
      responseTime: '30 minutes - 1 hour'
    }
  ];

  const contactMethods = [
    {
      title: 'Live Chat',
      icon: MessageCircle,
      description: 'Get instant help from our support team',
      availability: '24/7',
      responseTime: 'Immediate',
      color: 'from-green-500 to-emerald-500',
      path: '/chat'
    },
    {
      title: 'Phone Support',
      icon: Phone,
      description: 'Call us directly for urgent issues',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Immediate',
      color: 'from-blue-500 to-cyan-500',
      path: 'tel:+13024640950'
    },
    {
      title: 'Email Support',
      icon: Mail,
      description: 'Send detailed messages for complex issues',
      availability: '24/7',
      responseTime: '2-4 hours',
      color: 'from-purple-500 to-pink-500',
      path: 'mailto:kleber@ziontechgroup.com'
    },
    {
      title: 'Schedule Call',
      icon: Calendar,
      description: 'Book a dedicated support session',
      availability: 'Mon-Fri 9AM-6PM EST',
      responseTime: 'Scheduled',
      color: 'from-orange-500 to-red-500',
      path: '/schedule'
    }
  ];

  const faqCategories = [
    {
      title: 'Getting Started',
      questions: [
        'How do I create my first project?',
        'What are the system requirements?',
        'How do I set up my account?'
      ]
    },
    {
      title: 'AI Services',
      questions: [
        'How do I integrate AI services?',
        'What AI models do you support?',
        'How do I train custom AI models?'
      ]
    },
    {
      title: 'Billing & Pricing',
      questions: [
        'How does your pricing work?',
        'Can I change my plan?',
        'What payment methods do you accept?'
      ]
    }
  ];

  const supportTiers = [
    {
      name: 'Basic Support',
      description: 'Standard support for all customers',
      features: [
        'Email support (2-4 hour response)',
        'Help center access',
        'Community forum access',
        'Documentation access'
      ],
      included: true
    },
    {
      name: 'Priority Support',
      description: 'Enhanced support for business customers',
      features: [
        'Phone support (1-2 hour response)',
        'Live chat support',
        'Priority ticket handling',
        'Dedicated support team'
      ],
      included: false
    },
    {
      name: 'Enterprise Support',
      description: 'Premium support for enterprise customers',
      features: [
        '24/7 phone support',
        'Dedicated account manager',
        'Custom SLA agreements',
        'On-site support available'
      ],
      included: false
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'text-red-400 bg-red-400/10';
      case 'high':
        return 'text-orange-400 bg-orange-400/10';
      case 'medium':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'low':
        return 'text-green-400 bg-green-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case 'critical':
        return <XCircle className="w-4 h-4" />;
      case 'high':
        return <AlertCircle className="w-4 h-4" />;
      case 'medium':
        return <Clock className="w-4 h-4" />;
      case 'low':
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mr-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">Support Center</h1>
              <p className="text-xl text-zion-slate-light">Get the help you need, when you need it</p>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Get Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Link
                key={index}
                to={method.path}
                className="group bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {method.title}
                </h3>
                <p className="text-sm text-zion-slate-light mb-3">{method.description}</p>
                <div className="space-y-1 text-xs text-zion-slate-light">
                  <div className="flex items-center justify-between">
                    <span>Availability:</span>
                    <span className="text-zion-cyan">{method.availability}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Response:</span>
                    <span className="text-zion-cyan">{method.responseTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Support Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Categories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {supportCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`cursor-pointer bg-white/5 backdrop-blur-sm border rounded-xl p-6 transition-all duration-300 hover:bg-white/10 ${
                  selectedCategory === category.id
                    ? 'border-zion-cyan bg-zion-cyan/10'
                    : 'border-zion-cyan/20'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                      <p className="text-zion-slate-light">{category.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {getPriorityIcon(category.priority)}
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(category.priority)}`}>
                      {category.priority}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zion-slate-light">Response Time:</span>
                  <span className="text-zion-cyan font-semibold">{category.responseTime}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {faqCategories.map((category, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                <div className="space-y-3">
                  {category.questions.map((question, qIndex) => (
                    <Link
                      key={qIndex}
                      to={`/help/${category.title.toLowerCase().replace(/\s+/g, '-')}/${qIndex}`}
                      className="block p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                          {question}
                        </span>
                        <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Tiers */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {supportTiers.map((tier, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-zion-cyan/20 rounded-xl p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{tier.name}</h3>
                  <p className="text-zion-slate-light">{tier.description}</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  {tier.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-zion-slate-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  {tier.included ? (
                    <span className="inline-block px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-medium">
                      Included
                    </span>
                  ) : (
                    <Link
                      to="/contact"
                      className="inline-block px-4 py-2 bg-zion-cyan/20 text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan/30 transition-colors"
                    >
                      Contact Sales
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light mb-2">+1 302 464 0950</p>
              <p className="text-xs text-zion-slate-light">Mon-Fri 9AM-6PM EST</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light mb-2">kleber@ziontechgroup.com</p>
              <p className="text-xs text-zion-slate-light">24/7 Support</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light mb-2">364 E Main St STE 1008</p>
              <p className="text-xs text-zion-slate-light">Middletown DE 19709</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Website</h3>
              <p className="text-zion-slate-light mb-2">ziontechgroup.com</p>
              <p className="text-xs text-zion-slate-light">24/7 Access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;