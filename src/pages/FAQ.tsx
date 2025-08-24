import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function FAQ() {
  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "What is Zion Tech Group?",
          answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem."
        },
        {
          question: "Is Zion really free to use?",
          answer: "Yes! Zion's core marketplace platform is completely free to use. We believe in democratizing access to AI and technology solutions. Some premium features may have associated costs, but the basic marketplace functionality is free."
        },
        {
          question: "How do you make money if the platform is free?",
          answer: "We generate revenue through premium services, enterprise solutions, and value-added features while keeping the core marketplace free and accessible to everyone."
        }
      ]
    },
    {
      title: "For Talent & Creators",
      items: [
        {
          question: "How do I create a talent profile?",
          answer: "Simply sign up for an account and select 'Talent' during registration. You can then complete your profile by adding your skills, experience, portfolio, and availability."
        },
        {
          question: "What types of talent are you looking for?",
          answer: "We welcome all AI specialists, developers, data scientists, tech consultants, and technology professionals. Whether you're a freelancer, consultant, or full-time professional, there's a place for you on Zion."
        },
        {
          question: "How do I get hired through Zion?",
          answer: "Create a compelling profile, showcase your work, and actively engage with the community. Clients can discover you through our AI-powered matching system or by browsing talent directories."
        }
      ]
    },
    {
      title: "For Clients & Employers",
      items: [
        {
          question: "How do I find the right talent for my project?",
          answer: "Use our AI-powered matching system, browse talent directories by category, or post a job listing. Our platform helps you find the perfect match based on skills, experience, and project requirements."
        },
        {
          question: "What types of services can I find on Zion?",
          answer: "Zion offers a wide range of services including AI development, software engineering, data analysis, IT consulting, equipment rentals, and specialized technology solutions."
        },
        {
          question: "How do I ensure quality when hiring through Zion?",
          answer: "All talent on Zion are verified professionals with reviewed profiles, portfolios, and ratings. You can also review their work history and communicate directly before making hiring decisions."
        }
      ]
    },
    {
      title: "Technical & Security",
      items: [
        {
          question: "How secure is my data on Zion?",
          answer: "We implement enterprise-grade security measures including encryption, secure authentication, and regular security audits. Your data is protected and never shared with unauthorized parties."
        },
        {
          question: "What payment methods do you support?",
          answer: "Zion supports multiple payment methods including credit cards, bank transfers, and digital wallets. All transactions are processed securely through our payment partners."
        },
        {
          question: "Can I integrate Zion with my existing systems?",
          answer: "Yes! Zion provides APIs and integration tools for enterprise clients who want to connect our marketplace with their existing workflows and systems."
        }
      ]
    },
    {
      title: "Community & Support",
      items: [
        {
          question: "How can I get help if I have issues?",
          answer: "Our support team is available through multiple channels including email, live chat, and our help center. We also have an active community forum where users help each other."
        },
        {
          question: "Are there networking opportunities on Zion?",
          answer: "Absolutely! Zion hosts regular virtual events, webinars, and networking sessions. Our community features allow you to connect with other professionals in your field."
        },
        {
          question: "How can I contribute to Zion's growth?",
          answer: "Share feedback, refer other professionals, participate in community discussions, and help us improve by reporting bugs or suggesting new features."
        }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion Tech Group's AI and technology marketplace platform."
        keywords="FAQ, help, support, Zion Tech Group, AI marketplace, tech platform"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion Tech Group
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-zion-blue-dark border border-zion-blue-light mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-white mb-6">{category.title}</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {category.items.map((item, itemIndex) => (
                      <AccordionItem key={itemIndex} value={`item-${categoryIndex}-${itemIndex}`}>
                        <AccordionTrigger className="text-left text-zion-cyan hover:text-zion-cyan-light">
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
            <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
              <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the answers you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@ziontechgroup.com"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-medium rounded-lg transition-all"
                >
                  Contact Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white font-medium rounded-lg transition-all"
                >
                  Visit Contact Page
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}