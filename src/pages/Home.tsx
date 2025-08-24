
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Zap, 
  Users, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function Home() {
  const featuredServices = [
    {
      title: "AI Services & Automation",
      description: "Transform your business with intelligent automation and AI-powered solutions",
      icon: <Brain className="h-8 w-8" />,
      href: "/enhanced-services",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with enterprise-grade security and compliance",
      icon: <Shield className="h-8 w-8" />,
      href: "/cybersecurity-services",
      color: "from-red-500 to-pink-600"
    },
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate to the cloud with optimization strategies",
      icon: <Cloud className="h-8 w-8" />,
      href: "/comprehensive-services",
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights with advanced analytics and business intelligence",
      icon: <Database className="h-8 w-8" />,
      href: "/enhanced-services",
      color: "from-green-500 to-emerald-600"
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+", icon: <CheckCircle className="h-6 w-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Star className="h-6 w-6" /> },
    { label: "Years Experience", value: "15+", icon: <Users className="h-6 w-6" /> },
    { label: "AI Solutions", value: "50+", icon: <Brain className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-zion-cyan-light mb-8 max-w-4xl mx-auto">
            Premier IT services and AI solutions provider helping businesses thrive in the digital age
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link to="/enhanced-services">
              <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              +1 302 464 0950
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-zion-cyan-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Featured Services</h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
              Discover how our innovative solutions can transform your business operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 hover:border-zion-cyan/60 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-zion-cyan/20 rounded-full">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-cyan-light">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.href}>
                    <Button className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm border-zion-cyan/30 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto">
                Contact us today to discuss how our solutions can transform your business
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    <Phone className="h-6 w-6 text-zion-cyan" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">Call Us</h3>
                <p className="text-zion-cyan-light">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    <Mail className="h-6 w-6 text-zion-cyan" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">Email Us</h3>
                <p className="text-zion-cyan-light">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-zion-cyan/20 rounded-full">
                    <MapPin className="h-6 w-6 text-zion-cyan" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-zion-cyan-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="text-center">
              <Link to="/enhanced-services">
                <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zion-blue-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Zion Tech Group</h3>
              <p className="text-zion-cyan-light">
                Premier IT services and AI solutions provider helping businesses thrive in the digital age.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
              <div className="space-y-2 text-zion-cyan-light">
                <p>AI & Automation</p>
                <p>Cybersecurity</p>
                <p>Cloud Services</p>
                <p>Data Analytics</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/enhanced-services" className="block text-zion-cyan hover:text-zion-cyan-light">
                  Enhanced Services
                </Link>
                <Link to="/cybersecurity-services" className="block text-zion-cyan hover:text-zion-cyan-light">
                  Cybersecurity
                </Link>
                <Link to="/comprehensive-services" className="block text-zion-cyan hover:text-zion-cyan-light">
                  All Services
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-zion-cyan-light">
                <p>+1 302 464 0950</p>
                <p>kleber@ziontechgroup.com</p>
                <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
          <div className="border-t border-zion-blue-light mt-8 pt-8 text-center text-zion-cyan-light">
            <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
