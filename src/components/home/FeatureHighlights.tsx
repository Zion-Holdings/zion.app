
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Users, Building, TrendingUp, Shield, Zap, Globe, Award } from "lucide-react";

export function FeatureHighlights() {
  const highlightsData = [
    {
      title: "For Talent Seekers",
      subtitle: "Find the perfect match for your projects",
      icon: Users,
      features: [
        "AI-powered talent matching based on your specific project requirements",
        "Verified profiles with skills validation and credential checking",
        "Transparent pricing and no hidden fees",
        "Direct communication with potential candidates",
        "Secure payment protection and dispute resolution",
        "Post jobs and receive AI-matched applicants within hours"
      ]
    },
    {
      title: "For Talent & Service Providers",
      subtitle: "Grow your career and business",
      icon: TrendingUp,
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
      subtitle: "Enterprise-grade solutions for large organizations",
      icon: Building,
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

  const stats = [
    { label: "Countries Served", value: "150+", icon: Globe },
    { label: "Verified Talents", value: "10,000+", icon: Users },
    { label: "Success Rate", value: "98%", icon: Award },
    { label: "Response Time", value: "<2hrs", icon: Zap }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tailored Solutions for Everyone
          </h2>
          <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
            Whatever your role in the tech ecosystem, Zion offers specialized features and enterprise-grade solutions to help you succeed in the digital age
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-zion-purple/20 rounded-full">
                  <stat.icon className="h-6 w-6 text-zion-purple" />
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {highlightsData.map((category, index) => (
            <Card key={index} className="bg-zion-blue-dark/50 backdrop-blur-sm border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-zion-purple/20 rounded-lg">
                    <category.icon className="h-6 w-6 text-zion-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-zion-cyan-light text-sm">{category.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-zion-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-zion-slate-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-16 pt-16 border-t border-zion-purple/20">
          <h3 className="text-2xl font-bold text-white mb-6">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-zion-slate-light font-semibold">Fortune 500 Companies</div>
            <div className="text-zion-slate-light font-semibold">Government Agencies</div>
            <div className="text-zion-slate-light font-semibold">Startups & Scale-ups</div>
            <div className="text-zion-slate-light font-semibold">Educational Institutions</div>
          </div>
        </div>
      </div>
    </section>
  );
}
