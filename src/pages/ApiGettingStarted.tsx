import React from 'react';
import ApiDocsLayout from '@/components/developers/ApiDocsLayout';
import { CodeBlock } from '@/components/developers/CodeBlock';
import Link from 'next/link';
import { logInfo } from '@/utils/productionLogger';

export function ApiGettingStarted() {

  const authExample = `curl -X GET \\
  https://api.ziontechgroup.com/v1/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

  const quickStartJs = `import axios from 'axios';

const response = await axios.get('https://api.ziontechgroup.com/v1/jobs', {
  headers: {
    Authorization: \`Bearer \${API_KEY}\`
  }
});

logInfo(response.data);`;

  return (
    <ApiDocsLayout>
      <div className="max-w-3xl prose prose-invert">
        <h1>Getting Started</h1>

        <h2>Overview</h2>
        <p>
          The Zion AI Marketplace API provides programmatic access to jobs,
          talent profiles, quotes, and projects. Our RESTful API lets you
          integrate Zion's features into your own applications and workflows.
        </p>

        <h2>Authentication</h2>
        <p>
          All API requests must include your API key in the Authorization
          header. You can generate API keys in the{' '}
          <Link href="/developers/portal" className="text-zion-cyan">
            Developer Portal
          </Link>
          .
        </p>

        <CodeBlock code={authExample} language="bash" showLineNumbers={false} />

        <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-md p-4 my-6">
          <h3 className="text-yellow-500 text-sm font-medium mt-0">
            Important
          </h3>
          <p className="text-sm text-yellow-300/90 mb-0">
            Keep your API keys secure! Never expose them in client-side code or
            public repositories.
          </p>
        </div>

        <h2>Base URL</h2>
        <p>All API requests should be made to the following base URL:</p>
        <div className="bg-zinc-900 p-4 rounded-md">
          <code className="text-zion-cyan break-words">
            https://api.ziontechgroup.com/v1
          </code>
        </div>

        <h2>Content Type</h2>
        <p>
          All requests must use <code>application/json</code> content type. Set
          the
          <code>Content-Type</code> header accordingly.
        </p>

        <h2>Quick Start</h2>
        <p>Here's a simple example of fetching jobs using JavaScript:</p>

        <CodeBlock
          code={quickStartJs}
          language="javascript"
          showLineNumbers={true}
        />

        <h2>Available APIs</h2>
        <ul>
          <li>
            <strong>Jobs API</strong> - Post and retrieve job listings
          </li>
          <li>
            <strong>Talent API</strong> - Search and retrieve talent profiles
          </li>
          <li>
            <strong>Quotes API</strong> - Create and manage quote requests
          </li>
          <li>
            <strong>Projects API</strong> - Manage projects and milestones
          </li>
          <li>
            <strong>Webhooks API</strong> - Set up event notifications
          </li>
        </ul>

        <h2>Postman Collection</h2>
        <p>
          Download our Postman collection to quickly test all available
          endpoints:
        </p>
        <div className="mt-4">
          <a
            href="/postman-collection.json"
            className="inline-flex items-center px-4 py-2 rounded-md bg-zion-purple text-white hover:bg-zion-purple/90 transition-colors"
          >
            Download Postman Collection
          </a>
        </div>
      </div>
    </ApiDocsLayout>
  );
}

export default ApiGettingStarted;
