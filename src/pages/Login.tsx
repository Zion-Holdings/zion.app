import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Back</span>
            </h1>
            <p className="text-zion-slate-light">
              Sign in to your Zion Tech Group account
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-xl">Sign In</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Access your dashboard and services
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                    <input
                      type="email"
                      id="email"
                      className="w-full pl-10 pr-3 py-2 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-white text-sm font-medium mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="w-full pl-10 pr-10 py-2 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 rounded border-zion-cyan/20 bg-white/10 text-zion-cyan focus:ring-zion-cyan"
                    />
                    <span className="text-sm text-zion-slate-light">Remember me</span>
                  </label>
                  <a href="#" className="text-sm text-zion-cyan hover:text-zion-cyan-light">
                    Forgot password?
                  </a>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                  Sign In
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-zion-slate-light text-sm">
                  Don't have an account?{' '}
                  <a href="/signup" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                    Sign up
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;