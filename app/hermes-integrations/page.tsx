import React from 'react';

export const metadata = {
  title: 'Hermes Agent Integrations | 100+ Tools & Platforms | Zion Tech Group',
  description: 'Connect Hermes agents to Slack, Teams, Salesforce, HubSpot, AWS, Google, Zapier, and 100+ tools. One-click integrations with pre-built connectors.',
};

export default function HermesIntegrations() {
  const categories = [
    { name: 'CRM', tools: ['Salesforce','HubSpot','Pipedrive','Zoho','Freshsales','Copper','Insightly','Nimble','Capsule'] },
    { name: 'Messaging', tools: ['Slack','Teams','Discord','Telegram','WhatsApp','Signal','Matrix','Mattermost'] },
    { name: 'Cloud', tools: ['AWS','Azure','GCP','DigitalOcean','Cloudflare','Vercel','Netlify','Heroku'] },
    { name: 'Data', tools: ['Snowflake','BigQuery','Redshift','Databricks','PostgreSQL','MongoDB','Redis'] },
    { name: 'Marketing', tools: ['Mailchimp','SendGrid','ActiveCampaign','Klaviyo','ConvertKit','Brevo'] },
    { name: 'Finance', tools: ['Stripe','PayPal','QuickBooks','Xero','Wise','Plaid'] },
    { name: 'Project', tools: ['Jira','Asana','Trello','Monday','Linear','ClickUp','Notion'] },
    { name: 'Security', tools: ['Okta','Auth0','1Password','Cloudflare Access','Duo'] },
  ];

  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">100+ Integrations</h1>
          <p className="text-xl text-indigo-200">Connect Hermes agents to your existing stack. Pre-built connectors, one-click deploy.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((cat) => (
              <div key={cat.name} className="border border-slate-200 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{cat.name}</h3>
                <div className="space-y-2">
                  {cat.tools.map((t) => (
                    <div key={t} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="text-indigo-500">✓</span> {t}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
