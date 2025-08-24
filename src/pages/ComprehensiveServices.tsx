import React from 'react';
import { ComprehensiveServicesShowcase } from '@/components/ComprehensiveServicesShowcase';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle, 
  TrendingUp,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Award,
  MessageSquare
} from 'lucide-react';
import { SERVICE_CATEGORIES, COMPREHENSIVE_SERVICES } from '@/data/comprehensiveServices';

export default function ComprehensiveServices() {
  const stats = [
    { label: "Services Available", value: "20+", icon: <CheckCircle className="h-6 w-6" /> },
    { label: "Countries Served", value: "195+", icon: <Globe className="h-6 w-6" /> },
    { label: "Expert Team", value: "50+", icon: <Users className="h-6 w-6" /> },
    { label: "Success Rate", value: "98%", icon: <TrendingUp className="h-6 w-6" /> }
  ];

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience and proven track records."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Assurance",
      description: "Rigorous quality standards and continuous monitoring to ensure exceptional results."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Delivery",
      description: "Efficient project management and rapid deployment to meet your timeline requirements."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Custom Solutions",
      description: "Tailored approaches designed specifically for your business needs and objectives."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current state, understand your goals, and identify opportunities for improvement."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive roadmap with clear milestones, deliverables, and success metrics."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with expert guidance, regular updates, and quality assurance checks."
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuous monitoring, performance optimization, and ongoing support for long-term success."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Comprehensive Technology Services - Zion Tech Group" 
        description="Transform your business with our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. Expert solutions tailored to drive innovation and growth."
        keywords="AI services, cybersecurity, cloud migration, digital transformation, IT consulting, technology services"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="bg-zion-blue-dark py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Technology Services</span>
          </h1>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our comprehensive suite of AI, cybersecurity, cloud, and digital transformation services. 
            Expert solutions tailored to drive innovation, efficiency, and competitive advantage.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10 text-lg px-8 py-6">
              <MessageSquare className="h-5 w-5 mr-2" />
              Request Quote
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2 text-zion-cyan">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion Tech Group</span>
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              We combine deep technical expertise with business acumen to deliver solutions that drive real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="border-zion-blue-light bg-zion-blue-dark text-center hover:border-zion-purple/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4 text-zion-cyan">
                    {item.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Process</span>
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and maximum value for your investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="bg-gradient-to-br from-zion-purple to-zion-purple-dark rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-white text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-zion-slate-light leading-relaxed">{step.description}</p>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-zion-purple to-transparent transform translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Services Showcase */}
      <ComprehensiveServicesShowcase />

      {/* Contact Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Get Started</span>?
            </h2>
            <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
              Our expert team is ready to help you implement the perfect technology solutions. 
              Get in touch today for a personalized consultation and quote.
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <a href="tel:+13024640950" className="text-zion-cyan hover:text-zion-cyan-light text-lg">
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a href="mailto:kleber@ziontechgroup.com" className="text-zion-cyan hover:text-zion-cyan-light text-lg">
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Globe className="h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-zion-cyan hover:text-zion-cyan-light text-lg">
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-zion-cyan mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-zion-slate-light text-lg">
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Form */}
              <div className="bg-zion-blue-light/10 rounded-lg p-8 border border-zion-blue-light/20">
                <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:outline-none"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white focus:border-zion-purple focus:outline-none">
                      <option value="">Select a service category</option>
                      {SERVICE_CATEGORIES.map((category) => (
                        <option key={category.name} value={category.name}>{category.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-zion-slate-light text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:outline-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white py-3">
                    Send Message
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}