import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export function ITServiceRequestHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transform Your IT Infrastructure
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get expert IT services tailored to your business needs. From cloud migration to cybersecurity, 
            we've got you covered with cutting-edge solutions.
          </p>

          <div className="bg-background rounded-2xl p-8 shadow-xl border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6">
              Request IT Service Consultation
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input
                type="text"
                placeholder="Company Name"
                className="w-full"
              />
              <Input
                type="email"
                placeholder="Business Email"
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Service Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cloud-migration">Cloud Migration</SelectItem>
                  <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  <SelectItem value="network-infrastructure">Network Infrastructure</SelectItem>
                  <SelectItem value="devops">DevOps & Automation</SelectItem>
                  <SelectItem value="data-backup">Data Backup & Recovery</SelectItem>
                  <SelectItem value="managed-it">Managed IT Services</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Company Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                  <SelectItem value="small">Small Business (11-50 employees)</SelectItem>
                  <SelectItem value="medium">Medium Business (51-200 employees)</SelectItem>
                  <SelectItem value="large">Large Business (200+ employees)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <Input
                type="text"
                placeholder="Brief description of your IT needs"
                className="w-full"
              />
            </div>

            <Button className="w-full md:w-auto px-8 py-3 text-lg">
              Get Free Consultation
            </Button>

            <p className="text-sm text-muted-foreground mt-4">
              Our experts will contact you within 24 hours to discuss your requirements.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}