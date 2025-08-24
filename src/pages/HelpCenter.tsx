import React from 'react';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Search, BookOpen, MessageCircle, FileText, Users, Settings, HelpCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HelpCenter() {
  const faqCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        {
          question: 'How do I create an account?',
          answer: 'Click the "Sign Up" button in the top right corner and fill out the registration form with your email and password.'
        },
        {
          question: 'How do I post a job or service?',
          answer: 'After logging in, go to your dashboard and click "Post Job" or "Create Service" to get started.'
        },
        {
          question: 'What information do I need to create a profile?',
          answer: 'You\'ll need basic information like your name, skills, experience, and optionally a profile picture and portfolio.'
        }
      ]
    },
    {
      title: 'Marketplace',
      icon: Settings,
      items: [
        {
          question: 'How do I find talent or services?',
          answer: 'Use the search bar or browse categories to find what you\'re looking for. You can also use our AI-powered matching system.'
        },
        {
          question: 'How do payments work?',
          answer: 'We support secure payments through Stripe. Payments are held in escrow until the work is completed and approved.'
        },
        {
          question: 'What if I\'m not satisfied with the work?',
          answer: 'We have a dispute resolution process. Contact our support team if you need help resolving an issue.'
        }
      ]
    },
    {
      title: 'Account & Billing',
      icon: Users,
      items: [
        {
          question: 'How do I update my profile?',
          answer: 'Go to your dashboard and click on "Edit Profile" to make changes to your information.'
        },
        {
          question: 'How do I change my password?',
          answer: 'Go to Account Settings and click on "Change Password" to update your password.'
        },
        {
          question: 'What are the fees?',
          answer: 'We charge a small percentage fee on successful transactions. There are no upfront costs to use our platform.'
        }
      ]
    },
    {
      title: 'Technical Support',
      icon: HelpCircle,
      items: [
        {
          question: 'The website is not loading properly',
          answer: 'Try refreshing the page, clearing your browser cache, or using a different browser. If the issue persists, contact support.'
        },
        {
          question: 'I can\'t upload files',
          answer: 'Check that your file size is under 10MB and that you\'re using a supported file format (PDF, DOC, JPG, PNG).'
        },
        {
          question: 'How do I contact support?',
          answer: 'You can reach us through the contact form, email us at support@ziontechgroup.com, or call us at +1 (555) 123-4567.'
        }
      ]
    }
  ];

  const quickLinks = [
    { title: 'Contact Support', href: '/contact', icon: MessageCircle, description: 'Get in touch with our support team' },
    { title: 'API Documentation', href: '/api-docs', icon: FileText, description: 'Developer resources and API guides' },
    { title: 'Community Forum', href: '/community', icon: Users, description: 'Connect with other users' },
    { title: 'Blog & Updates', href: '/blog', icon: FileText, description: 'Latest news and platform updates' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Help Center | Zion Tech Group" 
        description="Get help and support for using the Zion Tech Group platform. Find answers to frequently asked questions and contact our support team."
        keywords="help, support, FAQ, customer service, Zion Tech Group"
        canonical="https://ziontechgroup.com/help"
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Find answers to common questions and get the support you need to make the most of our platform.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
            <input
              type="text"
              placeholder="Search for help articles, FAQs, or topics..."
              className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <Link key={link.title} to={link.href}>
                <Card className="h-full hover:bg-zion-blue-dark/50 transition-colors cursor-pointer border-zion-blue-light">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-5 w-5 text-zion-cyan" />
                      <CardTitle className="text-white text-lg">{link.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-zion-slate-light">
                      {link.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <IconComponent className="h-6 w-6 text-zion-cyan" />
                    <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left text-zion-slate-light hover:text-white">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zion-slate-light">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 text-center">
          <Card className="border-zion-blue-light bg-zion-blue-dark/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Still Need Help?</CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Can't find what you're looking for? Our support team is here to help.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact Support
                </Link>
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-blue-light text-white font-medium rounded-lg hover:bg-zion-blue-light/20 transition-colors"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Support
                </a>
              </div>
              <p className="text-zion-slate-light">
                Response time: Usually within 24 hours
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}