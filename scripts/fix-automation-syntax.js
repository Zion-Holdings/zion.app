const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing automation syntax errors...');

// Fix ultimate-automation-factory-system.js
const factorySystemPath = path.join(__dirname, '../automation/ultimate-automation-factory-system.js');
let content = fs.readFileSync(factorySystemPath, 'utf8');

// Fix syntax errors
content = content.replace(/;\s*};/g, '};');
content = content.replace(/;\s*];/g, '];');
content = content.replace(/;\s*};/g, '};');
content = content.replace(/require\.main\s*=\s*==\s*module/g, 'require.main === module');
content = content.replace(/{\s*;/g, '{');
content = content.replace(/;\s*$/gm, '');

// Fix specific patterns
content = content.replace(/timestamp:\s*new Date\(\)\.toISOString\(\);/g, 'timestamp: new Date().toISOString()');
content = content.replace(/message;/g, 'message');
content = content.replace(/totalEvolutionCount:\s*0;/g, 'totalEvolutionCount: 0');

fs.writeFileSync(factorySystemPath, content);
console.log('✅ Fixed ultimate-automation-factory-system.js');

// Fix other automation files
const automationDir = path.join(__dirname, '../automation');
const files = fs.readdirSync(automationDir).filter(f => f.endsWith('.js'));

for (const file of files) {
  if (file === 'ultimate-automation-factory-system.js') continue;
  
  const filePath = path.join(automationDir, file);
  try {
    let fileContent = fs.readFileSync(filePath, 'utf8');
    
    // Fix common syntax errors
    fileContent = fileContent.replace(/;\s*};/g, '};');
    fileContent = fileContent.replace(/;\s*];/g, '];');
    fileContent = fileContent.replace(/require\.main\s*=\s*==\s*module/g, 'require.main === module');
    fileContent = fileContent.replace(/{\s*;/g, '{');
    
    fs.writeFileSync(filePath, fileContent);
    console.log(`✅ Fixed ${file}`);
  } catch (error) {
    console.log(`⚠️  Could not fix ${file}: ${error.message}`);
  }
}

console.log('🎉 Automation syntax fixes completed!');
