import React from 'react';
import { AppHeader } from '@/layout/AppHeader';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

export default function FAQ() {
  const faqData = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals, innovative services, and cutting-edge equipment in one comprehensive platform."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner and choose whether you're a talent/creator or a client/employer. Fill in your details and you'll be ready to start using the platform."
        },
        {
          question: "Is Zion Tech Group really free to use?",
          answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to tech talent and services. There are no hidden fees or subscription costs for basic usage."
        }
      ]
    },
    {
      category: "For Talent & Creators",
      questions: [
        {
          question: "How do I create a talent profile?",
          answer: "After signing up, navigate to your dashboard and click 'Create Profile'. You can add your skills, experience, portfolio, and set your rates. Make sure to include relevant certifications and examples of your work."
        },
        {
          question: "What types of services can I offer?",
          answer: "You can offer any tech-related service including AI development, software engineering, data science, IT consulting, cybersecurity, cloud services, and more. We support both technical and business services."
        },
        {
          question: "How do I get hired?",
          answer: "Optimize your profile with relevant keywords, showcase your best work, maintain a high rating, and respond promptly to client inquiries. You can also actively browse job postings and submit proposals."
        }
      ]
    },
    {
      category: "For Clients & Employers",
      questions: [
        {
          question: "How do I find the right talent?",
          answer: "Use our advanced search and filtering system to find professionals based on skills, experience, location, and ratings. You can also post detailed job requirements and let qualified talent come to you."
        },
        {
          question: "What payment methods are accepted?",
          answer: "We support multiple payment methods including credit cards, bank transfers, and digital wallets. All payments are processed securely through our platform with escrow protection for your peace of mind."
        },
        {
          question: "How do I ensure quality work?",
          answer: "Review talent profiles, check ratings and reviews, request portfolios, and start with smaller projects to test the relationship. Our dispute resolution system also protects both parties."
        }
      ]
    },
    {
      category: "Marketplace & Services",
      questions: [
        {
          question: "What can I buy in the marketplace?",
          answer: "Our marketplace includes AI services, software development, IT consulting, equipment rentals, specialized hardware, and more. We're constantly expanding our categories to meet your needs."
        },
        {
          question: "How do I request a quote?",
          answer: "Navigate to the 'Request Quote' page, fill out the form with your project requirements, and we'll connect you with qualified professionals who can provide detailed proposals."
        },
        {
          question: "Are there any guarantees on services?",
          answer: "Yes, we offer satisfaction guarantees and our dispute resolution system ensures fair outcomes. Most professionals also offer revisions and support to ensure your complete satisfaction."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          question: "What if I encounter technical issues?",
          answer: "Our support team is available 24/7. You can reach us through the contact form, email support@ziontechgroup.com, or use our live chat feature for immediate assistance."
        },
        {
          question: "How secure is my data?",
          answer: "We use enterprise-grade security measures including end-to-end encryption, secure payment processing, and strict data protection policies. Your privacy and security are our top priorities."
        },
        {
          question: "Can I use Zion Tech Group on mobile devices?",
          answer: "Absolutely! Our platform is fully responsive and works seamlessly on all devices. We also offer a dedicated mobile app for enhanced mobile experience."
        }
      ]
    },
    {
      category: "Business & Enterprise",
      questions: [
        {
          question: "Do you offer enterprise solutions?",
          answer: "Yes! We provide customized enterprise solutions including dedicated account managers, bulk hiring, custom integrations, and enterprise-grade security features. Contact our sales team for details."
        },
        {
          question: "Can I integrate Zion Tech Group with my existing systems?",
          answer: "We offer comprehensive API access and integration options for enterprise clients. Our technical team can help you integrate our platform with your existing HR, project management, and billing systems."
        },
        {
          question: "What about compliance and legal requirements?",
          answer: "We maintain compliance with major regulations including GDPR, SOC 2, and industry-specific requirements. Our legal team ensures all contracts and terms meet your business needs."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ - Zion Tech Group" 
        description="Find answers to frequently asked questions about Zion Tech Group's AI and tech marketplace platform."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      
      <AppHeader />
      
      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Find answers to common questions about Zion Tech Group's AI and tech marketplace platform
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search FAQ..."
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8">
              {faqData.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="border-zion-purple/20">
                  <CardHeader>
                    <CardTitle className="text-2xl text-zion-cyan">
                      {category.category}
                    </CardTitle>
                    <CardDescription>
                      Common questions about {category.category.toLowerCase()}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((item, questionIndex) => (
                        <AccordionItem 
                          key={questionIndex} 
                          value={`item-${categoryIndex}-${questionIndex}`}
                          className="border-zion-purple/10"
                        >
                          <AccordionTrigger className="text-left hover:text-zion-cyan transition-colors">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-zion-slate-light leading-relaxed">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support Section */}
        <section className="bg-zion-blue-dark py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan/90 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/help-center"
                className="inline-flex items-center justify-center px-6 py-3 border border-zion-cyan text-zion-cyan font-semibold rounded-lg hover:bg-zion-cyan/10 transition-colors"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}