import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft, HelpCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <SEO 
        title="Page Not Found | Zion Tech Group"
        description="The page you're looking for doesn't exist. Return to Zion Tech Group or explore our marketplace."
        keywords="404, page not found, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-zion-blue flex flex-col items-center justify-center p-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
              404
            </h1>
          </div>
          
          {/* Main Message */}
          <h2 className="text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-zion-slate-light text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track to discover amazing tech and AI opportunities.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button asChild size="lg" className="bg-zion-purple hover:bg-zion-purple-dark">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Return Home
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-zion-purple text-zion-purple hover:bg-zion-purple/10">
              <Link to="/marketplace">
                <Search className="mr-2 h-5 w-5" />
                Explore Marketplace
              </Link>
            </Button>
          </div>
          
          {/* Additional Help */}
          <div className="space-y-4">
            <p className="text-zion-slate-light">
              Can't find what you're looking for? Try these options:
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <Link 
                to="/help" 
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center justify-center"
              >
                <HelpCircle className="mr-1 h-4 w-4" />
                Help Center
              </Link>
              
              <Link 
                to="/search" 
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center justify-center"
              >
                <Search className="mr-1 h-4 w-4" />
                Search
              </Link>
              
              <Link 
                to="/contact" 
                className="text-zion-cyan hover:text-zion-cyan-light transition-colors flex items-center justify-center"
              >
                <HelpCircle className="mr-1 h-4 w-4" />
                Contact Support
              </Link>
            </div>
          </div>
          
          {/* Back Button */}
          <div className="mt-8">
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-zion-slate-light hover:text-white"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;