"use client";

import { useWalkthroughTarget } from "./OnboardingWalkthrough";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <>
      <nav className="border-b border-white/10 sticky top-0 z-50 bg-zinc-900/50 backdrop-blur" {...useWalkthroughTarget("nav-menu")}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold text-lg">Zion OS</Link>
            <div className="hidden md:flex items-center gap-4">
              <Link href="/multiverse/launch" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Launch
              </Link>
              <Link href="/admin/os-deploy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Admin Deploy
              </Link>
              <Link href="/admin/instances" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                Instances
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link 
                  href="/dashboard" 
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-zinc-400">
                    Welcome, {user?.name || user?.email}
                  </span>
                  <button
                    onClick={logout}
                    className="text-sm text-zinc-400 hover:text-white transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link 
                  href="/auth/signin" 
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link 
                  href="/auth/signup" 
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
                >
                  Start Free Trial
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
      {children}
    </>
  );
}