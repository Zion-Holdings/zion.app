import React from 'react';
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, Users, ShoppingCart, Shield, Zap, Globe } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: Zap,
      questions: [
        {
          question: "How do I create an account on Zion?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner and choose whether you're a client looking for services or talent offering your skills. Fill in your basic information and verify your email to get started."
        },
        {
          question: "What types of accounts can I create?",
          answer: "Zion offers two main account types: Client accounts for businesses and individuals seeking AI and tech services, and Talent accounts for professionals offering their expertise in AI, development, design, and other tech fields."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use. We believe in democratizing access to AI and tech solutions, so there are no subscription fees or hidden costs for using our platform."
        }
      ]
    },
    {
      title: "For Clients",
      icon: Users,
      questions: [
        {
          question: "How do I find the right talent for my project?",
          answer: "You can search for talent using our AI-powered matching system, browse categories, or post a job listing. Our platform will suggest the best matches based on your requirements, budget, and timeline."
        },
        {
          question: "What services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, web and mobile app development, data science, UI/UX design, IT consulting, equipment rentals, and specialized AI solutions for various industries."
        },
        {
          question: "How do I ensure quality when hiring talent?",
          answer: "All talent on Zion are verified professionals with portfolios, reviews, and ratings. You can review their work history, read client testimonials, and communicate directly before making a decision."
        }
      ]
    },
    {
      title: "For Talent",
      icon: Globe,
      questions: [
        {
          question: "How do I showcase my skills and experience?",
          answer: "Create a comprehensive profile highlighting your expertise, upload portfolio pieces, list your skills, and set your rates. You can also add certifications, education, and work samples to stand out."
        },
        {
          question: "How do I get paid for my work?",
          answer: "Zion offers secure payment processing with milestone-based payments. You can set up payment schedules, track project progress, and receive payments directly through our platform."
        },
        {
          question: "Can I work with international clients?",
          answer: "Absolutely! Zion is a global platform connecting talent and clients worldwide. You can work with clients from any country and expand your professional network internationally."
        }
      ]
    },
    {
      title: "Platform Features",
      icon: ShoppingCart,
      questions: [
        {
          question: "What is the AI Matcher feature?",
          answer: "Our AI Matcher uses advanced algorithms to connect clients with the perfect talent based on project requirements, skills, availability, and budget. It saves time and ensures better matches."
        },
        {
          question: "How does the marketplace work?",
          answer: "The marketplace allows you to browse and purchase pre-built AI solutions, equipment, and services. You can also request custom quotes for specific projects or needs."
        },
        {
          question: "What community features are available?",
          answer: "Join our community forums to connect with other professionals, share knowledge, ask questions, and stay updated on the latest AI and tech trends."
        }
      ]
    },
    {
      title: "Security & Trust",
      icon: Shield,
      questions: [
        {
          question: "How does Zion protect my data and privacy?",
          answer: "We implement enterprise-grade security measures including encryption, secure payment processing, and strict privacy policies. Your data is never shared with third parties without consent."
        },
        {
          question: "What happens if there's a dispute with a client or talent?",
          answer: "Zion provides dispute resolution services and mediation support. We have clear terms of service and can help resolve conflicts to ensure fair outcomes for all parties."
        },
        {
          question: "Are payments secure on the platform?",
          answer: "Yes, all payments are processed through secure, encrypted channels. We use industry-standard payment processors and never store your payment information on our servers."
        }
      ]
    }
  ];

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email",
      contact: "support@ziontechgroup.com",
      icon: HelpCircle
    },
    {
      title: "Commercial Inquiries",
      description: "For business partnerships",
      contact: "commercial@ziontechgroup.com",
      icon: Users
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion's AI and tech marketplace platform, services, and how to get started."
        keywords="FAQ, help, support, Zion marketplace, AI services, tech talent"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to common questions about Zion's platform, services, and how to get started
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12 mb-16">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-zion-blue-dark border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <category.icon className="h-6 w-6 text-zion-cyan" />
                    <CardTitle className="text-white text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((item, questionIndex) => (
                      <AccordionItem key={questionIndex} value={`item-${categoryIndex}-${questionIndex}`}>
                        <AccordionTrigger className="text-left text-zion-slate-light hover:text-zion-cyan">
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

          {/* Contact Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-8">Still Need Help?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you get the most out of Zion.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <method.icon className="h-5 w-5 text-zion-cyan" />
                      <CardTitle className="text-white">{method.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href={`mailto:${method.contact}`}
                      className="text-zion-cyan hover:text-zion-purple transition-colors font-medium"
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button asChild variant="outline" className="border-zion-blue-light text-white hover:bg-zion-blue-light hover:text-zion-blue">
                <Link to="/help-center">Visit Help Center</Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Quick Navigation</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-white font-semibold mb-3">Getting Started</h4>
                <div className="space-y-2">
                  <Link to="/signup" className="block text-zion-cyan hover:text-zion-purple transition-colors">Create Account</Link>
                  <Link to="/about" className="block text-zion-cyan hover:text-zion-purple transition-colors">About Zion</Link>
                  <Link to="/how-it-works" className="block text-zion-cyan hover:text-zion-purple transition-colors">How It Works</Link>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-3">Services</h4>
                <div className="space-y-2">
                  <Link to="/marketplace" className="block text-zion-cyan hover:text-zion-purple transition-colors">Marketplace</Link>
                  <Link to="/services" className="block text-zion-cyan hover:text-zion-purple transition-colors">Services</Link>
                  <Link to="/talent" className="block text-zion-cyan hover:text-zion-purple transition-colors">Find Talent</Link>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold mb-3">Support</h4>
                <div className="space-y-2">
                  <Link to="/contact" className="block text-zion-cyan hover:text-zion-purple transition-colors">Contact Us</Link>
                  <Link to="/terms" className="block text-zion-cyan hover:text-zion-purple transition-colors">Terms of Service</Link>
                  <Link to="/privacy" className="block text-zion-cyan hover:text-zion-purple transition-colors">Privacy Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}