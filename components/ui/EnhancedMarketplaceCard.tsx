import Link from 'next/link';
import React from 'react';

export type EnhancedMarketplaceCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  priceRangeLabel: string;
  rating?: number; // 0 - 5
  href?: string;
  quoteHref?: string;
  onQuoteRequest?: () => void;
};

function renderStars(rating?: number) {
  if (!rating || rating <= 0) return null;
  const clamped = Math.max(0, Math.min(5, rating));
  const fullStars = Math.floor(clamped);
  const half = clamped - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (half ? 1 : 0);
  const stars: React.ReactNode[] = [];
  for (let i = 0; i < fullStars; i += 1) stars.push(<span key={`f-${i}`}>★</span>);
  if (half) stars.push(<span key="half">☆</span>);
  for (let i = 0; i < emptyStars; i += 1) stars.push(<span key={`e-${i}`}>✩</span>);
  return <div className="text-yellow-500 text-sm leading-none" aria-label={`${clamped.toFixed(1)} out of 5`}>{stars}</div>;
}

export default function EnhancedMarketplaceCard({
  imageUrl,
  title,
  description,
  tags,
  priceRangeLabel,
  rating,
  href,
  quoteHref,
  onQuoteRequest,
}: EnhancedMarketplaceCardProps) {
  const content = (
    <div className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] bg-gray-100 dark:bg-zinc-800 overflow-hidden">
        {/* Using img to avoid remote domain config requirements */}
        <img src={imageUrl} alt={title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-base line-clamp-2">{title}</h3>
          {renderStars(rating)}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 4).map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">
              {tag}
            </span>
          ))}
          {tags.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-zinc-700">
              +{tags.length - 4}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="text-sm font-medium opacity-80">{priceRangeLabel}</div>
          {quoteHref ? (
            <Link href={quoteHref}>
              <a className="inline-flex items-center gap-1 text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">
                Request Quote
              </a>
            </Link>
          ) : (
            <button onClick={onQuoteRequest} className="text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Request Quote
            </button>
          )}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href}>
        <a className="block">{content}</a>
      </Link>
    );
  }

  return content;
}