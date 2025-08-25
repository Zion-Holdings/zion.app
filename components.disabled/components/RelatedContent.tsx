import React from 'react';
import Link from 'next/link';

interface RelatedContentItem {
  title: string;
  description: string;
  href: string;
  category: string;
  icon?: string;
}

interface RelatedContentProps {
  currentPage: string;
  items?: RelatedContentItem[];
}

export default function RelatedContent({ currentPage, items }: RelatedContentProps) {
  // Default related content based on current page
  const getDefaultRelatedContent = (page: string): RelatedContentItem[] => {
    const defaults: Record<string, RelatedContentItem[]> = {
      'home': [
        { title: 'Automation Hub', description: 'Explore our autonomous systems', href: '/automation', category: 'Automation' },
        { title: 'Component Library', description: 'Browse our UI components', href: '/components', category: 'Components' },
        { title: 'Reports & Content', description: 'Discover our content library', href: '/reports', category: 'Content' },
        { title: 'Site Health', description: 'Check site performance', href: '/site-health', category: 'Health' }
      ],
      'automation': [
        { title: 'Site Health', description: 'Monitor site performance', href: '/site-health', category: 'Health' },
        { title: 'Component Library', description: 'Browse UI components', href: '/components', category: 'Components' },
        { title: 'Explore Features', description: 'Discover all capabilities', href: '/explore', category: 'Features' },
        { title: 'Newsroom', description: 'Latest updates', href: '/newsroom', category: 'Updates' }
      ],
      'reports': [
        { title: 'AI Trends', description: 'Latest AI insights', href: '/reports/ai-trends', category: 'AI' },
        { title: 'Innovations', description: 'Cutting-edge research', href: '/reports/innovations', category: 'Research' },
        { title: 'Tutorials', description: 'Step-by-step guides', href: '/reports/tutorials', category: 'Guides' },
        { title: 'Automation Hub', description: 'See automations in action', href: '/automation', category: 'Automation' }
      ],
      'components': [
        { title: 'Component Library', description: 'Browse all components', href: '/components', category: 'Components' },
        { title: 'Playground', description: 'Test components live', href: '/playground', category: 'Testing' },
        { title: 'Reports', description: 'Technical documentation', href: '/reports', category: 'Docs' },
        { title: 'Explore', description: 'Discover features', href: '/explore', category: 'Features' }
      ],
      'explore': [
        { title: 'Automation Hub', description: 'Live autonomous systems', href: '/automation', category: 'Automation' },
        { title: 'Component Library', description: 'UI components', href: '/components', category: 'Components' },
        { title: 'Reports Index', description: 'Content library', href: '/reports', category: 'Content' },
        { title: 'Site Health', description: 'Performance metrics', href: '/site-health', category: 'Health' }
      ],
      'newsroom': [
        { title: 'Automation Updates', description: 'Latest automation news', href: '/automation', category: 'Automation' },
        { title: 'AI Trends', description: 'AI industry insights', href: '/reports/ai-trends', category: 'AI' },
        { title: 'Innovations', description: 'Research breakthroughs', href: '/reports/innovations', category: 'Research' },
        { title: 'Site Health', description: 'Performance updates', href: '/site-health', category: 'Health' }
      ]
    };

    // Find the best match for the current page
    for (const [key, content] of Object.entries(defaults)) {
      if (page.includes(key)) {
        return content;
      }
    }

    // Fallback to general content
    return [
      { title: 'Home', description: 'Return to homepage', href: '/', category: 'Navigation' },
      { title: 'Explore', description: 'Discover all features', href: '/explore', category: 'Features' },
      { title: 'Automation', description: 'See automations', href: '/automation', category: 'Automation' },
      { title: 'Reports', description: 'Browse content', href: '/reports', category: 'Content' }
    ];
  };

  const relatedContent = items || getDefaultRelatedContent(currentPage);

  if (relatedContent.length === 0) return null;

  return (
    <section className="mt-16 py-8 border-t border-white/10">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Related Content</h2>
        <p className="text-white/70">Discover more related content and features</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedContent.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group bg-slate-800/30 border border-white/10 rounded-lg p-6 hover:border-cyan-400/50 hover:bg-slate-800/50 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium text-cyan-400 uppercase tracking-wide">
                {item.category}
              </span>
              {item.icon && (
                <span className="text-lg">{item.icon}</span>
              )}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="mt-4 flex items-center text-cyan-400 text-sm font-medium">
              Learn more
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}