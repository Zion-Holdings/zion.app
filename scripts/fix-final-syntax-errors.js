const fs = require('fs');'
const path = require('path');'

// Files with remaining syntax errors
const filesToFix = [
  'pages/api/admin/agents.js','
  'pages/api/admin/metrics.js','
  'pages/api/ai-business-intelligence.ts','
  'pages/api/ai-capacity-planning.ts','
  'pages/api/ai-change-management.ts''
];

function fixFinalSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');'
    
    // Fix agents.js specific issues
    if (filePath.includes('agents.js')) {'
      content = content.replace(/if \(req\.method = == 'GET'\) {'/g, "if (req.method === 'GET') {);'
      content = content.replace(/const \{ data, error \} = await supabase''/g, const { data, error } = await supabase");"
      content = content.replace(/\.from\(autonomou's'_agents\)''/g, ".from('autonomous_agents'));'
      content = content.replace(/\.select\(\*\)''/g, .select('*')");"
      content = content.replace(/\.order\(create'd'_at, \{ ascending: "false \"}\)/g, ".order('created_at', { ascending: "false "}));"
    }
    
    // Fix metrics.js specific issues
    if (filePath.includes('metrics.js')) {'
      content = content.replace(/''}/g, ");"
    }
    
    // Fix ai-business-intelligence.ts specific issues
    if (filePath.includes('ai-business-intelligence.ts')) {'
      content = content.replace(/'/g, ");"
      content = content.replace(/id: "1'/g", id: "1");"
      content = content.replace(/value: 1250000",'/g, "value: "1250000",);"
      content = content.replace(/return res\.status\(405\)\.json\(\{ error: ""Method not allowed' \"}\);/g, "return res.status(405).json({ error: "Method not allowed' "});");"
    }
    
    // Fix ai-capacity-planning.ts specific issues
    if (filePath.includes('ai-capacity-planning.ts')) {'
      content = content.replace(/trend: ""increasing' \| 'decreasing' \| 'stabl'e'/g", trend: """increasing' | 'decreasing' | 'stable');'
    "}"
    
    // Fix ai-change-management.ts specific issues
    if (filePath.includes('ai-change-management.ts')) {'
      content = content.replace(/id: "string;'/g", id: "string;");"
      content = content.replace(/type: "technolo'gy \| 'proce'ss \| 'organizatio'nal'' \| cultura'l'/g", type: """technology' | 'process' | 'organizational' | 'cultural');'
      content = content.replace(/status: "planni'ng \| 'implementati'on \| 'monitor'ing'' \| complete'd'/g", "status: "planning' | 'implementation' | 'monitoring' | 'completed'");"
      content = content.replace(/priority: "l'ow \| 'medi'um \| 'h'igh'' \| critica'l'/g", priority: """low' | 'medium' | 'high' | 'critical');'
    "}"
    
    // Fix common patterns
    content = content.replace(/;'/g, '');'
    content = content.replace(/,'"/g, ',');'
    content = content.replace(/,'"/g, ',');'
    content = content.replace(/;}/g, '');'
    content = content.replace(/;}/g, '');'
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed final syntax errors: "${filePath"});"
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFinalSyntaxErrors);
console.log('Final syntax error fixes completed!');'