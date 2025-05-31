import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // To potentially get userId from query or auth state
import Link from 'next/link';

// Assume a way to get logged-in user's ID and current score.
// This would typically come from an authentication context or a global state.
const MOCK_LOGGED_IN_USER_ID = 'user123'; // Replace with actual logic
const MOCK_USER_CURRENT_SCORE = 65; // Replace with actual logic, perhaps fetched

const TrustAppealPage: React.FC = () => {
  const router = useRouter();
  // In a real app, userId might come from auth context or be a prop
  const [userId, setUserId] = useState<string>(MOCK_LOGGED_IN_USER_ID);
  // Score could be fetched based on userId or passed via query params
  const [currentScore, setCurrentScore] = useState<number | null>(null);
  const [reasonForAppeal, setReasonForAppeal] = useState<string>('');
  const [supportingEvidence, setSupportingEvidence] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [formErrors, setFormErrors] = useState<{ reasonForAppeal?: string }>({});

  useEffect(() => {
    // Simulate fetching current score or getting it from router query
    const scoreFromQuery = router.query.score;
    if (typeof scoreFromQuery === 'string' && !isNaN(parseInt(scoreFromQuery))) {
      setCurrentScore(parseInt(scoreFromQuery));
    } else {
      // Fallback to mock or fetch if needed
      // For now, if score is not in query, we use a mock or leave it null
      // In a real app, you might fetch this based on the logged-in user
      setCurrentScore(MOCK_USER_CURRENT_SCORE); // Example
    }

    // If userId is also in query (e.g. admin initiated appeal for user)
    const userIdFromQuery = router.query.userId;
    if (typeof userIdFromQuery === 'string') {
        setUserId(userIdFromQuery);
    }

  }, [router.query]);

  const validateForm = (): boolean => {
    const errors: { reasonForAppeal?: string } = {};
    if (!reasonForAppeal.trim()) {
      errors.reasonForAppeal = 'Reason for appeal is required.';
    } else if (reasonForAppeal.trim().length < 50) {
      errors.reasonForAppeal = 'Please provide a detailed reason (at least 50 characters).';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    // Simulate API call for submission
    console.log('Submitting appeal:', {
      userId,
      currentScore,
      reasonForAppeal,
      supportingEvidence,
    });

    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

    setIsSubmitting(false);
    setSubmitMessage({
      type: 'success',
      text: 'Your appeal has been submitted. We will review it within 3-5 business days.'
    });
    // Reset form or redirect user
    // setReasonForAppeal('');
    // setSupportingEvidence('');
    // setTimeout(() => router.push('/profile/' + userId + '/trust'), 3000); // Optional redirect
  };

  // Determine if the user should be on this page
  const canAppeal = currentScore !== null && currentScore < 70;

  return (
    <div className="container mx-auto p-6 max-w-2xl bg-white shadow-lg rounded-lg my-10">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Trust Score Appeal</h1>
        <p className="text-gray-600 mt-2">
          If you believe your trust score is inaccurate or has been unfairly affected, please submit an appeal.
        </p>
      </header>

      {submitMessage && (
        <div className={`p-4 mb-6 rounded-md text-sm ${
            submitMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {submitMessage.text}
          {submitMessage.type === 'success' && userId && (
            <Link href={`/profile/${userId}/trust`} legacyBehavior>
                <a className="font-semibold underline ml-2">View Your Trust Profile</a>
            </Link>
          )}
        </div>
      )}

      {!canAppeal && !submitMessage && currentScore !== null && (
         <div className="p-4 mb-6 rounded-md text-sm bg-blue-100 text-blue-700">
            Your current score ({currentScore}) does not require an appeal at this time. Appeals are generally for scores below 70.
            {userId && ( <Link href={`/profile/${userId}/trust`} legacyBehavior><a className="font-semibold underline ml-1">View Your Trust Profile</a></Link>)}
        </div>
      )}

      {(canAppeal || currentScore === null || submitMessage?.type === 'success') && ( // Show form if eligible, or if successful submit
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
              User ID
            </label>
            <input
              type="text"
              name="userId"
              id="userId"
              value={userId}
              readOnly // Or onChange={e => setUserId(e.target.value)} if admin can change
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="currentScore" className="block text-sm font-medium text-gray-700">
              Current Trust Score (at time of appeal)
            </label>
            <input
              type="text" // Changed to text to display N/A or score
              name="currentScore"
              id="currentScore"
              value={currentScore !== null ? currentScore.toString() : 'N/A'}
              readOnly
              className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="reasonForAppeal" className="block text-sm font-medium text-gray-700">
              Reason for Appeal <span className="text-red-500">*</span>
            </label>
            <textarea
              id="reasonForAppeal"
              name="reasonForAppeal"
              rows={6}
              value={reasonForAppeal}
              onChange={(e) => setReasonForAppeal(e.target.value)}
              required
              className={`mt-1 block w-full px-3 py-2 border ${formErrors.reasonForAppeal ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
              aria-describedby="reasonForAppeal-error"
            />
            {formErrors.reasonForAppeal && (
              <p className="mt-1 text-xs text-red-500" id="reasonForAppeal-error">
                {formErrors.reasonForAppeal}
              </p>
            )}
            <p className="mt-1 text-xs text-gray-500">
              Please provide a detailed explanation for why you believe your score should be reviewed.
              Include any specific incidents, extenuating circumstances, or corrections you'd like us to consider.
            </p>
          </div>

          <div>
            <label htmlFor="supportingEvidence" className="block text-sm font-medium text-gray-700">
              Supporting Evidence (Optional)
            </label>
            <textarea
              id="supportingEvidence"
              name="supportingEvidence"
              rows={3}
              value={supportingEvidence}
              onChange={(e) => setSupportingEvidence(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <p className="mt-1 text-xs text-gray-500">
              Provide links to documents, screenshots, or any other evidence that supports your appeal.
              Describe what the evidence shows.
            </p>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting || submitMessage?.type === 'success'}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isSubmitting ? 'Submitting Appeal...' : 'Submit Appeal'}
            </button>
          </div>
        </form>
      )}
      <div className="mt-8 text-center">
        <Link href="/" legacyBehavior>
          <a className="text-sm text-blue-600 hover:text-blue-800 hover:underline">Return to Homepage</a>
        </Link>
      </div>
    </div>
  );
};

export default TrustAppealPage;
