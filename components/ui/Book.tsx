import Head from 'next/head';
import React from 'react';

export type Quote = { text: string; attribution?: string };
export type TimelineItem = { date: string; title: string; description?: string };
export type Metric = { label: string; value: string };

export type BookProps = {
  title: string;
  subtitle?: string;
  quote: Quote;
  chapters: Array<{ id: string; title: string; content: React.ReactNode }>;
  timeline?: TimelineItem[];
  metrics?: Metric[];
};

export default function Book({ title, subtitle, quote, chapters, timeline = [], metrics = [] }: BookProps) {
  return (
    <div className="book-serif">
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} – ${subtitle || ''}`} />
      </Head>

      {/* Title Page */}
      <section className="min-h-screen flex flex-col items-center justify-center print-fullpage">
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white text-center mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 text-center mb-8">
            {subtitle}
          </p>
        )}
        <blockquote className="print-quote max-w-3xl text-center text-2xl md:text-3xl text-gray-700 dark:text-gray-200">
          “{quote.text}”{quote.attribution ? <span className="block mt-4 text-base text-gray-500">— {quote.attribution}</span> : null}
        </blockquote>
      </section>

      {/* Optional Auto Timeline */}
      {timeline.length > 0 && (
        <section className="container mx-auto px-6 md:px-10 py-16 print-fullpage">
          <h2 className="print-chapter-title mb-8">Design Timeline</h2>
          <div className="relative border-l-2 border-gray-300 pl-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="mb-8 print-avoid-break">
                <div className="text-sm text-gray-500">{item.date}</div>
                <div className="text-2xl font-semibold">{item.title}</div>
                {item.description && <p className="text-gray-700 mt-2">{item.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Chapters */}
      {chapters.map((chapter) => (
        <section key={chapter.id} className="container mx-auto px-6 md:px-10 py-16 print-fullpage">
          <h2 className="print-chapter-title">{chapter.title}</h2>
          <div className="prose prose-lg max-w-none dark:prose-invert print-avoid-break">
            {chapter.content}
          </div>
        </section>
      ))}

      {/* Metrics */}
      {metrics.length > 0 && (
        <section className="container mx-auto px-6 md:px-10 py-16 print-fullpage">
          <h2 className="print-chapter-title mb-6">Global Footprint Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((m, i) => (
              <div key={i} className="p-6 border rounded-lg print-avoid-break">
                <div className="text-sm text-gray-500">{m.label}</div>
                <div className="text-3xl font-bold">{m.value}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Print Controls (hidden in print) */}
      <div className="fixed bottom-4 right-4 flex gap-3 no-print">
        <button className="btn btn-primary" onClick={() => window.print()}>Print to PDF</button>
        <a className="btn btn-secondary" href="/api/book/export-epub">Download EPUB</a>
      </div>
    </div>
  );
}