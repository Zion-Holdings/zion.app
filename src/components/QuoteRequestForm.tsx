import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

export function QuoteRequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    description: '',
    budget: '',
    timeline: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="py-16 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Request a Quote
            </h2>
            <p className="text-xl text-zion-slate-light">
              Get a customized quote for your project needs
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-white">Full Name *</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-zion-slate-light"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white">Email *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-zion-slate-light"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="company" className="text-white">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-zion-slate-light"
                  placeholder="Enter company name"
                />
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-white">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-zion-slate-light"
                  placeholder="Enter phone number"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="service" className="text-white">Service Type *</Label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="mt-2 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-zion-slate-light"
              >
                <option value="">Select a service</option>
                <option value="ai-services">AI & Machine Learning</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="cloud-services">Cloud & DevOps</option>
                <option value="data-analytics">Data & Analytics</option>
                <option value="web-development">Web & Mobile Development</option>
                <option value="it-consulting">IT Consulting</option>
                <option value="blockchain">Blockchain & Web3</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="description" className="text-white">Project Description *</Label>
              <Textarea
                id="description"
                name="description"
                required
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="mt-2 bg-white/10 border-white/20 text-white placeholder:text-zion-slate-light"
                placeholder="Describe your project requirements and goals"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="budget" className="text-white">Budget Range</Label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mt-2 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-zion-slate-light"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-500k">$100,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </div>
              
              <div>
                <Label htmlFor="timeline" className="text-white">Timeline</Label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="mt-2 w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white placeholder:text-zion-slate-light"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3-months">1-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-12-months">6-12 months</option>
                  <option value="over-12-months">Over 12 months</option>
                </select>
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3">
              Submit Quote Request
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}