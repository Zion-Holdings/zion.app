import React from 'react';
import type { BasePerson } from '../../types/org';

export default function PersonCard({ person, showPhoto = true }: { person: BasePerson; showPhoto?: boolean }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-4">
        {showPhoto ? (
          <div className="h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden flex items-center justify-center text-sm">
            {person.photoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={person.photoUrl} alt={person.name} className="h-full w-full object-cover" />
            ) : (
              <span>{person.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</span>
            )}
          </div>
        ) : (
          <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm">
            <span>{person.name.split(' ').map((n) => n[0]).join('').slice(0, 2)}</span>
          </div>
        )}
        <div className="min-w-0">
          <div className="font-semibold truncate">{person.name}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{person.title || person.alias || person.roleType}</div>
          {person.location && (
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {person.location.region || person.location.zone || person.location.country}
            </div>
          )}
        </div>
      </div>
      {person.bio && <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">{person.bio}</p>}
      {person.links && person.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {person.links.map((l) => (
            <a
              key={l.url}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}