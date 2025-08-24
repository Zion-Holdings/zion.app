
import React from 'react';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Zap, Recycle, Globe, TrendingUp, Shield, Lightbulb, Users } from 'lucide-react';

export default function GreenIT() {
  const greenSolutions = [
    {
      icon: <Leaf className="w-8 h-8 text-green-400" />,
      title: "Sustainable Data Centers",
      description: "Energy-efficient data centers powered by renewable energy sources with advanced cooling systems and waste heat recovery.",
      benefits: ["Reduced carbon footprint", "Lower energy costs", "Improved efficiency"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Renewable Energy Integration",
      description: "Seamless integration of solar, wind, and hydroelectric power into IT infrastructure.",
      benefits: ["100% renewable energy", "Grid independence", "Cost savings over time"]
    },
    {
      icon: <Recycle className="w-8 h-8 text-blue-400" />,
      title: "Circular IT Economy",
      description: "Hardware recycling, refurbishment, and responsible disposal programs to minimize e-waste.",
      benefits: ["Reduced e-waste", "Extended hardware lifecycle", "Environmental compliance"]
    },
    {
      icon: <Globe className="w-8 h-8 text-cyan-400" />,
      title: "Carbon-Neutral Operations",
      description: "Comprehensive carbon offset programs and sustainable business practices across all operations.",
      benefits: ["Carbon neutrality", "ESG compliance", "Brand reputation"]
    }
  ];

  const services = [
    {
      title: "Green IT Consulting",
      description: "Expert guidance on implementing sustainable technology practices and reducing environmental impact.",
      features: ["Energy audits", "Sustainability roadmaps", "ROI analysis"],
      price: "Starting at $5,000"
    },
    {
      title: "Sustainable Infrastructure",
      description: "Design and implementation of eco-friendly IT infrastructure and data centers.",
      features: ["Energy-efficient hardware", "Smart cooling systems", "Renewable energy integration"],
      price: "Custom pricing"
    },
    {
      title: "E-waste Management",
      description: "Comprehensive electronic waste collection, recycling, and disposal services.",
      features: ["Secure data destruction", "Certified recycling", "Compliance reporting"],
      price: "Starting at $2,000"
    },
    {
      title: "Carbon Footprint Analysis",
      description: "Detailed assessment of your IT operations' environmental impact with actionable recommendations.",
      features: ["Comprehensive analysis", "Reduction strategies", "Progress tracking"],
      price: "Starting at $3,500"
    }
  ];

  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "Software Development",
      challenge: "High energy costs and carbon footprint from legacy data centers",
      solution: "Implemented energy-efficient infrastructure with renewable energy integration",
      results: ["40% reduction in energy costs", "60% decrease in carbon emissions", "Improved system performance"]
    },
    {
      company: "GreenStart Inc.",
      industry: "E-commerce",
      challenge: "Growing e-waste from hardware upgrades and replacements",
      solution: "Established circular IT economy with refurbishment and recycling programs",
      results: ["80% reduction in e-waste", "30% cost savings on hardware", "Enhanced sustainability credentials"]
    },
    {
      company: "EcoTech Manufacturing",
      industry: "Manufacturing",
      challenge: "Need for sustainable IT operations to meet customer demands",
      solution: "Comprehensive green IT transformation with carbon-neutral certification",
      results: ["100% renewable energy usage", "Carbon-neutral operations", "Increased customer satisfaction"]
    }
  ];

  return (
    <>
      <SEO 
        title="Green IT Solutions - Zion Tech Group" 
        description="Transform your IT operations with sustainable, eco-friendly solutions. Reduce carbon footprint and costs while improving efficiency." 
        keywords="green IT, sustainable technology, eco-friendly IT, carbon neutral, renewable energy, e-waste management"
        canonical="https://ziontechgroup.com/green-it"
      />
      
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <GradientHeading>Green IT Solutions</GradientHeading>
            <p className="mt-6 text-zion-slate-light text-xl max-w-4xl mx-auto">
              Transform your technology infrastructure with sustainable, eco-friendly solutions that reduce costs, 
              improve efficiency, and protect our planet. Join the green technology revolution.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-green-400 bg-green-400/10">
                Carbon Neutral
              </Badge>
              <Badge variant="secondary" className="text-blue-400 bg-blue-400/10">
                Energy Efficient
              </Badge>
              <Badge variant="secondary" className="text-yellow-400 bg-yellow-400/10">
                Renewable Energy
              </Badge>
              <Badge variant="secondary" className="text-cyan-400 bg-cyan-400/10">
                Sustainable
              </Badge>
            </div>
          </div>

          {/* Why Green IT */}
          <section className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Green IT?</h2>
                <p className="text-zion-slate-light text-lg mb-6">
                  The technology sector is responsible for a significant portion of global carbon emissions. 
                  By adopting green IT practices, organizations can reduce their environmental impact while 
                  improving operational efficiency and reducing costs.
                </p>
                <p className="text-zion-slate-light text-lg mb-6">
                  Our comprehensive green IT solutions help businesses transition to sustainable technology 
                  practices, from energy-efficient infrastructure to renewable energy integration and 
                  responsible e-waste management.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
                    <div className="text-2xl font-bold text-green-400">40%</div>
                    <div className="text-zion-slate-light text-sm">Average Energy Savings</div>
                  </div>
                  <div className="text-center p-4 bg-zion-blue-dark rounded-lg border border-zion-blue-light">
                    <div className="text-2xl font-bold text-blue-400">60%</div>
                    <div className="text-zion-slate-light text-sm">Carbon Reduction</div>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa5?auto=format&fit=crop&w=800&h=600" 
                  alt="Green technology infrastructure" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* Green Solutions */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Green IT Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {greenSolutions.map((solution, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white hover:border-green-400/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      {solution.icon}
                      <CardTitle className="text-xl text-green-400">{solution.title}</CardTitle>
                    </div>
                    <CardDescription className="text-zion-slate-light">
                      {solution.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Services */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Green IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-400">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-green-400 font-semibold">{service.price}</span>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Get Started
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Case Studies */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Success Stories</h2>
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-zion-blue-dark border-zion-blue-light text-white">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl text-green-400">{study.company}</CardTitle>
                        <CardDescription className="text-zion-slate-light">
                          {study.industry} • {study.challenge}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="border-green-400 text-green-400 w-fit">
                        Case Study
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2">Solution:</h4>
                      <p className="text-zion-slate-light">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-zion-slate-light">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-zion-blue-dark border-green-400/30 text-white max-w-3xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-green-400">Ready to Go Green?</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Join hundreds of organizations that have already transformed their IT operations with our 
                  sustainable solutions. Start your green IT journey today.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400/10">
                    Download Green IT Guide
                  </Button>
                </div>
                <p className="text-sm text-zion-slate-light">
                  Get a free sustainability assessment and personalized recommendations for your organization.
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
}
