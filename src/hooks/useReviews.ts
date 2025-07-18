import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import type { Review, ReviewReport as _ReviewReport } from '@/types/reviews';
import { toast } from '@/hooks/use-toast';
import { logErrorToProduction } from '@/utils/productionLogger';

export function useReviews(projectId?: string) {
  const { _user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [userReview, setUserReview] = useState<Review | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Fetch reviews for a project
  const fetchProjectReviews = async (_projectId: string) => {
    if (!projectId) return;

    setIsLoading(true);

    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      const { data, error } = await supabase
        .from('reviews')
        .select(
          `
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `,
        )
        .eq('project_id', projectId)
        .eq('is_visible', true)
        .eq('status', 'approved');

      if (error) throw error;

      setReviews(data || []);

      // Check if current user has already submitted a review
      if (user) {
        if (!supabase) throw new Error('Supabase client not initialized');
        const { data: userReviewData, error: userReviewError } = await supabase
          .from('reviews')
          .select('*')
          .eq('project_id', projectId)
          .eq('reviewer_id', user.id)
          .single();

        if (!userReviewError && userReviewData) {
          setUserReview(userReviewData);
        }
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      logErrorToProduction('Error fetching reviews:', { data: message });
      toast({
        title: 'Error',
        description: 'Failed to load reviews',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch reviews for a user (to display on profile)
  const fetchUserReviews = async (_userId: string) => {
    if (!userId) return;

    setIsLoading(true);

    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      const { data, error } = await supabase
        .from('reviews')
        .select(
          `
          *,
          reviewer_profile:profiles!reviewer_id(display_name, avatar_url)
        `,
        )
        .eq('reviewee_id', userId)
        .eq('is_visible', true)
        .eq('status', 'approved')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setReviews(data || []);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      logErrorToProduction('Error fetching user reviews:', { data: message });
      toast({
        title: 'Error',
        description: 'Failed to load reviews',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Submit a review
  const submitReview = async (_review: {
    project_id: string;
    reviewee_id: string;
    rating: number;
    review_text: string;
    communication_rating?: number;
    quality_rating?: number;
    timeliness_rating?: number;
    would_work_again?: boolean;
    is_anonymous: boolean;
  }) => {
    if (!user) {
      toast({
        title: 'Error',
        description: 'You must be logged in to submit a review',
        variant: 'destructive',
      });
      return false;
    }

    setIsSubmitting(true);

    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      const { data, error } = await supabase
        .from('reviews')
        .insert({
          ...review,
          reviewer_id: user.id,
        })
        .select()
        .single();

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Your review has been submitted and is pending approval',
      });

      setUserReview(data);
      return true;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      logErrorToProduction('Error submitting review:', { data: message });

      // Check for unique constraint violation
      if (message.includes('23505')) {
        toast({
          title: 'Error',
          description: 'You have already submitted a review for this project',
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Failed to submit review',
          variant: 'destructive',
        });
      }
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Update a review
  const updateReview = async (reviewId: string, _updates: Partial<Review>) => {
    if (!user) return false;

    setIsSubmitting(true);

    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      const { _error } = await supabase
        .from('reviews')
        .update(updates)
        .eq('id', reviewId)
        .eq('reviewer_id', user.id)
        .eq('status', 'pending');

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Your review has been updated',
      });

      if (userReview) {
        setUserReview({ ...userReview, ...updates });
      }

      return true;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      logErrorToProduction('Error updating review:', { data: message });
      toast({
        title: 'Error',
        description: 'Failed to update review',
        variant: 'destructive',
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  // Report a review
  const reportReview = async (reviewId: string, _reason: string) => {
    if (!user) return false;

    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      const { _error } = await supabase.from('review_reports').insert({
        review_id: reviewId,
        reporter_id: user.id,
        reason,
      });

      if (error) {
        // Check for unique constraint violation
        if (error.code === '23505') {
          toast({
            title: 'Error',
            description: 'You have already reported this review',
            variant: 'destructive',
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: 'Report Submitted',
          description: 'Thank you. Our team will review your report',
        });
        return true;
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      logErrorToProduction('Error reporting review:', { data: message });
      toast({
        title: 'Error',
        description: 'Failed to report review',
        variant: 'destructive',
      });
    }

    return false;
  };

  // Initialize by fetching reviews if projectId is provided
  if (projectId && reviews.length === 0 && !isLoading) {
    fetchProjectReviews(projectId);
  }

  return {
    reviews,
    userReview,
    isLoading,
    isSubmitting,
    fetchProjectReviews,
    fetchUserReviews,
    submitReview,
    updateReview,
    reportReview,
  };
}
