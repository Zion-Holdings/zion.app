import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    {
      id: 1,
      question: "What services does Zion Tech Group offer?",
      answer: "Zion Tech Group offers a comprehensive range of technology services including AI & Machine Learning, Cloud & DevOps, Cybersecurity, Digital Transformation, Micro SAAS Services, and Enterprise Solutions. We also provide talent matching and equipment solutions."
    },
    {
      id: 2,
      question: "How do I get started with Zion Tech Group?",
      answer: "Getting started is easy! You can contact us through our contact form, request a free quote, or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business."
    },
    {
      id: 3,
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and technology. Our solutions are adaptable to any industry that can benefit from digital transformation and AI integration."
    },
    {
      id: 4,
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we provide 24/7 support and maintenance for all our solutions. We offer different support tiers to meet your specific needs, from basic maintenance to comprehensive managed services."
    },
    {
      id: 5,
      question: "What is your pricing structure?",
      answer: "Our pricing varies based on the scope and complexity of your project. We offer flexible pricing models including project-based, subscription-based, and custom enterprise solutions. Contact us for a personalized quote."
    },
    {
      id: 6,
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity. Simple implementations can take 2-4 weeks, while complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: 7,
      question: "Do you work with small businesses?",
      answer: "Absolutely! We work with businesses of all sizes, from startups to Fortune 500 companies. Our Micro SAAS Services are specifically designed for small to medium businesses looking to scale efficiently."
    },
    {
      id: 8,
      question: "What makes Zion Tech Group different from other providers?",
      answer: "We combine cutting-edge AI technology with deep industry expertise, offer personalized solutions rather than one-size-fits-all approaches, provide comprehensive end-to-end services, and maintain a strong focus on innovation and customer success."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Frequently asked questions about Zion's AI marketplace, IT services, and equipment solutions."
        keywords="FAQ, frequently asked questions, Zion, AI marketplace, IT services, support"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services, processes, and how we can help transform your business.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.id}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between text-white hover:bg-white/20 transition-colors"
                >
                  <span className="font-semibold text-lg">{item.question}</span>
                  {openItems.includes(item.id) ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  )}
                </button>
                {openItems.includes(item.id) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 border border-blue-400/30 rounded-2xl p-12 backdrop-blur-md text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Contact Support</h3>
                <p className="text-gray-300 mb-4">
                  Get in touch with our technical support team for immediate assistance.
                </p>
                <a 
                  href="/contact" 
                  className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Contact Us
                </a>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Help Center</h3>
                <p className="text-gray-300 mb-4">
                  Browse our comprehensive help articles and tutorials.
                </p>
                <a 
                  href="/help" 
                  className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-md transition-colors"
                >
                  Visit Help Center
                </a>
              </div>
              
              <div className="text-center p-6 bg-white/10 rounded-lg border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">Live Chat</h3>
                <p className="text-gray-300 mb-4">
                  Chat with our support team in real-time for quick answers.
                </p>
                <button className="inline-block bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-md transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQ;