#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const SUPPORTED_LANGUAGES = ['en', 'es', 'fr', 'pt', 'ar'];
const OUTPUT_FILE = path.join(__dirname, '../i18n-audit-report.md');

// Colors for console output
const colors = {
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  reset: '\x1b[0m'
};

function log(message, color = 'white') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Load translation files
function loadTranslations() {
  const translations = {};
  
  for (const lang of SUPPORTED_LANGUAGES) {
    const filePath = path.join(LOCALES_DIR, lang, 'translation.json');
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      translations[lang] = JSON.parse(content);
    } catch (error) {
      log(`Error loading ${lang} translations: ${error.message}`, 'red');
      translations[lang] = {};
    }
  }
  
  return translations;
}

// Flatten nested objects to dot notation
function flattenObject(obj, prefix = '') {
  const flattened = {};
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(flattened, flattenObject(obj[key], newKey));
      } else {
        flattened[newKey] = obj[key];
      }
    }
  }
  
  return flattened;
}

// Get all unique translation keys from all languages
function getAllKeys(translations) {
  const allKeys = new Set();
  
  for (const lang in translations) {
    const flattened = flattenObject(translations[lang]);
    Object.keys(flattened).forEach(key => allKeys.add(key));
  }
  
  return Array.from(allKeys).sort();
}

// Check if a translation is missing or incomplete
function isMissingTranslation(value, key, baseLang = 'en', currentLang, baseTranslations) {
  if (!value || value.trim() === '') return true;
  
  // Check if it's the same as the base language (not translated)
  if (currentLang !== baseLang && baseTranslations[baseLang]) {
    const baseFlattened = flattenObject(baseTranslations[baseLang]);
    if (baseFlattened[key] && value === baseFlattened[key]) {
      return true;
    }
  }
  
  return false;
}

// Generate audit report
function generateAuditReport(translations) {
  const allKeys = getAllKeys(translations);
  const report = {
    summary: {},
    missing: {},
    coverage: {},
    recommendations: []
  };
  
  // Initialize missing translations tracking
  for (const lang of SUPPORTED_LANGUAGES) {
    report.missing[lang] = [];
    report.coverage[lang] = { total: allKeys.length, translated: 0, percentage: 0 };
  }
  
  // Analyze each key
  for (const key of allKeys) {
    for (const lang of SUPPORTED_LANGUAGES) {
      const flattened = flattenObject(translations[lang] || {});
      const value = flattened[key];
      
      if (isMissingTranslation(value, key, 'en', lang, translations)) {
        report.missing[lang].push({
          key,
          currentValue: value || 'MISSING',
          englishValue: flattenObject(translations.en || {})[key] || 'N/A'
        });
      } else {
        report.coverage[lang].translated++;
      }
    }
  }
  
  // Calculate coverage percentages
  for (const lang of SUPPORTED_LANGUAGES) {
    const coverage = report.coverage[lang];
    coverage.percentage = Math.round((coverage.translated / coverage.total) * 100);
  }
  
  // Generate recommendations
  const languagesByCompletion = SUPPORTED_LANGUAGES.map(lang => ({
    lang,
    percentage: report.coverage[lang].percentage,
    missing: report.missing[lang].length
  })).sort((a, b) => b.percentage - a.percentage);
  
  report.summary = {
    totalKeys: allKeys.length,
    languagesByCompletion
  };
  
  // Add specific recommendations
  languagesByCompletion.forEach(({ lang, percentage, missing }) => {
    if (percentage < 80) {
      report.recommendations.push({
        priority: 'HIGH',
        message: `${lang.toUpperCase()} translation coverage is ${percentage}% (${missing} missing keys). Priority for completion.`
      });
    } else if (percentage < 95) {
      report.recommendations.push({
        priority: 'MEDIUM',
        message: `${lang.toUpperCase()} translation coverage is ${percentage}% (${missing} missing keys). Almost complete.`
      });
    }
  });
  
  return report;
}

// Generate markdown report
function generateMarkdownReport(report) {
  let markdown = `# i18n Translation Audit Report\n\n`;
  markdown += `Generated on: ${new Date().toISOString()}\n\n`;
  
  // Summary
  markdown += `## Summary\n\n`;
  markdown += `- **Total Translation Keys**: ${report.summary.totalKeys}\n`;
  markdown += `- **Supported Languages**: ${SUPPORTED_LANGUAGES.join(', ')}\n\n`;
  
  // Coverage table
  markdown += `## Translation Coverage\n\n`;
  markdown += `| Language | Completion | Translated | Missing | Status |\n`;
  markdown += `|----------|------------|------------|---------|--------|\n`;
  
  report.summary.languagesByCompletion.forEach(({ lang, percentage, missing }) => {
    const status = percentage >= 95 ? '✅ Complete' : 
                   percentage >= 80 ? '⚠️ Almost Complete' : 
                   '❌ Needs Work';
    const translated = report.coverage[lang].translated;
    markdown += `| ${lang.toUpperCase()} | ${percentage}% | ${translated} | ${missing} | ${status} |\n`;
  });
  
  markdown += `\n`;
  
  // Recommendations
  if (report.recommendations.length > 0) {
    markdown += `## Recommendations\n\n`;
    report.recommendations.forEach(rec => {
      const icon = rec.priority === 'HIGH' ? '🔴' : '🟡';
      markdown += `${icon} **${rec.priority}**: ${rec.message}\n\n`;
    });
  }
  
  // Missing translations by language
  markdown += `## Missing Translations by Language\n\n`;
  
  for (const lang of SUPPORTED_LANGUAGES) {
    const missing = report.missing[lang];
    if (missing.length === 0) {
      markdown += `### ${lang.toUpperCase()} ✅\nAll translations complete!\n\n`;
      continue;
    }
    
    markdown += `### ${lang.toUpperCase()} (${missing.length} missing)\n\n`;
    markdown += `| Key | Current Value | English Reference |\n`;
    markdown += `|-----|---------------|------------------|\n`;
    
    missing.slice(0, 20).forEach(item => { // Limit to first 20 for readability
      markdown += `| \`${item.key}\` | ${item.currentValue} | ${item.englishValue} |\n`;
    });
    
    if (missing.length > 20) {
      markdown += `\n*... and ${missing.length - 20} more missing translations*\n`;
    }
    
    markdown += `\n`;
  }
  
  // Next steps
  markdown += `## Next Steps\n\n`;
  markdown += `1. **Priority Languages**: Focus on languages with < 80% completion\n`;
  markdown += `2. **Use Translation Manager**: Visit \`/translation-manager\` in your app to edit translations\n`;
  markdown += `3. **Automated Translation**: Consider using the auto-translate feature for initial translations\n`;
  markdown += `4. **Review Translations**: Have native speakers review auto-translated content\n`;
  markdown += `5. **Add New Keys**: Ensure new features include translations for all supported languages\n\n`;
  
  // Best practices
  markdown += `## Best Practices\n\n`;
  markdown += `- **Consistent Keys**: Use descriptive, hierarchical keys (e.g., \`nav.home\`, \`errors.page_not_found\`)\n`;
  markdown += `- **Pluralization**: Use i18next pluralization features for count-based translations\n`;
  markdown += `- **Context**: Provide context in key names to help translators\n`;
  markdown += `- **Interpolation**: Use variables for dynamic content: \`"welcome": "Hello, {{name}}!"\`\n`;
  markdown += `- **Testing**: Test all languages in different browsers and devices\n`;
  
  return markdown;
}

// Main function
function main() {
  log('🔍 Starting i18n audit...', 'cyan');
  
  const translations = loadTranslations();
  log(`📁 Loaded translations for: ${Object.keys(translations).join(', ')}`, 'blue');
  
  const report = generateAuditReport(translations);
  log(`📊 Analyzed ${report.summary.totalKeys} translation keys`, 'blue');
  
  // Console output
  log('\n📈 Translation Coverage:', 'magenta');
  report.summary.languagesByCompletion.forEach(({ lang, percentage, missing }) => {
    const color = percentage >= 95 ? 'green' : percentage >= 80 ? 'yellow' : 'red';
    log(`  ${lang.toUpperCase()}: ${percentage}% (${missing} missing)`, color);
  });
  
  if (report.recommendations.length > 0) {
    log('\n💡 Recommendations:', 'magenta');
    report.recommendations.forEach(rec => {
      const color = rec.priority === 'HIGH' ? 'red' : 'yellow';
      log(`  ${rec.message}`, color);
    });
  }
  
  // Generate markdown report
  const markdownReport = generateMarkdownReport(report);
  fs.writeFileSync(OUTPUT_FILE, markdownReport);
  log(`\n📝 Detailed report saved to: ${OUTPUT_FILE}`, 'green');
  
  log('\n✅ i18n audit complete!', 'green');
}

// Run the audit
if (require.main === module) {
  main();
}

module.exports = { main, generateAuditReport, flattenObject }; 