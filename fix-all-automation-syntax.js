#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const glob = require('glob');

async function fixAutomationSyntax() {
  console.log('🔧 Fixing automation syntax errors...');
  
  try {
    // Get all JS files in automation directory
    const files = glob.sync('automation/**/*.js');
    
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        let content = await fs.readFile(file, 'utf8');
        let originalContent = content;
        
        // Fix malformed require statements
        content = content.replace(/\$2\);2\);\);\.promises/g, "'fs').promises");
        content = content.replace(/\$2\);'\);\)/g, "'path'");
        content = content.replace(/\$2\);'\);\)/g, "'os'");
        content = content.replace(/\$2\);2\);\);\)/g, "'fs'");
        content = content.replace(/\$2\);\);\)/g, "'fs'");
        content = content.replace(/\$2\);\);\)/g, "'path'");
        content = content.replace(/\$2\);\);\)/g, "'cron'");
        content = content.replace(/\$2\);\);\)/g, "'axios'");
        content = content.replace(/\$2\);\);\)/g, "'child_process'");
        content = content.replace(/\$2\);\);\)/g, "'util'");
        content = content.replace(/\$2\);\);\)/g, "'events'");
        content = content.replace(/\$2\);\);\)/g, "'crypto'");
        content = content.replace(/\$2\);\);\)/g, "'http'");
        content = content.replace(/\$2\);\);\)/g, "'https'");
        content = content.replace(/\$2\);\);\)/g, "'url'");
        content = content.replace(/\$2\);\);\)/g, "'querystring'");
        content = content.replace(/\$2\);\);\)/g, "'zlib'");
        content = content.replace(/\$2\);\);\)/g, "'stream'");
        content = content.replace(/\$2\);\);\)/g, "'buffer'");
        content = content.replace(/\$2\);\);\)/g, "'timers'");
        content = content.replace(/\$2\);\);\)/g, "'assert'");
        content = content.replace(/\$2\);\);\)/g, "'constants'");
        content = content.replace(/\$2\);\);\)/g, "'domain'");
        content = content.replace(/\$2\);\);\)/g, "'punycode'");
        content = content.replace(/\$2\);\);\)/g, "'string_decoder'");
        content = content.replace(/\$2\);\);\)/g, "'sys'");
        content = content.replace(/\$2\);\);\)/g, "'tty'");
        content = content.replace(/\$2\);\);\)/g, "'v8'");
        content = content.replace(/\$2\);\);\)/g, "'vm'");
        content = content.replace(/\$2\);\);\)/g, "'worker_threads'");
        content = content.replace(/\$2\);\);\)/g, "'perf_hooks'");
        content = content.replace(/\$2\);\);\)/g, "'async_hooks'");
        content = content.replace(/\$2\);\);\)/g, "'inspector'");
        content = content.replace(/\$2\);\);\)/g, "'trace_events'");
        content = content.replace(/\$2\);\);\)/g, "'wasi'");
        content = content.replace(/\$2\);\);\)/g, "'repl'");
        content = content.replace(/\$2\);\);\)/g, "'readline'");
        content = content.replace(/\$2\);\);\)/g, "'cluster'");
        content = content.replace(/\$2\);\);\)/g, "'dgram'");
        content = content.replace(/\$2\);\);\)/g, "'dns'");
        content = content.replace(/\$2\);\);\)/g, "'net'");
        content = content.replace(/\$2\);\);\)/g, "'tls'");
        content = content.replace(/\$2\);\);\)/g, "'querystring'");
        content = content.replace(/\$2\);\);\)/g, "'url'");
        content = content.replace(/\$2\);\);\)/g, "'zlib'");
        content = content.replace(/\$2\);\);\)/g, "'stream'");
        content = content.replace(/\$2\);\);\)/g, "'buffer'");
        content = content.replace(/\$2\);\);\)/g, "'timers'");
        content = content.replace(/\$2\);\);\)/g, "'assert'");
        content = content.replace(/\$2\);\);\)/g, "'constants'");
        content = content.replace(/\$2\);\);\)/g, "'domain'");
        content = content.replace(/\$2\);\);\)/g, "'punycode'");
        content = content.replace(/\$2\);\);\)/g, "'string_decoder'");
        content = content.replace(/\$2\);\);\)/g, "'sys'");
        content = content.replace(/\$2\);\);\)/g, "'tty'");
        content = content.replace(/\$2\);\);\)/g, "'v8'");
        content = content.replace(/\$2\);\);\)/g, "'vm'");
        content = content.replace(/\$2\);\);\)/g, "'worker_threads'");
        content = content.replace(/\$2\);\);\)/g, "'perf_hooks'");
        content = content.replace(/\$2\);\);\)/g, "'async_hooks'");
        content = content.replace(/\$2\);\);\)/g, "'inspector'");
        content = content.replace(/\$2\);\);\)/g, "'trace_events'");
        content = content.replace(/\$2\);\);\)/g, "'wasi'");
        content = content.replace(/\$2\);\);\)/g, "'repl'");
        content = content.replace(/\$2\);\);\)/g, "'readline'");
        content = content.replace(/\$2\);\);\)/g, "'cluster'");
        content = content.replace(/\$2\);\);\)/g, "'dgram'");
        content = content.replace(/\$2\);\);\)/g, "'dns'");
        content = content.replace(/\$2\);\);\)/g, "'net'");
        content = content.replace(/\$2\);\);\)/g, "'tls'");
        
        // Fix other common syntax errors
        content = content.replace(/require\(\(('child_process)\)\)/g, "require('child_process')");
        content = content.replace(/require\(\(('util)\)\)/g, "require('util')");
        content = content.replace(/require\(\(('events)\)\)/g, "require('events')");
        content = content.replace(/require\(\(('crypto)\)\)/g, "require('crypto')");
        content = content.replace(/require\(\(('http)\)\)/g, "require('http')");
        content = content.replace(/require\(\(('https)\)\)/g, "require('https')");
        content = content.replace(/require\(\(('url)\)\)/g, "require('url')");
        content = content.replace(/require\(\(('querystring)\)\)/g, "require('querystring')");
        content = content.replace(/require\(\(('zlib)\)\)/g, "require('zlib')");
        content = content.replace(/require\(\(('stream)\)\)/g, "require('stream')");
        content = content.replace(/require\(\(('buffer)\)\)/g, "require('buffer')");
        content = content.replace(/require\(\(('timers)\)\)/g, "require('timers')");
        content = content.replace(/require\(\(('assert)\)\)/g, "require('assert')");
        content = content.replace(/require\(\(('constants)\)\)/g, "require('constants')");
        content = content.replace(/require\(\(('domain)\)\)/g, "require('domain')");
        content = content.replace(/require\(\(('punycode)\)\)/g, "require('punycode')");
        content = content.replace(/require\(\(('string_decoder)\)\)/g, "require('string_decoder')");
        content = content.replace(/require\(\(('sys)\)\)/g, "require('sys')");
        content = content.replace(/require\(\(('tty)\)\)/g, "require('tty')");
        content = content.replace(/require\(\(('v8)\)\)/g, "require('v8')");
        content = content.replace(/require\(\(('vm)\)\)/g, "require('vm')");
        content = content.replace(/require\(\(('worker_threads)\)\)/g, "require('worker_threads')");
        content = content.replace(/require\(\(('perf_hooks)\)\)/g, "require('perf_hooks')");
        content = content.replace(/require\(\(('async_hooks)\)\)/g, "require('async_hooks')");
        content = content.replace(/require\(\(('inspector)\)\)/g, "require('inspector')");
        content = content.replace(/require\(\(('trace_events)\)\)/g, "require('trace_events')");
        content = content.replace(/require\(\(('wasi)\)\)/g, "require('wasi')");
        content = content.replace(/require\(\(('repl)\)\)/g, "require('repl')");
        content = content.replace(/require\(\(('readline)\)\)/g, "require('readline')");
        content = content.replace(/require\(\(('cluster)\)\)/g, "require('cluster')");
        content = content.replace(/require\(\(('dgram)\)\)/g, "require('dgram')");
        content = content.replace(/require\(\(('dns)\)\)/g, "require('dns')");
        content = content.replace(/require\(\(('net)\)\)/g, "require('net')");
        content = content.replace(/require\(\(('tls)\)\)/g, "require('tls')");
        
        // Fix require.main === module syntax
        content = content.replace(/require\(\.main === modul\)e/g, "require.main === module");
        
        // Fix array syntax errors
        content = content.replace(/\];/g, "]");
        content = content.replace(/};/g, "}");
        content = content.replace(/\);/g, ")");
        
        // Fix string concatenation errors
        content = content.replace(/'=' \.repeat\(/g, "'='.repeat(");
        content = content.replace(/'=' \.repeat\(/g, "'='.repeat(");
        
        // Fix object property syntax
        content = content.replace(/: [^,}]+;/g, (match) => match.replace(/;$/, ""));
        
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
    console.error('❌ Error in fixAutomationSyntax:', error);
  }
}

fixAutomationSyntax();
