
import React from "react";
import { Shield, Lock, Award, CheckCircle } from 'lucide-react';





export function EnterpriseTrustBadges() {
  return (
    <section className="py-10 px-4 md:px-6 border-t border-b border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h3 className="text-xl font-medium mb-2">Enterprise-Grade Security & Compliance</h3>
          <p className="text-muted-foreground">We maintain the highest standards of data protection and compliance</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="flex items-center justify-center gap-2 p-4 rounded-lg border border-border">
            <Shield className="h-5 w-5 text-primary" />
            <span className="font-medium">GDPR Compliant</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-4 rounded-lg border border-border">
            <Lock className="h-5 w-5 text-primary" />
            <span className="font-medium">SOC 2 Type II</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-4 rounded-lg border border-border">
            <Award className="h-5 w-5 text-primary" />
            <span className="font-medium">ISO 27001</span>
          </div>
          <div className="flex items-center justify-center gap-2 p-4 rounded-lg border border-border">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span className="font-medium">HIPAA Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
