import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Shield, 
  Server, 
  Network, 
  Monitor, 
  Smartphone, 
  CheckCircle, 
  Clock, 
  MapPin, 
  Phone, 
  Mail,
  Users,
  Zap,
  Database,
  Cloud,
  Lock
} from 'lucide-react';

const ITOnsiteServices = () => {
  const services = [
    {
      icon: <Server className="h-8 w-8 text-zion-cyan" />,
      title: "Server & Infrastructure",
      description: "On-site server installation, maintenance, and optimization",
      features: ["Hardware installation", "OS configuration", "Performance tuning", "Backup setup"],
      price: "From $150/hour",
      response: "4-8 hours"
    },
    {
      icon: <Network className="h-8 w-8 text-zion-cyan" />,
      title: "Network Solutions",
      description: "Complete network infrastructure setup and troubleshooting",
      features: ["Network design", "Cable installation", "Router configuration", "Security setup"],
      price: "From $125/hour",
      response: "2-6 hours"
    },
    {
      icon: <Shield className="h-8 w-8 text-zion-cyan" />,
      title: "Cybersecurity",
      description: "On-site security audits and implementation",
      features: ["Security assessment", "Firewall setup", "Access control", "Monitoring systems"],
      price: "From $175/hour",
      response: "4-12 hours"
    },
    {
      icon: <Database className="h-8 w-8 text-zion-cyan" />,
      title: "Database Management",
      description: "Database optimization and maintenance services",
      features: ["Performance tuning", "Backup strategies", "Recovery planning", "Migration support"],
      price: "From $160/hour",
      response: "6-24 hours"
    },
    {
      icon: <Cloud className="h-8 w-8 text-zion-cyan" />,
      title: "Cloud Migration",
      description: "On-site cloud migration and hybrid setup",
      features: ["Migration planning", "Data transfer", "Integration setup", "Training"],
      price: "From $200/hour",
      response: "8-48 hours"
    },
    {
      icon: <Monitor className="h-8 w-8 text-zion-cyan" />,
      title: "Hardware Support",
      description: "Computer and peripheral installation and repair",
      features: ["PC setup", "Hardware upgrades", "Driver installation", "Troubleshooting"],
      price: "From $100/hour",
      response: "2-4 hours"
    }
  ];

  const benefits = [
    "Immediate problem resolution",
    "No remote access security concerns",
    "Hands-on training for your team",
    "Customized solutions for your environment",
    "Emergency response available",
    "Comprehensive documentation",
    "Follow-up support included",
    "Flexible scheduling options"
  ];

  const coverageAreas = [
    "Middletown, DE",
    "Newark, DE",
    "Wilmington, DE",
    "Dover, DE",
    "Philadelphia, PA",
    "Baltimore, MD",
    "Washington, DC",
    "New York, NY"
  ];

  const responseTimes = [
    {
      level: "Emergency",
      time: "2-4 hours",
      description: "Critical system failures, security breaches",
      price: "+50%"
    },
    {
      level: "Priority",
      time: "4-8 hours",
      description: "Business-critical issues, performance problems",
      price: "+25%"
    },
    {
      level: "Standard",
      time: "24-48 hours",
      description: "Regular maintenance, upgrades, consultations",
      price: "Base rate"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            On-Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">IT Services</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Professional IT technicians at your location. Fast, reliable, and secure on-site 
            technical support for all your business technology needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
              Schedule Service
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              Get Emergency Support
            </Button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our On-Site Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white text-xl text-center">{service.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light text-center">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zion-cyan/20 pt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light text-sm">Price:</span>
                      <span className="text-white font-medium">{service.price}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zion-slate-light text-sm">Response:</span>
                      <span className="text-zion-cyan text-sm">{service.response}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Schedule Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits and Coverage */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Why Choose On-Site Services?</h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                  <span className="text-zion-slate-light">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Service Coverage Areas</h2>
            <div className="grid grid-cols-2 gap-3">
              {coverageAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-zion-cyan" />
                  <span className="text-zion-slate-light">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-lg border border-zion-cyan/20">
              <p className="text-zion-slate-light text-sm">
                <strong>Note:</strong> Additional travel fees may apply for locations outside our primary service area. 
                Contact us for specific pricing and availability.
              </p>
            </div>
          </div>
        </div>

        {/* Response Times */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Response Time Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {responseTimes.map((tier, index) => (
              <Card key={index} className={`bg-white/5 backdrop-blur-md border text-center ${
                tier.level === "Emergency" 
                  ? 'border-red-500/50 bg-red-500/10' 
                  : tier.level === "Priority"
                  ? 'border-orange-500/50 bg-orange-500/10'
                  : 'border-zion-cyan/20'
              }`}>
                <CardHeader>
                  <CardTitle className={`text-xl ${
                    tier.level === "Emergency" ? 'text-red-400' : 
                    tier.level === "Priority" ? 'text-orange-400' : 'text-white'
                  }`}>
                    {tier.level}
                  </CardTitle>
                  <div className="text-2xl font-bold text-white">{tier.time}</div>
                  <div className="text-zion-slate-light text-sm">{tier.description}</div>
                </CardHeader>
                <CardContent>
                  <Badge className={`${
                    tier.level === "Emergency" ? 'bg-red-500 text-white' : 
                    tier.level === "Priority" ? 'bg-orange-500 text-white' : 'bg-zion-cyan text-white'
                  }`}>
                    {tier.price}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Ready for On-Site Support?</CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Contact our team to schedule on-site IT services or get emergency support
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex flex-col items-center gap-3">
                  <Phone className="h-8 w-8 text-zion-cyan" />
                  <div>
                    <div className="font-medium text-white">Phone</div>
                    <div className="text-zion-slate-light">+1 302 464 0950</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <Mail className="h-8 w-8 text-zion-cyan" />
                  <div>
                    <div className="font-medium text-white">Email</div>
                    <div className="text-zion-slate-light">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center gap-3">
                  <MapPin className="h-8 w-8 text-zion-cyan" />
                  <div>
                    <div className="font-medium text-white">Address</div>
                    <div className="text-zion-slate-light text-center">
                      364 E Main St STE 1008<br />
                      Middletown DE 19709
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Schedule Service
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Emergency Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ITOnsiteServices;