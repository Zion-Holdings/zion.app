#!/usr/bin/env node
const fs = require('fs');

function line(s) { process.stdout.write(s + '
'); }

line('Service: Price Intelligence Service');
line('Audience: ecommerce, marketplaces');
line('Category: data-scraping');
line('CTA: Book a demo');

line('
--- Outreach Templates ---');
line('
LinkedIn:');
line('Hey {{firstName}}, quick one — we ship Price Intelligence Service in ~6 days. Interested in a demo?');

line('
Email:');
line('Subject: Price Intelligence Service in 6 days');
line('Body: Hi {{firstName}}, we built Price Intelligence Service: Competitor price tracking dashboard with alerts.. Book a quick walkthrough?');

line('
Twitter/X:');
line('Price Intelligence Service drops time-to-value to days. DM for a demo.');
