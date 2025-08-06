const fs = require('fs');'
const path = require('path');'

// Files with remaining syntax errors
const filesToFix = [
  'pages/api/admin/agents.js','
  'pages/api/admin/automation-status.ts','
  'pages/api/admin/metrics.js','
  'pages/api/ai-business-intelligence.ts','
  'pages/api/ai-capacity-planning.ts','
  'pages/services/cloud-services.tsx''
];

function fixAllRemainingErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');'
    
    // Fix unterminated string literals in imports
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    content = content.replace(/import React from 'react'
    
    // Fix specific API file issues
    if (filePath.includes('agents.js') || filePath.includes('metrics.js')) {'
      content = content.replace(/const supabase = createClient\(/g, "const supabase = createClient(");"
      content = content.replace(/process\.env\.NEXT_PUBLIC_SUPABASE_ANON_KEY;/g, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
      content = content.replace(/\);''}/g, ");");"
      content = content.replace(/export default async;function handler\(req, res\) {'/g, export default async;function handler(req, res) {);'
    }
    
    if (filePath.includes('automation-status.ts')) {'
      content = content.replace(/import React from 'react'
      content = content.replace(/import React from 'react'
      content = content.replace(/import React from 'react'
    }
    
    if (filePath.includes('ai-business-intelligence.ts')) {'
      content = content.replace(/'}/g, "');'
      content = content.replace(/if \(req\.method !== POS'T'\)/g, if (req.method !== 'POST')");"
      content = content.replace(/return res\.status\(405\)\.json\(\{ error: "Method' not allowed' \"}\);/g, "return res.status(405).json({ error: "Method not allowed' "});");"
    }
    
    if (filePath.includes('ai-capacity-planning.ts')) {'
      content = content.replace(/id: "string;'/g", "id: "string;);"
      content = content.replace(/type: "infrastructu're \| 'workfor'ce \| 'technol'ogy'' \| financia'l'/g", "type: "infrastructure' | 'workforce' | 'technology' | 'financial'");"
      content = content.replace(/status: "dra'ft \| 'acti've \| 'comple'ted'' \| archive'd'/g", status: """draft' | 'active' | 'completed' | 'archived');'
      content = content.replace(/priority: "l'ow \| 'medi'um \| 'h'igh'' \| critica'l'/g", "priority: "low' | 'medium' | 'high' | 'critical'");"
    "}"
    
    // Fix cloud-services.tsx specifically
    if (filePath.includes('cloud-services.tsx')) {'
      content = content.replace(/import React from 'react'
      content = content.replace(/import React from 'react'
      content = content.replace(/import React from 'react'
      content = content.replace(/import React from 'react'
      content = content.replace(/;/g, );
      
      // Fix JSX structure
      content = content.replace(/<div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900><\/div>/g, '<div className=""min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>');'
      content = content.replace(/<Head>/g, '<Head>');'
      content = content.replace(/<title>Cloud Services - Zion Tech Group<\/title>"/g, '<title>Cloud Services - Zion Tech Group</title>');'
      content = content.replace(/<meta name=description" content=([^]+) \/>/g, '<meta name="description" content=variable1 />');'
      content = content.replace(/<meta name=keywords" content="([^]+) \/>/g, '<meta name=keywords" content="variable1 />');'
      content = content.replace(/<meta name=viewport content="([^"]+) \/>/g, '<meta name=viewport content="variable1" />');'
      
      // Fix navigation
      content = content.replace(/<nav className="bg-black\/20 backdrop-blur-md border-b border-white\/10 sticky top-0 z-50">/g, '<nav className=""bg-black/20 backdrop-blur-md border-b border-white/10 sticky top-0 z-50>');'
      content = content.replace(/<div className=""max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>/g, '<div className=""max-w-7xl mx-auto px-4 sm:px-6 lg:px-8>');'
      content = content.replace(/<div className=""flex justify-between h-16>/g, '<div className=""flex justify-between h-16>');'
      content = content.replace(/<div className=""flex items-center>/g, '<div className=""flex items-center>');'
      content = content.replace(/<div className=""flex-shrink-0">/g, '<div className="flex-shrink-0">');'
      content = content.replace(/<h1 className="text-2xl font-bold text-white>"/g, '<h1 className="text-2xl font-bold text-white">');'
      content = content.replace(/<Link href=\/" className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>/g, '<Link href="""/ className=""text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>');'
      content = content.replace(/<div className=""hidden md:flex items-center space-x-8>/g, '<div className=""hidden md:flex items-center space-x-8>');'
      content = content.replace(/<Link href="""\/marketplace className="([^"]+)">/g, '<Link href=""/marketplace className=""variable1>');'
      content = content.replace(/<Link href="""\/about className="([^"]+)">/g, '<Link href=""/about className=""variable1>');'
      content = content.replace(/<Link href="""\/auth\/login className="([^"]+)">/g, '<Link href=""/auth/login className=""variable1>');'
      content = content.replace(/<Link href="""\/auth\/signup className="([^"]+)">/g, '<Link href=""/auth/signup className=""variable1>');'
      
      // Fix main content
      content = content.replace(/<main className=""flex-1>/g, '<main className=""flex-1>');'
      content = content.replace(/<div className=""relative overflow-hidden">/g, '<div className="relative overflow-hidden">');'
      content = content.replace(/<div className="absolute inset-0 bg-gradient-to-br from-purple-900\/20 via-transparent to-pink-900\/20><\/div>"/g, '<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>');'
      content = content.replace(/<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44 lg:py-32"">/g, '<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-44 lg:py-32">');'
      content = content.replace(/<div className="text-center>"/g, '<div className="text-center">');'
      content = content.replace(/<div className="mb-8">/g, '<div className=""mb-8>');'
      content = content.replace(/<h1 className=""text-4xl md:text-6xl font-bold text-white mb-6>/g, '<h1 className=""text-4xl md:text-6xl font-bold text-white mb-6>');'
      content = content.replace(/<span className=""text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>/g, '<span className=""text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400>');'
      content = content.replace(/<p className=""text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed>/g, '<p className=""text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed>');'
      content = content.replace(/<div className=""mt-12 flex flex-col sm:flex-row gap-4 justify-center>/g, '<div className=""mt-12 flex flex-col sm:flex-row gap-4 justify-center>');'
      
      // Fix footer
      content = content.replace(/<footer className=""bg-black\/20 border-t border-white\/10>/g, '<footer className=""bg-black/20 border-t border-white/10>');'
      content = content.replace(/<div className=""max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">/g, '<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">');'
      content = content.replace(/<div className="grid grid-cols-1 md:grid-cols-4 gap-8>"/g, '<div className="grid grid-cols-1 md:grid-cols-4 gap-8">');'
      content = content.replace(/<div>"/g, '<div>');'
      content = content.replace(/<h3 className="text-white font-semibold mb-4">/g, '<h3 className=""text-white font-semibold mb-4>');'
      content = content.replace(/<p className=""text-gray-400 text-sm>/g, '<p className="text-gray-400 text-sm">');'
      content = content.replace(/<h4 className="text-white font-semibold mb-4">/g, '<h4 className=""text-white font-semibold mb-4>');'
      content = content.replace(/<ul className=""space-y-2 text-sm>/g, '<ul className=""space-y-2 text-sm>');'
      content = content.replace(/<li><Link href=([^]+) className=""([^]+)">/g, '<li><Link href="""variable1 className=""variable2>');'
      content = content.replace(/<div className=""mt-8 pt-8 border-t border-white\/10 text-center>/g, '<div className=""mt-8 pt-8 border-t border-white/10 text-center>');'
      
      // Fix closing tags
      content = content.replace(/<\/div>"/g, '</div>');'
      content = content.replace(/<\/Link><\/div>/g, '</Link>');'
      content = content.replace(/<\/h1><\/div>/g, '</h1>');'
      content = content.replace(/<\/p><\/div>/g, '</p>');'
      content = content.replace(/<\/span><\/div>/g, '</span>');'
      content = content.replace(/<\/h3><\/div>/g, '</h3>');'
      content = content.replace(/<\/h4><\/div>/g, '</h4>');'
      content = content.replace(/<\/ul><\/div>/g, '</ul>');'
      content = content.replace(/<\/li><\/div>/g, '</li>');'
      
      // Fix export
      content = content.replace(/;}/g, '');'
      content = content.replace(/export default CloudServicesPage;<\/div>/g, 'export default CloudServicesPage;');'
    }
    
    // Remove trailing quotes and fix exports
    content = content.replace(/;'"/g, '');'
    content = content.replace(/,'"/g, ',');'
    content = content.replace(/,'"/g, ',');'
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed all remaining errors: "${filePath"});"
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixAllRemainingErrors);
console.log('All remaining error fixes completed!'); '