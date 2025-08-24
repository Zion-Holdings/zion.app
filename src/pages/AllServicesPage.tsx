
import { MicroSaasServicesShowcase } from '@/components/services/MicroSaasServicesShowcase';
import { Sparkles, Star, Zap, Brain } from 'lucide-react';

export default function AllServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-blue-dark text-white py-20 lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-zion-cyan" />
            <span className="text-zion-cyan text-sm font-medium">Comprehensive Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Our Complete
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              Service Portfolio
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-zion-slate-light max-w-3xl mx-auto mb-8 leading-relaxed">
            Discover our extensive range of AI services, IT solutions, and micro SAAS platforms 
            designed to meet every business need and drive digital transformation.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <Brain className="h-6 w-6 text-zion-cyan" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-zion-cyan">12+</div>
                <div className="text-sm text-zion-slate-light">AI Services</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 bg-zion-purple/20 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-zion-purple" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-zion-purple">24/7</div>
                <div className="text-sm text-zion-slate-light">Support</div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center">
                <Star className="h-6 w-6 text-zion-cyan" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-zion-cyan">98%</div>
                <div className="text-sm text-zion-slate-light">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Showcase */}
      <div className="py-16 lg:py-20">
        <MicroSaasServicesShowcase />
      </div>
    </div>
  );
}