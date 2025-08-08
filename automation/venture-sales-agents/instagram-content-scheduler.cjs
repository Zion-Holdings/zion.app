#!/usr/bin/env node
const fs = require('fs');

function line(s) { process.stdout.write(s + '
'); }

line('Service: Instagram Content Scheduler');
line('Audience: creators, brands, agencies');
line('Category: social-media');
line('CTA: Book a demo');

line('
--- Outreach Templates ---');
line('
LinkedIn:');
line('Hey {{firstName}}, quick one — we ship Instagram Content Scheduler in ~5 days. Interested in a demo?');

line('
Email:');
line('Subject: Instagram Content Scheduler in 5 days');
line('Body: Hi {{firstName}}, we built Instagram Content Scheduler: Auto-generate posts from blog feeds and schedule with analytics.. Book a quick walkthrough?');

line('
Twitter/X:');
line('Instagram Content Scheduler drops time-to-value to days. DM for a demo.');
