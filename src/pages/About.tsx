
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Zap, 
  Circle,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';
import { AnimatedBackground, NeonGlow } from '@/components/ui/AnimatedBackground';

export default function About() {
  const stats = [
    { label: 'Countries Served', value: '50+', icon: <Globe className="h-8 w-8 text-zion-cyan" /> },
    { label: 'Projects Completed', value: '500+', icon: <CheckCircle className="h-8 w-8 text-zion-purple" /> },
    { label: 'Client Satisfaction', value: '98%', icon: <Star className="h-8 w-8 text-zion-blue" /> },
    { label: 'Years Experience', value: '10+', icon: <Award className="h-8 w-8 text-zion-cyan" /> }
  ];

  const coreServices = [
    {
      title: 'AI & Machine Learning',
      description: 'Custom AI development, machine learning solutions, and intelligent automation',
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      features: ['Custom AI Models', 'ML Pipeline Development', 'AI Integration', 'Automation Solutions'],
      link: '/ai-services'
    },
    {
      title: 'IT Infrastructure',
      description: 'Cloud migration, cybersecurity, DevOps, and managed IT services',
      icon: <Cloud className="h-8 w-8 text-zion-blue" />,
      features: ['Cloud Migration', 'Cybersecurity', 'DevOps Implementation', 'Managed Services'],
      link: '/it-services'
    },
    {
      title: 'Digital Transformation',
      description: 'Strategic consulting and implementation for business modernization',
      icon: <TrendingUp className="h-8 w-8 text-zion-purple" />,
      features: ['Digital Strategy', 'Process Optimization', 'Legacy Modernization', 'Change Management'],
      link: '/digital-transformation'
    },
    {
      title: 'Global IT Support',
      description: 'Onsite IT services available in 50+ countries with local technicians',
      icon: <Globe className="h-8 w-8 text-green-500" />,
      features: ['24/7 Support', 'Local Technicians', 'Rapid Response', 'Global Coverage'],
      link: '/it-onsite-services'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the cutting edge of technology to deliver the most advanced solutions',
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our performance by your outcomes',
      icon: <Circle className="h-8 w-8 text-green-500" />
    },
    {
      title: 'Global Excellence',
      description: 'Consistent quality and service standards across all our global operations',
      icon: <Award className="h-8 w-8 text-blue-500" />
    },
    {
      title: 'Continuous Learning',
      description: 'We continuously evolve our skills and knowledge to serve you better',
      icon: <Zap className="h-8 w-8 text-purple-500" />
    }
  ];

  return (
    <>
      <SEO 
        title="About Zion Tech Group - Leading AI & IT Services Provider" 
        description="Learn about Zion Tech Group, a leading provider of AI services, IT solutions, and digital transformation services. Discover our mission, values, and global reach."
        keywords="about Zion Tech Group, AI services company, IT services provider, digital transformation company"
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-zion-blue-dark via-zion-purple to-zion-cyan py-20 overflow-hidden">
          <AnimatedBackground variant="stars" intensity="low" />
          
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <NeonGlow color="#22ddd2" intensity="high">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                  About Zion Tech Group
                </h1>
              </NeonGlow>
              <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
                Leading the digital revolution with cutting-edge AI services, comprehensive IT solutions, 
                and transformative digital strategies that empower businesses to thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                  <Link to="/contact">Contact Our Team</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  <Link to="/services-hub">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-zion-cyan mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission & Vision
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-zion-cyan mb-3">Mission</h3>
                    <p className="text-zion-slate-light">
                      To democratize access to cutting-edge AI and IT services, enabling businesses of all sizes 
                      to leverage the power of technology for growth, innovation, and competitive advantage.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zion-purple mb-3">Vision</h3>
                    <p className="text-zion-slate-light">
                      To be the global leader in AI-powered business solutions, driving the digital transformation 
                      of industries and creating a more intelligent, efficient, and sustainable future.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-zion-cyan/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-light">Expert team with 10+ years experience</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-light">Global presence in 50+ countries</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-light">Cutting-edge AI and ML solutions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-zion-slate-light">Proven track record of success</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive solutions designed to address the most critical technology challenges 
                facing modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-card/50 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      {service.icon}
                      <CardTitle className="text-xl group-hover:text-zion-cyan transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-4">
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardContent className="pt-0">
                    <Button asChild className="w-full group-hover:bg-zion-purple group-hover:text-white transition-all duration-300">
                      <Link to={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-zion-purple-dark/50 to-zion-cyan-dark/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do and shape our relationships with clients, 
                partners, and our team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-zion-slate-light text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Company Information</h2>
                <div className="space-y-4 text-zion-slate-light">
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Company Name</h3>
                    <p>Zion Tech Group</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Founded</h3>
                    <p>2014</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Headquarters</h3>
                    <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Contact</h3>
                    <p>Mobile: +1 302 464 0950<br />Email: kleber@ziontechgroup.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zion-cyan">Business Hours</h3>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM EST<br />Saturday: 10:00 AM - 4:00 PM EST<br />24/7 Emergency Support Available</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-cyan/20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-zion-blue/20">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                  <p className="text-zion-slate-light mb-6">
                    Let's discuss how our services can help transform your business and drive growth.
                  </p>
                  <div className="space-y-3">
                    <Button asChild className="w-full bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                      <Link to="/request-quote">Request Free Consultation</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                      <Link to="/contact">Contact Our Team</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
              Join hundreds of businesses that trust Zion Tech Group for their technology needs. 
              Let's build the future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark">
                <Link to="/request-quote">Start Your Journey</Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services-hub">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
