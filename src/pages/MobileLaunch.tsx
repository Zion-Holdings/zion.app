import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Smartphone, 
  Zap, 
  Target, 
  Users, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Globe,
  Download,
  AppStore,
  GooglePlay,
  Code,
  Palette,
  BarChart3,
  MessageSquare
} from 'lucide-react';

const MobileLaunch = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-zion-cyan" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications",
      features: ["iOS & Android", "React Native", "Flutter", "Custom UI/UX"],
      price: "From $15,000",
      timeline: "8-16 weeks"
    },
    {
      icon: <Palette className="h-8 w-8 text-zion-cyan" />,
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interfaces",
      features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"],
      price: "From $5,000",
      timeline: "4-8 weeks"
    },
    {
      icon: <Target className="h-8 w-8 text-zion-cyan" />,
      title: "App Store Optimization",
      description: "Maximize visibility and downloads",
      features: ["Keyword Research", "ASO Strategy", "Screenshot Design", "Review Management"],
      price: "From $2,500",
      timeline: "2-4 weeks"
    },
    {
      icon: <Zap className="h-8 w-8 text-zion-cyan" />,
      title: "Performance Optimization",
      description: "Fast and efficient mobile applications",
      features: ["Speed Optimization", "Memory Management", "Battery Efficiency", "Crash Prevention"],
      price: "From $3,000",
      timeline: "3-6 weeks"
    }
  ];

  const platforms = [
    {
      name: "iOS App Store",
      icon: <AppStore className="h-8 w-8" />,
      description: "Native iOS applications for iPhone and iPad",
      features: ["Swift/SwiftUI", "App Store guidelines", "iOS compatibility", "Apple ecosystem"],
      price: "From $20,000",
      timeline: "10-18 weeks"
    },
    {
      name: "Google Play Store",
      icon: <GooglePlay className="h-8 w-8" />,
      description: "Native Android applications",
      features: ["Kotlin/Java", "Material Design", "Android compatibility", "Google services"],
      price: "From $18,000",
      timeline: "8-16 weeks"
    },
    {
      name: "Cross-Platform",
      icon: <Globe className="h-8 w-8" />,
      description: "Single codebase for multiple platforms",
      features: ["React Native", "Flutter", "Xamarin", "Shared codebase"],
      price: "From $25,000",
      timeline: "12-20 weeks"
    }
  ];

  const successMetrics = [
    { metric: "95%", label: "App Store Approval Rate" },
    { metric: "4.8★", label: "Average App Rating" },
    { metric: "2M+", label: "Downloads Generated" },
    { metric: "150+", label: "Apps Launched" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Requirements analysis, market research, and project planning",
      duration: "1-2 weeks",
      deliverables: ["Project brief", "Technical specification", "Timeline & budget"]
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "UI/UX design, wireframes, and interactive prototypes",
      duration: "2-4 weeks",
      deliverables: ["Wireframes", "UI designs", "Interactive prototype"]
    },
    {
      step: "03",
      title: "Development",
      description: "Coding, testing, and iterative development",
      duration: "6-12 weeks",
      deliverables: ["Beta version", "Test builds", "Documentation"]
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing across devices and platforms",
      duration: "2-3 weeks",
      deliverables: ["Test reports", "Bug fixes", "Performance optimization"]
    },
    {
      step: "05",
      title: "Launch & Marketing",
      description: "App store submission, launch strategy, and marketing",
      duration: "2-4 weeks",
      deliverables: ["Live app", "Marketing materials", "Launch strategy"]
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO",
      company: "TechStart Inc.",
      content: "Zion Tech helped us launch our mobile app in just 12 weeks. The quality and user experience exceeded our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "David Kim",
      role: "Product Manager",
      company: "InnovateCorp",
      content: "Their app store optimization services increased our downloads by 300% in the first month after launch.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">App Launch</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Transform your ideas into successful mobile applications. From concept to launch, 
            we handle every aspect of mobile app development and deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
              Start Your Project
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple mb-2">
                  {metric.metric}
                </div>
                <div className="text-zion-slate-light">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Mobile Launch Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="text-sm text-zion-slate-light">
                        • {feature}
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zion-cyan/20 pt-4 space-y-2">
                    <div className="text-white font-medium">{service.price}</div>
                    <div className="text-zion-cyan text-sm">{service.timeline}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Platforms */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Platform Support</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {platform.icon}
                  </div>
                  <CardTitle className="text-white text-xl">{platform.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {platform.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {platform.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-zion-cyan/20 pt-4 space-y-2 mb-4">
                    <div className="text-white font-medium">{platform.price}</div>
                    <div className="text-zion-cyan text-sm">{platform.timeline}</div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Development Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Development Process</h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-zion-cyan to-zion-purple flex items-center justify-center text-white font-bold text-xl">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-zion-slate-light mb-4">{step.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-white font-medium mb-2">Duration</h4>
                          <span className="text-zion-cyan">{step.duration}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-medium mb-2">Deliverables</h4>
                          <ul className="text-zion-slate-light text-sm space-y-1">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex}>• {deliverable}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="text-white font-medium">{testimonial.name}</div>
                      <div className="text-zion-slate-light text-sm">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Launch Your Mobile App?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Let's discuss your mobile app idea and create a roadmap to success. 
                Our team of experts is ready to bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Start Your Project
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MobileLaunch;