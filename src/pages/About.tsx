
import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Empowering businesses with cutting-edge technology solutions
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                To democratize access to world-class technology talent and services, 
                enabling businesses of all sizes to compete in the digital economy.
              </p>
              
              <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
              <p className="text-muted-foreground mb-6">
                We connect businesses with verified tech professionals, provide 
                24/7 IT support, and deliver innovative AI-powered solutions 
                that drive growth and efficiency.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">Global Talent Network</h3>
                    <p className="text-sm text-muted-foreground">
                      Access to professionals from 50+ countries
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">24/7 Support</h3>
                    <p className="text-sm text-muted-foreground">
                      Round-the-clock technical assistance
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">AI-Powered Solutions</h3>
                    <p className="text-sm text-muted-foreground">
                      Cutting-edge artificial intelligence services
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-medium">Verified Professionals</h3>
                    <p className="text-sm text-muted-foreground">
                      All talent is thoroughly vetted and certified
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-8">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We stay ahead of technology trends to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Quality</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards in all our services and partnerships.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">Trust</h3>
                <p className="text-muted-foreground">
                  We build lasting relationships based on transparency and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
