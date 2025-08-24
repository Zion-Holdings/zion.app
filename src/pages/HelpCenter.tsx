import { AppLayout } from "@/layout/AppLayout";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, MessageCircle, BookOpen, Users, Settings, Shield, CreditCard, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Zion marketplace",
      icon: BookOpen,
      color: "text-zion-cyan"
    },
    {
      title: "Account & Billing",
      description: "Manage your account and payment methods",
      icon: CreditCard,
      color: "text-zion-purple"
    },
    {
      title: "Marketplace",
      description: "Buy, sell, and discover products",
      icon: Search,
      color: "text-zion-green"
    },
    {
      title: "Community",
      description: "Connect with other users and get help",
      icon: Users,
      color: "text-zion-orange"
    },
    {
      title: "Security & Privacy",
      description: "Learn about our security measures",
      icon: Shield,
      color: "text-zion-red"
    },
    {
      title: "Technical Support",
      description: "Get help with technical issues",
      icon: Settings,
      color: "text-zion-blue"
    }
  ];

  const faqs = [
    {
      question: "How do I create an account on Zion?",
      answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner, choose whether you're a client or talent, fill in your details, and verify your email address."
    },
    {
      question: "What services does Zion offer?",
      answer: "Zion offers a comprehensive marketplace for AI and tech services, including talent hiring, equipment sales, service listings, and community forums. We specialize in connecting AI professionals with businesses."
    },
    {
      question: "How do I post a job or service request?",
      answer: "To post a job or service request, go to the 'Services' section, click 'Post a Request', fill in the details including requirements, budget, and timeline, then submit for review."
    },
    {
      question: "Is Zion free to use?",
      answer: "Yes! Zion is completely free to use for basic marketplace features. We offer premium features for advanced users and businesses, but the core platform is free."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call through the Contact page."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. For enterprise clients, we also offer invoicing and payment terms."
    },
    {
      question: "How do I verify my identity?",
      answer: "Identity verification helps build trust. Go to your profile settings, upload a government-issued ID, and complete the verification process. This typically takes 24-48 hours."
    },
    {
      question: "Can I use Zion internationally?",
      answer: "Yes! Zion is available worldwide. We support multiple currencies and languages, making it easy to connect with talent and clients globally."
    }
  ];

  return (
    <AppLayout>
      <SEO 
        title="Help Center - Zion Tech Group Support" 
        description="Get help and support for using the Zion AI and tech marketplace. Find answers to common questions and contact our support team." 
        keywords="help center, support, FAQ, Zion marketplace, customer service"
        canonical="https://ziontechgroup.com/help"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to your questions and get the support you need
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
              <input
                type="text"
                placeholder="Search for help articles, FAQs, or topics..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple focus:ring-1 focus:ring-zion-purple"
              />
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">How can we help you?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <Card key={index} className="bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors cursor-pointer">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-3">
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <CardTitle className="text-white">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-zion-slate-light text-sm">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple h-16 text-lg">
                <Link to="/contact">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Support
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light h-16 text-lg">
                <Link to="/community">
                  <Users className="mr-2 h-5 w-5" />
                  Ask Community
                </Link>
              </Button>
              <Button asChild className="bg-gradient-to-r from-zion-green to-zion-green-dark hover:from-zion-green-light hover:to-zion-green h-16 text-lg">
                <Link to="/sitemap">
                  <HelpCircle className="mr-2 h-5 w-5" />
                  Browse All Pages
                </Link>
              </Button>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg">
                    <AccordionTrigger className="px-6 py-4 text-white hover:text-zion-cyan">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-zion-slate-light">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still need help?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Our support team is here to help you get the most out of Zion. 
              Don't hesitate to reach out with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}