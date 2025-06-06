import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { postFeedback } from '@/services/feedbackService';
import { useFeedback } from '@/context/FeedbackContext';
import { useEnqueueSnackbar } from '@/context';

const StarRatingInput: React.FC<{ value: number; onRate: (r:number) => void }> = ({ value, onRate }) => (
  <div className="flex mb-2" aria-label="Star rating">
    {[1,2,3,4,5].map(star => (
      <button
        key={star}
        type="button"
        onClick={() => onRate(star)}
        className={`text-xl ${star <= value ? 'text-yellow-400' : 'text-gray-300'} focus:outline-none`}
        aria-label={`Rate ${star}`}
      >
        ★
      </button>
    ))}
  </div>
);

export function FeedbackWidget() {
  const [open, setOpen] = useState(false);
  const { rating, comment, setRating, setComment, reset } = useFeedback();
  const [submitted, setSubmitted] = useState(false);
  const enqueueSnackbar = useEnqueueSnackbar();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postFeedback({ rating, comment, page: window.location.pathname });
      enqueueSnackbar('Thank you!', { variant: 'success' });
    } catch (err: any) {
      enqueueSnackbar(err?.response?.data?.message || err.message, { variant: 'error' });
    }
    setSubmitted(true);
    reset();
    setTimeout(() => setOpen(false), 1500);
  };

  return (
    <>
      {!open && (
        <Button
          onClick={() => { setOpen(true); setSubmitted(false); }}
          className="fixed bottom-6 left-6 z-50"
          size="sm"
        >
          Feedback
        </Button>
      )}
      {open && (
        <Card className="fixed bottom-6 left-6 w-80 z-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Your Feedback</CardTitle>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <p className="py-4">Thank you for your feedback!</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="text-sm">How satisfied are you?</label>
                  <StarRatingInput value={rating} onRate={setRating} />
                </div>
                <Textarea
                  placeholder="Additional comments"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <div className="flex justify-end gap-2">
                  <Button type="submit" disabled={rating === 0} size="sm">Submit</Button>
                  <Button type="button" variant="ghost" size="sm" onClick={() => setOpen(false)}>Close</Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
}
