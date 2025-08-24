"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useWalkthroughTarget } from "@/components/OnboardingWalkthrough";
import Link from "next/link";

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Zion OS
        </h1>
        <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
          Launch sovereign AI-powered digital economies with one click.
        </p>
        
        {/* Clear Call-to-Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {!isAuthenticated ? (
            <>
              <Link 
                href="/auth/signup" 
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                🚀 Start Free Trial
              </Link>
              <Link 
                href="/auth/signin" 
                className="px-8 py-4 border border-zinc-600 hover:border-zinc-500 text-zinc-300 hover:text-white font-semibold rounded-lg text-lg transition-colors duration-200"
              >
                Sign In
              </Link>
            </>
          ) : (
            <Link 
              href="/dashboard" 
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Go to Dashboard
            </Link>
          )}
        </div>

        {/* Free Trial Benefits */}
        <div className="bg-zinc-800/30 rounded-xl p-6 max-w-2xl mx-auto border border-zinc-700/30">
          <h3 className="text-lg font-semibold text-white mb-4">✨ Free Trial Includes:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Full platform access for 14 days
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Launch up to 3 instances
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              All marketplace templates
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400">✓</span>
              Priority support access
            </div>
          </div>
        </div>
      </div>

      {/* Main Actions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Link 
          href="/multiverse/launch" 
          className="group p-6 rounded-xl border border-white/10 hover:border-white/20 bg-zinc-800/30 hover:bg-zinc-800/50 transition-all duration-200"
          {...useWalkthroughTarget("launch-wizard-card")}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white group-hover:text-blue-400 transition-colors">
                  Launch Wizard
                </h3>
                <p className="text-sm text-zinc-400">
                  Spin up a new instance with marketplace, governance, identity, and more.
                </p>
              </div>
            </div>
            <div className="text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Get Started →
            </div>
          </div>
        </Link>

        <Link 
          href="/admin/instances" 
          className="group p-6 rounded-xl border border-white/10 hover:border-white/20 bg-zinc-800/30 hover:bg-zinc-800/50 transition-all duration-200"
          {...useWalkthroughTarget("admin-instances-card")}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-white group-hover:text-purple-400 transition-colors">
                  Admin Instances
                </h3>
                <p className="text-sm text-zinc-400">
                  Manage deployed instances, API keys, and governance settings.
                </p>
              </div>
            </div>
            <div className="text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Manage →
            </div>
          </div>
        </Link>
      </div>

      {/* Additional Info */}
      <div className="text-center space-y-4">
        <p className="text-zinc-500 text-sm">
          Need help getting started?{" "}
          <Link href="/docs" className="text-blue-400 hover:text-blue-300 underline">
            Check our documentation
          </Link>{" "}
          or{" "}
          <Link href="/support" className="text-blue-400 hover:text-blue-300 underline">
            contact support
          </Link>
        </p>
      </div>
    </div>
  );
}