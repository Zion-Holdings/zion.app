import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getFeedback, getFeedbackStats, FeedbackEntry } from '@/services/feedbackService';

export default function FeedbackAnalytics() {
  const [feedback, setFeedback] = useState<FeedbackEntry[]>([]);
  const [stats, setStats] = useState<{ count: number; averageRating: number }>({ count: 0, averageRating: 0 });

  useEffect(() => {
    setFeedback(getFeedback());
    setStats(getFeedbackStats());
  }, []);

  return (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Feedback Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Total Feedback: {stats.count}</p>
          <p>Average Rating: {stats.averageRating.toFixed(2)}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Recent Feedback</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {feedback.map(f => (
              <li key={f.id} className="border-b pb-2">
                <div>Rating: {f.rating}</div>
                {f.comment && <div className="text-sm italic">{f.comment}</div>}
                <div className="text-xs text-muted-foreground">{new Date(f.createdAt).toLocaleString()}</div>
              </li>
            ))}
            {feedback.length === 0 && <li>No feedback submitted yet.</li>}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
