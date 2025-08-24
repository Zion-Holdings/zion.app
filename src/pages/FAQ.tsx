import React from 'react';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function FAQ() {
  const faqData = [
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with top AI and tech talent, services, and equipment in one comprehensive platform."
    },
    {
      question: "How does the AI talent matching work?",
      answer: "Our AI-powered matching system analyzes your project requirements, budget, and timeline to connect you with the most suitable tech professionals. The system considers skills, experience, availability, and past performance to ensure optimal matches."
    },
    {
      question: "What types of services do you offer?",
      answer: "We offer a wide range of services including AI development, software engineering, IT consulting, equipment rental, green IT solutions, and specialized tech services. Our marketplace covers everything from individual freelancers to enterprise solutions."
    },
    {
      question: "Is Zion Tech Group free to use?",
      answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to tech talent and services. Some premium features and enterprise solutions may have associated costs."
    },
    {
      question: "How do I get started as a client?",
      answer: "Simply create an account, post your project requirements, and our AI will match you with suitable talent. You can also browse our talent directory, equipment listings, and service categories to find what you need."
    },
    {
      question: "How do I join as a tech professional?",
      answer: "Create a profile highlighting your skills, experience, and portfolio. Our verification process ensures quality, and once approved, you'll start receiving project matches and can bid on opportunities."
    },
    {
      question: "What makes Zion different from other platforms?",
      answer: "Zion focuses exclusively on high-tech and AI, offering specialized matching algorithms, comprehensive equipment rentals, green IT solutions, and a community-driven approach that fosters innovation and collaboration."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes! We provide enterprise-grade solutions including team management, advanced analytics, custom integrations, and dedicated support for large organizations looking to scale their tech operations."
    },
    {
      question: "How do you ensure quality and security?",
      answer: "We implement rigorous verification processes, secure payment systems, dispute resolution mechanisms, and continuous monitoring to maintain high standards and protect all users."
    },
    {
      question: "Can I rent equipment through Zion?",
      answer: "Absolutely! Our equipment marketplace offers a wide range of tech equipment for rent, from development hardware to specialized AI computing resources, making it easier for businesses to access what they need without large capital investments."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion Tech Group's AI and tech marketplace services."
        keywords="FAQ, Zion Tech Group, AI marketplace, tech services, support"
        canonical="https://ziontechgroup.com/faq"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Get answers to common questions about Zion Tech Group's AI and tech marketplace platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-zion-blue-dark border-zion-purple/20">
            <CardHeader>
              <CardTitle className="text-zion-cyan text-2xl">General Questions</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Everything you need to know about our platform and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {faqData.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-white hover:text-zion-cyan">
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

          <div className="mt-12 text-center">
            <Card className="bg-zion-blue-dark border-zion-purple/20">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Still have questions?
                </h3>
                <p className="text-zion-slate-light mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/help"
                    className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                  >
                    Help Center
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}