#!/usr/bin/env node

/**
 * Content Quality Fixer
 * Automatically fixes common content quality issues
 */

const fs = require('fs');
const path = require('path');

class ContentQualityFixer {
  constructor() {
    this.issues = [];
    this.fixes = [];
  }

  async fixContent() {
    console.log('🔧 Starting content quality fixes...');
    
    try {
      // Fix common content issues
      await this.fixMarkdownFiles();
      await this.fixHTMLFiles();
      await this.fixTextFiles();
      
      console.log(`✅ Content quality fixes completed. Fixed ${this.fixes.length} issues.`);
      return { success: true, fixes: this.fixes, issues: this.issues };
    } catch (error) {
      console.error('❌ Error during content quality fixes:', error.message);
      return { success: false, error: error.message };
    }
  }

  async fixMarkdownFiles() {
    const markdownFiles = this.findFiles('.md');
    
    for (const file of markdownFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix common markdown issues
        content = this.fixMarkdownContent(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.fixes.push(`Fixed markdown formatting in ${file}`);
        }
      } catch (error) {
        this.issues.push(`Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixHTMLFiles() {
    const htmlFiles = this.findFiles('.html');
    
    for (const file of htmlFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix common HTML issues
        content = this.fixHTMLContent(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.fixes.push(`Fixed HTML formatting in ${file}`);
        }
      } catch (error) {
        this.issues.push(`Error processing ${file}: ${error.message}`);
      }
    }
  }

  async fixTextFiles() {
    const textFiles = this.findFiles('.txt');
    
    for (const file of textFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let originalContent = content;
        
        // Fix common text issues
        content = this.fixTextContent(content);
        
        if (content !== originalContent) {
          fs.writeFileSync(file, content, 'utf8');
          this.fixes.push(`Fixed text formatting in ${file}`);
        }
      } catch (error) {
        this.issues.push(`Error processing ${file}: ${error.message}`);
      }
    }
  }

  fixMarkdownContent(content) {
    // Fix multiple spaces
    content = content.replace(/[ ]{2,}/g, ' ');
    
    // Fix line breaks
    content = content.replace(/\n{3,}/g, '\n\n');
    
    // Fix list formatting
    content = content.replace(/^\s*[-*+]\s+/gm, '- ');
    
    return content;
  }

  fixHTMLContent(content) {
    // Fix self-closing tags
    content = content.replace(/<([^>]+)\s*\/?>/g, (match, tag) => {
      const selfClosingTags = ['img', 'br', 'hr', 'input', 'meta', 'link'];
      if (selfClosingTags.some(t => tag.startsWith(t))) {
        return match.replace(/\/?>$/, ' />');
      }
      return match;
    });
    
    return content;
  }

  fixTextContent(content) {
    // Fix multiple spaces
    content = content.replace(/[ ]{2,}/g, ' ');
    
    // Fix line breaks
    content = content.replace(/\n{3,}/g, '\n\n');
    
    return content;
  }

  findFiles(extension) {
    const files = [];
    const searchDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            searchDir(fullPath);
          } else if (stat.isFile() && item.endsWith(extension)) {
            files.push(fullPath);
          }
        }
      } catch (error) {
        // Skip directories we can't access
      }
    };
    
    searchDir('.');
    return files;
  }
}

// Run if called directly
if (require.main === module) {
  const fixer = new ContentQualityFixer();
  fixer.fixContent().then(result => {
    if (result.success) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  });
}

module.exports = ContentQualityFixer;