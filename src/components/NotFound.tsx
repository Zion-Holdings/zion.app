import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, HelpCircle, Mail, AlertTriangle } from 'lucide-react';
import { Button } from './ui/button';
import FuturisticNeonButton from './ui/FuturisticNeonButton';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark flex items-center justify-center p-4">
      <motion.div
        className="max-w-2xl w-full text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* 404 Icon */}
        <motion.div
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <AlertTriangle className="w-16 h-16 text-red-400" />
        </motion.div>

        {/* 404 Number */}
        <motion.h1
          className="text-8xl md:text-9xl font-bold text-white mb-4 bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
        >
          404
        </motion.h1>

        {/* Error Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Page Not Found
        </motion.h2>

        {/* Error Message */}
        <motion.p
          className="text-xl text-zion-slate-light mb-8 leading-relaxed max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <FuturisticNeonButton
            onClick={goHome}
            size="lg"
            className="flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </FuturisticNeonButton>
          
          <Button
            variant="outline"
            size="lg"
            onClick={goBack}
            className="border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </motion.div>

        {/* Helpful Links */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link
            to="/search"
            className="group p-6 bg-zion-blue-dark/30 backdrop-blur-lg border border-zion-blue-light/20 rounded-xl hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
              <Search className="w-6 h-6 text-zion-cyan" />
            </div>
            <h3 className="text-white font-semibold mb-2">Search</h3>
            <p className="text-zion-slate-light text-sm">Find what you're looking for</p>
          </Link>

          <Link
            to="/help"
            className="group p-6 bg-zion-blue-dark/30 backdrop-blur-lg border border-zion-blue-light/20 rounded-xl hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
              <HelpCircle className="w-6 h-6 text-zion-cyan" />
            </div>
            <h3 className="text-white font-semibold mb-2">Help Center</h3>
            <p className="text-zion-slate-light text-sm">Get help and support</p>
          </Link>

          <Link
            to="/contact"
            className="group p-6 bg-zion-blue-dark/30 backdrop-blur-lg border border-zion-blue-light/20 rounded-xl hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105"
          >
            <div className="w-12 h-12 mx-auto mb-4 bg-zion-cyan/20 rounded-lg flex items-center justify-center group-hover:bg-zion-cyan/30 transition-colors">
              <Mail className="w-6 h-6 text-zion-cyan" />
            </div>
            <h3 className="text-white font-semibold mb-2">Contact Us</h3>
            <p className="text-zion-slate-light text-sm">Get in touch with our team</p>
          </Link>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="p-6 bg-zion-blue-dark/30 backdrop-blur-lg border border-zion-blue-light/20 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Still Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-zion-slate-light">
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">📞</span>
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">📧</span>
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">📍</span>
              <span>Middletown, DE 19709</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zion-cyan">🌐</span>
              <span>ziontechgroup.com</span>
            </div>
          </div>
        </motion.div>

        {/* Sitemap Link */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <Link
            to="/sitemap"
            className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm underline"
          >
            View Sitemap
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
