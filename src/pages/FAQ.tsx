import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import SEO from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQ() {
  const faqData = [
    {
      category: "General",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals, innovative services, and cutting-edge equipment in the tech industry."
        },
        {
          question: "Is Zion Tech Group really free to use?",
          answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to technology and talent. Some premium features may have associated costs, but the basic marketplace functionality is free."
        },
        {
          question: "How do I get started on Zion Tech Group?",
          answer: "Getting started is easy! Simply create an account, choose your role (talent, client, or both), and start exploring. You can browse services, post jobs, or showcase your skills immediately."
        }
      ]
    },
    {
      category: "For Talent & Creators",
      questions: [
        {
          question: "How do I create a talent profile?",
          answer: "After signing up, go to your dashboard and select 'Create Profile'. Fill in your skills, experience, portfolio items, and set your rates. A complete profile increases your visibility to potential clients."
        },
        {
          question: "What types of projects can I find?",
          answer: "Our platform hosts a wide range of tech projects including AI development, software engineering, IT consulting, hardware projects, and more. Projects vary from short-term gigs to long-term contracts."
        },
        {
          question: "How do payments work?",
          answer: "We use secure payment processing with escrow protection. Clients pay upfront, and funds are released upon project completion. We support multiple payment methods including credit cards and digital wallets."
        }
      ]
    },
    {
      category: "For Clients & Businesses",
      questions: [
        {
          question: "How do I post a project or job?",
          answer: "Create an account and go to 'Post Project' in your dashboard. Fill in the project details, requirements, budget, and timeline. Our AI will help match you with the best talent for your project."
        },
        {
          question: "What types of services can I find?",
          answer: "We offer a comprehensive range of technology services including AI development, web development, mobile apps, cloud infrastructure, cybersecurity, data analytics, and more. All services are vetted and quality-assured."
        },
        {
          question: "How do you ensure quality?",
          answer: "We have a rigorous vetting process for all talent and services. We verify credentials, review portfolios, and maintain a rating system. Additionally, our escrow system protects your investment until project completion."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if I encounter technical issues?",
          answer: "Our support team is available 24/7 to help with any technical issues. You can reach us through the help center, live chat, or email support. We typically respond within 2 hours."
        },
        {
          question: "Is my data secure?",
          answer: "Absolutely. We use enterprise-grade security measures including end-to-end encryption, secure cloud infrastructure, and regular security audits. Your data and communications are protected at all times."
        },
        {
          question: "Can I integrate Zion Tech Group with my existing tools?",
          answer: "Yes! We provide APIs and integrations with popular project management tools, CRMs, and development platforms. Our team can also create custom integrations for enterprise clients."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's marketplace platform, services, and how to get started."
        keywords="FAQ, help, support, Zion Tech Group, marketplace questions"
        canonical="https://ziontechgroup.com/faq"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Everything you need to know about Zion Tech Group's marketplace platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="mb-8 bg-zion-blue-dark border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, questionIndex) => (
                      <AccordionItem key={questionIndex} value={`item-${questionIndex}`}>
                        <AccordionTrigger className="text-left text-zion-slate-light hover:text-white">
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

          <div className="text-center mt-16">
            <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark border-zion-purple/30 p-8">
              <CardContent>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Still have questions?
                </h2>
                <p className="text-zion-slate-light mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="bg-zion-purple hover:bg-zion-purple-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Contact Support
                  </a>
                  <a
                    href="/help"
                    className="bg-zion-blue hover:bg-zion-blue-light text-white px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    Help Center
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}