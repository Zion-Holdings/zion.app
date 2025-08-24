
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, ChevronUp, Phone, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const quickActions = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Call Support",
      action: "tel:+1-800-ZION-TECH",
      color: "bg-zion-cyan hover:bg-zion-cyan-light"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email Us",
      action: "mailto:support@ziontechgroup.com",
      color: "bg-zion-purple hover:bg-zion-purple-light"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      label: "Live Chat",
      action: "/contact",
      color: "bg-zion-blue hover:bg-zion-blue-light"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute bottom-16 right-0 mb-4"
          >
            <div className="bg-zion-blue-dark border border-zion-blue-light rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-4">
                <h3 className="text-white font-semibold mb-2">Need Help?</h3>
                <p className="text-zion-slate-light text-sm">We're here to assist you</p>
              </div>
              
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {action.action.startsWith('http') || action.action.startsWith('/') ? (
                      <Link to={action.action}>
                        <Button
                          className={`w-full ${action.color} text-white border-0 hover:shadow-lg transition-all duration-300`}
                          size="sm"
                        >
                          <span className="flex items-center gap-2">
                            {action.icon}
                            {action.label}
                          </span>
                        </Button>
                      </Link>
                    ) : (
                      <a href={action.action}>
                        <Button
                          className={`w-full ${action.color} text-white border-0 hover:shadow-lg transition-all duration-300`}
                          size="sm"
                        >
                          <span className="flex items-center gap-2">
                            {action.icon}
                            {action.label}
                          </span>
                        </Button>
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          onClick={toggleExpanded}
          className={`w-14 h-14 rounded-full shadow-2xl border-0 transition-all duration-300 ${
            isExpanded 
              ? 'bg-zion-purple hover:bg-zion-purple-light' 
              : 'bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light'
          }`}
        >
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="message"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Scroll to top button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-4"
      >
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-14 h-14 rounded-full bg-zion-blue-dark border border-zion-blue-light hover:bg-zion-blue hover:border-zion-cyan shadow-lg transition-all duration-300"
        >
          <ChevronUp className="w-6 h-6 text-zion-cyan" />
        </Button>
      </motion.div>
    </div>
  );
}
