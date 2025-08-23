const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Common icon mappings for missing icons
const iconMappings = {
  'TrendingUpIcon': 'TrendingUp',
  'SecurityIcon': 'Shield',
  'Team': 'Users',
  'Chart': 'TrendingUp',
  'UserIcon': 'Users',
  'ChartIcon': 'BarChart3',
  'CodeIcon': 'Code',
  'DatabaseIcon': 'Database',
  'CloudIcon': 'Cloud',
  'MailIcon': 'Mail',
  'PhoneIcon': 'Phone',
  'MapPinIcon': 'MapPin',
  'StarIcon': 'Star',
  'CheckIcon': 'CheckCircle',
  'ArrowIcon': 'ArrowRight',
  'GlobeIcon': 'Globe',
  'RocketIcon': 'Rocket',
  'ShieldIcon': 'Shield',
  'BrainIcon': 'Brain',
  'AtomIcon': 'Atom',
  'ZapIcon': 'Zap',
  'CpuIcon': 'Cpu',
  'ServerIcon': 'Server',
  'NetworkIcon': 'Network',
  'TargetIcon': 'Target',
  'AwardIcon': 'Award',
  'BuildingIcon': 'Building',
  'LockIcon': 'Lock',
  'EyeIcon': 'Eye',
  'HeartIcon': 'Heart',
  'Next': 'ArrowRight',
  'Prev': 'ArrowLeft',
  'Previous': 'ArrowLeft'
};

function fixMissingIcons(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  let updatedContent = content;
  let fixed = false;

  // Extract the imports from lucide-react
  const importMatch = content.match(/import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"];/);
  if (!importMatch) return false;

  const availableIcons = importMatch[1]
    .split(',')
    .map(icon => icon.trim().split(' as ')[0].trim())
    .filter(icon => icon);

  const availableIconsSet = new Set(availableIcons);

  // Find and fix missing icon references
  Object.entries(iconMappings).forEach(([missingIcon, replacement]) => {
    if (availableIconsSet.has(replacement)) {
      const regex = new RegExp(`\\b${missingIcon}\\b`, 'g');
      if (content.includes(missingIcon) && updatedContent.replace(regex, replacement) !== updatedContent) {
        updatedContent = updatedContent.replace(regex, replacement);
        console.log(`Fixed ${filePath}: ${missingIcon} -> ${replacement}`);
        fixed = true;
      }
    }
  });

  // Write back if changed
  if (fixed) {
    fs.writeFileSync(filePath, updatedContent);
    return true;
  }

  return false;
}

// Find all .tsx files in pages directory
const files = glob.sync('pages/**/*.tsx');

let fixedCount = 0;

files.forEach(file => {
  if (fixMissingIcons(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Processed ${files.length} files, fixed ${fixedCount} files with missing icon references.`);