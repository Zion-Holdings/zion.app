#!/usr/bin/env bash
set -euo pipefail
if [ ! -f "./lighthouse-report.json" ]; then
  echo "lighthouse report missing" >&2
  exit 1
fi
if ! node -e "const fs=require('fs');const path=require('path');const reportPath=path.resolve('./lighthouse-report.json');const baselinePath=path.resolve('./lighthouse-baseline.json');let report={categories:{}};if(fs.existsSync(reportPath)){try{const raw=fs.readFileSync(reportPath,'utf8');if(raw){report=JSON.parse(raw);}}catch(e){console.log('skip report parse',e.message);}}const scores=report.categories||{};const baseline={categories:{},generatedAt:new Date().toISOString()};for(const [key,value] of Object.entries(scores)){if(value && typeof value.score==='number' && Number.isFinite(value.score)){baseline.categories[key]={score:value.score,samples:1};}}fs.writeFileSync(baselinePath,JSON.stringify(baseline,null,2));console.log('updated baseline at',baselinePath);"; then
  echo 'lighthouse baseline update failed' >&2
  exit 1
fi
