import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  Target, 
  Zap, 
  CheckCircle, 
  Star, 
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  MessageSquare,
  FileText,
  Search,
  Filter,
  UserPlus
} from 'lucide-react';

const ZionHireAI = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-zion-cyan" />,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match candidates to job requirements with 95% accuracy"
    },
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      title: "Talent Pool Access",
      description: "Access to millions of pre-vetted professionals across all industries"
    },
    {
      icon: <Target className="h-8 w-8 text-zion-cyan" />,
      title: "Precision Targeting",
      description: "Laser-focused candidate recommendations based on skills, experience, and culture fit"
    },
    {
      icon: <Zap className="h-8 w-8 text-zion-cyan" />,
      title: "Lightning Fast",
      description: "Find qualified candidates in minutes, not weeks or months"
    }
  ];

  const benefits = [
    "Reduce hiring time by 70%",
    "Improve candidate quality by 3x",
    "Cut recruitment costs by 50%",
    "Increase retention rates by 40%",
    "Access to passive candidates",
    "Automated skill assessments",
    "Cultural fit analysis",
    "Predictive performance modeling"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 299,
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 job postings",
        "AI candidate matching",
        "Basic analytics dashboard",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 599,
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50 job postings",
        "Advanced AI algorithms",
        "Comprehensive analytics",
        "Priority support",
        "Custom integrations",
        "Team collaboration tools",
        "Advanced filtering options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 1299,
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited job postings",
        "Custom AI models",
        "White-label solutions",
        "Dedicated account manager",
        "API access",
        "Advanced reporting",
        "Custom workflows",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "HR Director",
      company: "TechCorp Inc.",
      content: "ZionHireAI transformed our recruitment process. We're now filling positions 3x faster with better quality candidates.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "StartupXYZ",
      content: "The AI-powered matching is incredible. We found our perfect CTO in just 2 weeks instead of 3 months.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100"
    },
    {
      name: "Emily Rodriguez",
      role: "Talent Acquisition Manager",
      company: "Global Solutions",
      content: "ZionHireAI's predictive analytics helped us identify candidates who would stay longer and perform better.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&h=100"
    }
  ];

  const stats = [
    { number: "95%", label: "Match Accuracy" },
    { number: "70%", label: "Faster Hiring" },
    { number: "3x", label: "Better Candidates" },
    { number: "50%", label: "Cost Reduction" }
  ];

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Zion<span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Hire</span>AI
          </h1>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto mb-8">
            Revolutionize your hiring process with AI-powered talent acquisition. 
            Find the perfect candidates faster, smarter, and more efficiently than ever before.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple mb-2">
                  {stat.number}
                </div>
                <div className="text-zion-slate-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Choose ZionHireAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-md border border-zion-cyan/20 text-center hover:border-zion-cyan/40 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zion-slate-light">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Transform Your Hiring Process</h2>
              <p className="text-zion-slate-light mb-6">
                ZionHireAI combines cutting-edge artificial intelligence with deep recruitment expertise 
                to deliver unprecedented results in talent acquisition.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-zion-cyan flex-shrink-0" />
                    <span className="text-zion-slate-light">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl p-8 backdrop-blur-md border border-zion-cyan/20">
                <h3 className="text-2xl font-bold text-white mb-6">AI-Powered Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Search className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Smart candidate search</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Filter className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Advanced filtering</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Automated outreach</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-zion-cyan" />
                    <span className="text-zion-slate-light">Resume parsing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`bg-white/5 backdrop-blur-md border transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'border-zion-cyan bg-gradient-to-br from-zion-cyan/10 to-zion-purple/10' 
                  : 'border-zion-cyan/20'
              }`}>
                {plan.popular && (
                  <div className="text-center py-2 bg-zion-cyan text-white text-sm font-medium rounded-t-lg">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-white text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-zion-slate-light">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-white">${plan.price}</span>
                    <span className="text-zion-slate-light">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-4 w-4 text-zion-cyan flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white' 
                      : 'border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                Ready to Transform Your Hiring?
              </h2>
              <p className="text-zion-slate-light text-lg mb-8">
                Join thousands of companies already using ZionHireAI to find their perfect candidates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-3">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-3">
                  Schedule Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ZionHireAI;