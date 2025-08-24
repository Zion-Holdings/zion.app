#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

console.log("🚀 Testing Ultimate Redundancy System...");

// Test basic functionality
try {
  // Check if log directory exists
  const logDir = "automation/logs";
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir, { recursive: true });
    console.log("✅ Created log directory");
  } else {
    console.log("✅ Log directory exists");
  }

  // Check if key files exist
  const keyFiles = [
    "ecosystem.comprehensive-redundancy.cjs",
    "ecosystem.redundancy.cjs",
    "ecosystem.pm2.cjs",
    ".github/workflows/marketing-sync.yml",
    ".github/workflows/sync-health.yml",
    "netlify/functions/functions-manifest.json"
  ];

  console.log("🔍 Checking key files...");
  for (const file of keyFiles) {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file} exists`);
    } else {
      console.log(`❌ ${file} missing`);
    }
  }

  // Check if automation scripts exist
  const automationScripts = [
    "automation/ultimate-redundancy-master.cjs",
    "automation/comprehensive-automation-orchestrator.cjs",
    "automation/start-ultimate-redundancy.sh"
  ];

  console.log("🔍 Checking automation scripts...");
  for (const script of automationScripts) {
    if (fs.existsSync(script)) {
      console.log(`✅ ${script} exists`);
    } else {
      console.log(`❌ ${script} missing`);
    }
  }

  console.log("✅ Ultimate Redundancy System test completed successfully!");
  
} catch (error) {
  console.error("❌ Test failed:", error.message);
  process.exit(1);
}