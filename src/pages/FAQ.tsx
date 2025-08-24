import React from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function FAQ() {
  const faqs = [
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals with businesses and individuals seeking AI and tech services, equipment, and expertise."
    },
    {
      question: "How do I get started on Zion?",
      answer: "Getting started is easy! Simply create an account, choose whether you're a talent (service provider) or client (service seeker), complete your profile, and start exploring opportunities or posting projects."
    },
    {
      question: "What services can I find on Zion?",
      answer: "Zion offers a wide range of services including AI development, software engineering, data science, IT consulting, equipment rental, and specialized tech services. Our platform covers everything from basic IT support to cutting-edge AI solutions."
    },
    {
      question: "How does the talent matching work?",
      answer: "Our AI-powered matching system analyzes your project requirements and matches you with the most suitable talent based on skills, experience, availability, and past performance. You can also browse talent profiles directly."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free for both talent and clients. We believe in democratizing access to tech talent and services. There are no hidden fees or subscription costs."
    },
    {
      question: "How do I ensure quality of work?",
      answer: "Zion features a comprehensive review and rating system, portfolio showcases, and verified profiles. You can review past work, check references, and communicate directly with talent before hiring."
    },
    {
      question: "What payment methods are accepted?",
      answer: "Zion supports multiple payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform with escrow protection for your peace of mind."
    },
    {
      question: "Can I hire talent for long-term projects?",
      answer: "Absolutely! Zion supports both short-term and long-term engagements. You can hire talent for one-time projects, ongoing work, or full-time positions depending on your needs."
    },
    {
      question: "How do I protect my intellectual property?",
      answer: "Zion includes built-in IP protection through our terms of service and contract templates. All agreements clearly define ownership rights, confidentiality requirements, and data protection measures."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "Zion has a dispute resolution system in place. If you're not satisfied with the work, our team will help mediate the situation and ensure fair resolution for all parties involved."
    },
    {
      question: "Do you offer enterprise solutions?",
      answer: "Yes! Zion provides enterprise-grade solutions for larger organizations, including dedicated account management, custom integrations, bulk hiring capabilities, and specialized support services."
    },
    {
      question: "How can I stay updated with Zion news?",
      answer: "Subscribe to our newsletter, follow us on social media, or check our blog regularly for updates on new features, success stories, and industry insights."
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion Tech Group, the world's first free AI and tech marketplace."
        keywords="FAQ, Zion Tech Group, AI marketplace, tech services, help, support"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light">
              Everything you need to know about Zion Tech Group
            </p>
          </div>

          <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-slate-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h2>
              <p className="text-zion-slate-light mb-6">
                Can't find the answer you're looking for? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                >
                  Visit Our Blog
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}