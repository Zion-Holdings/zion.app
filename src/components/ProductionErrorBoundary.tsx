import React, { Component, ReactNode } from 'react';
import * as Sentry from '@sentry/nextjs';
import { ENV_CONFIG } from '@/utils/environmentConfig';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorType: 'config' | 'network' | 'runtime' | 'unknown';
  retryCount: number;
  showDetails: boolean;
}

class ProductionErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorType: 'unknown',
      retryCount: 0,
      showDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    // Determine error type based on error message
    let errorType: State['errorType'] = 'unknown';
    
    if (error.message.includes('Environment configuration') || 
        error.message.includes('supabaseUrl is required') ||
        error.message.includes('Sentry DSN') ||
        error.message.includes('NEXT_PUBLIC_')) {
      errorType = 'config';
    } else if (error.message.includes('fetch') || 
               error.message.includes('network') ||
               error.message.includes('offline') ||
               error.message.includes('ENOTFOUND')) {
      errorType = 'network';
    } else if (error.name === 'ChunkLoadError' || 
               error.message.includes('Loading chunk')) {
      errorType = 'runtime';
    }

    return {
      hasError: true,
      error,
      errorType
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ProductionErrorBoundary caught an error:', error, errorInfo);
    
    // Only send to Sentry if it's configured
    if (ENV_CONFIG.sentry.isConfigured) {
      Sentry.withScope((scope) => {
        scope.setTag('errorBoundary', 'ProductionErrorBoundary');
        scope.setTag('errorType', this.state.errorType);
        scope.setTag('retryCount', this.state.retryCount);
        // Convert ErrorInfo to plain object for Sentry context
        scope.setContext('errorInfo', {
          componentStack: errorInfo.componentStack || 'Unknown'
        });
        scope.setContext('environmentConfig', {
          supabaseConfigured: ENV_CONFIG.supabase.isConfigured,
          sentryConfigured: ENV_CONFIG.sentry.isConfigured,
          reownConfigured: ENV_CONFIG.reown.isConfigured,
          environment: ENV_CONFIG.app.environment
        });
        Sentry.captureException(error);
      });
    } else {
      // Log locally if Sentry is not configured
      console.error('Error details (Sentry not configured):', {
        error: error.message,
        stack: error.stack,
        errorInfo,
        environmentConfig: ENV_CONFIG
      });
    }
  }

  handleRetry = () => {
    if (this.state.retryCount < 3) {
      this.setState(prevState => ({
        hasError: false,
        error: null,
        retryCount: prevState.retryCount + 1
      }));

      // Clear any pending retry
      if (this.retryTimeoutId) {
        clearTimeout(this.retryTimeoutId);
      }
    } else {
      // Max retries reached, force reload
      window.location.reload();
    }
  };

  handleAutoRetry = () => {
    if (this.state.errorType === 'network' && this.state.retryCount < 2) {
      this.retryTimeoutId = setTimeout(() => {
        this.handleRetry();
      }, 3000); // Auto-retry after 3 seconds for network errors
    }
  };

  toggleDetails = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
    // Auto-retry for network errors
    if (this.state.hasError && !prevState.hasError && this.state.errorType === 'network') {
      this.handleAutoRetry();
    }
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  getErrorMessage(): { title: string; description: string; actionText: string } {
    const { errorType, error, retryCount } = this.state;

    switch (errorType) {
      case 'config':
        return {
          title: 'Configuration Error',
          description: ENV_CONFIG.app.isDevelopment 
            ? 'Some services are not configured for development. The app will work with limited functionality.'
            : 'The application is not properly configured. Please check the environment variables.',
          actionText: ENV_CONFIG.app.isDevelopment ? 'Continue Anyway' : 'Contact Support'
        };
      
      case 'network':
        return {
          title: 'Connection Problem',
          description: retryCount > 0 
            ? `Retrying connection... (Attempt ${retryCount + 1}/3)`
            : 'Unable to connect to the server. Checking your connection...',
          actionText: 'Retry Now'
        };
      
      case 'runtime':
        return {
          title: 'Application Update Required',
          description: 'A new version of the application is available. Please refresh to continue.',
          actionText: 'Refresh Page'
        };
      
      default:
        return {
          title: 'Something Went Wrong',
          description: 'An unexpected error occurred. Our team has been notified.',
          actionText: retryCount < 3 ? 'Try Again' : 'Reload Page'
        };
    }
  }

  render() {
    if (this.state.hasError) {
      const { title, description, actionText } = this.getErrorMessage();
      const { error, errorType, retryCount, showDetails } = this.state;

      // For development configuration errors, show a less alarming message
      if (errorType === 'config' && ENV_CONFIG.app.isDevelopment) {
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
              </div>
              
              <p className="text-gray-600 mb-4">{description}</p>
              
              <div className="mb-4 p-3 bg-blue-50 rounded">
                <p className="text-sm text-blue-800">
                  💡 <strong>Development Mode:</strong> Some features require environment variables to be configured. 
                  Check the <code>docs/PRODUCTION_ENV_SETUP.md</code> file for setup instructions.
                </p>
              </div>

              <button
                onClick={this.handleRetry}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                {actionText}
              </button>
            </div>
          </div>
        );
      }

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
              <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
            </div>
            
            <p className="text-gray-600 mb-6">{description}</p>
            
            {/* Network error auto-retry indicator */}
            {errorType === 'network' && retryCount < 2 && (
              <div className="mb-4 p-3 bg-orange-50 rounded flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-orange-600 mr-2"></div>
                <span className="text-sm text-orange-800">Auto-retrying in a few seconds...</span>
              </div>
            )}

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                disabled={errorType === 'network' && retryCount >= 3}
                className={`w-full py-2 px-4 rounded transition-colors ${
                  errorType === 'network' && retryCount >= 3
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {actionText}
              </button>

              {/* Show error details toggle for development */}
              {ENV_CONFIG.app.isDevelopment && (
                <button
                  onClick={this.toggleDetails}
                  className="w-full py-2 px-4 text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {showDetails ? 'Hide' : 'Show'} Error Details
                </button>
              )}
            </div>

            {/* Error details for development */}
            {showDetails && ENV_CONFIG.app.isDevelopment && error && (
              <div className="mt-4 p-3 bg-gray-100 rounded text-xs">
                <div className="font-mono text-gray-800">
                  <strong>Error:</strong> {error.message}</div>
                  <div className="mt-2"><strong>Type:</strong> {errorType}</div>
                  <div><strong>Retry Count:</strong> {retryCount}</div>
                  {error.stack && (
                    <details className="mt-2">
                      <summary className="cursor-pointer text-gray-600">Stack Trace</summary>
                      <pre className="mt-1 text-xs overflow-auto">{error.stack}</pre>
                    </details>
                  )}
                </div>
              </div>
            )}

            {/* Environment status for development */}
            {ENV_CONFIG.app.isDevelopment && (
              <div className="mt-4 p-3 bg-blue-50 rounded text-xs">
                <div className="text-blue-800">
                  <strong>Environment Status:</strong></div>
                  <div>Supabase: {ENV_CONFIG.supabase.isConfigured ? '✅' : '⚠️'}</div>
                  <div>Sentry: {ENV_CONFIG.sentry.isConfigured ? '✅' : '⚠️'}</div>
                  <div>Reown: {ENV_CONFIG.reown.isConfigured ? '✅' : '⚠️'}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ProductionErrorBoundary;
</content>
</file>
<file><path>src/components/ProductReviews.tsx</path>
<content lines="1-218">
  1 | import React, { useEffect, useState, FormEvent } from 'react';
  2 | import Link from 'next/link';
  3 | // import { Review } from '@/types/reviews'; // Assuming this path is correct from earlier exploration
  4 | // For the purpose of this subtask, let's define a local Review type if the import path is uncertain or to ensure self-containment
  5 | // In a real scenario, this would be imported from the shared types.
  6 | export interface Review {
  7 |   id: string;
  8 |   rating: number;
  9 |   comment?: string | null; // Ensure this matches your actual type (e.g. review_text)
 10 |   review_text?: string | null; // Alternative field name for comment
 11 |   created_at: string; // Or Date
 12 |   user?: { // Assuming user is nested and might have a name
 13 |     id: string | number; // User ID could be string or number
 14 |     name?: string | null;
 15 |   } | null;
 16 |   reviewer_profile?: { // Another possible structure for reviewer info
 17 |     display_name?: string | null;
 18 |   } | null;
 19 |   // Add any other fields that your Review type actually has
 20 | }
 21 | 
 22 | 
 23 | // import { useAuth } from '@/hooks/useAuth'; // Assuming an auth hook exists
 24 | // For now, let's mock a basic useAuth hook if not available to allow component structure
 25 | // In a real scenario, this would come from your actual auth context/hooks
 26 | const useAuth = () => {
 27 |   // Replace with actual auth logic
 28 |   // For now, simulate a logged-in user for development of this component's structure
 29 |   const [user] = useState<{ id: string; name: string, isLoggedIn: boolean } | null>({ isLoggedIn: true, id: 'mockUserId', name: 'Mock User' });
 30 |   // useEffect(() => {
 31 |   //  // logic to check actual auth status and set user
 32 |   // }, []);
 33 |   return { user, isAuthenticated: user?.isLoggedIn ?? false };
 34 | };
 35 | 
 36 | 
 37 | // Assuming RatingStars component exists as seen in ProductListingCard.tsx
 38 | // If not, a simple display of rating number will be shown.
 39 | // For actual stars, you'd import your RatingStars component:
 40 | // import { RatingStars } from '@/components/RatingStars'; // Or its correct path
 41 | 
 42 | interface RatingStarsProps {
 43 |   value: number;
 44 |   count?: number; // Optional review count
 45 |   size?: 'sm' | 'md' | 'lg';
 46 |   interactive?: boolean;
 47 |   onRate?: (rating: number) => void;
 48 | }
 49 | 
 50 | // Placeholder for RatingStars if not available or for simplicity in this subtask
 51 | const RatingStarsDisplay: React.FC<Pick<RatingStarsProps, 'value'>> = ({ value }) => (
 52 |   <div className="flex items-center">
 53 |     {Array.from({ length: 5 }, (_, i) => (
 54 |       <span key={i} className={i < value ? 'text-yellow-400' : 'text-gray-300'}>★</span>
 55 |     ))}
 56 |     <span className="ml-2 text-sm text-gray-600">({value.toFixed(1)})</span>
 57 |   </div>
 58 | );
 59 | 
 60 | // Placeholder for an interactive star rating input
 61 | const StarRatingInput: React.FC<Pick<RatingStarsProps, 'value' | 'onRate'>> = ({ value, onRate }) => (
 62 |   <div className="flex">
 63 |     {[1, 2, 3, 4, 5].map((star) => (
 64 |       <button
 65 |         type="button"
 66 |         key={star}
 67 |         onClick={() => onRate?.(star)}
 68 |         className={`text-2xl ${star <= value ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
 69 |       >
 70 |         ★
 71 |       </button>
 72 |     ))}
 73 |   </div>
 74 | );
 75 | 
 76 | 
 77 | interface ProductReviewsProps {
 78 |   productId: string;
 79 | }
 80 | 
 81 | const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
 82 |   const { isAuthenticated } = useAuth();
 83 |   const [reviews, setReviews] = useState<Review[]>([]);
 84 |   const [isLoading, setIsLoading] = useState(false);
 85 |   const [error, setError] = useState<string | null>(null);
 86 | 
 87 |   const [newRating, setNewRating] = useState(0);
 88 |   const [newComment, setNewComment] = useState('');
 89 |   const [isSubmitting, setIsSubmitting] = useState(false);
 90 |   const [submitError, setSubmitError] = useState<string | null>(null);
 91 |   const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
 92 | 
 93 |   const fetchReviews = async () => {
 94 |     setIsLoading(true);
 95 |     setError(null);
 96 |     try {
 97 |       const response = await fetch(`/api/reviews/${productId}`);
 98 |       if (!response.ok) {
 99 |         const errorData = await response.json();
100 |         throw new Error(errorData.error || `Failed to fetch reviews: ${response.statusText}`);
101 |       }
102 |       const data: Review[] = await response.json();
103 |       setReviews(data);
104 |     } catch (err: any) {
105 |       setError(err.message);
106 |     } finally {
107 |       setIsLoading(false);
108 |     }
109 |   };
110 | 
111 |   useEffect(() => {
112 |     if (productId) {
113 |       fetchReviews();
114 |     }
115 |   }, [productId]);
116 | 
117 |   const handleSubmitReview = async (e: FormEvent) => {
118 |     e.preventDefault();
119 |     if (newRating === 0) {
120 |       setSubmitError('Please select a rating.');
121 |       return;
122 |     }
123 |     setIsSubmitting(true);
124 |     setSubmitError(null);
125 |     setSubmitSuccess(null);
126 | 
127 |     try {
128 |       const response = await fetch('/api/reviews', {
129 |         method: 'POST',
130 |         headers: { 'Content-Type': 'application/json' },
131 |         body: JSON.stringify({ productId, rating: newRating, comment: newComment }),
132 |       });
133 | 
134 |       if (!response.ok) {
135 |         const errorData = await response.json();
136 |         throw new Error(errorData.error || `Failed to submit review: ${response.statusText}`);
137 |       }
138 | 
139 |       setSubmitSuccess('Review submitted successfully! It may take some time to appear.');
140 |       setNewRating(0);
141 |       setNewComment('');
142 |       fetchReviews(); // Refresh reviews list
143 |     } catch (err: any) {
144 |       setSubmitError(err.message);
145 |     } finally {
146 |       setIsSubmitting(false);
147 |     }
148 |   };
149 | 
150 |   return (
151 |     <div className="mt-8">
152 |       <h3 className="text-xl font-semibold mb-4">Product Reviews</h3>
153 | 
154 |       {isLoading && <p>Loading reviews...</p>}
155 |       {error && <p className="text-red-500">Error: {error}</p>}
156 | 
157 |       {!isLoading && !error && reviews.length === 0 && (
158 |         <p>No reviews yet. Be the first to review!</p>
159 |       )}
160 | 
161 |       {!isLoading && !error && reviews.length > 0 && (
162 |         <div className="space-y-4 mb-6">
163 |           {reviews.map((review) => (
164 |             <div key={review.id} className="border p-4 rounded-md bg-gray-50 dark:bg-gray-800">
165 |               <div className="flex items-center mb-1">
166 |                 <strong className="mr-2">{review.reviewer_profile?.display_name || review.user?.name || 'Anonymous'}</strong>
167 |                 {/* Assuming review.rating is a number from the backend */}
168 |                 <RatingStarsDisplay value={review.rating} />
169 |               </div>
170 |               <p className="text-gray-700 dark:text-gray-300">{review.review_text || review.comment}</p>
171 |               <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
172 |                 {new Date(review.created_at).toLocaleDateString()}
173 |               </p>
174 |             </div>
175 |           ))}
176 |         </div>
177 |       )}
178 | 
179 |       {isAuthenticated && (
180 |         <div className="mt-6 p-4 border rounded-md bg-white dark:bg-gray-900">
181 |           <h4 className="text-lg font-semibold mb-3">Write a Review</h4>
182 |           <form onSubmit={handleSubmitReview}>
183 |             <div className="mb-3">
184 |               <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Your Rating:</label>
185 |               <StarRatingInput value={newRating} onRate={setNewRating} />
186 |             </div>
187 |             <div className="mb-3">
188 |               <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Your Comment (Optional):</label>
189 |               <textarea
190 |                 id="comment"
191 |                 value={newComment}
192 |                 onChange={(e) => setNewComment(e.target.value)}
193 |                 rows={4}
194 |                 className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
195 |               />
196 |             </div>
197 |             {submitError && <p className="text-red-500 text-sm mb-2">Error: {submitError}</p>}
198 |             {submitSuccess && <p className="text-green-500 text-sm mb-2">{submitSuccess}</p>}
199 |             <button
200 |               type="submit"
201 |               disabled={isSubmitting || newRating === 0}
202 |               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-400"
203 |             >
204 |               {isSubmitting ? 'Submitting...' : 'Submit Review'}
205 |             </button>
206 |           </form>
207 |         </div>
208 |       )}
209 |       {!isAuthenticated && (
210 |         <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
211 |           Please <Link href="/login" className="text-blue-500 hover:underline">login</Link> to write a review.
212 |         </p>
213 |       )}
214 |     </div>
215 |   );
216 | };
217 | 
218 | export default ProductReviews;