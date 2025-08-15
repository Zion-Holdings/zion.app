#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

// Test the timeout fixing logic on a single workflow
const workflowPath = path.resolve(__dirname, "../.github/workflows/agent-of-agents-trigger.yml");
const content = fs.readFileSync(workflowPath, 'utf8');

console.log("🔍 Testing timeout fix logic on agent-of-agents-trigger.yml");
console.log("Content length:", content.length);
console.log("Lines:", content.split('\n').length);

const lines = content.split('\n');
let inJobsSection = false;

console.log("\n📋 Parsing workflow structure:");

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();
  
  if (trimmed === 'jobs:') {
    console.log(`Line ${i + 1}: ${trimmed} ← ENTERING JOBS SECTION`);
    inJobsSection = true;
    continue;
  }
  
  if (inJobsSection && trimmed.match(/^[a-zA-Z_][a-zA-Z0-9_-]*:$/)) {
    console.log(`Line ${i + 1}: ${trimmed} ← JOB DEFINITION`);
    
    // Look for runs-on
    let j = i + 1;
    while (j < lines.length && lines[j].trim() === '') j++;
    
    if (j < lines.length && lines[j].includes('runs-on:')) {
      console.log(`Line ${j + 1}: ${lines[j].trim()} ← RUNS-ON FOUND`);
      console.log(`Would insert timeout after this line`);
    }
  }
}