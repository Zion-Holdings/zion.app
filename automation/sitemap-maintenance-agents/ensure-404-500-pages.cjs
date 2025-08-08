#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
function ensurePage(name){ const p = path.join(process.cwd(), 'pages', name + '.tsx'); if (!fs.existsSync(p)) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, 'export default function '+name.replace(/\W/g,'_')+'(){return (<div>'+name+' page</div>)}\n'); console.log('Created', p); } else { console.log('Exists', p); } }
ensurePage('404');
ensurePage('500');

