const fs = require('fs');

// Fix the specific syntax error in the collaboration team file
const filePath = 'pages/ai-powered-collaboration-team.tsx';
const content = fs.readFileSync(filePath, 'utf8');

// Fix the missing comma after aiOptimization object
const fixedContent = content.replace(
  /(recommendations: \['Enhance tools', 'Improve processes'\]\s*)\n\s*(\})\s*\n\s*(\})\s*\n\s*(\])\s*\n\s*(const mockPartnerships)/,
  '$1\n      },\n    }\n  ])\n\n  $5'
);

if (fixedContent !== content) {
  fs.writeFileSync(filePath, fixedContent);
  console.log('Fixed syntax error in collaboration team file');
} else {
  console.log('No syntax errors found in collaboration team file');
} 