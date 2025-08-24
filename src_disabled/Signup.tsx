
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Lock, Eye, EyeOff, User, Building } from 'lucide-react';
import { useState } from 'react';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple">Zion</span>
            </h1>
            <p className="text-zion-slate-light">
              Create your account and unlock powerful tech solutions
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-md border border-zion-cyan/20">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-xl">Create Account</CardTitle>
              <CardDescription className="text-zion-slate-light">
                Start your journey with Zion Tech Group
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-white text-sm font-medium mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                      <input
                        type="text"
                        id="firstName"
                        className="w-full pl-10 pr-3 py-2 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="lastName" className="block text-white text-sm font-medium mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                      <input
                        type="text"
                        id="lastName"
                        className="w-full pl-10 pr-3 py-2 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                        placeholder="Last name"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-white text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                    <input
                      type="text"
                      id="company"
                      className="w-full pl-10 pr-3 py-2 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
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
                      placeholder="Create a password"
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

                <div>
                  <label htmlFor="confirmPassword" className="block text-white text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      id="confirmPassword"
                      className="w-full pl-10 pr-10 py-2 bg-white/10 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                      placeholder="Confirm your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white"
                    >
                      {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mr-2 rounded border-zion-cyan/20 bg-white/10 text-zion-cyan focus:ring-zion-cyan"
                  />
                  <label htmlFor="terms" className="text-sm text-zion-slate-light">
                    I agree to the{' '}
                    <a href="#" className="text-zion-cyan hover:text-zion-cyan-light">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-zion-cyan hover:text-zion-cyan-light">
                      Privacy Policy
                    </a>
                  </label>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white">
                  Create Account
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <p className="text-zion-slate-light text-sm">
                  Already have an account?{' '}
                  <a href="/login" className="text-zion-cyan hover:text-zion-cyan-light font-medium">
                    Sign in
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

export default Signup;
