import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search, Users, Server } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Marketplace", href: "/marketplace", icon: Search },
    { name: "Talent", href: "/talent", icon: Users },
    { name: "Services", href: "/services", icon: Server },
  ];

  return (
    <div className="min-h-screen bg-zion-blue flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-zion-slate-light text-lg mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-zion-slate-light text-sm mb-8">
            You tried to access: <code className="bg-zion-blue-dark px-2 py-1 rounded text-zion-cyan">{location.pathname}</code>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()} className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>

        <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Navigation</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex flex-col items-center p-4 rounded-lg bg-zion-blue hover:bg-zion-blue-light border border-zion-blue-light hover:border-zion-purple transition-colors group"
                >
                  <Icon className="w-6 h-6 text-zion-cyan mb-2 group-hover:text-zion-purple transition-colors" />
                  <span className="text-sm text-white group-hover:text-zion-cyan transition-colors">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-zion-slate-light text-sm">
          <p>Need help? <Link to="/contact" className="text-zion-cyan hover:underline">Contact our support team</Link></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;