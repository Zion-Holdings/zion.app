
import React from "react";
import { CheckCircle, Smartphone, Users, Star, Mail } from 'lucide-react';






export const MobileFeatureShowcase: React.FC = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-zion-cyan" />,
      title: "Hire from Anywhere",
      description: "Browse and hire top AI talent on the go with a streamlined mobile interface."
    },
    {
      icon: <Star className="h-8 w-8 text-zion-purple" />,
      title: "AI-Match Instantly",
      description: "Get matched with the perfect talent or jobs using our advanced AI algorithm."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-zion-cyan" />,
      title: "Track Milestones",
      description: "Monitor project progress and approve milestones directly from your phone."
    },
    {
      icon: <Mail className="h-8 w-8 text-zion-purple" />,
      title: "Instant Messaging",
      description: "Chat with candidates or clients and receive notifications in real-time."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-zion-cyan" />,
      title: "Biometric Security",
      description: "Login quickly and securely with Face ID or Touch ID on supported devices."
    }
  ];

  return (
    <section id="features" className="py-16 bg-zion-blue">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
            Everything You Need On The Go
          </h2>
          <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
            The Zion mobile app brings the power of our AI marketplace to your pocket with these key features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-zion-blue-dark border border-zion-blue-light p-6 rounded-lg hover:border-zion-purple/50 transition-all duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-zion-slate-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
