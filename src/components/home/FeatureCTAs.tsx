
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, Mail, Globe, Brain, Shield, Zap, Database, Cloud, Lock, Leaf, DollarSign, Eye, Users, CheckCircle } from 'lucide-react';

const features = [
  {
    title: "AI-Powered Matching",
    description: "Advanced AI algorithms connect you with the perfect tech professionals and services",
    details: "Our intelligent matching system analyzes your requirements and preferences to find the ideal matches from our extensive network of verified professionals.",
    icon: <Brain className="h-8 w-8 text-zion-purple" />,
    link: "/ai-matcher",
    badge: "AI"
  },
  {
    title: "Secure Platform",
    description: "Enterprise-grade security protecting your data and transactions",
    details: "Bank-level encryption, secure payment processing, and comprehensive data protection ensure your information stays safe and confidential.",
    icon: <Shield className="h-8 w-8 text-zion-cyan" />,
    link: "/security",
    badge: "Secure"
  },
  {
    title: "Global Network",
    description: "Access to worldwide tech talent and innovative solutions",
    details: "Connect with professionals and companies from around the globe, bringing diverse perspectives and cutting-edge solutions to your projects.",
    icon: <Globe className="h-8 w-8 text-zion-blue" />,
    link: "/network",
    badge: "Global"
  },
  {
    title: "Real-time Analytics",
    description: "Comprehensive insights into your tech ecosystem performance",
    details: "Monitor project progress, track performance metrics, and gain valuable insights to optimize your technology investments and strategies.",
    icon: <Database className="h-8 w-8 text-zion-green" />,
    link: "/analytics",
    badge: "Analytics"
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your tech needs",
    details: "Our dedicated support team is available 24/7 to help you with any questions, technical issues, or guidance you may need.",
    icon: <Users className="h-8 w-8 text-zion-orange" />,
    link: "/support",
    badge: "Support"
  },
  {
    title: "Innovation Hub",
    description: "Stay ahead with the latest tech trends and emerging solutions",
    details: "Access cutting-edge technologies, research insights, and innovative approaches to keep your business at the forefront of digital transformation.",
    icon: <Zap className="h-8 w-8 text-zion-yellow" />,
    link: "/innovation",
    badge: "Innovation"
  }
];

export function FeatureCTAs() {
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

  const cardVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-background/90" role="region" aria-labelledby="features-title">
      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="features-title" className="text-3xl font-bold tracking-tight mb-3">
            Discover Zion's Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/50 h-full flex flex-col">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature.icon}
                    </motion.div>
                    {feature.badge && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        {feature.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="mt-4 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {feature.details}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button 
                    asChild 
                    className="w-full gap-1 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  >
                    <Link 
                      to={feature.link}
                      aria-label={`Explore ${feature.title}`}
                    >
                      <span>Explore {feature.title}</span>
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.div>
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
