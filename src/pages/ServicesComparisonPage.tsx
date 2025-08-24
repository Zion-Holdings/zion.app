import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  CheckCircle, 
  XCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users,
  Phone,
  Mail,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";

export default function ServicesComparisonPage() {
  const competitors = [
    {
      name: "Zion Tech Group",
      logo: "🏛️",
      rating: 4.9,
      reviewCount: "500+",
      pricing: "Transparent",
      support: "24/7",
      features: "All",
      security: "Enterprise",
      scalability: "Unlimited",
      customization: "Full",
      deployment: "Days",
      color: "from-zion-purple to-zion-purple-dark"
    },
    {
      name: "Competitor A",
      logo: "🏢",
      rating: 4.2,
      reviewCount: "200+",
      pricing: "Hidden fees",
      support: "Business hours",
      features: "Limited",
      security: "Standard",
      scalability: "Limited",
      customization: "Partial",
      deployment: "Weeks",
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Competitor B",
      logo: "🏭",
      rating: 4.0,
      reviewCount: "150+",
      pricing: "Complex tiers",
      support: "Email only",
      features: "Basic",
      security: "Basic",
      scalability: "Restricted",
      customization: "Minimal",
      deployment: "Months",
      color: "from-blue-500 to-blue-600"
    }
  ];

  const comparisonFeatures = [
    {
      category: "AI & Machine Learning",
      features: [
        { name: "AI Chatbot Platform", zion: "✓ $299", competitorA: "✗ $999", competitorB: "✗ $1,499" },
        { name: "ML Model Optimization", zion: "✓ $1,499", competitorA: "✗ $3,999", competitorB: "✗ $5,999" },
        { name: "Content Moderation API", zion: "✓ $199", competitorA: "✗ $599", competitorB: "✗ $899" }
      ]
    },
    {
      category: "Cloud & DevOps",
      features: [
        { name: "Kubernetes Management", zion: "✓ $799", competitorA: "✗ $1,999", competitorB: "✗ $2,999" },
        { name: "CI/CD Automation", zion: "✓ $599", competitorA: "✗ $1,499", competitorB: "✗ $2,499" },
        { name: "Cost Optimization", zion: "✓ $399", competitorA: "✗ $899", competitorB: "✗ $1,299" }
      ]
    },
    {
      category: "Cybersecurity",
      features: [
        { name: "Penetration Testing", zion: "✓ $2,499", competitorA: "✗ $4,999", competitorB: "✗ $6,999" },
        { name: "GDPR Compliance", zion: "✓ $1,899", competitorA: "✗ $3,999", competitorB: "✗ $5,999" },
        { name: "Zero Trust Framework", zion: "✓ $3,499", competitorA: "✗ $6,999", competitorB: "✗ $9,999" }
      ]
    }
  ];

  const valuePropositions = [
    {
      title: "Cost Savings",
      description: "Save 40-70% compared to traditional enterprise solutions",
      icon: <TrendingUp className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Faster Time to Market",
      description: "Deploy in days instead of months with our proven methodologies",
      icon: <Zap className="h-8 w-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Better Security",
      description: "Enterprise-grade security with SOC 2 compliance and regular audits",
      icon: <Shield className="h-8 w-8" />,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Superior Support",
      description: "24/7 expert support vs. limited business hours from competitors",
      icon: <Users className="h-8 w-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Zion Tech Group helped us save over $50,000 annually while improving our security posture. Their AI chatbot platform was deployed in just 3 days!",
      rating: 5,
      savings: "$50K+ annually"
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "VP Engineering",
      content: "We compared multiple vendors and Zion Tech Group was the clear winner. Better features, lower prices, and exceptional support. Highly recommended!",
      rating: 5,
      savings: "60% cost reduction"
    },
    {
      name: "Emily Rodriguez",
      company: "SecureNet Corp",
      role: "Security Director",
      content: "Their penetration testing service uncovered critical vulnerabilities that other vendors missed. Professional, thorough, and competitively priced.",
      rating: 5,
      savings: "Enhanced security"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Services Comparison - Zion Tech Group vs Competitors" 
        description="See how Zion Tech Group's micro SAAS services compare to competitors. Better features, lower prices, and superior support."
        keywords="services comparison, competitive analysis, micro SAAS, IT services comparison, AI services comparison"
        canonical="https://ziontechgroup.com/services-comparison"
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-zion-blue to-zion-blue-dark text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            How We Compare
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            See how Zion Tech Group's micro SAAS services stack up against the competition. 
            Better features, lower prices, and superior support - all backed by real customer success stories.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Get Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <ExternalLink className="h-5 w-5 mr-2" />
              View All Services
            </Button>
          </div>
        </div>
      </div>

      {/* Competitor Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Competitive Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {competitors.map((competitor, index) => (
              <Card key={index} className={`text-center ${index === 0 ? 'ring-2 ring-zion-purple scale-105' : ''}`}>
                <CardHeader>
                  <div className={`w-20 h-20 bg-gradient-to-br ${competitor.color} rounded-full flex items-center justify-center text-4xl mx-auto mb-4`}>
                    {competitor.logo}
                  </div>
                  <CardTitle className="text-2xl">{competitor.name}</CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{competitor.rating}</span>
                    <span className="text-gray-500">({competitor.reviewCount})</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pricing:</span>
                    <span className="font-semibold">{competitor.pricing}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Support:</span>
                    <span className="font-semibold">{competitor.support}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Features:</span>
                    <span className="font-semibold">{competitor.features}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Security:</span>
                    <span className="font-semibold">{competitor.security}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Scalability:</span>
                    <span className="font-semibold">{competitor.scalability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Customization:</span>
                    <span className="font-semibold">{competitor.customization}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deployment:</span>
                    <span className="font-semibold">{competitor.deployment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Comparison Tables */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Feature-by-Feature Comparison
          </h2>
          
          {comparisonFeatures.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">{category.category}</h3>
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/3">Feature</TableHead>
                      <TableHead className="text-center">Zion Tech Group</TableHead>
                      <TableHead className="text-center">Competitor A</TableHead>
                      <TableHead className="text-center">Competitor B</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {category.features.map((feature, featureIndex) => (
                      <TableRow key={featureIndex}>
                        <TableCell className="font-medium">{feature.name}</TableCell>
                        <TableCell className="text-center">
                          <Badge className="bg-green-100 text-green-800">
                            {feature.zion}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className="text-red-600 border-red-200">
                            {feature.competitorA}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline" className="text-red-600 border-red-200">
                            {feature.competitorB}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Value Propositions */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Zion Tech Group Wins
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valuePropositions.map((proposition, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${proposition.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {proposition.icon}
                  </div>
                  <CardTitle className="text-xl">{proposition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {proposition.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardDescription className="text-gray-600 italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {testimonial.savings}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Calculate Your Savings
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-zion-slate-light">
              Use our ROI calculator to see how much you can save by choosing Zion Tech Group over competitors
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-left">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Traditional Solutions</h3>
                <ul className="space-y-2 text-zion-slate-light">
                  <li>• High upfront costs</li>
                  <li>• Long deployment times</li>
                  <li>• Limited customization</li>
                  <li>• Basic support</li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
                <ul className="space-y-2 text-zion-slate-light">
                  <li>• Low monthly costs</li>
                  <li>• Rapid deployment</li>
                  <li>• Full customization</li>
                  <li>• 24/7 expert support</li>
                </ul>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Your Savings</h3>
                <div className="text-3xl font-bold text-zion-cyan mb-2">40-70%</div>
                <p className="text-zion-slate-light">Average cost reduction while improving quality and features</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-zion-purple hover:bg-gray-100">
                <Phone className="h-5 w-5 mr-2" />
                Get Free Consultation
              </Button>
              <Link to="/comprehensive-services">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-purple">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-zion-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-zion-slate-light">
            Join hundreds of businesses that have already switched to Zion Tech Group and are saving money while getting better service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-zion-blue hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-zion-blue">
              <Mail className="h-5 w-5 mr-2" />
              Email kleber@ziontechgroup.com
            </Button>
          </div>
          
          <div className="text-zion-cyan">
            <p>Visit us: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Website: <a href="https://ziontechgroup.com" className="underline hover:text-white">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}