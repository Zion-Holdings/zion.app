import React from 'react';
import type { BlogAuthor } from '@/types/blog';

interface AuthorBioProps {
  author: BlogAuthor;
}

export function AuthorBio({ author }: AuthorBioProps) {
  if (!author.bio) return null;
  return (
    <div className="mt-12 flex flex-col md:flex-row bg-zion-blue-light dark:bg-zion-blue-dark border border-zion-blue rounded-lg p-6">
      <img
        src={author.avatarUrl}
        alt={author.name}
        className="w-16 h-16 rounded-full mr-4 mb-4 md:mb-0"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          target.src = '/images/blog-placeholder.svg';
        }}
      />
      <div>
        <p className="font-medium text-lg">{author.name}</p>
        {author.title && <p className="text-sm text-muted-foreground mb-2">{author.title}</p>}
        <p>{author.bio}</p>
      </div>
    </div>
  );
}
