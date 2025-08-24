import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SEO } from "@/components/SEO";
import { 
  Cloud, 
  Server, 
  Database, 
  Zap, 
  Target, 
  Users, 
  DollarSign,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Shield,
  Network,
  BarChart3,
  Settings,
  Lock,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

export default function CloudMigrationServices() {
  const services = [
    {
      title: "Cloud Assessment",
      description: "Comprehensive analysis of your current infrastructure and cloud readiness",
      icon: <BarChart3 className="h-6 w-6 text-zion-cyan" />,
      price: "From $2,000"
    },
    {
      title: "Migration Planning",
      description: "Detailed roadmap and strategy for seamless cloud migration",
      icon: <Target className="h-6 w-6 text-zion-purple" />,
      price: "From $3,500"
    },
    {
      title: "Data Migration",
      description: "Secure and efficient transfer of data to cloud platforms",
      icon: <Database className="h-6 w-6 text-zion-blue" />,
      price: "From $5,000"
    },
    {
      title: "Application Migration",
      description: "Lift-and-shift or refactor applications for cloud deployment",
      icon: <Server className="h-6 w-6 text-zion-cyan" />,
      price: "From $8,000"
    }
  ];

  const cloudPlatforms = [
    {
      name: "AWS",
      description: "Amazon Web Services migration and optimization",
      icon: <Cloud className="h-8 w-8 text-zion-cyan" />,
      features: ["EC2", "RDS", "S3", "Lambda"]
    },
    {
      name: "Azure",
      description: "Microsoft Azure cloud migration services",
      icon: <Cloud className="h-8 w-8 text-zion-purple" />,
      features: ["VM", "SQL Database", "Blob Storage", "Functions"]
    },
    {
      name: "Google Cloud",
      description: "Google Cloud Platform migration solutions",
      icon: <Cloud className="h-8 w-8 text-zion-blue" />,
      features: ["Compute Engine", "Cloud SQL", "Cloud Storage", "Cloud Functions"]
    },
    {
      name: "Multi-Cloud",
      description: "Hybrid and multi-cloud migration strategies",
      icon: <Network className="h-8 w-8 text-zion-cyan" />,
      features: ["Hybrid Cloud", "Multi-Cloud", "Cloud Bursting", "Disaster Recovery"]
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Migration",
      price: "$5,000",
      period: "one-time",
      description: "Essential cloud migration for small businesses",
      features: [
        "Cloud assessment",
        "Basic migration plan",
        "Data migration",
        "Basic optimization",
        "30 days support"
      ],
      popular: false
    },
    {
      name: "Professional Migration",
      price: "$15,000",
      period: "one-time",
      description: "Comprehensive migration for growing businesses",
      features: [
        "Full cloud assessment",
        "Detailed migration plan",
        "Data & app migration",
        "Performance optimization",
        "90 days support",
        "Training & documentation"
      ],
      popular: true
    },
    {
      name: "Enterprise Migration",
      price: "$50,000",
      period: "one-time",
      description: "Full-scale migration for large organizations",
      features: [
        "Custom migration strategy",
        "Multi-cloud migration",
        "Advanced optimization",
        "Dedicated team",
        "1 year support",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "CTO, RetailTech Solutions",
      content: "Zion's cloud migration team transformed our infrastructure. We reduced costs by 40% and improved performance significantly.",
      rating: 5
    },
    {
      name: "Dr. Maria Santos",
      role: "IT Director, HealthTech Innovations",
      content: "The migration was seamless with zero downtime. Zion's expertise in healthcare compliance made all the difference.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "VP Engineering, FinTech Startup",
      content: "From on-premise to AWS in 6 weeks. Zion's team delivered beyond our expectations with excellent documentation.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark">
      <SEO 
        title="Cloud Migration Services - Zion Tech Group" 
        description="Expert cloud migration services for AWS, Azure, and Google Cloud. Seamless migration with zero downtime and cost optimization."
        keywords="cloud migration, AWS migration, Azure migration, Google Cloud, cloud optimization, Zion Tech Group"
        canonical="https://ziontechgroup.com/cloud-migration-services"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20 animate-pulse"></div>
        <div className="container mx-auto relative z-10 text-center">
          <Badge className="mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
            ☁️ Cloud Migration Experts
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
            Cloud Migration Services
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Transform your business with expert cloud migration services. We specialize in seamless migrations to AWS, Azure, 
            and Google Cloud with zero downtime and guaranteed cost optimization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Get Migration Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Migration Services
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Our expert team handles every aspect of your cloud migration journey, from assessment to optimization.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-white">{service.title}</CardTitle>
                  <CardDescription className="text-zion-cyan font-semibold">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Platforms Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Cloud Platform Expertise
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              We specialize in all major cloud platforms and can help you choose the best solution for your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cloudPlatforms.map((platform, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20 text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-20 h-20 flex items-center justify-center">
                    {platform.icon}
                  </div>
                  <CardTitle className="text-white">{platform.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-zion-slate-light mb-4">
                    {platform.description}
                  </CardDescription>
                  <div className="flex flex-wrap justify-center gap-2">
                    {platform.features.map((feature, featureIndex) => (
                      <Badge key={featureIndex} variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Cloud Migration?
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Cloud migration offers numerous benefits that can transform your business operations and bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-zion-cyan" />
                </div>
                <CardTitle className="text-white">Cost Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zion-slate-light text-center">
                  Reduce infrastructure costs by up to 40% with pay-as-you-use cloud services and optimized resource allocation.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Zap className="h-8 w-8 text-zion-purple" />
                </div>
                <CardTitle className="text-white">Scalability</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zion-slate-light text-center">
                  Scale your infrastructure up or down instantly based on demand, ensuring optimal performance and cost efficiency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-zion-purple/10 rounded-full w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8 text-zion-blue" />
                </div>
                <CardTitle className="text-white">Enhanced Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-zion-slate-light text-center">
                  Benefit from enterprise-grade security features, compliance certifications, and advanced threat protection.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-zion-slate-dark/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Migration Pricing
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Choose the migration package that fits your business needs. All packages include our comprehensive migration services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'border-zion-purple scale-105' : 'border-zion-slate-light'} bg-zion-slate-dark/50 transition-all duration-300 hover:shadow-2xl`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-zion-purple to-zion-cyan text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                    <span className="text-zion-slate-light"> {plan.period}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-zion-slate-light">
                        <CheckCircle className="h-5 w-5 text-zion-cyan mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                    <Link to="/contact">
                      Get Started
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              See what our clients say about our cloud migration expertise and commitment to successful transitions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-zion-slate-dark/50 border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-zion-slate-light">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-purple/20 via-zion-cyan/20 to-zion-blue/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Join thousands of businesses already enjoying the benefits of cloud computing. Start your migration journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 text-lg">
              <Link to="/contact">
                Start Migration Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10 px-8 py-4 text-lg">
              <Link to="/contact">
                Contact Migration Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}