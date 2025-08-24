import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function FAQ() {
  const faqs = [
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem."
    },
    {
      question: "How does the marketplace work?",
      answer: "Our marketplace allows businesses to find AI talent, services, and equipment, while professionals can showcase their skills and find new opportunities. All transactions are facilitated through our secure platform with built-in project management tools."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free for users to join, browse, and connect. We believe in democratizing access to AI and technology solutions. Some premium features may have associated costs, but the core marketplace functionality is free."
    },
    {
      question: "What types of services are available?",
      answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT consulting, data analysis, cloud solutions, and specialized equipment rentals. Our platform covers the full spectrum of tech needs."
    },
    {
      question: "How do I get started as a talent provider?",
      answer: "Simply create an account, complete your profile with your skills and experience, upload your portfolio, and start receiving project requests. Our AI matching system will help connect you with relevant opportunities."
    },
    {
      question: "How do I find the right talent for my project?",
      answer: "You can browse our talent directory, use our AI matching system, or post a job listing. Our platform provides detailed profiles, reviews, and portfolio samples to help you make informed decisions."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We support multiple payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform with escrow protection for your peace of mind."
    },
    {
      question: "Is my data secure on Zion?",
      answer: "Absolutely. We use enterprise-grade security measures to protect your data. All communications are encrypted, and we never share your personal information with third parties without your explicit consent."
    },
    {
      question: "Can I work remotely through Zion?",
      answer: "Yes! Zion is designed for remote work. Our platform includes video conferencing, project management tools, and collaboration features that make remote work seamless and productive."
    },
    {
      question: "What if I have a dispute with a client or provider?",
      answer: "We have a comprehensive dispute resolution system in place. Our support team will work with both parties to find a fair solution. In rare cases, we can provide mediation services."
    },
    {
      question: "How do you verify talent and service providers?",
      answer: "We have a multi-step verification process including identity verification, skill assessments, portfolio reviews, and reference checks. We also maintain a rating and review system for ongoing quality assurance."
    },
    {
      question: "Can I use Zion for enterprise-level projects?",
      answer: "Absolutely! Zion is designed to handle projects of all sizes, from small consulting gigs to large enterprise implementations. We offer enterprise-specific features and dedicated support for large-scale projects."
    }
  ];

  const categories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Zion",
      icon: "🚀"
    },
    {
      title: "Account & Billing",
      description: "Manage your account and payments",
      icon: "💳"
    },
    {
      title: "Finding Work",
      description: "Tips for talent and service providers",
      icon: "💼"
    },
    {
      title: "Hiring Talent",
      description: "Guide for clients and employers",
      icon: "👥"
    },
    {
      title: "Project Management",
      description: "Tools and best practices",
      icon: "📋"
    },
    {
      title: "Safety & Security",
      description: "Protecting your information",
      icon: "🔒"
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about using the Zion Tech Group platform. Get help with marketplace features, account management, and more."
        keywords="FAQ, help, support, Zion Tech Group, marketplace questions"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about using the Zion Tech Group platform
            </p>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How can we help you?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zion-slate-light">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Common Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-white hover:text-zion-cyan text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-slate-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Still need help?</h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Our support team is here to help you get the most out of Zion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-colors"
                >
                  Email Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple/10 font-medium rounded-lg transition-colors"
                >
                  Contact Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}