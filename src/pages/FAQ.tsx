import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function FAQ() {
  const faqs = [
    {
      question: "How does the AI matching work?",
      answer: "Our AI matching algorithm analyzes your requirements and preferences to match you with the most compatible talent or services. The process takes into account skills, experience, availability, and past performance to ensure optimal results."
    },
    {
      question: "How do I hire someone on Zion?",
      answer: "To hire talent on Zion, post a job or project, review matches or applications, interview candidates through our platform, and extend an offer. Our secure payment system protects both parties throughout the engagement."
    },
    {
      question: "What are the payment terms?",
      answer: "Zion offers flexible payment options including milestone-based payments, hourly rates, or fixed project fees. Funds are held in escrow until deliverables are approved, ensuring security for both clients and talent."
    },
    {
      question: "How do I contact support?",
      answer: "You can reach our support team through the chat widget at the bottom right of any page, by emailing support@ziontechgroup.com, or by scheduling a call with our team through our contact page."
    },
    {
      question: "Is Zion really free to use?",
      answer: "Yes! Zion is completely free for both talent and clients. We believe in democratizing access to AI and technology solutions, so there are no platform fees or hidden costs."
    },
    {
      question: "How do I create a talent profile?",
      answer: "Sign up for an account, choose 'Talent' during registration, and complete your profile with your skills, experience, portfolio, and availability. Our AI will help optimize your profile for better matches."
    },
    {
      question: "What types of services can I find on Zion?",
      answer: "Zion offers a wide range of AI and technology services including software development, AI consulting, data science, cloud infrastructure, cybersecurity, and specialized equipment. We cover the full spectrum of tech needs."
    },
    {
      question: "How does the dispute resolution work?",
      answer: "If there's a disagreement between parties, our dedicated support team will mediate the situation. We review all communications and deliverables to ensure fair resolution for both parties."
    },
    {
      question: "Can I work with international clients/talent?",
      answer: "Absolutely! Zion is a global platform. You can work with clients and talent from anywhere in the world, expanding your opportunities and access to diverse skill sets."
    },
    {
      question: "How do I get paid as a talent?",
      answer: "Once your work is approved by the client, funds are released from escrow to your Zion wallet. You can then withdraw to your bank account or use the funds for other services on the platform."
    }
  ];

  return (
    <>
      <SEO
        title="FAQ - Frequently Asked Questions | Zion Tech Group"
        description="Find answers to common questions about Zion's AI and technology marketplace platform."
        keywords="FAQ, frequently asked questions, Zion marketplace, AI platform, tech services"
        canonical="https://ziontechgroup.com/faq"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Frequently Asked Questions</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers to the most common questions about Zion's AI and technology marketplace
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-16">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-zion-blue-light">
                  <AccordionTrigger className="text-left text-white hover:text-zion-cyan">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zion-slate-light">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still have questions?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you get the answers you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white" asChild>
                <Link to="/help">Help Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}