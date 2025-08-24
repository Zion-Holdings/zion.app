
import React from 'react';
import { SEO } from '@/components/SEO';
import { Footer } from '@/components/Footer';
import { QuoteRequestForm } from "@/components/QuoteRequestForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Shield, Zap } from 'lucide-react';

export default function RequestQuote() {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6 text-zion-cyan" />,
      title: "Quick Response",
      description: "Get quotes within 24 hours from qualified professionals"
    },
    {
      icon: <Users className="w-6 h-6 text-zion-cyan" />,
      title: "Expert Network",
      description: "Access to verified AI and tech experts worldwide"
    },
    {
      icon: <Shield className="w-6 h-6 text-zion-cyan" />,
      title: "Secure & Reliable",
      description: "Protected payments and quality assurance guaranteed"
    },
    {
      icon: <Zap className="w-6 h-6 text-zion-cyan" />,
      title: "Fast Delivery",
      description: "Quick turnaround times for urgent projects"
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <SEO 
        title="Request Quote - Zion Tech Group" 
        description="Get competitive quotes from top AI and tech professionals for your project needs."
        keywords="request quote, project quote, AI services, tech services, Zion Tech Group"
        canonical="https://ziontechgroup.com/request-quote"
      />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Request a Quote
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Get competitive quotes from verified AI and tech professionals. 
              Describe your project and receive tailored proposals within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Benefits Section */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="bg-zion-blue border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="text-white">Why Choose Zion?</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Get the best value for your tech projects
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{benefit.title}</h3>
                        <p className="text-zion-slate-light text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-zion-blue border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="text-white">Popular Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {['AI Development', 'Web Development', 'Mobile Apps', 'Data Science', 'Cloud Services', 'IT Support'].map((service) => (
                      <Badge key={service} variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quote Form */}
            <div className="lg:col-span-2">
              <Card className="bg-zion-blue border-zion-blue-light">
                <CardHeader>
                  <CardTitle className="text-white">Project Details</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    Fill out the form below to get started. Be as detailed as possible for accurate quotes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <QuoteRequestForm />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <div className="bg-zion-blue border border-zion-blue-light rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Help Getting Started?
              </h2>
              <p className="text-zion-slate-light mb-6">
                Our team is here to help you find the right talent for your project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="/talent"
                  className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-purple font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                >
                  Browse Talent
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
