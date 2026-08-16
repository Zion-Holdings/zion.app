#!/usr/bin/env node
/**
 * openclaw-runtime-apply.cjs — Apply Openclaw runtime configuration
 * Reads the Openclaw skill auto-tuner output and applies runtime changes
 * (frequency, maxParallel) to the PM2 ecosystem config.
 */
const fs = require('fs');
const path = require('path');

const reportsDir = path.join(process.cwd(), 'automation', 'reports');
const ecosystemPath = path.join(process.cwd(), 'ecosystem.config.cjs');
const outputPath = path.join(reportsDir, 'openclaw-runtime-applier-latest.json');

function main() {
  fs.mkdirSync(reportsDir, { recursive: true });
  
  const tunerReport = path.join(reportsDir, 'openclaw-skill-auto-tuner-latest.json');
  let before = {};
  let after = {};
  let status = 'no-change';
  
  // Read current ecosystem config
  if (fs.existsSync(ecosystemPath)) {
    try {
      const content = fs.readFileSync(ecosystemPath, 'utf8');
      const freqMatch = content.match(/frequencySeconds\s*[:=]\s*(\d+)/);
      const parallelMatch = content.match(/maxParallel\s*[:=]\s*(\d+)/);
      if (freqMatch) before.frequencySeconds = parseInt(freqMatch[1]);
      if (parallelMatch) before.maxParallel = parseInt(parallelMatch[1]);
    } catch(e) {
      console.error('Could not read ecosystem config:', e.message);
    }
  }
  
  let message = 'No tuning recommendation found; runtime unchanged.';
  
  if (fs.existsSync(tunerReport)) {
    try {
      const tuner = JSON.parse(fs.readFileSync(tunerReport, 'utf8'));
      if (tuner.recommendation) {
        const rec = tuner.recommendation;
        let needsChange = false;
        if (rec.frequencySeconds && rec.frequencySeconds != before.frequencySeconds) needsChange = true;
        if (rec.maxParallel && rec.maxParallel != before.maxParallel) needsChange = true;
        
        if (needsChange && fs.existsSync(ecosystemPath)) {
          let cfg = fs.readFileSync(ecosystemPath, 'utf8');
          if (rec.frequencySeconds) {
            cfg = cfg.replace(/frequencySeconds\s*[:=]\s*\d+/g, `frequencySeconds: ${rec.frequencySeconds}`);
          }
          if (rec.maxParallel) {
            cfg = cfg.replace(/maxParallel\s*[:=]\s*\d+/g, `maxParallel: ${rec.maxParallel}`);
          }
          fs.writeFileSync(ecosystemPath, cfg);
          status = 'applied';
          after = { ...before, frequencySeconds: rec.frequencySeconds, maxParallel: rec.maxParallel };
          message = `Applied runtime changes: ${JSON.stringify(rec)}`;
        } else {
          after = before;
          message = `No runtime changes needed. Current config is optimal.`;
        }
      }
    } catch(e) {
      message = `Error reading tuner report: ${e.message}`;
    }
  }
  
  const report = {
    status,
    mode: 'auto',
    before,
    after,
    message,
    timestamp: new Date().toISOString(),
    report: message,
  };
  
  fs.writeFileSync(outputPath, JSON.stringify(report, null, 2));
  console.log(`openclaw:runtime:apply → ${status}`);
  console.log(message);
}

try { main(); } catch(e) {
  console.error('openclaw-runtime-apply error:', e.message);
  process.exit(0);
}
