import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, MessageCircle, Phone, Mail, FileText, Users, Settings, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const helpCategories = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      items: [
        "How to create an account",
        "Setting up your profile",
        "Navigating the marketplace",
        "First steps guide"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Account & Profile",
      description: "Manage your account and profile settings",
      items: [
        "Updating profile information",
        "Account security settings",
        "Verification process",
        "Privacy controls"
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Marketplace Features",
      description: "Understanding our marketplace tools",
      items: [
        "Searching for services",
        "Booking appointments",
        "Payment methods",
        "Reviews and ratings"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety & Security",
      description: "Stay safe while using our platform",
      items: [
        "Trust and safety guidelines",
        "Reporting issues",
        "Data protection",
        "Secure transactions"
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Technical Support",
      description: "Get help with technical issues",
      items: [
        "Browser compatibility",
        "Mobile app support",
        "Performance issues",
        "Error troubleshooting"
      ]
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Policies & Terms",
      description: "Understanding our rules and policies",
      items: [
        "Terms of service",
        "Privacy policy",
        "Community guidelines",
        "Refund policies"
      ]
    }
  ];

  const popularQuestions = [
    {
      question: "How do I get started on Zion Tech Group?",
      answer: "Creating an account is simple! Just click the 'Sign Up' button, provide your basic information, and verify your email. You can then start exploring our marketplace and connecting with AI and tech professionals."
    },
    {
      question: "What services are available on the platform?",
      answer: "We offer a wide range of services including AI development, cybersecurity, IT consulting, Green IT solutions, and comprehensive tech services. Each category has specialized professionals ready to help."
    },
    {
      question: "How do I know if a service provider is trustworthy?",
      answer: "All our providers go through a verification process. You can check their ratings, reviews, and credentials. We also have a trust and safety team that monitors the platform."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and bank transfers. All payments are processed securely through our platform, and we offer protection for both buyers and sellers."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team through the contact form, email at support@ziontechgroup.com, or call us at +1 (555) 123-4567. We typically respond within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Find answers to common questions, get technical support, and learn how to make the most of our AI and tech marketplace.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Browse Help Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-zion-blue-light hover:bg-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-zion-cyan">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white">{category.title}</CardTitle>
                      <CardDescription className="text-zion-slate-light">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-zion-slate-light text-sm hover:text-zion-cyan transition-colors cursor-pointer">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Questions */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {popularQuestions.map((faq, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="text-white text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Still need help?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Our support team is here to help you with any questions or issues you might have.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <Mail className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Email Support</h3>
                <p className="text-zion-slate-light text-sm">support@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <Phone className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Phone Support</h3>
                <p className="text-zion-slate-light text-sm">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex flex-col items-center space-y-3 p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-zion-blue-light">
                <MessageCircle className="h-8 w-8 text-zion-cyan" />
                <h3 className="text-white font-semibold">Live Chat</h3>
                <p className="text-zion-slate-light text-sm">Available 24/7</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Link to="/faq">View All FAQs</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}