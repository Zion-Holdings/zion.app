
import React from "react";
import { Users, Shield, Briefcase, Award, Settings, Globe } from 'lucide-react';







const features = [
  {
    title: "Private Hiring Portal",
    description: "Create a secure, private hiring portal accessible only to your team members.",
    icon: Shield,
  },
  {
    title: "Dedicated Talent Pool",
    description: "Access to a curated pool of pre-vetted talent matched to your industry and needs.",
    icon: Users,
  },
  {
    title: "Custom SLA",
    description: "Get guaranteed response times and dedicated support with our custom SLAs.",
    icon: Award,
  },
  {
    title: "Branded Onboarding",
    description: "Customize the onboarding experience with your company branding and messaging.",
    icon: Briefcase,
  },
  {
    title: "Admin Dashboards",
    description: "Powerful analytics and management tools for team leaders and administrators.",
    icon: Settings,
  },
  {
    title: "Global Access",
    description: "Connect with talent across multiple regions with localized interfaces.",
    icon: Globe,
  },
];

export function EnterpriseFeatures() {
  return (
    <section id="features" className="py-20 px-4 md:px-6 bg-muted/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built for Enterprise Needs
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our enterprise solutions offer powerful tools designed for large teams and complex hiring needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-lg p-6 shadow-sm border border-border transition-all hover:shadow-md"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
