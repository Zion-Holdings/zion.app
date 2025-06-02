import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { saveFeedback } from '@/services/feedbackService';

const StarRatingInput: React.FC<{ value: number; onRate: (r:number) => void }> = ({ value, onRate }) => (
  <div className="flex mb-2">
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
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveFeedback({ rating, comment, page: window.location.pathname });
    setSubmitted(true);
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
