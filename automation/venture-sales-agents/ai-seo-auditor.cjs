#!/usr/bin/env node
const fs = require('fs');

function line(s) { process.stdout.write(s + '
'); }

line('Service: AI SEO Auditor');
line('Audience: SMBs, agencies, founders');
line('Category: marketing-tech');
line('CTA: Book a demo');

line('
--- Outreach Templates ---');
line('
LinkedIn:');
line('Hey {{firstName}}, quick one — we ship AI SEO Auditor in ~5 days. Interested in a demo?');

line('
Email:');
line('Subject: AI SEO Auditor in 5 days');
line('Body: Hi {{firstName}}, we built AI SEO Auditor: Automated SEO audit and recommendations for Next.js websites.. Book a quick walkthrough?');

line('
Twitter/X:');
line('AI SEO Auditor drops time-to-value to days. DM for a demo.');
