import React from 'react';
import Link from 'next/link';
import { Feature } from '../../types/roadmap';

type Props = {
  feature: Feature;
  onUpvote: (feature: Feature) => void;
  onFollow: (feature: Feature) => void;
};

export default function RoadmapCard({ feature, onUpvote, onFollow }: Props) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 backdrop-blur p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">
            <Link href={`/roadmap/${feature.slug}`}>
              <a className="hover:underline">{feature.title}</a>
            </Link>
          </h3>
          {feature.etaQuarter && (
            <p className="text-xs text-zinc-400 mt-1">ETA: {feature.etaQuarter}</p>
          )}
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">
          {feature.status}
        </span>
      </div>
      {feature.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {feature.tags.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
              {t}
            </span>
          ))}
        </div>
      ) : null}
      <div className="mt-4 flex items-center justify-between text-zinc-300">
        <div className="flex items-center gap-4 text-sm">
          <span className="inline-flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 4 4 6.5 4c1.74 0 3.41 1.01 4.22 2.53C12.09 5.01 13.76 4 15.5 4 18 4 20 6 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            {feature.upvotesWeighted}
          </span>
          <span className="inline-flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
            {feature.followerCount}
          </span>
          {typeof feature.commentsCount === 'number' && (
            <span className="inline-flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M21 6h-2v9H7v2c0 .55.45 1 1 1h9l4 4V7c0-.55-.45-1-1-1zM17 2H3c-.55 0-1 .45-1 1v14l4-4h11c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1z"/></svg>
              {feature.commentsCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onFollow(feature)} className="px-3 py-1.5 text-xs rounded bg-zinc-800 hover:bg-zinc-700 text-white">Follow</button>
          <button onClick={() => onUpvote(feature)} className="px-3 py-1.5 text-xs rounded bg-indigo-600 hover:bg-indigo-500 text-white">Upvote</button>
        </div>
      </div>
    </div>
  );
}