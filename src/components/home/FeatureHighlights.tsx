import React from 'react';
<<<<<<< HEAD
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function FeatureHighlights() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Matching",
      description: "Advanced algorithms connect you with the perfect talent or service for your needs",
      category: "Core Feature"
    },
    {
      icon: "🔒",
      title: "Secure Transactions",
      description: "Enterprise-grade security with escrow protection for all transactions",
      category: "Security"
    },
    {
      icon: "🌍",
      title: "Global Network",
      description: "Access to talent and services from around the world, 24/7",
      category: "Global"
    },
    {
      icon: "⚡",
      title: "Instant Deployment",
      description: "Get started in minutes with our streamlined onboarding process",
      category: "Speed"
    }
  ];

  return (
    <section className="py-16 bg-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
            Experience the future of tech services with our cutting-edge platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="bg-zion-slate border-zion-blue-light text-white hover:border-zion-purple transition-colors">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{feature.icon}</div>
                <Badge variant="outline" className="mx-auto border-zion-cyan text-zion-cyan">
                  {feature.category}
                </Badge>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-xl mb-2 text-white">{feature.title}</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
=======
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Zap, 
  Shield, 
  Users, 
  Globe, 
  Smartphone, 
  TrendingUp,
  Award,
  Lock
} from 'lucide-react';

export function FeatureHighlights() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Zap className="h-8 w-8" />,
      title: t('home.feature_ai_powered') || "AI-Powered Matching",
      description: t('home.feature_ai_powered_desc') || "Advanced algorithms connect you with the perfect talent and services",
      color: "from-zion-cyan to-zion-cyan-light",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/20"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('home.feature_verified') || "Verified Professionals",
      description: t('home.feature_verified_desc') || "All talent and services are thoroughly vetted and verified",
      color: "from-zion-purple to-zion-purple-light",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/20"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('home.feature_global') || "Global Network",
      description: t('home.feature_global_desc') || "Access talent and services from around the world",
      color: "from-zion-blue to-zion-blue-light",
      bgColor: "bg-zion-blue/10",
      borderColor: "border-zion-blue/20"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: t('home.feature_multilingual') || "Multilingual Support",
      description: t('home.feature_multilingual_desc') || "Platform available in multiple languages",
      color: "from-zion-cyan to-zion-cyan-light",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/20"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: t('home.feature_mobile') || "Mobile First",
      description: t('home.feature_mobile_desc') || "Optimized for mobile devices with native app support",
      color: "from-zion-purple to-zion-purple-light",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/20"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: t('home.feature_analytics') || "Advanced Analytics",
      description: t('home.feature_analytics_desc') || "Comprehensive insights and performance tracking",
      color: "from-zion-blue to-zion-blue-light",
      bgColor: "bg-zion-blue/10",
      borderColor: "border-zion-blue/20"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('home.feature_quality') || "Quality Guarantee",
      description: t('home.feature_quality_desc') || "Satisfaction guaranteed or your money back",
      color: "from-zion-cyan to-zion-cyan-light",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/20"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: t('home.feature_security') || "Enterprise Security",
      description: t('home.feature_security_desc') || "Bank-level security and data protection",
      color: "from-zion-purple to-zion-purple-light",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/20"
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
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-zion-slate/5">
      <div className="container px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            {t('home.features_title') || "Why Choose Zion?"}
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            {t('home.features_subtitle') || "Discover the cutting-edge features that make Zion the ultimate tech and AI marketplace"}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl border ${feature.bgColor} ${feature.borderColor} hover:border-opacity-60 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1`}
              variants={itemVariants}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zion-slate-dark">
                {feature.title}
              </h3>
              <p className="text-zion-slate-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-lg text-zion-slate-light mb-6">
            {t('home.features_cta_text') || "Ready to experience the future of tech services?"}
          </p>
          <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105">
            {t('home.features_cta_button') || "Get Started Today"}
          </button>
        </motion.div>
>>>>>>> de400afa077674abcb9e5ea4594dec75f3ba260d
      </div>
    </section>
  );
}