import React from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function SupportPage() {
  const supportCategories = [
    {
      icon: '📚',
      title: 'Documentation',
      description: 'Comprehensive guides and API references for all our services.',
      href: '/resources',
      color: 'text-blue-400',
    },
    {
      icon: '❓',
      title: 'FAQ',
      description: 'Find answers to commonly asked questions about our platform.',
      href: '#faq',
      color: 'text-green-400',
    },
    {
      icon: '💬',
      title: 'Community',
      description: 'Join our community forum to connect with other developers.',
      href: '#community',
      color: 'text-purple-400',
    },
    {
      icon: '📧',
      title: 'Contact Support',
      description: 'Get in touch with our technical support team.',
      href: '/contact',
      color: 'text-orange-400',
    },
  ];

  const faqs = [
    {
      question: 'How do I get started with Zion Tech Group services?',
      answer: 'Getting started is easy! Simply sign up for an account, choose your plan, and follow our step-by-step onboarding guide. Our team is also available to help with custom implementations.',
    },
    {
      question: 'What kind of support do you provide?',
      answer: 'We provide comprehensive technical support including documentation, tutorials, community forums, and direct support from our engineering team. Premium plans include priority support.',
    },
    {
      question: 'How secure is your platform?',
      answer: 'Security is our top priority. We implement enterprise-grade security measures including encryption, regular security audits, and compliance with industry standards.',
    },
    {
      question: 'Can I integrate with my existing systems?',
      answer: 'Yes! Our platform is designed for easy integration with existing systems through our comprehensive API and webhook system. We support most major platforms and technologies.',
    },
  ];

  return (
    <>
      <Head>
        <title>Support | Zion Tech Group</title>
        <meta name="description" content="Get support for Zion Tech Group services - Documentation, FAQ, community, and technical support." />
        <meta property="og:title" content="Support | Zion Tech Group" />
        <meta property="og:description" content="Get support for Zion Tech Group services." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-cursor-darker via-cursor-dark to-cursor-darker overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]" />
        
        <div className="relative z-10 container-cursor text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 gradient-text">
            Support Center
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
            Get the help you need to succeed with our platform
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-24 bg-gradient-to-b from-cursor-dark to-cursor-darker">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our comprehensive support options to get the assistance you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportCategories.map((category, index) => (
              <Card
                key={index}
                className="text-center group hover:border-cursor-blue/40 hover:shadow-2xl hover:shadow-cursor-blue/20"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <div className={`text-4xl mb-6 ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cursor-blue transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {category.description}
                </p>
                <Button
                  href={category.href}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gradient-to-b from-cursor-darker to-cursor-dark">
        <div className="container-cursor">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Find quick answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="hover:border-cursor-blue/30"
                style={{ animationDelay: `${(index * 0.1) + 0.2}s` }}
              >
                <h3 className="text-xl font-bold mb-4 text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-cursor-blue to-blue-600">
        <div className="container-cursor text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Still Need Help?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Our support team is here to help you succeed. Get in touch with us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              href="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl"
            >
              Contact Support
            </Button>
            <Button
              href="/resources"
              variant="outline"
              size="lg"
              className="border-gray-600 text-gray-200"
            >
              Documentation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}