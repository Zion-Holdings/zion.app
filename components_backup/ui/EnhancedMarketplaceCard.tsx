import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';

export type ServiceItem = {
  id?: string;
  slug?: string;
  title: string;
  description: string;
  provider: string;
  priceFromUSD?: number;
  priceRangeUSD?: [number, number];
  categories: string[];
  rating?: number; // 0-5
};

type Props = {
  service: ServiceItem;
  onRequestQuote: (service: ServiceItem) => void;
};

export default function EnhancedMarketplaceCard({ service, onRequestQuote }: Props) {
  const minPrice = service.priceFromUSD ?? (service.priceRangeUSD ? service.priceRangeUSD[0] : undefined);

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 dark:bg-black/20 backdrop-blur p-5 shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(56,189,248,0.15), transparent 40%)',
        }}
      />
      <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-500" />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-white">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-white/80 line-clamp-3">{service.description}</p>
        </div>
        {typeof service.rating === 'number' && (
          <div className="flex items-center gap-1 shrink-0">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={i < (service.rating ?? 0) ? 'text-yellow-400 fill-yellow-400' : 'text-white/20'} />
            ))}
            <span className="ml-1 text-xs text-white/70">{service.rating?.toFixed(1)}</span>
          </div>
        )}
      </div>

      <div className="mt-3 text-xs text-white/70">By {service.provider}</div>

      <div className="mt-3 flex flex-wrap gap-2">
        {service.categories.map((cat) => (
          <span key={cat} className="px-2 py-1 text-xs rounded-full border border-cyan-300/30 text-cyan-200 bg-cyan-400/10">
            {cat}
          </span>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm">
          {minPrice !== undefined ? (
            <span className="text-white font-medium">From ${minPrice.toLocaleString()}</span>
          ) : (
            <span className="text-white/70">Custom pricing</span>
          )}
        </div>
        <button
          onClick={() => onRequestQuote(service)}
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white shadow hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
        >
          Request Quote
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.div>
  );
}