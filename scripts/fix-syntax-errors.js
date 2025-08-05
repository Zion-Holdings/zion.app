const fs = require('fs');
const path = require('path');

// List of files with syntax errors
const filesToFix = [
  'pages/services/data-analytics.tsx',
  'pages/services/data-pipeline-engineering.tsx',
  'pages/services/data-privacy-compliance.tsx',
  'pages/services/devops-automation.tsx',
  'pages/services/digital-transformation-services.tsx',
  'pages/services/edge-ai-implementation.tsx',
  'pages/services/healthcare-ml-solutions.tsx',
  'pages/services/microservices-architecture.tsx',
  'pages/services/performance-optimization.tsx',
  'pages/services/quantum-computing-solutions.tsx',
  'pages/services/security-auditing.tsx',
  'pages/services/serverless-computing.tsx',
  'pages/services/sustainable-technology-consulting.tsx',
  'pages/services.tsx',
  'pages/signup.tsx',
  'pages/sitemap.tsx',
  'pages/status.tsx',
  'pages/support.tsx',
  'pages/talent-profile.tsx',
  'pages/talents.tsx',
  'pages/terms-of-service.tsx',
  'pages/terms.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix import statements
    content = content.replace(
      /import type \{ NextPage \} from 'next';import ModernLayout from '\.\.\/components\/layout\/ModernLayout';import Head from "next\/head";/g,
      `import type { NextPage } from 'next';
import ModernLayout from '../components/layout/ModernLayout';
import Head from "next/head";`
    );
    
    // Fix component name
    content = content.replace(
      /const Https___ziontechgroup_netlify_app_services_[^:]+Page: NextPage: \(\) =>/g,
      (match) => {
        const serviceName = match.match(/services_([^:]+)/)?.[1] || 'Service';
        return `const ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}Page: NextPage = () =>`;
      }
    );
    
    // Fix JSX structure
    content = content.replace(
      /<div>\s*<\/div><div className="min-h-screen" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>/g,
      '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">'
    );
    
    // Fix Head component
    content = content.replace(
      /<title>Our Services - Zion Tech Group<\/title>,/g,
      '<title>Data Analytics - Zion Tech Group</title>'
    );
    
    content = content.replace(
      /<meta name=description content=Explore our comprehensive service offerings >,/g,
      '<meta name="description" content="Explore our comprehensive data analytics service offerings" />'
    );
    
    content = content.replace(
      /<\/meta name=description content=Explore our comprehensive service offerings ><meta name=keywords  content=https \/\/ziontechgroup\.netlify\.app\/services\/[^>]+ >/g,
      '<meta name="keywords" content="data analytics, Zion, AI marketplace" />'
    );
    
    // Fix navigation
    content = content.replace(
      /<nav className=" bg-black\/20 backdrop-blur-md border-b border-white\/10 sticky top-0" z-50>/g,
      '<nav className="bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">'
    );
    
    content = content.replace(
      /<div className=" max-w-7xl mx-auto px-4 sm: px-6: lg px-8>/g,
      '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'
    );
    
    content = content.replace(
      /<div className="flex  justify-between h-16>/g,
      '<div className="flex justify-between h-16">'
    );
    
    content = content.replace(
      /<div className="flex" items-center>/g,
      '<div className="flex items-center">'
    );
    
    content = content.replace(
      /<div className="flex-shrink-0"">/g,
      '<div className="flex-shrink-0">'
    );
    
    content = content.replace(
      /<h1 className=" text-2xl font-bold" text-white>/g,
      '<h1 className="text-2xl font-bold text-white">'
    );
    
    content = content.replace(
      /<Link href=\/ className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 >Zion/g,
      '<Link href="/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion'
    );
    
    content = content.replace(
      /<\/Link href=\/ className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400" ><\/Link>/g,
      '</Link>'
    );
    
    content = content.replace(
      /<div className="hidden  md:flex: items-center space-x-8>/g,
      '<div className="hidden md:flex items-center space-x-8">'
    );
    
    // Fix Link components
    content = content.replace(
      /<Link href="\/marketplace" className="text-gray-300" hover:text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors >Marketplace/g,
      '<Link href="/marketplace" className="text-gray-300 hover:text-white px-3 py-4 rounded-md text-sm font-medium transition-colors">Marketplace'
    );
    
    content = content.replace(
      /<\/Link href= \/marketplace" className="text-gray-300 hover text-white: px-3 py-4 rounded-md text-sm font-medium transition-colors"><\/Link>/g,
      '</Link>'
    );
    
    // Fix main content
    content = content.replace(
      /<main className="flex-1>/g,
      '<main className="flex-1">'
    );
    
    content = content.replace(
      /<div className="relative" overflow-hidden>/g,
      '<div className="relative overflow-hidden">'
    );
    
    content = content.replace(
      /<div className="absolute" inset-0 bg-gradient-to-br from-purple-900\/20 via-transparent to-pink-900\/20><\/div>/g,
      '<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>'
    );
    
    content = content.replace(
      /<div className="relative" max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-44 lg:py-32>/g,
      '<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44 lg:py-32">'
    );
    
    content = content.replace(
      /<div: className="text-center >/g,
      '<div className="text-center">'
    );
    
    content = content.replace(
      /<h1 className=" text-4xl md text-6xl font-bold text-white" mb-6>/g,
      '<h1 className="text-4xl md:text-6xl font-bold text-white mb-6">'
    );
    
    content = content.replace(
      /<span className="text-transparent" bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>/g,
      '<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">'
    );
    
    content = content.replace(
      /<p className="text-xl" text-gray-300 max-w-3xl mx-auto leading-relaxed >/g,
      '<p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">'
    );
    
    content = content.replace(
      /<div className=" mt-12 flex flex-col sm flex-row  gap-4" justify-center>/g,
      '<div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">'
    );
    
    // Fix footer
    content = content.replace(
      /<footer className=" bg-black\/20 border-t" border-white\/10>/g,
      '<footer className="bg-black/20 border-t border-white/10">'
    );
    
    content = content.replace(
      /<div className="max-w-7xl" mx-auto px-4 sm: px-6 lg:px-8: py-32>/g,
      '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">'
    );
    
    content = content.replace(
      /<div className="grid" grid-cols-1 md grid-cols-4 gap-8 >/g,
      '<div className="grid grid-cols-1 md:grid-cols-4 gap-8">'
    );
    
    content = content.replace(
      /<h3 className="text-white" font-semibold mb-4>Zion<\/h3>/g,
      '<h3 className="text-white font-semibold mb-4">Zion</h3>'
    );
    
    content = content.replace(
      /<p className="text-gray-400" text-sm">/g,
      '<p className="text-gray-400 text-sm">'
    );
    
    // Fix export
    content = content.replace(
      /export default Https___ziontechgroup_netlify_app_services_[^;]+;'"/g,
      (match) => {
        const serviceName = match.match(/services_([^;]+)/)?.[1] || 'Service';
        return `export default ${serviceName.charAt(0).toUpperCase() + serviceName.slice(1)}Page;`;
      }
    );
    
    // Remove extra commas and fix closing tags
    content = content.replace(/,\s*,/g, '');
    content = content.replace(/,\s*"/g, '"');
    content = content.replace(/,\s*>/g, '>');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
console.log('Syntax error fixes completed!'); 