import React from 'react';
<<<<<<< HEAD
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What services does Zion Tech Group offer?",
      answer: "We offer comprehensive technology solutions including AI & Machine Learning, Micro-SaaS Development, IT Infrastructure, Cybersecurity, Cloud Migration, and Digital Transformation services."
    },
    {
      question: "How quickly can you start working on a project?",
      answer: "We can typically begin work within 1-2 weeks after initial consultation and project scoping. For urgent projects, we can expedite the process."
    },
    {
      question: "Do you provide ongoing support after project completion?",
      answer: "Yes, we offer various support packages including 24/7 monitoring, regular maintenance, and ongoing optimization to ensure your solutions continue to perform optimally."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work across multiple industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are adaptable to any business sector."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with industry standards like GDPR and SOC 2."
    },
    {
      question: "Can you work with existing systems and infrastructure?",
      answer: "Absolutely! We specialize in integrating with existing systems and can work with your current infrastructure to enhance and optimize it without disrupting operations."
    },
    {
      question: "What is your pricing model?",
      answer: "We offer flexible pricing models including project-based pricing, monthly retainers, and performance-based pricing. Each project is customized to meet your specific needs and budget."
    },
    {
      question: "Do you provide training for your solutions?",
      answer: "Yes, we provide comprehensive training for your team to ensure they can effectively use and maintain the solutions we implement."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and how we can help transform your business.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg">
                  <AccordionTrigger className="text-left px-6 py-4 text-lg font-semibold text-white hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
=======
import { FaqSection } from "@/components/FaqSection";
import { SEO } from "@/components/SEO";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";

export default function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Frequently asked questions about Zion's AI marketplace, IT services, and equipment solutions."
        keywords="FAQ, frequently asked questions, Zion, AI marketplace, IT services, support"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <AppHeader />
      
      <main className="pt-16">
        <FaqSection />
        
        {/* Additional FAQ content */}
        <section className="py-20 bg-zion-blue-dark">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-zion-slate-light text-xl max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20">
                <h3 className="text-xl font-semibold text-white mb-3">Contact Support</h3>
                <p className="text-zion-slate-light mb-4">
                  Get in touch with our technical support team for immediate assistance.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-zion-purple hover:bg-zion-purple-light text-white px-6 py-2 rounded-md transition-colors"
                >
                  Contact Us
                </a>
              </div>
              
              <div className="text-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20">
                <h3 className="text-xl font-semibold text-white mb-3">Help Center</h3>
                <p className="text-zion-slate-light mb-4">
                  Browse our comprehensive help articles and tutorials.
                </p>
                <a 
                  href="/help" 
                  className="inline-block bg-zion-purple hover:bg-zion-purple-light text-white px-6 py-2 rounded-md transition-colors"
                >
                  Visit Help Center
                </a>
              </div>
              
              <div className="text-center p-6 bg-zion-blue-light rounded-lg border border-zion-purple/20">
                <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                <p className="text-zion-slate-light mb-4">
                  Chat with our support team in real-time for quick answers.
                </p>
                <button className="inline-block bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-6 py-2 rounded-md transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-a776
