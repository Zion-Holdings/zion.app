import React from 'react'
import Link from 'next/link'

export type EmptyStateProps = {
  title?: string
  message?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function EmptyState({ title = 'Nothing here yet...', message = 'Start by adding content or exploring options.', ctaLabel = 'Get started', ctaHref = '/' }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16">
      <div className="w-28 h-28 rounded-full border-2 border-dashed border-gray-300 dark:border-gray-700 grid place-items-center mb-6">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500/60 to-cyan-500/60" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-80 max-w-md">{message}</p>
      {ctaHref && (
        <Link href={ctaHref}>
          <a className="mt-5 inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm hover:bg-gray-50 dark:hover:bg-white/5">
            {ctaLabel}
          </a>
        </Link>
      )}
    </div>
  )
}