import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
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
      category: "For Clients & Employers",
      questions: [
        {
          question: "How do I post a job or project?",
          answer: "Navigate to 'Post Job' in your dashboard, fill out the project requirements, budget, and timeline. Our AI matcher will help connect you with the best talent for your project."
        },
        {
          question: "How do I ensure quality work?",
          answer: "All talent on our platform is vetted and rated. You can review portfolios, check ratings, and communicate directly before hiring. We also offer dispute resolution if issues arise."
        },
        {
          question: "What if I'm not satisfied with the work?",
          answer: "We have a comprehensive dispute resolution process. If you're not satisfied, contact our support team within the specified timeframe, and we'll work to resolve the issue fairly."
        }
      ]
    },
    {
      category: "Services & Equipment",
      questions: [
        {
          question: "What types of services are available?",
          answer: "We offer a comprehensive range of tech services including AI development, software engineering, IT consulting, cybersecurity, data analysis, cloud services, and specialized hardware solutions."
        },
        {
          question: "Can I rent or buy equipment through Zion?",
          answer: "Yes! Our equipment marketplace allows you to browse, rent, or purchase specialized tech equipment. We verify all equipment listings to ensure quality and reliability."
        },
        {
          question: "Do you offer onsite IT services?",
          answer: "Absolutely! We provide onsite IT services for businesses and organizations. Our certified technicians can handle everything from network setup to emergency repairs."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          question: "What if I encounter technical issues?",
          answer: "Our support team is available 24/7. You can reach us through the contact form, live chat, or email. We typically respond within 2 hours for urgent issues."
        },
        {
          question: "Is my data secure?",
          answer: "Yes, we take security seriously. We use enterprise-grade encryption, secure hosting, and follow industry best practices for data protection. Your information is never shared without permission."
        },
        {
          question: "Do you offer API access?",
          answer: "Yes! We provide comprehensive API access for developers and businesses who want to integrate with our platform. Check out our developer portal for documentation and examples."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="FAQ | Zion Tech Group"
        description="Frequently asked questions about Zion Tech Group - the world's first free marketplace for high-tech and AI services."
        keywords="FAQ, help, support, Zion Tech Group, tech marketplace, AI services"
        canonical="https://ziontechgroup.com/faq"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find answers to common questions about Zion Tech Group, our marketplace, and how to get the most out of our platform.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-zion-blue-dark border-zion-purple/20">
                <CardHeader>
                  <CardTitle className="text-2xl text-zion-cyan">
                    {category.category}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Common questions about {category.category.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, questionIndex) => (
                      <AccordionItem 
                        key={questionIndex} 
                        value={`item-${categoryIndex}-${questionIndex}`}
                        className="border-zion-purple/20"
                      >
                        <AccordionTrigger className="text-left text-white hover:text-zion-cyan hover:no-underline">
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

          {/* Contact Support Section */}
          <div className="mt-16 text-center">
            <Card className="bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">
                  Still have questions?
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Can't find what you're looking for? Our support team is here to help.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-zion-slate-light">
                    Contact us directly and we'll get back to you within 2 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                    >
                      Contact Support
                    </a>
                    <a
                      href="/help-center"
                      className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                    >
                      Help Center
                    </a>
                  </div>
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