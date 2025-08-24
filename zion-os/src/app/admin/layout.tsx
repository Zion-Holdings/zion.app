import type { ReactNode } from "react";
import { 
  Globe, 
  Rocket, 
  Settings, 
  Building2,
  ArrowRight
} from "lucide-react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-8">
      {/* Admin Navigation Header */}
      <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-blue-500/20 rounded-xl">
            <Globe className="w-8 h-8 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Zion OS Admin</h1>
            <p className="text-white/70">Manage your digital ecosystems</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <a 
            href="/admin/os-deploy" 
            className="group p-4 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-blue-500/30 rounded-lg">
                <Rocket className="w-5 h-5 text-blue-400" />
              </div>
              <span className="font-semibold text-white">Deploy</span>
            </div>
            <p className="text-sm text-white/70 mb-3">Launch new instances</p>
            <div className="flex items-center gap-2 text-blue-400 text-sm group-hover:gap-3 transition-all">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
          
          <a 
            href="/admin/instances" 
            className="group p-4 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-xl border border-emerald-500/30 hover:border-emerald-400/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-500/30 rounded-lg">
                <Building2 className="w-5 h-5 text-emerald-400" />
              </div>
              <span className="font-semibold text-white">Instances</span>
            </div>
            <p className="text-sm text-white/70 mb-3">Manage deployed instances</p>
            <div className="flex items-center gap-2 text-emerald-400 text-sm group-hover:gap-3 transition-all">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
          
          <a 
            href="/admin/deployments" 
            className="group p-4 bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-orange-500/30 rounded-lg">
                <Rocket className="w-5 h-5 text-orange-400" />
              </div>
              <span className="font-semibold text-white">Deployments</span>
            </div>
            <p className="text-sm text-white/70 mb-3">Monitor deployment status</p>
            <div className="flex items-center gap-2 text-orange-400 text-sm group-hover:gap-3 transition-all">
              <span>Track Progress</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </a>
          
          <div className="p-4 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-purple-500/30 rounded-lg">
                <Settings className="w-5 h-5 text-purple-400" />
              </div>
              <span className="font-semibold text-white">Settings</span>
            </div>
            <p className="text-sm text-white/70 mb-3">System configuration</p>
            <div className="text-purple-400 text-sm opacity-60">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
      
      {children}
    </section>
  );
}