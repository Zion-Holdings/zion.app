import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronRight, Search, HelpCircle, Users, Shield, CreditCard, Zap, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqCategories = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Account & Registration",
      questions: [
        {
          question: "How do I create an account on Zion Tech Group?",
          answer: "Creating an account is simple! Click the 'Sign Up' button in the top right corner, fill in your basic information (name, email, password), and verify your email address. You'll then be able to access all our marketplace features."
        },
        {
          question: "What information do I need to provide during registration?",
          answer: "We require your full name, email address, and a secure password. You can also optionally provide your company name, phone number, and professional interests to help us personalize your experience."
        },
        {
          question: "How do I verify my email address?",
          answer: "After registration, you'll receive a verification email. Simply click the verification link in the email to activate your account. If you don't see the email, check your spam folder."
        },
        {
          question: "Can I change my account information later?",
          answer: "Yes! You can update your profile information, contact details, and preferences at any time through your account settings. Just go to your profile page and click 'Edit Profile'."
        }
      ]
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Using the Marketplace",
      questions: [
        {
          question: "How do I find the services I need?",
          answer: "You can search for services using our search bar, browse by category, or use our advanced filters. You can search by service type, location, price range, or specific keywords."
        },
        {
          question: "How do I book a service or appointment?",
          answer: "Once you find a service you like, click on it to view details. You can then book directly through our platform by selecting your preferred date and time, and completing the payment process."
        },
        {
          question: "Can I message service providers before booking?",
          answer: "Yes! You can send messages to service providers to ask questions, discuss requirements, or get quotes. This helps ensure you find the right match for your needs."
        },
        {
          question: "How do reviews and ratings work?",
          answer: "After completing a service, you can leave a review and rating for the provider. These help other users make informed decisions and help maintain quality standards on our platform."
        }
      ]
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment & Pricing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our platform."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! We're transparent about all costs. You'll see the exact price before booking, including any platform fees. The price you see is the price you pay."
        },
        {
          question: "How do refunds work?",
          answer: "Our refund policy depends on the specific service and provider. Most services offer full refunds if cancelled within 24 hours of booking. Check the service details for specific refund terms."
        },
        {
          question: "Is my payment information secure?",
          answer: "Absolutely! We use industry-standard encryption and security measures to protect your payment information. We never store your full credit card details on our servers."
        }
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety & Security",
      questions: [
        {
          question: "How do you verify service providers?",
          answer: "All service providers go through a comprehensive verification process including identity verification, background checks, and skill assessments. We also monitor their performance and user feedback."
        },
        {
          question: "What if I have a problem with a service?",
          answer: "If you encounter any issues, contact our support team immediately. We have a dispute resolution process and will work to resolve the issue fairly for all parties involved."
        },
        {
          question: "How do you protect my personal information?",
          answer: "We take data protection seriously. Your personal information is encrypted, we never share it with third parties without your consent, and we comply with all relevant privacy laws and regulations."
        },
        {
          question: "Can I report inappropriate behavior?",
          answer: "Yes, absolutely. If you encounter any inappropriate behavior, you can report it through our platform. We take all reports seriously and will investigate promptly."
        }
      ]
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Technical Support",
      questions: [
        {
          question: "What browsers are supported?",
          answer: "We support all modern browsers including Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using the latest version of your browser."
        },
        {
          question: "Is there a mobile app available?",
          answer: "Yes! We have mobile apps for both iOS and Android devices. You can download them from the App Store or Google Play Store for a better mobile experience."
        },
        {
          question: "What if I forget my password?",
          answer: "No worries! Click the 'Forgot Password' link on the login page, enter your email address, and we'll send you a password reset link. You can then create a new password."
        },
        {
          question: "How do I contact technical support?",
          answer: "You can reach our technical support team through email at tech-support@ziontechgroup.com, through our live chat feature, or by calling our support line at +1 (555) 123-4567."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Find quick answers to the most common questions about using Zion Tech Group's AI and tech marketplace.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              <input
                type="text"
                placeholder="Search for specific questions..."
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="bg-white/10 backdrop-blur-sm border-zion-blue-light">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-zion-cyan">
                      {category.icon}
                    </div>
                    <CardTitle className="text-white text-2xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const itemIndex = categoryIndex * 100 + questionIndex;
                      const isOpen = openItems.has(itemIndex);
                      
                      return (
                        <div key={questionIndex} className="border border-zion-blue-light rounded-lg overflow-hidden">
                          <button
                            onClick={() => toggleItem(itemIndex)}
                            className="w-full px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-between"
                          >
                            <span className="text-white font-medium text-lg">{faq.question}</span>
                            {isOpen ? (
                              <ChevronDown className="h-5 w-5 text-zion-cyan" />
                            ) : (
                              <ChevronRight className="h-5 w-5 text-zion-cyan" />
                            )}
                          </button>
                          
                          {isOpen && (
                            <div className="px-6 py-4 bg-white/5 border-t border-zion-blue-light">
                              <p className="text-zion-slate-light leading-relaxed">{faq.answer}</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Still Need Help Section */}
      <div className="py-16 bg-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <HelpCircle className="h-16 w-16 text-zion-cyan mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Can't find the answer you're looking for? Our support team is here to help!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-zion-cyan hover:bg-zion-cyan-dark text-white">
                <Link to="/help">Visit Help Center</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}