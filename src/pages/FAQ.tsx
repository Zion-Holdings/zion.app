import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqData = [
  {
    question: "What services does Zion Tech Group offer?",
    answer: "Zion Tech Group offers comprehensive IT services including AI solutions, micro-SaaS development, cloud computing, cybersecurity, and technology consulting. We help businesses of all sizes implement innovative technology solutions."
  },
  {
    question: "How can I get started with your services?",
    answer: "Getting started is easy! Simply contact us through our contact form, give us a call, or schedule a consultation. Our team will assess your needs and recommend the best solutions for your business."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely! We work with businesses of all sizes, from startups to enterprise organizations. We believe that every business deserves access to cutting-edge technology solutions."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on the scope and complexity. Simple implementations might take a few weeks, while complex enterprise solutions could take several months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive ongoing support and maintenance services. We believe in building long-term partnerships with our clients and ensuring their technology continues to work optimally."
  },
  {
    question: "How do you ensure data security?",
    answer: "Data security is our top priority. We implement industry-standard security measures, follow best practices, and stay updated with the latest security protocols. We can also help you develop comprehensive security policies."
  },
  {
    question: "Can you help with legacy system integration?",
    answer: "Yes, we specialize in modernizing legacy systems and integrating them with new technologies. Our team has extensive experience in migration projects and can help you transition smoothly."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve a wide range of industries including healthcare, finance, manufacturing, retail, education, and more. Our solutions are adaptable to meet the specific needs of any industry."
  },
  {
    question: "Do you offer training for our team?",
    answer: "Absolutely! We provide comprehensive training programs to ensure your team can effectively use and maintain the solutions we implement. This includes user training, technical training, and ongoing support."
  },
  {
    question: "How do you handle project changes?",
    answer: "We understand that project requirements can evolve. We have a flexible change management process that allows us to adapt to your changing needs while maintaining project quality and timeline."
  }
];

export function FAQ() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and how we can help your business.
            </p>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible>
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:support@ziontechgroup.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}