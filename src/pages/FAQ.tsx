import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqData = [
    {
      question: "What is Zion Tech Group?",
      answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented AI specialists, innovative companies, and cutting-edge technological solutions in one seamless ecosystem."
    },
    {
      question: "How does the marketplace work?",
      answer: "Our marketplace allows businesses to find AI talent, services, and equipment, while professionals can showcase their skills and find opportunities. Users can browse listings, connect directly, and collaborate on projects."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free to use for both businesses and talent. We believe in democratizing access to AI and technology solutions, so there are no hidden fees or subscription costs."
    },
    {
      question: "What types of services can I find on Zion?",
      answer: "Zion offers a wide range of services including AI development, machine learning consulting, IT services, equipment rentals, green IT solutions, and specialized talent for various technology projects."
    },
    {
      question: "How do I get started as a talent provider?",
      answer: "Simply create a profile, showcase your skills and experience, and start connecting with potential clients. You can also browse available projects and submit proposals."
    },
    {
      question: "How do I find the right talent for my project?",
      answer: "Use our AI-powered matching system to find talent based on your specific requirements, or browse through our curated categories and profiles. You can also post job listings to attract qualified candidates."
    },
    {
      question: "What makes Zion different from other platforms?",
      answer: "Zion is specifically focused on AI and high-tech solutions, offers completely free access, provides AI-powered matching, and maintains a strong focus on sustainability and innovation."
    },
    {
      question: "How do you ensure quality on the platform?",
      answer: "We implement a comprehensive verification system, user reviews and ratings, and AI-powered quality assessment to ensure that all users and services meet our high standards."
    },
    {
      question: "Can I use Zion for enterprise projects?",
      answer: "Absolutely! Zion offers enterprise solutions and can handle large-scale projects. Our platform is designed to scale from individual freelancers to enterprise-level collaborations."
    },
    {
      question: "What support is available if I need help?",
      answer: "We provide 24/7 support through our help center, live chat, and dedicated support team. You can also access our comprehensive documentation and community forums."
    },
    {
      question: "How do payments work on the platform?",
      answer: "Zion facilitates secure payments between clients and talent providers. We support various payment methods and ensure secure transactions for all parties involved."
    },
    {
      question: "Is my data secure on Zion?",
      answer: "Yes, we take data security very seriously. We implement enterprise-grade security measures, comply with international data protection standards, and never share your personal information without consent."
    }
  ];

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions | Zion Tech Group" 
        description="Find answers to common questions about Zion Tech Group's AI and technology marketplace platform." 
        keywords="FAQ, Zion Tech Group, AI marketplace, tech platform, questions, support"
        canonical="https://ziontechgroup.com/faq"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Everything you need to know about Zion Tech Group's AI and technology marketplace
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-slate-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="mt-16 text-center">
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12">
              <h2 className="text-2xl font-bold text-white mb-4">Still have questions?</h2>
              <p className="text-zion-slate-light mb-6">
                Can't find what you're looking for? Our support team is here to help.
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
      <Footer />
    </>
  );
}