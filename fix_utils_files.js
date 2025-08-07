import fs from 'fs';
import { glob } from 'glob';

function fixUtilsFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix common patterns in utils files
    content = content.replace(/export,\s*interface,\s*([^{]+)\s*{;/g, 'export interface $1 {');
    content = content.replace(/export,\s*const\s+([^=]+)\s*=\s*([^;]+);/g, 'export const $1 = $2;');
    content = content.replace(/import\s+React\s+from\s*'rea\s*c\s*t';;'/g, "import React from 'react';");
    content = content.replace(/const\s+([^=]+)\s*=\s*([^;]+);/g, 'const $1 = $2;');
    content = content.replace(/retu,\s*r,\s*n\s+([^;]+);/g, 'return $1;');
    content = content.replace(/if\s*\(!\s*([^)]+)\s*\)\s*retu,\s*r,\s*n\s*([^;]+);/g, 'if (!$1) return $2;');
    
    // Fix string literals
    content = content.replace(/'([^']+),\s*([^']+)'/g, "'$1 $2'");
    content = content.replace(/"([^"]+),\s*([^"]+)"/g, '"$1 $2"');
    
    // Fix variable names
    content = content.replace(/ht,\s*m,\s*l/g, 'html');
    content = content.replace(/sanitiz,\s*e,\s*d/g, 'sanitized');
    content = content.replace(/repla,\s*c,\s*e/g, 'replace');
    content = content.replace(/windo,\s*w/g, 'window');
    content = content.replace(/undefin,\s*e,\s*d/g, 'undefined');
    content = content.replace(/innerWid,\s*t,\s*h/g, 'innerWidth');
    content = content.replace(/innerHeig,\s*h,\s*t/g, 'innerHeight');
    content = content.replace(/dispatchEve,\s*n,\s*t/g, 'dispatchEvent');
    content = content.replace(/resi,\s*z,\s*e/g, 'resize');
    content = content.replace(/cli,\s*c,\s*k/g, 'click');
    content = content.replace(/ty,\s*p,\s*e/g, 'type');
    content = content.replace(/hov,\s*e,\s*r/g, 'hover');
    content = content.replace(/eleme,\s*n,\s*t/g, 'element');
    content = content.replace(/acti,\s*o,\s*n/g, 'action');
    content = content.replace(/HTMLEleme,\s*n,\s*t/g, 'HTMLElement');
    content = content.replace(/ca,\s*s,\s*e/g, 'case');
    content = content.replace(/Obje,\s*c,\s*t/g, 'Object');
    content = content.replace(/defineProper,\s*t,\s*y/g, 'defineProperty');
    content = content.replace(/Even,\s*t/g, 'Event');
    
    // Fix type annotations
    content = content.replace(/stri,\s*n,\s*g/g, 'string');
    content = content.replace(/numb,\s*e,\s*r/g, 'number');
    content = content.replace(/a,\s*n,\s*y/g, 'any');
    content = content.replace(/pendi,\s*n,\s*g/g, 'pending');
    content = content.replace(/approv,\s*e,\s*d/g, 'approved');
    content = content.replace(/reject,\s*e,\s*d/g, 'rejected');
    content = content.replace(/complet,\s*e,\s*d/g, 'completed');
    content = content.replace(/isExtensi,\s*o,\s*n/g, 'isExtension');
    content = content.replace(/versi,\s*o,\s*n/g, 'version');
    content = content.replace(/sendMessa,\s*g,\s*e/g, 'sendMessage');
    content = content.replace(/receiveMessa,\s*g,\s*e/g, 'receiveMessage');
    content = content.replace(/callba,\s*c,\s*k/g, 'callback');
    content = content.replace(/messa,\s*g,\s*e/g, 'message');
    content = content.replace(/clo,\s*u,\s*d-servic,\s*e,\s*s/g, 'cloud-services');
    content = content.replace(/na,\s*m,\s*e/g, 'name');
    content = content.replace(/ai-servic,\s*e,\s*s/g, 'ai-services');
    content = content.replace(/tit,\s*l,\s*e/g, 'title');
    content = content.replace(/descripti,\s*o,\s*n/g, 'description');
    content = content.replace(/provid,\s*e,\s*r/g, 'provider');
    content = content.replace(/avat,\s*a,\s*r/g, 'avatar');
    content = content.replace(/rati,\s*n,\s*g/g, 'rating');
    content = content.replace(/prici,\s*n,\s*g/g, 'pricing');
    content = content.replace(/fr,\s*o,\s*m/g, 'from');
    content = content.replace(/curren,\s*c,\s*y/g, 'currency');
    content = content.replace(/hour,\s*l,\s*y/g, 'hourly');
    content = content.replace(/fix,\s*e,\s*d/g, 'fixed');
    content = content.replace(/month,\s*l,\s*y/g, 'monthly');
    content = content.replace(/service,\s*I,\s*d/g, 'serviceId');
    content = content.replace(/client,\s*I,\s*d/g, 'clientId');
    content = content.replace(/budg,\s*e,\s*t/g, 'budget');
    content = content.replace(/timeli,\s*n,\s*e/g, 'timeline');
    content = content.replace(/stat,\s*u,\s*s/g, 'status');
    content = content.replace(/createMiddlewareClie,\s*n,\s*t/g, 'createMiddlewareClient');
    content = content.replace(/getSessi,\s*o,\s*n/g, 'getSession');
    content = content.replace(/createServerClient/g, 'createServerClient');
    content = content.replace(/getUs,\s*e,\s*r/g, 'getUser');
    content = content.replace(/supabaseUr,\s*l/g, 'supabaseUrl');
    content = content.replace(/proce,\s*s,\s*s/g, 'process');
    content = content.replace(/e,\s*n,\s*v/g, 'env');
    content = content.replace(/NEXT_PUBLIC_SUPABASE_U,\s*R,\s*L/g, 'NEXT_PUBLIC_SUPABASE_URL');
    content = content.replace(/htt,\s*p,\s*s:\/\/placehold,\s*e,\s*r.supaba,\s*s,\s*e.co'/g, "'https://placeholder.supabase.co'");
    content = content.replace(/supabaseAnonKe,\s*y/g, 'supabaseAnonKey');
    content = content.replace(/NEXT_PUBLIC_SUPABASE_ANON_K,\s*E,\s*Y/g, 'NEXT_PUBLIC_SUPABASE_ANON_KEY');
    content = content.replace(/placehold,\s*e,\s*r-k,\s*e,\s*y'/g, "'placeholder-key'");
    content = content.replace(/supabaseMiddleware/g, 'supabaseMiddleware');
    content = content.replace(/au,\s*t,\s*h/g, 'auth');
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

async function fixAllUtilsFiles() {
  const files = await glob('utils/**/*.{ts,tsx}', {
    ignore: ['node_modules/**', '.next/**']
  });
  
  let fixedCount = 0;
  for (const file of files) {
    if (fixUtilsFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} utils files.`);
}

fixAllUtilsFiles();
