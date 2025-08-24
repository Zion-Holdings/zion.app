import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, HelpCircle, MessageSquare, Users, Shield, Zap } from "lucide-react";

export default function FAQ() {
  const faqCategories = [
    {
      title: "Getting Started",
      icon: <Zap className="h-6 w-6 text-zion-cyan" />,
      questions: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem."
        },
        {
          question: "How do I create an account?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top navigation, choose whether you're a talent/creator or a client/employer, and fill out the registration form. You'll receive a confirmation email to verify your account."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion is completely free to use for both talent and clients. We believe in democratizing access to AI and technology solutions, so there are no hidden fees or subscription costs."
        }
      ]
    },
    {
      title: "For Talent & Creators",
      icon: <Users className="h-6 w-6 text-zion-purple" />,
      questions: [
        {
          question: "How do I create a talent profile?",
          answer: "After signing up, go to your dashboard and click 'Create Profile'. You can add your skills, experience, portfolio, and set your rates. Make sure to include relevant certifications and examples of your work."
        },
        {
          question: "What types of projects can I work on?",
          answer: "Zion offers a wide range of project types including AI development, software engineering, data science, IT consulting, hardware setup, and more. Projects range from short-term gigs to long-term contracts."
        },
        {
          question: "How do I get paid?",
          answer: "Zion uses secure payment processing. Once a project is completed and approved by the client, funds are released to your account. You can withdraw to your bank account or use our digital wallet."
        }
      ]
    },
    {
      title: "For Clients & Employers",
      icon: <Shield className="h-6 w-6 text-zion-cyan" />,
      questions: [
        {
          question: "How do I find the right talent?",
          answer: "Use our AI-powered matching system or browse our talent directory. You can filter by skills, experience level, location, and ratings. Our AI matcher will suggest the best candidates for your project."
        },
        {
          question: "What if I'm not satisfied with the work?",
          answer: "Zion has a comprehensive dispute resolution system. If you're not satisfied, you can request revisions or file a dispute. We ensure fair outcomes for both parties."
        },
        {
          question: "Can I hire for both short-term and long-term projects?",
          answer: "Absolutely! Zion supports projects of all sizes and durations, from one-time consultations to ongoing partnerships. You can post jobs, hire directly, or use our project management tools."
        }
      ]
    },
    {
      title: "Services & Equipment",
      icon: <MessageSquare className="h-6 w-6 text-zion-purple" />,
      questions: [
        {
          question: "What services are available on Zion?",
          answer: "Zion offers a comprehensive range of services including AI development, software engineering, IT consulting, data analysis, cybersecurity, cloud solutions, and specialized equipment rental or purchase."
        },
        {
          question: "How do I request a quote for services?",
          answer: "Visit our 'Request Quote' page and fill out the form with your project details. Our team will review your requirements and provide a customized quote within 24-48 hours."
        },
        {
          question: "Do you offer on-site IT services?",
          answer: "Yes! We provide on-site IT services for businesses that need hands-on technical support, hardware installation, network setup, and emergency IT assistance."
        }
      ]
    },
    {
      title: "Technical Support",
      icon: <HelpCircle className="h-6 w-6 text-zion-cyan" />,
      questions: [
        {
          question: "How can I get help if I have technical issues?",
          answer: "Our support team is available 24/7. You can contact us through live chat, email at support@ziontechgroup.com, or call our support line. We also have a comprehensive help center with guides and tutorials."
        },
        {
          question: "What if I encounter a bug or issue on the platform?",
          answer: "If you encounter any technical issues, please report them through our bug reporting system or contact support immediately. We prioritize fixing platform issues to ensure a smooth user experience."
        },
        {
          question: "Is my data secure on Zion?",
          answer: "Absolutely. Zion uses enterprise-grade security measures including end-to-end encryption, secure payment processing, and compliance with international data protection standards. Your privacy and security are our top priorities."
        }
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions | Zion Tech Group" 
        description="Find answers to common questions about Zion Tech Group's AI and tech marketplace platform, services, and how to get started." 
        keywords="FAQ, help, support, questions, Zion Tech Group, AI marketplace"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group, our services, 
              and how to get the most out of our AI and tech marketplace platform.
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-xl">Can't find what you're looking for?</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Search our knowledge base or contact our support team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                    <input
                      type="text"
                      placeholder="Search FAQ..."
                      className="w-full pl-10 pr-4 py-2 bg-zion-blue border border-zion-blue-light rounded-md text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple"
                    />
                  </div>
                  <button className="px-6 py-2 bg-zion-purple hover:bg-zion-purple-dark text-white rounded-md transition-colors">
                    Search
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center gap-3 mb-8">
                  {category.icon}
                  <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`item-${categoryIndex}-${questionIndex}`}
                      className="bg-zion-blue-dark border border-zion-blue-light rounded-lg"
                    >
                      <AccordionTrigger className="px-6 py-4 text-left text-white hover:text-zion-cyan">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-zion-slate-light">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Contact Support Section */}
          <div className="mt-20 text-center">
            <Card className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border-zion-purple/30 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-white text-2xl">Still have questions?</CardTitle>
                <CardDescription className="text-zion-slate-light text-lg">
                  Our support team is here to help you get the most out of Zion
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-zion-slate-light">
                  Can't find the answer you're looking for? Our dedicated support team is available 
                  24/7 to assist you with any questions or concerns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple hover:bg-zion-purple-dark text-white font-semibold rounded-lg transition-colors"
                  >
                    Contact Support
                  </a>
                  <a 
                    href="mailto:support@ziontechgroup.com" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-zion-blue-dark border border-zion-purple text-zion-cyan hover:bg-zion-purple/10 font-semibold rounded-lg transition-colors"
                  >
                    Email Support
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}