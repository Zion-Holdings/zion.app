import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, MessageCircle, Users, Shield, CreditCard, Zap } from "lucide-react";

export default function FAQ() {
  const faqData = [
    {
      category: "General",
      icon: Search,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect businesses with top AI and tech talent, services, and equipment in one comprehensive platform."
        },
        {
          question: "How does Zion work?",
          answer: "Zion operates as a two-sided marketplace where businesses can find and hire AI/tech professionals, purchase services, and acquire equipment. Talented individuals can showcase their skills, offer services, and find opportunities."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free for both businesses and talent. We believe in democratizing access to AI and tech resources, so there are no subscription fees or hidden costs."
        }
      ]
    },
    {
      category: "For Businesses",
      icon: Users,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "You can browse our talent directory, use our AI-powered matching system, or post a job listing. Our platform includes detailed profiles, portfolios, and reviews to help you make informed decisions."
        },
        {
          question: "What types of services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, software engineering, data science, IT consulting, equipment sales, and specialized tech solutions across various industries."
        },
        {
          question: "How do I ensure quality when hiring through Zion?",
          answer: "All talent on Zion undergoes verification processes. You can review portfolios, check ratings and reviews, conduct interviews, and use our milestone-based payment system for added security."
        }
      ]
    },
    {
      category: "For Talent",
      icon: Zap,
      questions: [
        {
          question: "How do I create a profile on Zion?",
          answer: "Sign up for free and complete your profile with your skills, experience, portfolio, and rates. You can also add certifications, previous work samples, and professional references."
        },
        {
          question: "What are the payment terms?",
          answer: "Zion uses milestone-based payments to ensure both parties are protected. Payments are released upon project completion or milestone approval, with secure escrow services available."
        },
        {
          question: "Can I work with international clients?",
          answer: "Yes! Zion is a global platform. You can work with clients from anywhere in the world, and our platform handles currency conversion and international payment processing."
        }
      ]
    },
    {
      category: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How does Zion protect my data?",
          answer: "We use enterprise-grade security measures including end-to-end encryption, secure payment processing, and strict data protection policies. Your information is never shared without consent."
        },
        {
          question: "What happens if there's a dispute?",
          answer: "Zion has a comprehensive dispute resolution system. Our support team mediates conflicts, and we offer arbitration services for complex cases to ensure fair outcomes for all parties."
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely. We use industry-standard SSL encryption and PCI DSS compliance for all payment processing. We never store your full payment details on our servers."
        }
      ]
    },
    {
      category: "Billing & Payments",
      icon: CreditCard,
      questions: [
        {
          question: "What payment methods does Zion accept?",
          answer: "We accept major credit cards, bank transfers, and digital wallets. For enterprise clients, we also offer invoicing and payment terms."
        },
        {
          question: "Are there any transaction fees?",
          answer: "Zion charges a small percentage fee on completed transactions to maintain our platform. This fee is transparent and clearly displayed before any transaction."
        },
        {
          question: "How quickly do I receive payments?",
          answer: "Payments are typically processed within 1-3 business days after project completion or milestone approval, depending on your chosen payment method."
        }
      ]
    },
    {
      category: "Support",
      icon: MessageCircle,
      questions: [
        {
          question: "How can I get help if I need support?",
          answer: "Our support team is available 24/7 through live chat, email at support@ziontechgroup.com, and phone support. We also have an extensive help center with tutorials and guides."
        },
        {
          question: "Does Zion offer training or onboarding?",
          answer: "Yes! We provide comprehensive onboarding for new users, including video tutorials, best practices guides, and one-on-one sessions with our success team."
        },
        {
          question: "Can I schedule a demo of Zion's features?",
          answer: "Absolutely! We offer personalized demos for businesses and talent. Contact our sales team to schedule a walkthrough of our platform's capabilities."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group, the world's first free AI and tech marketplace."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Everything you need to know about Zion Tech Group, the world's premier AI and tech marketplace
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-zion-blue-dark border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-zion-cyan">
                    <category.icon className="h-6 w-6" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
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
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-zion-slate-light mb-6">
                Our support team is here to help you get the most out of Zion Tech Group
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple hover:bg-zion-purple-light text-white font-medium rounded-lg transition-colors"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Email Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple/10 font-medium rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}