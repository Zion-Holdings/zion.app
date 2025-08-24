import React from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Search, Filter } from 'lucide-react';

export function ITServiceRequestHero() {
  return (
    <section className="py-16 bg-zion-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need IT Services?
          </h2>
          <p className="text-zion-slate-light max-w-2xl mx-auto">
            Find the perfect IT professional or service for your project. Get started in minutes.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-zion-blue rounded-lg p-8 border border-zion-blue-lighter">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                <Input
                  type="text"
                  placeholder="What service do you need?"
                  className="pl-10 bg-zion-blue-light border-zion-blue-lighter text-white placeholder:text-zion-slate-light focus:border-zion-cyan"
                />
              </div>
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple px-8">
                <Filter className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Web Development
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Mobile Apps
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Cloud Services
              </Button>
              <Button variant="outline" className="border-zion-blue-lighter text-zion-slate-light hover:bg-zion-blue-lighter hover:text-white">
                Cybersecurity
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}