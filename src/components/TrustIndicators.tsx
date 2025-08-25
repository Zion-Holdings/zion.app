import React from 'react';
import { Shield, Lock, Award, Users, Globe, CheckCircle, Star, Zap } from 'lucide-react';

interface TrustIndicator {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

interface TrustIndicatorsProps {
  className?: string;
  showStats?: boolean;
  showCertifications?: boolean;
}

export function TrustIndicators({ className, showStats = true, showCertifications = true }: TrustIndicatorsProps) {
  const indicators: TrustIndicator[] = [
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "SOC 2 Type II certified with end-to-end encryption",
      color: "text-zion-cyan"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "GDPR & CCPA compliant with zero-knowledge architecture",
      color: "text-zion-purple"
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Recognized by Gartner & Forrester as market leader",
      color: "text-zion-cyan"
    },
    {
      icon: Users,
      title: "Verified Community",
      description: "10,000+ verified professionals and companies",
      color: "text-zion-purple"
    }
  ];

  const certifications = [
    { name: "SOC 2 Type II", status: "Certified", year: "2024" },
    { name: "ISO 27001", status: "Certified", year: "2024" },
    { name: "GDPR", status: "Compliant", year: "2024" },
    { name: "CCPA", status: "Compliant", year: "2024" }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: Users },
    { label: "Countries", value: "100+", icon: Globe },
    { label: "Projects", value: "$10M+", icon: Award },
    { label: "Uptime", value: "99.9%", icon: Zap }
  ];

  return (
    <section className={`py-16 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark ${className || ''}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Zion Tech Group maintains the highest standards of security, compliance, and reliability 
            to ensure your business operations remain secure and uninterrupted.
          </p>
        </div>

        {/* Trust Indicators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {indicators.map((indicator, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-zion-cyan/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`mx-auto w-16 h-16 bg-zion-cyan/10 rounded-full flex items-center justify-center mb-4`}>
                <indicator.icon className={`w-8 h-8 ${indicator.color}`} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {indicator.title}
              </h3>
              <p className="text-zion-slate-light text-sm leading-relaxed">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {showStats && (
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-zion-slate-light text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {showCertifications && (
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Certifications & Compliance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{cert.name}</h4>
                  <div className="text-zion-cyan text-sm font-medium mb-1">{cert.status}</div>
                  <div className="text-zion-slate-light text-xs">{cert.year}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customer Testimonials Preview */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-zion-slate-light mb-2">
            "Zion Tech Group has transformed how we source tech talent. The platform's security and reliability give us complete confidence."
          </p>
          <p className="text-white font-medium">- Sarah Chen, CTO at TechCorp</p>
        </div>
      </div>
    </section>
  );
}

// Compact version for smaller spaces
export function TrustIndicatorsCompact({ className }: { className?: string }) {
  return (
    <div className={`flex flex-wrap justify-center gap-6 ${className || ''}`}>
      <div className="flex items-center gap-2 text-zion-cyan text-sm">
        <Shield className="w-4 h-4" />
        <span>SOC 2 Certified</span>
      </div>
      <div className="flex items-center gap-2 text-zion-purple text-sm">
        <Lock className="w-4 h-4" />
        <span>GDPR Compliant</span>
      </div>
      <div className="flex items-center gap-2 text-zion-cyan text-sm">
        <Users className="w-4 h-4" />
        <span>10K+ Verified</span>
      </div>
      <div className="flex items-center gap-2 text-zion-purple text-sm">
        <Zap className="w-4 h-4" />
        <span>99.9% Uptime</span>
      </div>
    </div>
  );
}