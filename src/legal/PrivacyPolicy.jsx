import React from 'react';
import ReactMarkdown from 'react-markdown';
import { SEO } from '@/components/SEO';

const markdown = `
# Privacy Policy

We value your privacy. This policy explains what data we collect when you use Zion Tech Group's services and how we use it.

## Data We Collect
- Contact details you provide, such as name and email.
- Usage information from your interactions with our services.
- Cookies and similar technologies.

## How We Use Data
We use the information to operate the marketplace, communicate with you, and improve our services. We do not sell your personal data.

## Information Sharing
We share data with service providers that help us operate the platform and may disclose information if required by law.

## Your Rights
You can request access to or deletion of your personal data by contacting us.

## Contact
Questions about this policy can be sent to [privacy@ziontechgroup.com](mailto:privacy@ziontechgroup.com).
`;

const draft = false;

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Zion Tech Group handles your data and protects your privacy."
        canonical="https://app.ziontechgroup.com/privacy"
        noindex={draft}
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ReactMarkdown className="prose dark:prose-invert max-w-none">
            {markdown}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
}
