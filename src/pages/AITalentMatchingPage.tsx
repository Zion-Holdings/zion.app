import React from "react";
import { ServiceLandingTemplate } from "@/components/services/ServiceLandingTemplate";
import { Bot, Users, TrendingUp } from 'lucide-react';




export default function AITalentMatchingPage() {
  const benefits = [
    {
      title: "Precise Candidate Matching",
      description: "Leverage AI algorithms to pair your roles with the most qualified experts.",
      icon: <Bot className="h-8 w-8" />,
    },
    {
      title: "Streamlined Hiring Workflow",
      description: "Automated screening and ranking saves your team valuable time.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Scalable Talent Pools",
      description: "Access a global network of vetted professionals ready for your projects.",
      icon: <TrendingUp className="h-8 w-8" />,
    },
  ];

  const testimonials = [
    {
      name: "Emily Stone",
      role: "HR Director",
      text: "Zion's AI talent matching connected us with exceptional engineers in days, not weeks.",
      avatar: "/placeholder.svg",
    },
    {
      name: "Raj Patel",
      role: "Startup Founder",
      text: "The quality of candidates has improved dramatically since using Zion's platform.",
      avatar: "/placeholder.svg",
    },
  ];

  return (
    <ServiceLandingTemplate
      title="AI Talent Matching"
      subtitle="Find the perfect experts for your projects with intelligent matching."
      heroImage="https://placehold.co/600x300/192134/9b87f5?text=AI+Talent+Matching"
      description="Our AI-powered system analyzes your requirements and quickly surfaces the best talent for the job. Reduce hiring time and make smarter selections with data-driven insights."
      benefits={benefits}
      testimonials={testimonials}
      ctaText="Find Your AI Talent"
      ctaLink="/request-quote"
    />
  );
}
