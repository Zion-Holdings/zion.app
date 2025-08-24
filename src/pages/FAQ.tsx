import React, { useState } from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: "Getting Started",
      items: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem."
        },
        {
          question: "How do I get started on Zion?",
          answer: "Getting started is easy! Simply create an account, complete your profile, and start exploring our marketplace. You can browse services, connect with talent, or showcase your own expertise."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use. We believe in democratizing access to technology and removing barriers that prevent innovation from thriving."
        }
      ]
    },
    {
      category: "For Talent & Creators",
      items: [
        {
          question: "How can I showcase my skills on Zion?",
          answer: "Create a comprehensive profile highlighting your expertise, upload your portfolio, and list your services. Our platform makes it easy for potential clients to discover and connect with you."
        },
        {
          question: "What types of professionals can join Zion?",
          answer: "We welcome all tech professionals including AI specialists, software developers, data scientists, cybersecurity experts, cloud architects, and many more. If you work in technology, Zion is for you."
        },
        {
          question: "How do I get paid for my services?",
          answer: "Zion provides secure payment processing and escrow services to ensure safe transactions. You'll receive payments directly to your account once projects are completed and approved."
        }
      ]
    },
    {
      category: "For Clients & Employers",
      items: [
        {
          question: "How do I find the right talent for my project?",
          answer: "Use our advanced search and filtering system to find professionals with the exact skills you need. You can review profiles, portfolios, and ratings to make informed decisions."
        },
        {
          question: "What types of projects can I post?",
          answer: "From AI development and web applications to cybersecurity audits and cloud migrations, you can post any technology-related project. Our diverse talent pool can handle projects of all sizes and complexities."
        },
        {
          question: "How does Zion ensure quality?",
          answer: "We implement a comprehensive vetting system including skill verification, portfolio reviews, and client feedback. Our rating system helps you identify top-performing professionals."
        }
      ]
    },
    {
      category: "Services & Equipment",
      items: [
        {
          question: "What services are available on Zion?",
          answer: "Zion offers a wide range of services including AI development, web and mobile development, cloud solutions, cybersecurity, data analytics, and much more. Our marketplace covers the full spectrum of technology services."
        },
        {
          question: "Can I buy or sell equipment on Zion?",
          answer: "Yes! Zion's marketplace includes both services and equipment. You can find everything from high-performance computing hardware to specialized AI development tools."
        },
        {
          question: "How do I know if a service provider is legitimate?",
          answer: "All providers on Zion undergo verification processes. Look for verified badges, read reviews, and check their portfolio. Our platform also provides dispute resolution if issues arise."
        }
      ]
    },
    {
      category: "Technical Support",
      items: [
        {
          question: "What if I encounter technical issues?",
          answer: "Our support team is available to help with any technical issues. You can reach us through live chat, email, or phone during business hours."
        },
        {
          question: "Is my data secure on Zion?",
          answer: "Absolutely. We implement enterprise-grade security measures to protect your data, including encryption, secure authentication, and regular security audits."
        },
        {
          question: "Can I integrate Zion with my existing tools?",
          answer: "Yes! Zion offers APIs and integration options to connect with your existing workflow tools, project management systems, and communication platforms."
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion's AI and tech marketplace platform." 
        keywords="FAQ, help, support, Zion marketplace, questions"
        url="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to common questions about Zion's platform and services
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQ..."
                className="w-full p-4 bg-zion-blue-dark border border-zion-blue-light text-white placeholder-zion-slate-light rounded-lg"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-zion-cyan text-zion-blue-dark p-2 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div key={itemIndex} className="border border-zion-blue-light rounded-lg">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-4 text-left bg-zion-blue-dark hover:bg-zion-blue-light/10 transition-colors flex justify-between items-center"
                        >
                          <span className="text-white font-medium">{item.question}</span>
                          <svg 
                            className={`w-5 h-5 text-zion-cyan transform transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="p-4 bg-zion-blue-dark border-t border-zion-blue-light">
                            <p className="text-zion-slate-light">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
            <p className="text-zion-slate-light mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-zion-cyan text-zion-blue-dark px-8 py-3 rounded-lg font-semibold hover:bg-zion-cyan-light transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </main>
    </>
  );
}