import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Users, Briefcase, Building, Star, Shield, Zap, TrendingUp } from "lucide-react";

export function FeatureHighlights() {
  const highlightsData = [
    {
      title: "For Talent Seekers",
      subtitle: "Find the perfect AI & tech experts",
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      color: "from-zion-cyan to-zion-cyan-dark",
      bgColor: "bg-zion-cyan/10",
      borderColor: "border-zion-cyan/30",
      features: [
        "AI-powered talent matching based on your specific project requirements",
        "Verified profiles with skills validation and credential checking",
        "Transparent pricing and no hidden fees",
        "Direct communication with potential candidates",
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI-matched applicants"
      ]
    },
    {
      title: "For Talent & Service Providers",
      subtitle: "Showcase your skills and grow your business",
      icon: <Briefcase className="h-8 w-8 text-zion-purple" />,
      color: "from-zion-purple to-zion-purple-dark",
      bgColor: "bg-zion-purple/10",
      borderColor: "border-zion-purple/30",
      features: [
        "Create a professional profile showcasing your skills and experience",
        "Get matched with relevant projects that fit your expertise",
        "Secure payment processing with on-time disbursements",
        "Build your reputation through client reviews and ratings",
        "Access to enterprise clients and high-value projects",
        "Professional development resources and community support"
      ]
    },
    {
      title: "For Enterprise Clients",
      subtitle: "Enterprise-grade solutions for your organization",
      icon: <Building className="h-8 w-8 text-zion-cyan-light" />,
      color: "from-zion-cyan-light to-zion-cyan",
      bgColor: "bg-zion-cyan-light/10",
      borderColor: "border-zion-cyan-light/30",
      features: [
        "White-labeled talent portal with your company branding",
        "Dedicated account management and priority support",
        "Custom talent pools and preferred provider networks",
        "Advanced analytics and reporting capabilities",
        "API access for seamless integration with your HR systems",
        "Customizable workflow and approval processes"
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-zion-blue-dark to-zion-blue-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            We're building the future of tech talent acquisition and service delivery, 
            powered by AI and designed for the modern digital economy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlightsData.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className={`h-full border-2 ${highlight.borderColor} ${highlight.bgColor} backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${highlight.color} mb-4`}>
                      {highlight.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight.subtitle}
                    </p>
                  </div>
                  
                  <ul className="space-y-3">
                    {highlight.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 text-zion-cyan">
            <Star className="h-5 w-5" />
            <span className="text-lg font-semibold">
              Trusted by leading companies worldwide
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
