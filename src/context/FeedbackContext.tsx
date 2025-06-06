import React, { createContext, useContext, useState } from 'react';

interface FeedbackContextType {
  rating: number;
  comment: string;
  setRating: (r: number) => void;
  setComment: (c: string) => void;
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

  const reset = () => {
    setRating(0);
    setComment('');
  };

  return (
    <FeedbackContext.Provider value={{ rating, comment, setRating, setComment, reset }}>
      {children}
    </FeedbackContext.Provider>
  );
}
