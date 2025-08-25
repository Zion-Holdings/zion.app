import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

export default function FAQ() {
  const faqs = [
    { question: "What services does Zion Tech Group offer?", answer: "We offer comprehensive technology solutions including AI & Machine Learning, Micro-SaaS Development, IT Infrastructure, Cybersecurity, Cloud Migration, and Digital Transformation services." },
    { question: "How quickly can you start working on a project?", answer: "We can typically begin work within 1-2 weeks after initial consultation and project scoping. For urgent projects, we can expedite the process." },
    { question: "Do you provide ongoing support after project completion?", answer: "Yes, we offer various support packages including 24/7 monitoring, regular maintenance, and ongoing optimization to ensure your solutions continue to perform optimally." },
    { question: "What industries do you specialize in?", answer: "We work across multiple industries including healthcare, finance, manufacturing, retail, and technology. Our solutions are adaptable to any business sector." },
    { question: "How do you ensure data security and privacy?", answer: "We implement enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with industry standards like GDPR and SOC 2." },
    { question: "Can you work with existing systems and infrastructure?", answer: "Absolutely! We specialize in integrating with existing systems and can work with your current infrastructure to enhance and optimize it without disrupting operations." },
    { question: "What is your pricing model?", answer: "We offer flexible pricing models including project-based pricing, monthly retainers, and performance-based pricing. Each project is customized to meet your specific needs and budget." },
    { question: "Do you provide training for your solutions?", answer: "Yes, we provide comprehensive training for your team to ensure they can effectively use and maintain the solutions we implement." }
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
              <Accordion key={index} className="bg-white/10 backdrop-blur-md border-white/20 rounded-lg">
                <AccordionItem className="">
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
            <h2 className="text-3xl font-bold mb-6 text-white">Still Have Questions?</h2>
            <p className="text-xl text-gray-300 mb-8">Can't find the answer you're looking for? Our team is here to help.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">Contact Us</a>
              <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300">Call Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
