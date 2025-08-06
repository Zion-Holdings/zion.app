#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

async function fixRemainingErrors() {
  console.log('🔧 Fixing remaining automation errors...');
  
  try {
    const files = glob.sync('automation/**/*.js');
    
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        let content = await fs.readFile(file, 'utf8');
        let originalContent = content;
        
        // Fix more complex malformed require statements
        content = content.replace(/\$2\)y\)\)''/g, "'fs'");
        content = content.replace(/\$2\)\);\)/g, "'fs'");
        content = content.replace(/\$2\)\);\)/g, "'path'");
        content = content.replace(/\$2\)\);\)/g, "'os'");
        content = content.replace(/\$2\)\);\)/g, "'cron'");
        content = content.replace(/\$2\)\);\)/g, "'axios'");
        content = content.replace(/\$2\)\);\)/g, "'child_process'");
        content = content.replace(/\$2\)\);\)/g, "'util'");
        content = content.replace(/\$2\)\);\)/g, "'events'");
        content = content.replace(/\$2\)\);\)/g, "'crypto'");
        content = content.replace(/\$2\)\);\)/g, "'http'");
        content = content.replace(/\$2\)\);\)/g, "'https'");
        content = content.replace(/\$2\)\);\)/g, "'url'");
        content = content.replace(/\$2\)\);\)/g, "'querystring'");
        content = content.replace(/\$2\)\);\)/g, "'zlib'");
        content = content.replace(/\$2\)\);\)/g, "'stream'");
        content = content.replace(/\$2\)\);\)/g, "'buffer'");
        content = content.replace(/\$2\)\);\)/g, "'timers'");
        content = content.replace(/\$2\)\);\)/g, "'assert'");
        content = content.replace(/\$2\)\);\)/g, "'constants'");
        content = content.replace(/\$2\)\);\)/g, "'domain'");
        content = content.replace(/\$2\)\);\)/g, "'punycode'");
        content = content.replace(/\$2\)\);\)/g, "'string_decoder'");
        content = content.replace(/\$2\)\);\)/g, "'sys'");
        content = content.replace(/\$2\)\);\)/g, "'tty'");
        content = content.replace(/\$2\)\);\)/g, "'v8'");
        content = content.replace(/\$2\)\);\)/g, "'vm'");
        content = content.replace(/\$2\)\);\)/g, "'worker_threads'");
        content = content.replace(/\$2\)\);\)/g, "'perf_hooks'");
        content = content.replace(/\$2\)\);\)/g, "'async_hooks'");
        content = content.replace(/\$2\)\);\)/g, "'inspector'");
        content = content.replace(/\$2\)\);\)/g, "'trace_events'");
        content = content.replace(/\$2\)\);\)/g, "'wasi'");
        content = content.replace(/\$2\)\);\)/g, "'repl'");
        content = content.replace(/\$2\)\);\)/g, "'readline'");
        content = content.replace(/\$2\)\);\)/g, "'cluster'");
        content = content.replace(/\$2\)\);\)/g, "'dgram'");
        content = content.replace(/\$2\)\);\)/g, "'dns'");
        content = content.replace(/\$2\)\);\)/g, "'net'");
        content = content.replace(/\$2\)\);\)/g, "'tls'");
        
        // Fix other patterns
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        content = content.replace(/require\(\(\(/g, "require(");
        
        // Fix specific patterns found in the error
        content = content.replace(/\$2\)y\)\)''/g, "'fs'");
        content = content.replace(/\$2\)\);\)/g, "'fs'");
        content = content.replace(/\$2\)\);\)/g, "'path'");
        content = content.replace(/\$2\)\);\)/g, "'os'");
        content = content.replace(/\$2\)\);\)/g, "'cron'");
        content = content.replace(/\$2\)\);\)/g, "'axios'");
        content = content.replace(/\$2\)\);\)/g, "'child_process'");
        content = content.replace(/\$2\)\);\)/g, "'util'");
        content = content.replace(/\$2\)\);\)/g, "'events'");
        content = content.replace(/\$2\)\);\)/g, "'crypto'");
        content = content.replace(/\$2\)\);\)/g, "'http'");
        content = content.replace(/\$2\)\);\)/g, "'https'");
        content = content.replace(/\$2\)\);\)/g, "'url'");
        content = content.replace(/\$2\)\);\)/g, "'querystring'");
        content = content.replace(/\$2\)\);\)/g, "'zlib'");
        content = content.replace(/\$2\)\);\)/g, "'stream'");
        content = content.replace(/\$2\)\);\)/g, "'buffer'");
        content = content.replace(/\$2\)\);\)/g, "'timers'");
        content = content.replace(/\$2\)\);\)/g, "'assert'");
        content = content.replace(/\$2\)\);\)/g, "'constants'");
        content = content.replace(/\$2\)\);\)/g, "'domain'");
        content = content.replace(/\$2\)\);\)/g, "'punycode'");
        content = content.replace(/\$2\)\);\)/g, "'string_decoder'");
        content = content.replace(/\$2\)\);\)/g, "'sys'");
        content = content.replace(/\$2\)\);\)/g, "'tty'");
        content = content.replace(/\$2\)\);\)/g, "'v8'");
        content = content.replace(/\$2\)\);\)/g, "'vm'");
        content = content.replace(/\$2\)\);\)/g, "'worker_threads'");
        content = content.replace(/\$2\)\);\)/g, "'perf_hooks'");
        content = content.replace(/\$2\)\);\)/g, "'async_hooks'");
        content = content.replace(/\$2\)\);\)/g, "'inspector'");
        content = content.replace(/\$2\)\);\)/g, "'trace_events'");
        content = content.replace(/\$2\)\);\)/g, "'wasi'");
        content = content.replace(/\$2\)\);\)/g, "'repl'");
        content = content.replace(/\$2\)\);\)/g, "'readline'");
        content = content.replace(/\$2\)\);\)/g, "'cluster'");
        content = content.replace(/\$2\)\);\)/g, "'dgram'");
        content = content.replace(/\$2\)\);\)/g, "'dns'");
        content = content.replace(/\$2\)\);\)/g, "'net'");
        content = content.replace(/\$2\)\);\)/g, "'tls'");
        
        if (content !== originalContent) {
          await fs.writeFile(file, content, 'utf8');
          console.log(`✅ Fixed: ${file}`);
          fixedCount++;
        }
      } catch (error) {
        console.error(`❌ Error fixing ${file}:`, error.message);
      }
    }
    
    console.log(`\n🎉 Fixed ${fixedCount} files`);
    
  } catch (error) {
    console.error('❌ Error in fixRemainingErrors:', error);
  }
}

fixRemainingErrors();
