import type { NextPage } from 'next';
import Head from 'next/link';
import Link from 'next/link';
import { Check, Star, Zap, Shield, Users, Building, Crown } from 'lucide-react';

const Pricing: NextPage = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$2,500",
      period: "per project",
      features: [
        "Basic Website Development",
        "Mobile App (1 platform)",
        "Basic SEO Setup",
        "3 Months Support",
        "Basic Analytics",
        "Email Support"
      ],
      popular: false,
      icon: Users,
      color: "blue"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses and established companies",
      price: "$8,000",
      period: "per project",
      features: [
        "Full-Stack Web Application",
        "Mobile App (2 platforms)",
        "Advanced SEO & Marketing",
        "6 Months Support",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations",
        "Performance Optimization"
      ],
      popular: true,
      icon: Building,
      color: "purple"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex requirements",
      price: "$25,000+",
      period: "per project",
      features: [
        "Enterprise-Grade Solutions",
        "Multi-Platform Applications",
        "Advanced AI Integration",
        "12 Months Support",
        "Custom Analytics Dashboard",
        "Dedicated Account Manager",
        "24/7 Support",
        "Custom Development",
        "Security Audits",
        "Compliance Management"
      ],
      popular: false,
      icon: Crown,
      color: "gold"
    }
  ];

  const servicePackages = [
    {
      name: "AI Development",
      description: "Custom AI models and machine learning solutions",
      startingPrice: "$5,000",
      features: [
        "Custom AI Model Development",
        "Data Preprocessing",
        "Model Training & Optimization",
        "API Integration",
        "Performance Monitoring",
        "Documentation & Training"
      ]
    },
    {
      name: "Cloud Migration",
      description: "Complete cloud infrastructure and migration services",
      startingPrice: "$10,000",
      features: [
        "Cloud Strategy Planning",
        "Infrastructure Design",
        "Data Migration",
        "Security Implementation",
        "Performance Optimization",
        "Ongoing Management"
      ]
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive security solutions and audits",
      startingPrice: "$7,500",
      features: [
        "Security Assessment",
        "Penetration Testing",
        "Security Implementation",
        "Compliance Management",
        "Incident Response",
        "Security Training"
      ]
    },
    {
      name: "Blockchain Development",
      description: "Custom blockchain and DeFi solutions",
      startingPrice: "$12,000",
      features: [
        "Smart Contract Development",
        "Blockchain Architecture",
        "DeFi Platform Building",
        "Wallet Integration",
        "Security Audits",
        "Deployment & Testing"
      ]
    }
  ];

  const addOnServices = [
    {
      name: "24/7 Support",
      price: "$2,000",
      period: "per month",
      description: "Round-the-clock technical support and monitoring"
    },
    {
      name: "Performance Optimization",
      price: "$1,500",
      period: "per project",
      description: "Speed optimization and performance tuning"
    },
    {
      name: "Security Audits",
      price: "$3,000",
      period: "per audit",
      description: "Comprehensive security assessment and recommendations"
    },
    {
      name: "Training & Workshops",
      price: "$500",
      period: "per session",
      description: "Team training and knowledge transfer sessions"
    }
  ];

  const faqs = [
    {
      question: "What's included in the project price?",
      answer: "Our project prices include development, testing, deployment, and initial support. Additional services like ongoing maintenance, hosting, and 24/7 support are available as add-ons."
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for larger projects. We typically require a 30% deposit to begin work, with milestone-based payments throughout the project."
    },
    {
      question: "What about ongoing maintenance and support?",
      answer: "We offer various support packages ranging from basic email support to 24/7 dedicated support. All plans include bug fixes and security updates."
    },
    {
      question: "Can you work with our existing systems?",
      answer: "Absolutely! We specialize in integrating with existing systems and can work with your current technology stack to ensure seamless integration."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Pricing - Zion Tech Group | Transparent Pricing for Technology Solutions</title>
        <meta name="description" content="Transparent pricing for Zion Tech Group's technology solutions. View our pricing plans, service packages, and add-on services for your business needs." />
        <meta name="keywords" content="pricing, technology solutions, AI development, cloud migration, cybersecurity, blockchain, cost, packages" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Clear, competitive pricing for all our technology solutions. 
            No hidden fees, no surprises - just quality work at fair prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Get Custom Quote
            </Link>
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              View Services
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">3</div>
              <div className="text-sm md:text-base opacity-80">Pricing Tiers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">500+</div>
              <div className="text-sm md:text-base opacity-80">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-sm md:text-base opacity-80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">0</div>
              <div className="text-sm md:text-base opacity-80">Hidden Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Choose Your Plan
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}>
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      ⭐ Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <plan.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className={`w-full py-3 px-4 rounded-lg font-medium transition-colors text-center block ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Service-Specific Pricing
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {servicePackages.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="text-2xl font-bold text-blue-400 mb-6">
                  Starting at {service.startingPrice}
                </div>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-300 flex items-center">
                      <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors text-center block">
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Additional Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <h3 className="text-lg font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                
                <div className="text-xl font-bold text-blue-400 mb-2">{service.price}</div>
                <div className="text-gray-400 text-sm mb-4">{service.period}</div>
                
                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
                  Add Service
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Why Choose Zion Tech Group?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Fast Delivery</h3>
              <p className="text-gray-300">
                We deliver projects on time, every time. Our agile methodology ensures 
                rapid development without compromising quality.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Quality Guaranteed</h3>
              <p className="text-gray-300">
                Every project undergoes rigorous testing and quality assurance. 
                We stand behind our work with comprehensive warranties.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
              <p className="text-gray-300">
                Our team consists of certified professionals with years of experience 
                in cutting-edge technologies and industry best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us today for a custom quote tailored to your specific needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Custom Quote
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;