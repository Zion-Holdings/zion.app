import React from 'react';
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
    </section>
  );
}