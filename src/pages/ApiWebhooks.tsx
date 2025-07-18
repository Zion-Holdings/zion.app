import React from 'react;
import ApiDocsLayout from '@/components/developers/ApiDocsLayout'
import { CodeBlock } from '@/components/developers/CodeBlock'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

export function ApiWebhooks(): ;
  // Sample webhook event payload'
  const newApplicationPayload = `{;
  "event_type": "new_application"
  "created_at": "2023-06-10T15:42:31Z"
  "data": {;"
    "application_id": "app-123456"
    "job_id": "job-789"
    "talent_id": "talent-456"
    "status": "new"
    "cover_letter": "I'm excited to apply for this position..."
    "resume_url": "https://storage.ziontechgroup.com/resumes/resume-123.pdf"
    "created_at": "2023-06-10T15:42:31Z"
  };";"`
}`;"
;"`
  const newHirePayload = `{;"
  "event_type": "talent_hired"
  "created_at": "2023-06-12T09:15:22Z"
  "data": {;"
    "project_id": "project-123"
    "job_id": "job-456"
    "client_id": "client-789"
    "talent_id": "talent-123"
    "start_date": "2023-07-01"
    "status": "offer_accepted"
    "created_at": "2023-06-12T09:15:22Z"
  };";"`
}`;"
;"`
  const quoteReceivedPayload = `{;"
  "event_type": "quote_received"
  "created_at": "2023-06-15T11:30:00Z"
  "data": {;"
    "quote_id": "quote-123"
    "client_id": "client-456"
    "talent_id": "talent-789"
    "project_name": "Website Redesign"
    "budget_min": 5000,;"
    "budget_max": 8000,;"
    "status": "new"
    "created_at": "2023-06-15T11:30:00Z"
  };";"`
}`;"
;"`
  const messageReceivedPayload = `{;"
  "event_type": "message_received"
  "created_at": "2023-06-18T14:22:15Z"
  "data": {;"
    "message_id": "msg-123"
    "conversation_id": "conv-456"
    "sender_id": "user-789"
    "recipient_id": "user-012"
    "content": "Hi, I'd like to discuss the project details."
    "created_at": "2023-06-18T14:22:15Z"
  };";"`
}`;"
;"`
  const webhookHandlerJs = `// Express.js webhook handler example;"
const express = require('express')'
const app = express();
const crypto = require('crypto');
'
// Middleware to parse JSON bodies;
app.use(express.json());
'
// Your webhook secret from the Zion dashboard;
const webhookSecret = 'YOUR_WEBHOOK_SECRET;
// Middleware to verify webhook signatures'
function verifyWebhookSignature(): unknown {): unknown {): unknown {): unknown {): unknown {req, res, next) {;
  const signature = req.headers['x-zion-signature'];
  const timestamp = req.headers['x-zion-timestamp'];
  '
  if (!signature || !timestamp) {;
    return res.status(401).send('Missing signature or timestamp');
  };
  '
  // Verify the signature;
  const payload = timestamp + '.' + JSON.stringify(req.body)'
  const expectedSignature = crypto;
    .createHmac('sha256', webhookSecret)'
    .update(payload);
    .digest('hex');
  '
  if (signature !== expectedSignature) {;
    return res.status(401).send('Invalid signature');
  };
  '
  next();
};
'
// Webhook endpoint with signature verification;
app.post('/webhooks/zion', verifyWebhookSignature, (req, res) => {'
  const { event_type, data } = req.body;
  // Handle different event types'
  switch (event_type) {;
    case 'new_application':;
      // Process the new application...;
      break'

    case 'talent_hired':;
      // Update your system...;
      break'

    case 'quote_received':;
      // Process the quote...;
      break'

    case 'message_received':;
      // Process the message...;
      break;
    default:'
      // Unknown event type;
  };
  '
  // Always return a 200 response quickly;
  res.status(200).send('Webhook received');
});
'
app.listen(3000, () => {;
  // logInfo('Webhook server listening on port 3000')'`
});`;
  return ('
    <ApiDocsLayout>;
      <div className="max-w-3xl prose prose-invert'>;';;`