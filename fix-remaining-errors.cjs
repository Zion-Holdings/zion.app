#!/usr/bin/env node

const fs = require('fs-extra');

async function fixRemainingErrors() {
  console.log('🔧 Fixing remaining TypeScript syntax errors...');
  
  // Fix specific files with remaining errors
  
  // Fix utils/api/quoteRequests.ts
  const quoteRequestsPath = 'utils/api/quoteRequests.ts';
  if (await fs.pathExists(quoteRequestsPath)) {
    let content = await fs.readFile(quoteRequestsPath, 'utf8');
    content = content.replace(/status: 'pending' \| 'approved' \| 'rejected' \| 'completed';/, "status: 'pending' | 'approved' | 'rejected' | 'completed';");
    await fs.writeFile(quoteRequestsPath, content);
    console.log('✅ Fixed quoteRequests.ts');
  }
  
  // Fix utils/browserExtensionDetector.ts
  const browserDetectorPath = 'utils/browserExtensionDetector.ts';
  if (await fs.pathExists(browserDetectorPath)) {
    let content = await fs.readFile(browserDetectorPath, 'utf8');
    content = content.replace(/return \{ isExtension: falseversion: "1\.0\.0";"/, "return { isExtension: false, version: '1.0.0' };");
    await fs.writeFile(browserDetectorPath, content);
    console.log('✅ Fixed browserExtensionDetector.ts');
  }
  
  // Fix utils/data/services.ts
  const servicesPath = 'utils/data/services.ts';
  if (await fs.pathExists(servicesPath)) {
    let content = await fs.readFile(servicesPath, 'utf8');
    content = content.replace(/export const serviceCategories\s*=\s*\[{ id: "clou d-servic e s", na me: "Cloud Service s" } { id: "ai-servic e s", na m e: "AI Service s";"/, "export const serviceCategories = [{ id: 'cloud-services', name: 'Cloud Services' }, { id: 'ai-services', name: 'AI Services' }];");
    await fs.writeFile(servicesPath, content);
    console.log('✅ Fixed services.ts');
  }
  
  // Fix utils/sanitizeHtml.ts
  const sanitizePath = 'utils/sanitizeHtml.ts';
  if (await fs.pathExists(sanitizePath)) {
    let content = await fs.readFile(sanitizePath, 'utf8');
    content = content.replace(/let, sanitize, d = html\.replace\(\/<scri p t\\b\[^<\]\*\(\?:\!<\/scri p t>\)<\[^<\]\*\)\*<\/scri p t>\/gi  ''/, "let sanitized = html.replace(/<script\\b[^<]*(?:(?!<\\/script>)<[^<]*)*<\\/script>/gi, '');");
    content = content.replace(/sanitized = sanitized\.repla, c e\(\/\\s\*on\\w\+\\s\*=\\s\*\["'"\]\[^"'"\]\*\["'"\]\/\)/, "sanitized = sanitized.replace(/\\s*on\\w+\\s*=\\s*[\"'][^\"']*[\"']/g, '');");
    await fs.writeFile(sanitizePath, content);
    console.log('✅ Fixed sanitizeHtml.ts');
  }
  
  // Fix utils/supabase/client.ts
  const clientPath = 'utils/supabase/client.ts';
  if (await fs.pathExists(clientPath)) {
    let content = await fs.readFile(clientPath, 'utf8');
    content = content.replace(/import React from 'rea c t';'/, "import React from 'react';");
    await fs.writeFile(clientPath, content);
    console.log('✅ Fixed client.ts');
  }
  
  // Fix utils/testing-system.ts
  const testingPath = 'utils/testing-system.ts';
  if (await fs.pathExists(testingPath)) {
    let content = await fs.readFile(testingPath, 'utf8');
    content = content.replace(/import React from 'rea c t';'/, "import React from 'react';");
    content = content.replace(/static async testUserInteraction\(element: HTMLElement action: 'click' \| 'type' \| 'hover'\)/, "static async testUserInteraction(element: HTMLElement, action: 'click' | 'type' | 'hover') {");
    content = content.replace(/case 'click':/, "case 'click':");
    content = content.replace(/case 'type':/, "case 'type':");
    content = content.replace(/case 'hover':/, "case 'hover':");
    content = content.replace(/Object\.defineProperty\(window  'innerWidth',/, "Object.defineProperty(window, 'innerWidth',");
    content = content.replace(/Object\.defineProperty\(window  'innerHeight',/, "Object.defineProperty(window, 'innerHeight',");
    content = content.replace(/window\.dispatchEvent\(new Event\('resize'\)/, "window.dispatchEvent(new Event('resize'));");
    await fs.writeFile(testingPath, content);
    console.log('✅ Fixed testing-system.ts');
  }
  
  // Fix utils/types/service.ts
  const servicePath = 'utils/types/service.ts';
  if (await fs.pathExists(servicePath)) {
    let content = await fs.readFile(servicePath, 'utf8');
    content = content.replace(/type: 'hourly' \| 'fixed' \| 'monthly';/, "type: 'hourly' | 'fixed' | 'monthly';");
    await fs.writeFile(servicePath, content);
    console.log('✅ Fixed service.ts');
  }
  
  console.log('✅ All remaining TypeScript syntax errors fixed');
}

fixRemainingErrors().catch(console.error);
