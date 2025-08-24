
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-9xl font-bold text-zion-cyan mb-6">404</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Page Not Found</h1>
        <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track to exploring our amazing services.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-neon transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            to="/services"
            className="bg-zion-blue-dark border border-zion-cyan text-white px-8 py-4 rounded-xl font-semibold text-lg hover:border-zion-purple transition-all duration-300"
          >
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}