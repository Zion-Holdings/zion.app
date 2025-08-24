import React from 'react';
import { SEO } from '@/components/SEO';
import { EnhancedServicesShowcase } from '@/components/EnhancedServicesShowcase';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Brain, 
  Code, 
  Database, 
  Globe, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Zap,
  CheckCircle,
  Star,
  Clock,
  MapPin,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';
import { SERVICE_CATEGORIES, CONTACT_INFO, PRICING_TIERS } from '@/data/enhancedServices';

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-zion-blue">
      <SEO 
        title="Professional IT & AI Services - Zion Tech Group" 
        description="Comprehensive IT services, AI development, cloud solutions, cybersecurity, and business automation. Transform your business with cutting-edge technology solutions."
        keywords="IT services, AI development, cloud migration, cybersecurity, business automation, digital transformation, Zion Tech Group"
        canonical="https://ziontechgroup.com/services"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple">
        <div className="container mx-auto px-4 text-center">
          <GradientHeading level="h1" className="text-5xl md:text-6xl font-bold mb-6">
            Professional IT & AI Services
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your business with our comprehensive suite of cutting-edge technology solutions. 
            From AI development to IT infrastructure, we deliver results that drive growth and innovation.
          </p>
          
          {/* Contact Banner */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <Phone className="w-10 h-10 text-zion-cyan mb-3" />
                <p className="text-zion-slate-light text-sm mb-2">Call Us 24/7</p>
                <a href={`tel:${CONTACT_INFO.phone}`} className="text-white font-bold text-lg hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-10 h-10 text-zion-cyan mb-3" />
                <p className="text-zion-slate-light text-sm mb-2">Email Us</p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-white font-bold text-lg hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="w-10 h-10 text-zion-cyan mb-3" />
                <p className="text-zion-slate-light text-sm mb-2">Visit Our Website</p>
                <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-white font-bold text-lg hover:text-zion-cyan transition-colors">
                  {CONTACT_INFO.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Service Categories</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Explore our comprehensive range of technology services designed to meet every business need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((category) => (
              <Card key={category.id} className="bg-white/5 backdrop-blur-sm border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20 group">
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <CardTitle className="text-2xl text-white group-hover:text-zion-cyan transition-colors">
                    {category.name}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-zion-slate-light mb-4">
                    {category.services.length} services available
                  </p>
                  <Button 
                    asChild
                    className="bg-zion-cyan hover:bg-zion-cyan-dark text-white"
                  >
                    <a href={`#${category.id}`}>
                      View Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <EnhancedServicesShowcase showTitle={false} />

      {/* Industry Solutions Section */}
      <section className="py-20 bg-zion-blue">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Industry Solutions</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              Tailored technology solutions for specific industries and business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Financial Services</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Secure, compliant solutions for banking, insurance, and fintech companies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Regulatory compliance (SOC2, PCI-DSS)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    AI-powered fraud detection
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Blockchain solutions
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Healthcare</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  HIPAA-compliant solutions for hospitals, clinics, and health tech
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Electronic Health Records (EHR)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    AI diagnostic tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Telemedicine platforms
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Manufacturing</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Industry 4.0 solutions for smart factories and supply chain optimization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    IoT sensor integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Predictive maintenance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Supply chain analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">E-commerce</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Scalable platforms for online retail and digital marketplaces
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Multi-channel integration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    AI-powered recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Inventory optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Education</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  EdTech solutions for schools, universities, and online learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Learning Management Systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    AI tutoring platforms
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Student analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-white">Startups</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Rapid development and scaling solutions for innovative startups
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    MVP development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Cloud infrastructure setup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                    Growth analytics
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-zion-blue-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-zion-slate-light text-xl max-w-3xl mx-auto">
              See how we've helped businesses transform and achieve their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm ml-2">5.0</span>
                </div>
                <CardTitle className="text-lg text-white">Financial Services Client</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  "Zion Tech Group transformed our legacy systems into a modern, AI-powered platform. 
                  We saw a 40% increase in operational efficiency and improved customer satisfaction."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Industry: Banking</span>
                  <span className="text-zion-cyan text-sm font-semibold">40% Efficiency Gain</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm ml-2">5.0</span>
                </div>
                <CardTitle className="text-lg text-white">Healthcare Provider</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  "The AI-powered diagnostic tools and secure infrastructure have revolutionized our 
                  patient care. Compliance and security are top-notch."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Industry: Healthcare</span>
                  <span className="text-zion-cyan text-sm font-semibold">HIPAA Compliant</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border border-white/20">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-zion-slate-light text-sm ml-2">5.0</span>
                </div>
                <CardTitle className="text-lg text-white">E-commerce Startup</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  "From concept to launch in 8 weeks! The team delivered a scalable platform that 
                  handles our growing customer base perfectly."
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-zion-slate-light text-sm">Industry: E-commerce</span>
                  <span className="text-zion-cyan text-sm font-semibold">8 Week Delivery</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Digital Transformation?
          </h2>
          <p className="text-zion-slate-light text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our innovative solutions can drive growth, efficiency, and competitive advantage for your organization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-10 py-4 text-lg"
              onClick={() => window.open(`mailto:${CONTACT_INFO.email}?subject=Digital Transformation Consultation`, '_blank')}
            >
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-10 py-4 text-lg"
              onClick={() => window.open(`tel:${CONTACT_INFO.phone}`, '_blank')}
            >
              Call {CONTACT_INFO.phone}
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <p className="text-zion-slate-light mb-2">Address:</p>
                <p className="text-white font-semibold">{CONTACT_INFO.address}</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-2">Business Hours:</p>
                <p className="text-white font-semibold">{CONTACT_INFO.businessHours}</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-2">Emergency Support:</p>
                <p className="text-zion-cyan font-semibold">{CONTACT_INFO.emergencySupport}</p>
              </div>
              <div>
                <p className="text-zion-slate-light mb-2">Website:</p>
                <a href={CONTACT_INFO.website} target="_blank" rel="noopener noreferrer" className="text-zion-cyan font-semibold hover:underline">
                  {CONTACT_INFO.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}