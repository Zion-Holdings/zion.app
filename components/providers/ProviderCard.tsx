import Link from 'next/link';
import { ServiceProvider } from '../../data/providers/providers';

export type ProviderCardProps = {
  provider: ServiceProvider;
};

export default function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="enhanced-card enhanced-hover border border-gray-100 dark:border-gray-800">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">{provider.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{provider.description}</p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800">{provider.category}</span>
            <span className="px-2 py-1 rounded bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800">AI match {provider.aiMatchScore}%</span>
            <span className="px-2 py-1 rounded bg-amber-50 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border border-amber-100 dark:border-amber-800">★ {provider.rating.toFixed(1)} ({provider.reviewsCount})</span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <Link href={`/contact?provider=${provider.slug}`}>
          <a className="enhanced-button enhanced-button-primary">Request Quote</a>
        </Link>
        <Link href={`#provider-${provider.slug}`}>
          <a className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View details</a>
        </Link>
      </div>
    </div>
  );
}