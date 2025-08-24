
import React from 'react';
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Leaf, 
  Zap, 
  Globe, 
  Recycle, 
  Sun, 
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Cloud,
  Server,
  Monitor,
  Smartphone
} from "lucide-react";

export default function GreenIT() {
  const greenSolutions = [
    {
      icon: <Cloud className="w-8 h-8 text-zion-cyan" />,
      title: "Cloud Optimization",
      description: "Reduce energy consumption through intelligent cloud resource management and server consolidation",
      benefits: ["Up to 40% energy savings", "Reduced carbon footprint", "Lower operational costs"],
      features: ["Auto-scaling", "Resource monitoring", "Green hosting partners"]
    },
    {
      icon: <Server className="w-8 h-8 text-zion-cyan" />,
      title: "Data Center Efficiency",
      description: "Implement energy-efficient data center solutions with advanced cooling and power management",
      benefits: ["PUE optimization", "Renewable energy integration", "Waste heat recovery"],
      features: ["Liquid cooling", "Smart power distribution", "Energy monitoring"]
    },
    {
      icon: <Monitor className="w-8 h-8 text-zion-cyan" />,
      title: "Hardware Lifecycle Management",
      description: "Extend device lifespan and implement responsible disposal and recycling programs",
      benefits: ["Reduced e-waste", "Cost savings", "Compliance with regulations"],
      features: ["Asset tracking", "Refurbishment programs", "Certified recycling"]
    },
    {
      icon: <Smartphone className="w-8 h-8 text-zion-cyan" />,
      title: "Mobile Device Management",
      description: "Optimize mobile device usage and implement power-saving policies",
      benefits: ["Extended battery life", "Reduced charging cycles", "Lower energy consumption"],
      features: ["Power management", "App optimization", "Green charging solutions"]
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-zion-cyan" />,
      title: "Smart Office Solutions",
      description: "Implement IoT-based lighting, HVAC, and energy management systems",
      benefits: ["Automated energy optimization", "Real-time monitoring", "Significant cost savings"],
      features: ["Smart sensors", "Automated controls", "Energy analytics"]
    },
    {
      icon: <Recycle className="w-8 h-8 text-zion-cyan" />,
      title: "Circular Economy Practices",
      description: "Adopt circular economy principles for IT equipment and materials",
      benefits: ["Resource conservation", "Waste reduction", "Sustainable supply chain"],
      features: ["Equipment leasing", "Take-back programs", "Material recovery"]
    }
  ];

  const renewableEnergy = [
    {
      icon: <Sun className="w-12 h-12 text-yellow-400" />,
      title: "Solar Power",
      description: "Harness solar energy for data centers and office facilities",
      capacity: "500kW+",
      savings: "60% energy costs"
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      title: "Smart Grid",
      description: "Intelligent power distribution and management",
      capacity: "200kW+",
      savings: "40% carbon reduction"
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-400" />,
      title: "Green Infrastructure",
      description: "Eco-friendly data center and office solutions",
      capacity: "1MWh+",
      savings: "30% peak demand"
    }
  ];

  const certifications = [
    {
      name: "ISO 14001",
      description: "Environmental Management Systems",
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      name: "Energy Star",
      description: "Energy Efficiency Certification",
      icon: <CheckCircle className="w-6 h-6 text-blue-400" />
    },
    {
      name: "LEED Certified",
      description: "Leadership in Energy and Environmental Design",
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    },
    {
      name: "Green Seal",
      description: "Environmental Standard Certification",
      icon: <CheckCircle className="w-6 h-6 text-green-400" />
    }
  ];

  const impactMetrics = [
    {
      metric: "45%",
      label: "Energy Reduction",
      description: "Average energy savings across client implementations"
    },
    {
      metric: "2.3M",
      label: "kWh Saved",
      description: "Total energy savings for our clients annually"
    },
    {
      metric: "1,200",
      label: "Tons CO2",
      description: "Carbon emissions reduced through our solutions"
    },
    {
      metric: "$850K",
      label: "Cost Savings",
      description: "Average annual savings for enterprise clients"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Green IT Solutions - Zion Tech Group" 
        description="Transform your IT infrastructure with sustainable, energy-efficient solutions. Reduce costs and environmental impact with Zion's Green IT services."
        keywords="Green IT, sustainable technology, energy efficiency, environmental IT, green computing"
        canonical="https://ziontechgroup.com/green-it"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-700 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-400/20 rounded-full flex items-center justify-center">
              <Leaf className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Green <span className="text-green-400">IT</span> Solutions
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
            Transform your technology infrastructure with sustainable, energy-efficient solutions 
            that reduce costs and environmental impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-400 hover:bg-green-500 text-green-900">
              <Link to="/contact">Get Green IT Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-green-300 text-green-100 hover:bg-green-800 hover:text-white">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Green IT */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Green IT?</h2>
              <p className="text-lg text-zion-slate-light mb-6">
                The technology sector is responsible for approximately 2-3% of global greenhouse gas emissions. 
                By implementing Green IT solutions, businesses can significantly reduce their environmental impact 
                while improving operational efficiency and reducing costs.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-zion-slate-light">Reduce energy consumption by up to 40%</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-zion-slate-light">Lower operational costs and improve ROI</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-zion-slate-light">Meet sustainability goals and compliance requirements</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="text-green-400 w-5 h-5" />
                  <span className="text-zion-slate-light">Enhance brand reputation and stakeholder trust</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-400/20 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">Environmental Impact</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-green-400 font-semibold">Energy Savings</div>
                  <div className="text-green-400 font-semibold">Carbon Reduction</div>
                  <div className="text-green-400 font-semibold">Waste Minimization</div>
                  <div className="text-green-400 font-semibold">Resource Conservation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green IT Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Green IT Solutions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {greenSolutions.map((solution, index) => (
              <Card key={index} className="bg-zion-blue-dark border-green-500/20 hover:border-green-500/40 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {solution.icon}
                  </div>
                  <CardTitle className="text-green-400">{solution.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Benefits:</h4>
                    <ul className="space-y-1">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-zion-slate-light text-sm flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <Badge key={idx} variant="outline" className="border-green-500/30 text-green-300 text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Renewable Energy Integration */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Renewable Energy Integration</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {renewableEnergy.map((energy, index) => (
              <Card key={index} className="bg-zion-blue-dark border-green-500/20 text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {energy.icon}
                  </div>
                  <CardTitle className="text-green-400">{energy.title}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {energy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-green-400">{energy.capacity}</div>
                      <div className="text-zion-slate-light text-sm">Installed Capacity</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-green-400">{energy.savings}</div>
                      <div className="text-zion-slate-light text-sm">Annual Savings</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Our Environmental Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">{metric.metric}</div>
                <div className="text-white font-semibold mb-2">{metric.label}</div>
                <p className="text-zion-slate-light text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Certifications & Standards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-zion-blue-dark border-green-500/20 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    {cert.icon}
                  </div>
                  <CardTitle className="text-green-400">{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light text-sm">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-green-900 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Assessment</h3>
              <p className="text-zion-slate-light">
                Comprehensive audit of current IT infrastructure and energy usage
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-green-900 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Strategy</h3>
              <p className="text-zion-slate-light">
                Develop customized Green IT roadmap with clear milestones
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-green-900 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Implementation</h3>
              <p className="text-zion-slate-light">
                Execute solutions with minimal disruption to operations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4 text-green-900 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Optimization</h3>
              <p className="text-zion-slate-light">
                Continuous monitoring and improvement of green initiatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-green-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Go Green?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Start your journey toward sustainable IT infrastructure. Our experts will help you 
            reduce costs while making a positive environmental impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-green-400 hover:bg-green-500 text-green-900">
              <Link to="/contact">Get Free Assessment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-green-300 text-green-100 hover:bg-green-800 hover:text-white">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
