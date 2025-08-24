import React from 'react';
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function ITServiceRequestHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-purple-dark to-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Need IT Services?
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              Get instant quotes from verified IT professionals. From network setup to cybersecurity, 
              we've got you covered with our AI-powered matching system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-zion-cyan text-zion-slate-dark hover:bg-zion-cyan-light">
                Request Quote Now
              </Button>
              <Button variant="outline" size="lg" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <Card className="bg-zion-slate/20 border-zion-blue-light text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Network Infrastructure</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Setup, maintenance, and optimization of your network systems
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-zion-slate/20 border-zion-purple text-white">
              <CardHeader>
                <CardTitle className="text-zion-purple-light">Cybersecurity</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Comprehensive security audits and threat protection
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="bg-zion-slate/20 border-zion-cyan text-white">
              <CardHeader>
                <CardTitle className="text-zion-cyan">Cloud Solutions</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Migration, optimization, and management of cloud infrastructure
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
=======
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { 
  Wrench, 
  Server, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export function ITServiceRequestHero() {
  const { t } = useTranslation();

  const services = [
    { icon: <Wrench className="h-5 w-5" />, text: "Hardware Setup" },
    { icon: <Server className="h-5 w-5" />, text: "Network Configuration" },
    { icon: <Shield className="h-5 w-5" />, text: "Security Audits" },
    { icon: <Zap className="h-5 w-5" />, text: "Performance Optimization" }
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 px-4 mx-auto">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6">
              <CheckCircle className="h-4 w-4" />
              {t('home.it_services_badge') || "Professional IT Services"}
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            variants={itemVariants}
          >
            {t('home.it_services_title') || "Need Expert IT Support?"}
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t('home.it_services_subtitle') || "Get professional IT services delivered to your location. From setup to maintenance, our certified technicians have you covered."}
          </motion.p>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white">
                {service.icon}
                <span className="text-sm font-medium">{service.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
            variants={itemVariants}
          >
            <Link
              to="/request-quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-cyan-light hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105"
            >
              {t('home.it_services_cta_primary') || "Request IT Service Quote"}
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/it-onsite-services"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-zion-slate-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              {t('home.it_services_cta_secondary') || "Learn More"}
            </Link>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 text-zion-slate-light/70 text-sm"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              <span>Same-day response</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-purple rounded-full"></div>
              <span>Certified technicians</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-blue rounded-full"></div>
              <span>Warranty included</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 border border-zion-cyan/30 rounded-lg rotate-45"
        animate={{ rotate: [45, 405], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/30 rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
>>>>>>> de400afa077674abcb9e5ea4594dec75f3ba260d
    </section>
  );
}