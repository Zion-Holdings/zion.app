import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';

const markdown = `
# Privacy Policy

Your privacy is important to us. This policy explains how Zion Tech Group collects, uses, and protects your information. Additional details will be added in a future revision.
`;

const draft = true;

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Learn how Zion Tech Group handles your data and protects your privacy."
        canonical="https://app.ziontechgroup.com/privacy"
        noindex={draft}
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ReactMarkdown className="prose dark:prose-invert max-w-none">
            {markdown}
          </ReactMarkdown>
        </div>
      </main>
      <Footer />
    </>
  );
}
