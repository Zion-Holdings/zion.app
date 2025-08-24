import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Handshake, Globe, Users, Award, Star, ExternalLink } from 'lucide-react';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Microsoft Azure",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c1aaa9f?auto=format&fit=crop&w=200&h=100",
      category: "Cloud Partner",
      description: "Strategic cloud infrastructure partner providing scalable solutions for enterprise clients.",
      benefits: ["Azure credits", "Technical support", "Joint go-to-market", "Training resources"],
      tier: "Gold Partner",
      rating: 5
    },
    {
      id: 2,
      name: "OpenAI",
      logo: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=200&h=100",
      category: "AI Partner",
      description: "Leading AI research organization enabling cutting-edge machine learning solutions.",
      benefits: ["API access", "Model training", "Research collaboration", "Beta features"],
      tier: "Strategic Partner",
      rating: 5
    },
    {
      id: 3,
      name: "AWS",
      logo: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=200&h=100",
      category: "Cloud Partner",
      description: "World's leading cloud platform provider for scalable and secure infrastructure solutions.",
      benefits: ["AWS credits", "24/7 support", "Migration assistance", "Cost optimization"],
      tier: "Advanced Partner",
      rating: 5
    },
    {
      id: 4,
      name: "Google Cloud",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=200&h=100",
      category: "Cloud Partner",
      description: "Innovative cloud services with advanced AI and machine learning capabilities.",
      benefits: ["GCP credits", "AI/ML tools", "Global network", "Security features"],
      tier: "Premier Partner",
      rating: 4
    },
    {
      id: 5,
      name: "Salesforce",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&h=100",
      category: "CRM Partner",
      description: "Leading customer relationship management platform for business growth and automation.",
      benefits: ["Salesforce credits", "Integration support", "Training programs", "Custom development"],
      tier: "Silver Partner",
      rating: 4
    },
    {
      id: 6,
      name: "HubSpot",
      logo: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=200&h=100",
      category: "Marketing Partner",
      description: "All-in-one inbound marketing, sales, and CRM platform for modern businesses.",
      benefits: ["HubSpot credits", "Marketing tools", "Sales automation", "Analytics insights"],
      tier: "Gold Partner",
      rating: 5
    }
  ];

  const partnershipTypes = [
    {
      title: "Technology Partners",
      description: "Leading technology providers that power our solutions",
      icon: <Globe className="h-12 w-12 text-zion-cyan" />,
      count: "15+"
    },
    {
      title: "Solution Partners",
      description: "Strategic partners that extend our service capabilities",
      icon: <Handshake className="h-12 w-12 text-zion-cyan" />,
      count: "25+"
    },
    {
      title: "Channel Partners",
      description: "Resellers and distributors of our products and services",
      icon: <Users className="h-12 w-12 text-zion-cyan" />,
      count: "40+"
    },
    {
      title: "Certified Partners",
      description: "Partners with specialized certifications and expertise",
      icon: <Award className="h-12 w-12 text-zion-cyan" />,
      count: "30+"
    }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Partners</span>
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            We collaborate with industry leaders to deliver exceptional value to our clients. 
            Our strategic partnerships enable us to provide cutting-edge solutions and comprehensive support.
          </p>
        </div>

        {/* Partnership Types */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Partnership Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-zion-slate-light mb-4">{type.description}</p>
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">
                    {type.count}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Partners */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Featured Partners</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <Card key={partner.id} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105">
                <div className="relative">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-zion-cyan/90 text-white">
                    {partner.tier}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-white text-lg">{partner.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      {[...Array(partner.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {partner.category}
                  </Badge>
                  <CardDescription className="text-zion-slate-light">
                    {partner.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2">Key Benefits:</h4>
                    <div className="space-y-1">
                      {partner.benefits.slice(0, 3).map((benefit, index) => (
                        <div key={index} className="text-sm text-zion-slate-light flex items-center gap-2">
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white py-2 px-4 rounded-md transition-all duration-200">
                    <span>Learn More</span>
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Become a Partner */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 backdrop-blur-md border border-zion-cyan/20 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-white">Become a Partner</CardTitle>
              <CardDescription className="text-zion-slate-light text-lg">
                Join our network of trusted partners and grow your business with Zion Tech Group
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">1</div>
                  <h3 className="text-xl font-bold text-white mb-2">Apply</h3>
                  <p className="text-zion-slate-light">Submit your partnership application</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">2</div>
                  <h3 className="text-xl font-bold text-white mb-2">Review</h3>
                  <p className="text-zion-slate-light">We'll evaluate your application</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-zion-cyan mb-2">3</div>
                  <h3 className="text-xl font-bold text-white mb-2">Launch</h3>
                  <p className="text-zion-slate-light">Start your partnership journey</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white rounded-md transition-all duration-200 font-medium">
                  Apply Now
                </button>
                <button className="px-8 py-3 border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white rounded-md transition-all duration-200 font-medium">
                  Contact Sales
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Partners;