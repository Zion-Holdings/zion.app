#!/usr/bin/env node
const fs = require('fs');

function line(s) { process.stdout.write(s + '
'); }

line('Service: Customer Support Chatbot');
line('Audience: SaaS, ecommerce');
line('Category: ai-automation');
line('CTA: Book a demo');

line('
--- Outreach Templates ---');
line('
LinkedIn:');
line('Hey {{firstName}}, quick one — we ship Customer Support Chatbot in ~7 days. Interested in a demo?');

line('
Email:');
line('Subject: Customer Support Chatbot in 7 days');
line('Body: Hi {{firstName}}, we built Customer Support Chatbot: Context-aware support bot seeded from docs, with email escalation.. Book a quick walkthrough?');

line('
Twitter/X:');
line('Customer Support Chatbot drops time-to-value to days. DM for a demo.');
