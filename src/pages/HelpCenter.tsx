import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Search, MessageCircle, BookOpen, Video, FileText, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Click the 'Sign Up' button in the top right corner and fill out the registration form with your email, password, and basic information. You'll receive a verification email to activate your account."
    },
    {
      question: "How do I post a job or service?",
      answer: "After logging in, go to the 'Post Job' or 'Publish' section. Fill out the required details including title, description, budget, and requirements. Submit for review and approval."
    },
    {
      question: "How does the AI matching work?",
      answer: "Our AI analyzes your requirements and matches you with the best-suited talent or services based on skills, experience, availability, and past performance. Use the AI Matcher tool for optimal results."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards, PayPal, and bank transfers. All payments are processed securely through our platform with escrow protection for your safety."
    },
    {
      question: "How do I resolve disputes?",
      answer: "If you encounter issues, first try to resolve them directly with the other party. If that's not possible, contact our support team who will mediate and help find a fair resolution."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your personal and financial information. We never share your data with third parties without your consent."
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using our platform",
      icon: BookOpen,
      color: "text-zion-cyan",
      bgColor: "bg-zion-cyan/10",
      href: "/help/getting-started"
    },
    {
      title: "Account Management",
      description: "Manage your profile and settings",
      icon: Users,
      color: "text-zion-purple",
      bgColor: "bg-zion-purple/10",
      href: "/help/account"
    },
    {
      title: "Marketplace Guide",
      description: "How to buy and sell on our platform",
      icon: FileText,
      color: "text-zion-green",
      bgColor: "bg-zion-green/10",
      href: "/help/marketplace"
    },
    {
      title: "AI Tools",
      description: "Maximize your use of our AI features",
      icon: Video,
      color: "text-zion-orange",
      bgColor: "bg-zion-orange/10",
      href: "/help/ai-tools"
    }
  ];

  return (
    <>
      <SEO
        title="Help Center | Zion Tech Group"
        description="Get help and support for using the Zion Tech Group platform. Find answers to common questions and learn how to use our features."
        canonical="https://ziontechgroup.com/help"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to your questions and learn how to make the most of our platform
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and FAQs..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {helpCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card key={category.title} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors">
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-3`}>
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button asChild variant="outline" className="w-full">
                      <Link to={category.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6 mb-16">
            <h2 className="text-2xl font-bold text-white mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button asChild className="w-full bg-zion-purple hover:bg-zion-purple-dark">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/api-docs">View API Documentation</Link>
              </Button>
              <Button asChild variant="outline" className="w-full">
                <Link to="/blog">Browse Tutorials</Link>
              </Button>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-zion-cyan">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-zion-slate-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-8 max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Still Need Help?</h3>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you with any questions or issues you may have.
              </p>
              <div className="space-x-4">
                <Button asChild className="bg-zion-purple hover:bg-zion-purple-dark">
                  <Link to="/contact">Contact Support</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/community">Ask Community</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}