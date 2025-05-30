import React from 'react';
import { Star, StarHalf, Star as StarOutline } from 'lucide-react';

export function RatingStars({ value = 0 }) {
  const filled = Math.floor(value);
  const half = value - filled >= 0.5;

  return (
    <div className="flex items-center" data-testid="rating-stars">
      {[0,1,2,3,4].map((i) => {
        if (i < filled) {
          return <Star key={i} data-testid="star-filled" className="h-4 w-4 text-yellow-400 fill-yellow-400" />;
        }
        if (i === filled && half) {
          return <StarHalf key={i} data-testid="star-half" className="h-4 w-4 text-yellow-400 fill-yellow-400" />;
        }
        return <StarOutline key={i} data-testid="star-outline" className="h-4 w-4 text-gray-300" />;
      })}
    </div>
  );
}
