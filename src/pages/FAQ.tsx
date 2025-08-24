import React, { useState } from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Zion Tech Group?",
    answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem.",
    category: "General"
  },
  {
    question: "How does the marketplace work?",
    answer: "Our marketplace allows businesses to find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. Users can browse categories, post requirements, and connect directly with providers.",
    category: "Marketplace"
  },
  {
    question: "Is it really free to use?",
    answer: "Yes! Zion is completely free to use for both talent and clients. We believe in democratizing access to AI and technology solutions by removing financial barriers.",
    category: "Pricing"
  },
  {
    question: "What types of services are available?",
    answer: "We offer a wide range of services including AI development, machine learning consulting, software development, IT support, data analysis, and specialized equipment rentals. Our categories cover everything from basic IT support to advanced AI solutions.",
    category: "Services"
  },
  {
    question: "How do I find the right talent for my project?",
    answer: "You can browse our talent directory, use our AI matcher tool, or post a job listing. Our platform includes detailed profiles, reviews, and portfolio showcases to help you make informed decisions.",
    category: "Talent"
  },
  {
    question: "What qualifications do your talent have?",
    answer: "All talent on our platform undergoes verification processes. We showcase verified professionals with proven track records, portfolios, and client testimonials to ensure quality.",
    category: "Talent"
  },
  {
    question: "How do payments work?",
    answer: "We offer secure payment processing through our platform. Clients can pay for services using various methods, and we ensure secure transactions with escrow protection for larger projects.",
    category: "Payments"
  },
  {
    question: "What if I'm not satisfied with a service?",
    answer: "We have a comprehensive dispute resolution system. If you're not satisfied, you can contact our support team, and we'll work to resolve the issue fairly for all parties involved.",
    category: "Support"
  },
  {
    question: "Do you offer enterprise solutions?",
    answer: "Yes! We provide enterprise-grade solutions for larger organizations, including dedicated support, custom integrations, and specialized service packages tailored to enterprise needs.",
    category: "Enterprise"
  },
  {
    question: "How do I get started as a talent provider?",
    answer: "Simply sign up for an account, complete your profile with your skills and experience, upload your portfolio, and start receiving project requests. Our onboarding process is designed to be quick and easy.",
    category: "Talent"
  },
  {
    question: "What security measures do you have?",
    answer: "We implement enterprise-grade security including SSL encryption, secure authentication, and regular security audits. Your data and transactions are protected with industry-standard security protocols.",
    category: "Security"
  },
  {
    question: "Can I hire for long-term projects?",
    answer: "Absolutely! We support both short-term and long-term engagements. Many of our clients hire talent for ongoing projects, and we provide tools to manage long-term relationships effectively.",
    category: "Projects"
  },
  {
    question: "Do you offer mobile access?",
    answer: "Yes! We have a mobile app available for both iOS and Android, allowing you to manage projects, communicate with talent, and access the marketplace on the go.",
    category: "Mobile"
  },
  {
    question: "What makes Zion different from other platforms?",
    answer: "Zion is unique because we're completely free, focus specifically on AI and high-tech, offer comprehensive verification, and provide an integrated ecosystem for talent, services, and equipment all in one place.",
    category: "General"
  },
  {
    question: "How do I contact support?",
    answer: "You can reach our support team through our contact page, email support, or live chat. We typically respond within 24 hours and offer priority support for enterprise clients.",
    category: "Support"
  }
];

const categories = ["General", "Marketplace", "Services", "Talent", "Pricing", "Payments", "Projects", "Enterprise", "Security", "Support", "Mobile"];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI and technology marketplace. Learn how our platform works, pricing, and how to get started."
        keywords="FAQ, frequently asked questions, Zion Tech Group, AI marketplace, tech services, support"
        canonical="https://ziontechgroup.com/faq"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group and our marketplace
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === "All"
                    ? "bg-zion-purple text-white"
                    : "bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan"
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-zion-purple text-white"
                      : "bg-zion-blue-dark text-zion-slate-light hover:bg-zion-purple/20 hover:text-zion-cyan"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zion-blue-light/20 transition-colors"
                >
                  <span className="text-white font-medium text-lg">{faq.question}</span>
                  {openItems.has(index) ? (
                    <ChevronUp className="h-5 w-5 text-zion-cyan" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-zion-cyan" />
                  )}
                </button>
                {openItems.has(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Still have questions?</h3>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
              >
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}