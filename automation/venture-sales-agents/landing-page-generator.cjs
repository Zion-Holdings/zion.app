#!/usr/bin/env node
const fs = require('fs');

function line(s) { process.stdout.write(s + '
'); }

line('Service: Landing Page Generator');
line('Audience: startups, agencies');
line('Category: no-code');
line('CTA: Book a demo');

line('
--- Outreach Templates ---');
line('
LinkedIn:');
line('Hey {{firstName}}, quick one — we ship Landing Page Generator in ~4 days. Interested in a demo?');

line('
Email:');
line('Subject: Landing Page Generator in 4 days');
line('Body: Hi {{firstName}}, we built Landing Page Generator: Form-driven landing page generator with templates and analytics.. Book a quick walkthrough?');

line('
Twitter/X:');
line('Landing Page Generator drops time-to-value to days. DM for a demo.');
