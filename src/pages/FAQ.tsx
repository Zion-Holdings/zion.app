import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SEO } from '@/components/SEO';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Zion Tech Group?",
    answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with AI specialists, tech talent, and cutting-edge equipment.",
    category: "General"
  },
  {
    question: "How does the marketplace work?",
    answer: "Our marketplace allows businesses to browse and hire AI specialists, find tech services, and purchase equipment. Talented professionals can showcase their skills and connect with potential clients.",
    category: "General"
  },
  {
    question: "Is Zion really free to use?",
    answer: "Yes! Zion is completely free to use for both businesses and talent. We believe in democratizing access to AI and technology solutions.",
    category: "General"
  },
  {
    question: "How do I get started as a talent/creator?",
    answer: "Simply sign up for an account, complete your profile with your skills and experience, and start receiving job opportunities from businesses looking for your expertise.",
    category: "Talent"
  },
  {
    question: "How do I hire talent or services?",
    answer: "Browse our marketplace, filter by skills, location, or budget, and connect with talented professionals. You can also post job listings to attract the right candidates.",
    category: "Business"
  },
  {
    question: "What types of services are available?",
    answer: "We offer a wide range of services including AI development, web development, mobile apps, data science, cybersecurity, cloud services, and much more.",
    category: "Services"
  },
  {
    question: "How do you verify talent and services?",
    answer: "We have a comprehensive verification process including skill assessments, portfolio reviews, and client feedback to ensure quality and reliability.",
    category: "General"
  },
  {
    question: "Can I work remotely?",
    answer: "Absolutely! Many of our opportunities are remote-friendly, allowing you to work with clients from anywhere in the world.",
    category: "Talent"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We support various payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform.",
    category: "Business"
  },
  {
    question: "How do disputes get resolved?",
    answer: "We have a dedicated dispute resolution team that works to fairly resolve any issues between clients and talent. Our goal is to ensure satisfaction for all parties.",
    category: "General"
  },
  {
    question: "Do you offer support for enterprise clients?",
    answer: "Yes! We have dedicated enterprise solutions with additional features, priority support, and custom integrations for larger organizations.",
    category: "Business"
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our support team through our contact page, email, or live chat. We're available 24/7 to help with any questions or issues.",
    category: "General"
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];
  const filteredFAQ = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion Tech Group's AI marketplace and services."
        keywords="FAQ, frequently asked questions, Zion Tech Group, AI marketplace, support"
        canonical="https://ziontechgroup.com/faq"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Find answers to common questions about Zion Tech Group and our AI marketplace
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-zion-blue-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-zion-cyan text-zion-blue-dark'
                    : 'bg-zion-blue-light/20 text-white hover:bg-zion-purple/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQ.map((item, index) => (
              <div
                key={index}
                className="bg-zion-blue-light/10 border border-zion-purple/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-zion-purple/10 transition-colors"
                >
                  <span className="text-white font-semibold text-lg">{item.question}</span>
                  {openItems.has(index) ? (
                    <ChevronUp className="w-5 h-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-zion-cyan" />
                  )}
                </button>
                
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-zion-slate-light leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-zion-slate-light mb-8">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/help-center"
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan hover:text-zion-blue-dark transition-colors"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}