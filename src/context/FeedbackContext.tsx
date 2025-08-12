import React, { createContext, useContext, useState } from 'react';

interface FeedbackContextType {
  rating: number;
  comment: string;
  screenshot: string | null;
  setRating: (r: number) => void;
  setComment: (c: string) => void;
  setScreenshot: (s: string | null) => void;
  reset: () => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export function useFeedback() {
  const ctx = useContext(FeedbackContext);
  if (!ctx) throw new Error('useFeedback must be used within FeedbackProvider');
  return ctx;
}

export function FeedbackProvider({ children }: { children: React.ReactNode }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [screenshot, setScreenshot] = useState<string | null>(null);

  const reset = () => {
    setRating(0);
    setComment('');
    setScreenshot(null);
  };

  return (
    <FeedbackContext.Provider value={{ rating, comment, screenshot, setRating, setComment, setScreenshot, reset }}>
      {children}
    </FeedbackContext.Provider>
  );
}
