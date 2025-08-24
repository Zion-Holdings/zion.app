
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle, Phone, Mail, FileText, Users, ShoppingCart, User, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenterPage() {
  const helpCategories = [
    {
      icon: <User className="w-8 h-8 text-zion-cyan" />,
      title: "Getting Started",
      description: "Learn the basics of using Zion's marketplace platform",
      articles: ["Creating an account", "Setting up your profile", "First steps guide"],
      color: "text-zion-cyan"
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-zion-purple" />,
      title: "Marketplace",
      description: "Buying and selling on our platform",
      articles: ["How to buy services", "Selling your services", "Payment methods"],
      color: "text-zion-purple"
    },
    {
      icon: <Users className="w-8 h-8 text-zion-cyan" />,
      title: "Talent & Hiring",
      description: "Finding talent and getting hired",
      articles: ["Hiring process", "Creating job posts", "Talent profiles"],
      color: "text-zion-cyan"
    },
    {
      icon: <Settings className="w-8 h-8 text-zion-purple" />,
      title: "Account & Settings",
      description: "Managing your account and preferences",
      articles: ["Account settings", "Privacy controls", "Security features"],
      color: "text-zion-purple"
    }
  ];

  const faqs = [
    {
      question: "How do I create an account on Zion?",
      answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner, fill in your basic information, verify your email, and you're ready to start using our platform."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our trusted payment partners."
    },
    {
      question: "How do I find the right talent for my project?",
      answer: "Use our AI-powered matching system, browse talent profiles by category, or post a job and let qualified professionals come to you. Our platform makes it easy to find the perfect match."
    },
    {
      question: "Is my data secure on Zion?",
      answer: "Absolutely! We use enterprise-grade security measures including SSL encryption, secure data centers, and strict access controls. Your privacy and data security are our top priorities."
    },
    {
      question: "What if I'm not satisfied with a service?",
      answer: "We have a comprehensive dispute resolution process. If you're not satisfied, contact our support team within 7 days of service completion, and we'll work to resolve the issue."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us through multiple channels: live chat on our website, email at support@ziontechgroup.com, or phone at +1 (555) 123-4567. We typically respond within 2 hours."
    }
  ];

  return (
    <>
      <SEO 
        title="Help Center - Zion Tech Group" 
        description="Get help and support for using Zion's marketplace platform. Find answers to common questions and contact our support team." 
        keywords="help center, support, FAQ, customer service, Zion Tech Group"
        canonical="https://ziontechgroup.com/help"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-6 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to your questions, learn how to use our platform, and get the support you need.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  className="pl-10 pr-4 py-3 bg-zion-blue-dark border-zion-blue-light text-white placeholder-zion-slate-light focus:border-zion-cyan"
                />
              </div>
            </div>
          </div>

          {/* Help Categories */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">How can we help you?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {helpCategories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-zion-cyan/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      {category.icon}
                      <CardTitle className={`text-xl ${category.color}`}>{category.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-3">Popular Articles:</h4>
                      <ul className="space-y-2">
                        {category.articles.map((article, idx) => (
                          <li key={idx} className="text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer">
                            • {article}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark">
                      Browse {category.title}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <CardHeader>
                    <CardTitle className="text-lg text-zion-cyan">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-zion-slate-light">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Contact Support */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Still need help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-zion-blue-dark border-zion-blue-light text-white text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <MessageCircle className="w-12 h-12 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-zion-cyan">Live Chat</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light mb-4">
                    Chat with our support team in real-time
                  </p>
                  <Button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-blue-light text-white text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Mail className="w-12 h-12 text-zion-purple" />
                  </div>
                  <CardTitle className="text-zion-purple">Email Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light mb-4">
                    Send us an email and we'll respond within 2 hours
                  </p>
                  <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-zion-blue-dark border-zion-blue-light text-white text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <Phone className="w-12 h-12 text-zion-cyan" />
                  </div>
                  <CardTitle className="text-zion-cyan">Phone Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light mb-4">
                    Call us directly for immediate assistance
                  </p>
                  <Button className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-blue-dark">
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Additional Resources */}
          <section className="text-center">
            <Card className="bg-zion-blue-dark border-zion-cyan/30 text-white max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">Additional Resources</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Explore our comprehensive guides and documentation
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/api-docs">
                    <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                      <FileText className="w-4 h-4 mr-2" />
                      API Documentation
                    </Button>
                  </Link>
                  <Link to="/developers">
                    <Button variant="outline" className="w-full border-zion-purple text-zion-purple hover:bg-zion-purple/10">
                      <Users className="w-4 h-4 mr-2" />
                      Developer Portal
                    </Button>
                  </Link>
                </div>
                <p className="text-sm text-zion-slate-light">
                  Need technical support? Our developer documentation and API guides are here to help.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}
