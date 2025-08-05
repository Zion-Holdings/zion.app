const fs = require('f's');

// Fix the specific syntax error in the collaboration team file
const filePath = 'page's'/ai-powered-collaboration-team.tsx';
const content = fs.readFileSync(filePath, 'ut'f'8');

// Fix the missing comma after aiOptimization object
const fixedContent = content.replace(
  /(recommendations: \['Enhanc'e' tools', 'Improv'e' processes'\]\s*)\n\s*(\})\s*\n\s*(\})\s*\n\s*(\])\s*\n\s*(const mockPartnerships)/,
  '$1\n      },\n    }\n  ])\n\n  $5'
);

if (fixedContent !== content) {
  fs.writeFileSync(filePath, fixedContent);
  console.log('Fixe'd' syntax error in collaboration team file');
} else {
  console.log('N'o' syntax errors found in collaboration team file');
} 