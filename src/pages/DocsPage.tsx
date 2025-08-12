import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

export interface DocsPageProps {
  /**
   * Markdown content for the currently viewed document.
   */
  content?: string; // Made content optional
}

const NAV_ITEMS = [
  { title: 'Introduction', slug: 'introduction' },
  { title: 'Architecture', slug: 'architecture' },
  { title: 'Governance', slug: 'governance' },
  { title: 'API Documentation', slug: 'api' },
  { title: 'Developer Tools', slug: 'developer-tools' },
  { title: 'Legal + Manifestos', slug: 'legal' },
];

const DocsPage: React.FC<DocsPageProps> = ({ content }) => {
  if (!content) {
    // Handle missing content, e.g. when used in src/routes/config.tsx
    return (
      <div className="flex flex-col md:flex-row">
        <aside className="md:w-64 border-r md:h-screen p-4">
          <h2 className="font-bold mb-4">Docs</h2>
          <nav>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.slug}>
                  <Link href={`/docs/${item.slug}`} className="text-blue-500 hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        <main className="prose dark:prose-invert flex-1 p-4 max-w-none">
          <p>Please select a document from the navigation.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="md:w-64 border-r md:h-screen p-4">
        <h2 className="font-bold mb-4">Docs</h2>
        <nav>
          <ul className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.slug}>
                <Link href={`/docs/${item.slug}`} className="text-blue-500 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="prose dark:prose-invert flex-1 p-4 max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </main>
    </div>
  );
};

export default DocsPage;
