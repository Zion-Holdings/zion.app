import React, { useState, useRef } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { postFeedback } from '@/services/feedbackService';
import { useFeedback } from '@/context/FeedbackContext';
import { useEnqueueSnackbar } from '@/context';

const StarRatingInput: React.FC<{
  value: number;
  onRate: (r: number) => void;
}> = ({ value, onRate }) => (
  <div className="flex mb-2" aria-label="Star rating">
    {[1, 2, 3, 4, 5].map((star) => (
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
  const {
    rating,
    comment,
    screenshot,
    setRating,
    setComment,
    setScreenshot,
    reset,
  } = useFeedback();
  const [submitted, setSubmitted] = useState(false);
  const enqueueSnackbar = useEnqueueSnackbar();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        setScreenshot(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await postFeedback({
        rating,
        comment,
        screenshot: screenshot ?? undefined,
        url: window.location.pathname,
        userAgent: navigator.userAgent,
      });
      enqueueSnackbar('Thank you for your feedback!', { variant: 'success' });
    } catch (err: any) {
      enqueueSnackbar(err.message, { variant: 'error' });
    }
    setSubmitted(true);
    reset();
    setTimeout(() => setOpen(false), 1500);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              setSubmitted(false);
            }}
            className="fixed bottom-6 left-6 z-[60]"
            size="sm"
          >
            Feedback
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Your Feedback</DialogTitle>
          </DialogHeader>
          <Card className="border-none shadow-none">
            <CardContent className="p-0 pt-2">
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
                  {screenshot && (
                    <div className="space-y-2">
                      <img
                        src={screenshot}
                        alt="Screenshot preview"
                        className="w-full border rounded"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setScreenshot(null)}
                      >
                        Remove screenshot
                      </Button>
                    </div>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <div className="flex justify-end gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Add Screenshot
                    </Button>
                    <Button type="submit" disabled={rating === 0} size="sm">
                      Submit
                    </Button>
                  </div>
                </form>
              )}
            </CardContent>
          </Card>
        </DialogContent>
      </Dialog>
    </>
  );
}
