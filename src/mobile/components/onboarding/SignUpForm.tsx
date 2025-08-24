
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export function SignUpForm() {
  const navigate = useNavigate();
  const { signup, login, loginWithGoogle } = useAuth();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [signupMode, setSignupMode] = useState(true);
  const [error, setError] = useState("");
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError("");
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      if (signupMode) {
        const { error } = await signup(formData.email, formData.password, {
          name: formData.name,
        });
        
        if (error) {
          throw new Error(error);
        }
        
        navigate("/mobile");
      } else {
        const { error } = await login(formData.email, formData.password);
        
        if (error) {
          throw new Error(error);
        }
        
        navigate("/mobile");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
    } catch (err: any) {
      setError(err.message);
    }
  };
  
  return (
    <div className="space-y-4 px-4">
      <h2 className="text-xl font-medium text-center">
        {signupMode ? "Create your account" : "Welcome back"}
      </h2>
      
      <div className="space-y-2">
        <Button 
          variant="outline" 
          className="w-full py-6 relative"
          onClick={handleGoogleLogin}
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          Continue with Google
        </Button>

        <Button 
          variant="outline" 
          className="w-full py-6 relative"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 12.073c0-5.8-4.85-10.5-10.826-10.5-6.02 0-10.93 4.7-10.93 10.5 0 5.234 3.875 9.575 8.95 10.359v-7.318h-2.696v-3.041h2.696V9.898c0-2.586 1.581-4.016 4.003-4.016 1.159 0 2.37.204 2.37.204v2.543h-1.334c-1.316 0-1.727.8-1.727 1.622v1.95h2.938l-.47 3.04h-2.468v7.318C20.125 21.648 24 17.307 24 12.073z" fill="#1877F2" />
          </svg>
          Continue with Facebook
        </Button>
      </div>

      <div className="relative flex items-center">
        <div className="flex-grow border-t border-border"></div>
        <span className="mx-2 text-xs text-muted-foreground">OR</span>
        <div className="flex-grow border-t border-border"></div>
      </div>
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {signupMode && (
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
          </div>
        )}
        
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            placeholder="Enter your email"
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            placeholder="Create a password"
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full py-6"
          disabled={isLoading}
        >
          {isLoading 
            ? "Please wait..." 
            : signupMode 
              ? "Create Account" 
              : "Sign In"
          }
        </Button>
      </form>
      
      <p className="text-center text-sm">
        {signupMode
          ? "Already have an account? "
          : "Don't have an account? "
        }
        <Link
          to="/login"
          className="p-0 h-auto text-zion-cyan hover:text-zion-cyan-light cursor-pointer"
        >
          Sign In
        </Link>
      </p>
    </div>
  );
}
