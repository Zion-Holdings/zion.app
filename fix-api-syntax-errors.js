const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  // Fix unterminated strings
  content = content.replace(/'([^']*)$/gm, "'");
  content = content.replace(/"([^"]*)$/gm, '"');
  
  // Fix semicolons in object properties
  content = content.replace(/;\s*}/g, '}');
  content = content.replace(/;\s*]/g, ']');
  
  // Fix missing quotes in object keys
  content = content.replace(/(\w+):\s*([^,\s]+)/g, (match, key, value) => {
    if (value.startsWith("'") || value.startsWith('"') || !isNaN(value) || value === 'true' || value === 'false') {
      return match;
    }
    return `${key}: "${value}"`;
  });
  
  // Fix template literals
  content = content.replace(/`([^`]*)/g, (match, inner) => {
    return `\`${inner.replace(/"/g, '\\"')}\``;
  });
  
  // Fix JSX in strings
  content = content.replace(/<([^>]+)>/g, (match) => {
    return match.replace(/"/g, '\\"');
  });
  
  return content;
}

// Function to fix specific files
function fixSpecificFiles() {
  const apiDir = path.join(__dirname, 'pages', 'api');
  
  // Fix ai-portfolio.ts
  const portfolioPath = path.join(apiDir, 'ai-portfolio.ts');
  if (fs.existsSync(portfolioPath)) {
    let content = fs.readFileSync(portfolioPath, 'utf8');
    content = content.replace(/<Image src=\${image}" alt=\${name} style=""width: "120px"height:120px;border-radius:50%;margin-bottom:16px; \/ width = \{400\"} height=\{300\} """> : }<\/div>/g, 
      '<Image src="${image}" alt=${name} style={{width: "120px", height: "120px", borderRadius: "50%", marginBottom: "16px"}} width={400} height={300} />');
    fs.writeFileSync(portfolioPath, content);
  }
  
  // Fix ai-recommendations.ts
  const recommendationsPath = path.join(apiDir, 'ai-recommendations.ts');
  if (fs.existsSync(recommendationsPath)) {
    let content = fs.readFileSync(recommendationsPath, 'utf8');
    content = content.replace(/type: "'service \| talent \| equipment' \| produc't;/g, "type: 'service' | 'talent' | 'equipment' | 'product';");
    fs.writeFileSync(recommendationsPath, content);
  }
  
  // Fix ai-resume.ts
  const resumePath = path.join(apiDir, 'ai-resume.ts');
  if (fs.existsSync(resumePath)) {
    let content = fs.readFileSync(resumePath, 'utf8');
    content = content.replace(/template;/g, 'template');
    fs.writeFileSync(resumePath, content);
  }
  
  // Fix ai-service-matcher.ts
  const matcherPath = path.join(apiDir, 'ai-service-matcher.ts');
  if (fs.existsSync(matcherPath)) {
    let content = fs.readFileSync(matcherPath, 'utf8');
    content = content.replace(/import React from 'react';/g, "import React from 'react';");
    content = content.replace(/interface FacilityPlan \{;/g, 'interface FacilityPlan {');
    content = content.replace(/id: "string"/g, 'id: string;');
    fs.writeFileSync(matcherPath, content);
  }
  
  // Fix ai-vendor-management.ts
  const vendorPath = path.join(apiDir, 'ai-vendor-management.ts');
  if (fs.existsSync(vendorPath)) {
    let content = fs.readFileSync(vendorPath, 'utf8');
    content = content.replace(/import React from 'react';/g, "import React from 'react';");
    content = content.replace(/export default async function handler\(;/g, 'export default async function handler(');
    content = content.replace(/req: "NextApiRequest","/g, 'req: NextApiRequest,');
    fs.writeFileSync(vendorPath, content);
  }
  
  // Fix ai-facility-management.ts
  const facilityPath = path.join(apiDir, 'ai-facility-management.ts');
  if (fs.existsSync(facilityPath)) {
    let content = fs.readFileSync(facilityPath, 'utf8');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*]/g, ']');
    content = content.replace(/;\s*\)/g, ')');
    content = content.replace(/;\s*$/gm, '');
    fs.writeFileSync(facilityPath, content);
  }
  
  // Fix ai-hr-management.ts
  const hrPath = path.join(apiDir, 'ai-hr-management.ts');
  if (fs.existsSync(hrPath)) {
    let content = fs.readFileSync(hrPath, 'utf8');
    content = content.replace(/;\s*}/g, '}');
    content = content.replace(/;\s*]/g, ']');
    content = content.replace(/;\s*\)/g, ')');
    content = content.replace(/;\s*$/gm, '');
    fs.writeFileSync(hrPath, content);
  }
}

// Run the fixes
fixSpecificFiles();
console.log('API syntax errors fixed!'); 