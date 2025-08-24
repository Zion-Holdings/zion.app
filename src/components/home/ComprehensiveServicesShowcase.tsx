import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  TrendingUp,
  CheckCircle,
  Star,
  Users,
  Globe
} from "lucide-react";
import { SERVICE_CATEGORIES, SERVICE_PRICING_TIERS } from "@/data/sampleServices";

export function ComprehensiveServicesShowcase() {
  const getCategoryIcon = (icon: string) => {
    return <span className="text-3xl">{icon}</span>;
  };

  const getCategoryColor = (index: number) => {
    const colors = [
      "from-purple-500 to-indigo-600",
      "from-cyan-500 to-blue-600", 
      "from-emerald-500 to-green-600",
      "from-amber-500 to-orange-600",
      "from-pink-500 to-rose-600",
      "from-violet-500 to-purple-600"
    ];
    return colors[index % colors.length];
  };

  return (
    <section className="py-20 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4 bg-gradient-to-r from-zion-cyan via-white to-zion-purple-light bg-clip-text text-transparent">
            Comprehensive Tech Solutions
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto">
            Discover our complete ecosystem of micro SAAS, IT infrastructure, and AI services designed to transform your business
          </p>
          <div className="flex justify-center mt-6">
            <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30">
              <Star className="h-4 w-4 mr-2" />
              Trusted by 500+ Companies
            </Badge>
          </div>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {SERVICE_CATEGORIES.map((category, index) => (
            <Card key={category.id} className="group overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 hover:bg-zion-blue-dark transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`rounded-full w-16 h-16 bg-gradient-to-br ${getCategoryColor(index)} flex items-center justify-center`}>
                    {getCategoryIcon(category.icon)}
                  </div>
                  <Badge variant="secondary" className="bg-zion-purple/20 text-zion-cyan">
                    ${category.avgPrice.toLocaleString()}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-white">{category.name}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.services.slice(0, 4).map((service, serviceIndex) => (
                    <div key={serviceIndex} className="flex items-center text-sm text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                  {category.services.length > 4 && (
                    <div className="text-xs text-zion-slate-light/70">
                      +{category.services.length - 4} more services
                    </div>
                  )}
                </div>
                <div className="mt-6">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  >
                    <Link to={`/services?category=${category.id}`}>
                      Explore {category.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Tiers */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Flexible Pricing Plans</h3>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Choose the perfect plan for your business needs with transparent pricing and no hidden fees
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_PRICING_TIERS.map((tier, index) => (
              <Card key={tier.name} className={`relative overflow-hidden border-zion-blue-light bg-zion-blue-dark/50 ${
                index === 1 ? 'ring-2 ring-zion-purple scale-105' : ''
              }`}>
                {index === 1 && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-zion-purple text-white px-4 py-1">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-white">{tier.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-zion-cyan">{tier.currency}</span>
                    <span className="text-4xl font-bold text-white">{tier.price.toLocaleString()}</span>
                  </div>
                  <CardDescription className="text-zion-slate-light mt-2">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild 
                    className={`w-full ${
                      index === 1 
                        ? 'bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white' 
                        : 'bg-zion-blue hover:bg-zion-blue-light text-white'
                    }`}
                  >
                    <Link to="/request-quote">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-2xl p-8 border border-zion-purple/30">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
            Join hundreds of companies already leveraging our comprehensive tech solutions. 
            Get a free consultation and discover how we can accelerate your digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              asChild
            >
              <Link to="/request-quote">
                <Users className="mr-2 h-5 w-5" />
                Get Free Consultation
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
              asChild
            >
              <Link to="/contact">
                <Globe className="mr-2 h-5 w-5" />
                Contact Our Team
              </Link>
            </Button>
          </div>
          <div className="mt-6 text-sm text-zion-slate-light">
            <span className="flex items-center justify-center">
              <Shield className="h-4 w-4 mr-2 text-zion-cyan" />
              Enterprise-grade security & compliance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}