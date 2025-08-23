import React, { useEffect, useState, FormEvent } from 'react';
import Link from 'next/link';
// import { Review } from '@/types/reviews'; // Assuming this path is correct from earlier exploration
// For the purpose of this subtask, let's define a local Review type if the import path is uncertain or to ensure self-containment
// In a real scenario, this would be imported from the shared types.
export interface Review {
  id: string;
  rating: number;
  comment?: string | null; // Ensure this matches your actual type (e.g. review_text)
  review_text?: string | null; // Alternative field name for comment
  created_at: string; // Or Date
  user?: { // Assuming user is nested and might have a name
    id: string | number; // User ID could be string or number
    name?: string | null;
  } | null;
  reviewer_profile?: { // Another possible structure for reviewer info
    display_name?: string | null;
  } | null;
  // Add any other fields that your Review type actually has
}


// import { useAuth } from '@/hooks/useAuth'; // Assuming an auth hook exists
// For now, let's mock a basic useAuth hook if not available to allow component structure
// In a real scenario, this would come from your actual auth context/hooks
const useAuth = () => {
  // Replace with actual auth logic
  const [user] = useState<{ id: string; name: string; isLoggedIn: boolean } | null>({
    isLoggedIn: true,
    id: 'mockUserId',
    name: 'Mock User'
  });

  return { isAuthenticated: !!user?.isLoggedIn, user };
};


// Assuming RatingStars component exists as seen in ProductListingCard.tsx
// If not, a simple display of rating number will be shown.
// For actual stars, you'd import your RatingStars component:
// import { RatingStars } from '@/components/RatingStars'; // Or its correct path

interface RatingStarsProps {
  value: number;
  count?: number; // Optional review count
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onRate?: (rating: number) => void;
}

// Placeholder for RatingStars if not available or for simplicity in this subtask
const RatingStarsDisplay: React.FC<Pick<RatingStarsProps, 'value'>> = ({ value }) => (
  <div className="flex items-center">
    {Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < value ? "" : "text-gray-300"}`}>★</span>
    ))}
    <span className="ml-2 text-sm text-gray-600">({value.toFixed(1)})</span>
  </div>
);

// Placeholder for an interactive star rating input
const StarRatingInput: React.FC<Pick<RatingStarsProps, 'value' | 'onRate'>> = ({ value, onRate }) => (
  <div className="flex">
    {[1, 2, 3, 4, 5].map((star) => (
      <button
        type="button"
        key={star}
        onClick={() => onRate?.(star)}
        className={`text-2xl ${star <= value ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
      >
        ★
      </button>
    ))}
  </div>
);


interface ProductReviewsProps {
  productId: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const { isAuthenticated, user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const fetchReviews = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/reviews/${productId}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to fetch reviews: ${response.statusText}`);
      }
      const data: Review[] = await response.json();
      setReviews(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchReviews();
    }
  }, [productId]);

  const handleSubmitReview = async (e: FormEvent) => {
    e.preventDefault();
    if (newRating === 0) {
      setSubmitError('Please select a rating.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId,
          rating: newRating,
          comment: newComment,
          userId: user?.id,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to fetch reviews: ${response.statusText}`);
      }

      setSubmitSuccess('Review submitted successfully! It may take some time to appear.');
      setNewRating(0);
      setNewComment('');
      fetchReviews(); // Refresh reviews list
    } catch (err: any) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Product Reviews</h3>

      {isLoading && <p>Loading reviews...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!isLoading && !error && reviews.length === 0 && (
        <p>No reviews yet. Be the first to review!</p>
      )}

      {!isLoading && !error && reviews.length > 0 && (
        <div className="space-y-4 mb-6">
          {reviews.map((review) => (
            <div key={review.id} className="border p-4 rounded-md bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center mb-1">
                <strong className="mr-2">{review.reviewer_profile?.display_name || review.user?.name || 'Anonymous'}</strong>
                {/* Assuming review.rating is a number from the backend */}
                <RatingStarsDisplay value={review.rating} />
              </div>
              <p className="text-gray-700 dark:text-gray-300">{review.review_text || review.comment}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {new Date(review.created_at).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}

      {isAuthenticated && (
        <div className="mt-6 p-4 border rounded-md bg-white dark:bg-gray-900">
          <h4 className="text-lg font-semibold mb-3">Write a Review</h4>
          <form onSubmit={handleSubmitReview}>
            <div className="mb-3">
              <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Your Rating:</label>
              <StarRatingInput value={newRating} onRate={setNewRating} />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Your Comment (Optional):</label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={4}
                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>
            {submitError && <p className="text-red-500 text-sm mb-2">Error: {submitError}</p>}
            {submitSuccess && <p className="text-green-500 text-sm mb-2">{submitSuccess}</p>}
            <button
              type="submit"
              disabled={isSubmitting || newRating === 0}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Review'}
            </button>
          </form>
        </div>
      )}
      {!isAuthenticated && (
        <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
          Please <Link href="/login" className="text-blue-500 hover:underline">login</Link> to write a review.
        </p>
      )}
    </div>
  );
};

export default ProductReviews;
