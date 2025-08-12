
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from 'lucide-react';

import { cn } from "@/lib/utils";

interface FeatureHighlightsProps {
  className?: string;
  style?: React.CSSProperties;
}

export function FeatureHighlights({ className, style }: FeatureHighlightsProps) {
  const highlightsData = [
    {
      title: "For Talent Seekers",
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
    <section className={cn("py-16 bg-zion-blue", className)} style={style}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Tailored Solutions for Everyone</h2>
          <p className="text-zion-slate-light text-lg max-w-3xl mx-auto">
            Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightsData.map((category, index) => (
            <Card key={index} className="bg-zion-blue-dark border-zion-blue-light">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-zion-cyan mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
