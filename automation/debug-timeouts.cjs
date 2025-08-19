#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

// Simple debug script to check workflow timeouts
const workflowsDir = path.resolve(__dirname, "../.github/workflows");

console.log("🔍 Debugging workflow timeouts...");

const workflows = fs.readdirSync(workflowsDir)
  .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));

console.log(`📋 Found ${workflows.length} workflows`);

let withTimeouts = 0;
let withoutTimeouts = 0;
const missingTimeouts = [];

for (const workflow of workflows) {
  const content = fs.readFileSync(path.join(workflowsDir, workflow), 'utf8');
  
  if (content.includes('timeout-minutes:')) {
    withTimeouts++;
  } else {
    withoutTimeouts++;
    missingTimeouts.push(workflow);
  }
}

console.log(`\n📊 Results:`);
console.log(`✅ With timeouts: ${withTimeouts}`);
console.log(`❌ Without timeouts: ${withoutTimeouts}`);

if (missingTimeouts.length > 0) {
  console.log(`\n🔴 Workflows missing timeouts:`);
  missingTimeouts.forEach(w => console.log(`  • ${w}`));
}