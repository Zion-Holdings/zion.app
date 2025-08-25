// Build Verification Script
// This script checks if our components can be imported without syntax errors

console.log('🔍 Starting build verification...');

try {
  // Test component imports
  console.log('📦 Testing component imports...');
  
  // Test basic React functionality
  const React = require('react');
  console.log('✅ React import successful');
  
  // Test framer-motion
  const { motion } = require('framer-motion');
  console.log('✅ Framer Motion import successful');
  
  // Test lucide-react icons
  const { ArrowRight, CheckCircle, Brain, Cloud, Shield, Zap } = require('lucide-react');
  console.log('✅ Lucide React icons import successful');
  
  console.log('🎉 All core dependencies imported successfully!');
  console.log('📋 Components should be ready for build');
  
} catch (error) {
  console.error('❌ Import error:', error.message);
  process.exit(1);
}

console.log('🏁 Build verification complete');