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
  // For now, simulate a logged-in user for development of this component's structure
  const [user] = useState<{ id: string; name: string, isLoggedIn: boolean } | null>({ isLoggedIn: true, id: 'mockUserId', name: 'Mock User' });
  // useEffect(() => {
  //  // logic to check actual auth status and set user
  // }, []);
  return { isAuthenticated: user?.isLoggedIn ?? false };
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
      <span key={i} className={i < value ? 'text-yellow-400' : 'text-gray-300'}>★</span>
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
  const { isAuthenticated } = useAuth();
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
        body: JSON.stringify({ productId, rating: newRating, comment: newComment }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Failed to submit review: ${response.statusText}`);
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

<<<<<<< HEAD
      {isLoading && <p>Loading reviews...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
=======
  componentDidUpdate(prevProps: Props, prevState: State) { // Corrected the syntax here
=======
  componentDidUpdate(_prevProps: Props, prevState: State) {
>>>>>>> b58c5582360917c4f917cac488a34dcf3e504b83
    // Auto-retry for network errors
    if (this.state.hasError && !prevState.hasError && this.state.errorType === 'network') {
      this.handleAutoRetry();
    }
  }
>>>>>>> f8392cbf8e4e50377f0c3e906c963f8d84d248e5

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

<<<<<<< HEAD
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
=======
      // Production or other error types
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className={`rounded-full p-2 mr-3 ${
                errorType === 'network' ? 'bg-orange-100' :
                errorType === 'config' ? 'bg-red-100' :
                errorType === 'runtime' ? 'bg-blue-100' :
                'bg-gray-100'
              }`}>
                <svg className={`w-6 h-6 ${
                  errorType === 'network' ? 'text-orange-600' :
                  errorType === 'config' ? 'text-red-600' :
                  errorType === 'runtime' ? 'text-blue-600' :
                  'text-gray-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {errorType === 'network' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  ) : errorType === 'runtime' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  )}
                </svg>
              </div>
export default ProductionErrorBoundary;
>>>>>>> f8392cbf8e4e50377f0c3e906c963f8d84d248e5
