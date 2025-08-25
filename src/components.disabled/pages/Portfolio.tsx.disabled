import React from 'react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, Eye, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  // Sample portfolio data
  const portfolios = [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform",
      creator: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      category: "AI Development",
      skills: ["Python", "TensorFlow", "React", "Node.js"],
      description: "A comprehensive e-commerce solution powered by machine learning for personalized recommendations and dynamic pricing.",
      rating: 4.9,
      views: 1247,
      likes: 89,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Machine Learning", "E-commerce", "Full-stack"]
    },
    {
      id: 2,
      title: "Sustainable Energy Dashboard",
      creator: "Marcus Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      category: "Data Visualization",
      skills: ["D3.js", "Python", "PostgreSQL", "AWS"],
      description: "Real-time monitoring and analytics dashboard for renewable energy systems with predictive maintenance capabilities.",
      rating: 4.8,
      views: 892,
      likes: 67,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      tags: ["Data Science", "Sustainability", "IoT"]
    },
    {
      id: 3,
      title: "Blockchain Supply Chain Solution",
      creator: "Aisha Patel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      category: "Blockchain",
      skills: ["Solidity", "Web3.js", "React", "Ethereum"],
      description: "Transparent and secure supply chain management system using blockchain technology for traceability and compliance.",
      rating: 4.7,
      views: 756,
      likes: 54,
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      tags: ["Blockchain", "Supply Chain", "Smart Contracts"]
    },
    {
      id: 4,
      title: "Cybersecurity Threat Detection",
      creator: "David Kim",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      category: "Cybersecurity",
      skills: ["Python", "Machine Learning", "Docker", "Kubernetes"],
      description: "Advanced threat detection system using AI to identify and respond to cybersecurity threats in real-time.",
      rating: 4.9,
      views: 1103,
      likes: 78,
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
      tags: ["Cybersecurity", "AI", "DevOps"]
    },
    {
      id: 5,
      title: "Mobile Health Monitoring App",
      creator: "Emily Watson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      category: "Mobile Development",
      skills: ["React Native", "TypeScript", "Firebase", "HealthKit"],
      description: "Comprehensive health monitoring application with real-time data tracking and AI-powered health insights.",
      rating: 4.6,
      views: 634,
      likes: 45,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      tags: ["Mobile", "Healthcare", "AI"]
    },
    {
      id: 6,
      title: "Quantum Computing Simulator",
      creator: "Alex Thompson",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      category: "Quantum Computing",
      skills: ["Qiskit", "Python", "NumPy", "Matplotlib"],
      description: "Educational quantum computing simulator with interactive visualizations and algorithm demonstrations.",
      rating: 4.8,
      views: 445,
      likes: 32,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
      tags: ["Quantum Computing", "Education", "Visualization"]
    }
  ];

  const categories = [
    "All Categories",
    "AI Development",
    "Data Visualization",
    "Blockchain",
    "Cybersecurity",
    "Mobile Development",
    "Quantum Computing",
    "Web Development",
    "IoT",
    "Cloud Computing"
  ];

  return (
    <>
      <SEO
        title="Portfolio Showcase | Zion Tech Group"
        description="Explore amazing portfolios and projects from talented developers, designers, and tech professionals on Zion Tech Group."
        keywords="portfolio, projects, showcase, tech talent, developers, designers, Zion Tech Group"
        canonical="https://ziontechgroup.com/portfolio"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Portfolio Showcase
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Discover amazing projects and innovative solutions from our talented community of tech professionals
            </p>
          </div>

          {/* Search and Filter Section */}
          <div className="mb-12">
            <div className="bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                  <Input
                    placeholder="Search portfolios..."
                    className="pl-10 bg-zion-blue border-zion-purple/20 text-white placeholder:text-zion-slate-light focus:border-zion-purple"
                  />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="bg-zion-blue border-zion-purple/20 text-white">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent className="bg-zion-blue-dark border-zion-purple/20">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase().replace(' ', '-')}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button className="bg-zion-purple hover:bg-zion-purple-light">
                  <Filter className="w-4 h-4 mr-2" />
                  Advanced Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolios.map((portfolio) => (
              <Card key={portfolio.id} className="bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <Button size="sm" variant="ghost" className="bg-black/50 hover:bg-black/70 text-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="ghost" className="bg-black/50 hover:bg-black/70 text-white">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <img
                        src={portfolio.avatar}
                        alt={portfolio.creator}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors">
                          {portfolio.title}
                        </h3>
                        <p className="text-sm text-zion-slate-light">{portfolio.creator}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-zion-cyan">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{portfolio.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-zion-slate-light mb-3">
                    <span className="bg-zion-purple/20 text-zion-purple px-2 py-1 rounded-full text-xs">
                      {portfolio.category}
                    </span>
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{portfolio.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{portfolio.likes}</span>
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-zion-slate-light text-sm mb-4 line-clamp-2">
                    {portfolio.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {portfolio.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-zion-blue text-zion-cyan border-zion-cyan/20">
                        {skill}
                      </Badge>
                    ))}
                    {portfolio.skills.length > 3 && (
                      <Badge variant="secondary" className="bg-zion-blue text-zion-slate-light border-zion-slate-light/20">
                        +{portfolio.skills.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/portfolio/${portfolio.id}`}
                      className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium"
                    >
                      View Details →
                    </Link>
                    <Button size="sm" className="bg-zion-purple hover:bg-zion-purple-light">
                      Contact Creator
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">
                  Showcase Your Work
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Have an amazing project to share? Join our community and showcase your portfolio.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-zion-slate-light">
                    Connect with potential clients and collaborators by sharing your best work.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/signup"
                      className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                    >
                      Get Started
                    </Link>
                    <Link
                      to="/portfolio-builder"
                      className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                    >
                      Build Portfolio
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}