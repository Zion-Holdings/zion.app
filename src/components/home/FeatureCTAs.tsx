
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Settings, 
  Search, 
  MessageSquare, 
  Smartphone, 
  Calendar,
  BookOpen,
  Code,
  Building,
  Clock
} from "lucide-react";

export function FeatureCTAs() {
  const features = [
    {
      title: "AI Talent Matching",
      description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
      icon: <Search className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg" />,
      link: "/marketplace",
      badge: "Popular",
      details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities.",
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Talent Directory",
      description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
      icon: <Users className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-lg" />,
      link: "/talent",
      details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability.",
      gradient: "from-purple-500/20 to-purple-600/20"
    },
    {
      title: "Services Marketplace",
      description: "Discover professional tech and AI services for your business needs, from development to consulting.",
      icon: <Zap className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-lg" />,
      link: "/services",
      badge: "New",
      details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews.",
      gradient: "from-cyan-500/20 to-cyan-600/20"
    },
    {
      title: "Equipment Catalog",
      description: "Find specialized hardware and tech equipment for AI development and research.",
      icon: <Settings className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-lg" />,
      link: "/equipment",
      details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects.",
      gradient: "from-amber-500/20 to-amber-600/20"
    },
    {
      title: "Community Hub",
      description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
      icon: <MessageSquare className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-lg" />,
      link: "/community",
      details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events.",
      gradient: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      title: "Mobile Experience",
      description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
      icon: <Smartphone className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-lg" />,
      link: "/mobile-launch",
      badge: "Featured",
      details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are.",
      gradient: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      title: "Enterprise Solutions",
      description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
      icon: <Building className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-lg" />,
      link: "/enterprise",
      details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers.",
      gradient: "from-pink-500/20 to-pink-600/20"
    },
    {
      title: "Developer Tools",
      description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
      icon: <Code className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-gray-500 to-gray-600 text-white shadow-lg" />,
      link: "/developers",
      details: "Leverage our robust API with comprehensive documentation, code examples, and developer support.",
      gradient: "from-gray-500/20 to-gray-600/20"
    },
    {
      title: "Learning Resources",
      description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
      icon: <BookOpen className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg" />,
      link: "/blog",
      details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology.",
      gradient: "from-teal-500/20 to-teal-600/20"
    },
    {
      title: "Project Management",
      description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
      icon: <Calendar className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg" />,
      link: "/dashboard/projects",
      details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion.",
      gradient: "from-red-500/20 to-red-600/20"
    },
    {
      title: "Zion Hire AI",
      description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
      icon: <Clock className="h-12 w-12 p-3 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white shadow-lg" />,
      link: "/zion-hire-ai",
      details: "Automate candidate screening, schedule interviews, and make data-driven hiring decisions with our AI assistant.",
      gradient: "from-violet-500/20 to-violet-600/20"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6">
            Explore Our Platform
          </h2>
          <p className="text-zion-slate-light text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Discover the comprehensive suite of tools and services designed to revolutionize your tech experience
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className={`group bg-gradient-to-br ${feature.gradient} border-zion-blue-light/20 hover:border-zion-purple/50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-zion-purple/20 transform hover:scale-105 backdrop-blur-sm`}>
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    {feature.badge && (
                      <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0 px-3 py-1 rounded-full text-xs font-medium">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-zion-slate-light text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-4">
                  <p className="text-zion-slate-light/80 text-sm leading-relaxed">
                    {feature.details}
                  </p>
                </CardContent>
                
                <CardFooter className="pt-0">
                  <Button 
                    asChild 
                    className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white border-0 rounded-xl py-3 group-hover:shadow-lg group-hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    <Link to={feature.link} className="flex items-center justify-center gap-2">
                      Explore {feature.title}
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
