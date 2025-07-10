
import { useState } from 'react';
import { useAuth } from "@/hooks/useAuth";
import { supabase } from '@/integrations/supabase/client';
import type { Interview, InterviewRequest, InterviewResponse } from '@/types/interview';
import { toast } from '@/components/ui/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';

export function useInterviews() {

  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  // Request an interview as a client
  const requestInterview = async (interviewRequest: InterviewRequest): Promise<Interview | null> => {
    if (!supabase) throw new Error('Supabase client not initialized');
    if (!user) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to request interviews",
        variant: "destructive"
      });
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Insert the interview into the database
      const { data, error: insertError } = await supabase
        .from('interviews')
        .insert({
          client_id: interviewRequest.client_id,
          talent_id: interviewRequest.talent_id,
          scheduled_date: interviewRequest.scheduled_date,
          duration_minutes: interviewRequest.duration_minutes,
          notes: interviewRequest.notes,
          meeting_link: interviewRequest.meeting_link,
          meeting_platform: interviewRequest.meeting_platform,
          interview_type: interviewRequest.interview_type,
          title: interviewRequest.title,
          status: 'requested',
        })
        .select('*')
        .single();

      if (insertError) {
        logErrorToProduction('Error requesting interview:', { data: insertError });
        setError(insertError.message);
        return null;
      }

      // Create notification for talent
      await createInterviewNotification(
        interviewRequest.talent_id,
        'interview_request',
        'New Interview Request',
        `You have received an interview request for ${interviewRequest.scheduled_date}`,
        data.id
      );

      return data;
    } catch (err: unknown) {
      logErrorToProduction('Error in requestInterview:', { data: err });
      setError(err instanceof Error ? err.message : String(err));
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch interviews for the current user (as client or talent)
  const fetchInterviews = async (): Promise<Interview[]> => {
    if (!supabase) throw new Error('Supabase client not initialized');
    if (!user?.id) {
      setInterviews([]);
      return [];
    }

    setIsLoading(true);
    setError(null);

    try {
      // Get interviews where the user is either the client or the talent
      const { data, error: fetchError } = await supabase
        .from('interviews')
        .select(`
          *,
          clients:client_id(id, display_name, avatar_url),
          talents:talent_id(id, full_name, profile_picture_url)
        `)
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`)
        .order('scheduled_date', { ascending: true });

      if (fetchError) {
        logErrorToProduction('Error fetching interviews:', { data: fetchError });
        setError(fetchError.message);
        return [];
      }

      // Transform the data to match Interview type. Default to an empty array to
      // avoid "map is not a function" errors when no interviews are returned
      const formattedInterviews = (data ?? []).map((interview: unknown): Interview => {
        if (typeof interview !== 'object' || interview === null) throw new Error('Invalid interview data');
        const i = interview as Record<string, any>;
        return {
          id: i.id,
          client_id: i.client_id,
          talent_id: i.talent_id,
          scheduled_date: i.scheduled_date,
          end_time: i.end_time || '',
          duration_minutes: i.duration_minutes,
          status: i.status,
          notes: i.notes,
          meeting_link: i.meeting_link,
          meeting_platform: i.meeting_platform,
          created_at: i.created_at,
          updated_at: i.updated_at,
          title: i.title,
          interview_type: i.interview_type,
          client_name: i.clients?.display_name,
          talent_name: i.talents?.full_name,
          client_avatar: i.clients?.avatar_url,
          talent_avatar: i.talents?.profile_picture_url,
        };
      });

      setInterviews(formattedInterviews);
      return formattedInterviews;
    } catch (err: unknown) {
      logErrorToProduction('Error in fetchInterviews:', { data: err });
      setError(err instanceof Error ? err.message : String(err));
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  // Respond to an interview request (as talent)
  const respondToInterview = async (
    interviewId: string,
    response: InterviewResponse
  ): Promise<boolean> => {
    if (!supabase) throw new Error('Supabase client not initialized');
    if (!user?.id) {
      toast({
        title: "Authentication required",
        description: "You must be logged in to respond to interviews",
        variant: "destructive"
      });
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
        .update({
          status: response.status,
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId);

      if (updateError) {
        logErrorToProduction('Error responding to interview:', { data: updateError });
        setError(updateError.message);
        return false;
      }

      // Get the interview to notify the client
      const { data: interview, error: fetchError } = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)
        .single();

      if (fetchError) {
        logErrorToProduction('Error fetching interview:', { data: fetchError });
        setError(fetchError.message);
        return false;
      }

      // Create notification for client
      let notificationType = 'interview_confirmed';
      let title = 'Interview Confirmed';
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`;

      if (response.status === 'declined') {
        notificationType = 'interview_declined';
        title = 'Interview Declined';
        message = `Your interview request has been declined`;
      } else if (response.status === 'rescheduled') {
        notificationType = 'interview_rescheduled';
        title = 'Interview Rescheduled';
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`;
      }

      await createInterviewNotification(
        interview.client_id,
        notificationType,
        title,
        message,
        interviewId
      );

      // Refresh the interviews list
      await fetchInterviews();
      return true;
    } catch (err: unknown) {
      logErrorToProduction('Error in respondToInterview:', { data: err });
      setError(err instanceof Error ? err.message : String(err));
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  // Helper function to create interview notifications
  const createInterviewNotification = async (
    userId: string,
    type: string,
    title: string,
    message: string,
    relatedId: string
  ) => {
    if (!supabase) throw new Error('Supabase client not initialized');
    try {
      await supabase.from('notifications').insert({
        user_id: userId,
        type,
        title,
        message,
        related_id: relatedId,
      });
    } catch (error) {
      logErrorToProduction('Error creating notification:', { data: error });
    }
  };

  // Cancel an interview (either client or talent can cancel)
  const cancelInterview = async (interviewId: string): Promise<boolean> => {
    if (!supabase) throw new Error('Supabase client not initialized');
    if (!user?.id) return false;

    setIsLoading(true);
    setError(null);

    try {
      // Get the interview first to check permissions and get IDs for notifications
      const { data: interview, error: fetchError } = await supabase
        .from('interviews')
        .select('*')
        .eq('id', interviewId)
        .single();

      if (fetchError) {
        setError(fetchError.message);
        return false;
      }

      // Check if user is part of this interview
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {
        setError("You don't have permission to cancel this interview");
        return false;
      }

      // Update the interview status
      const { error: updateError } = await supabase
        .from('interviews')
        .update({
          status: 'cancelled',
          updated_at: new Date().toISOString()
        })
        .eq('id', interviewId);

      if (updateError) {
        setError(updateError.message);
        return false;
      }

      // Determine who to notify
      const notifyUserId = interview.client_id === user.id
        ? interview.talent_id
        : interview.client_id;

      // Create notification for the other party
      await createInterviewNotification(
        notifyUserId,
        'interview_cancelled',
        'Interview Cancelled',
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`,
        interviewId
      );

      // Refresh the interviews list
      await fetchInterviews();
      return true;
    } catch (err: unknown) {
      logErrorToProduction('Error in cancelInterview:', { data: err });
      setError(err instanceof Error ? err.message : String(err));
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    interviews,
    isLoading,
    error,
    requestInterview,
    fetchInterviews,
    respondToInterview,
    cancelInterview,
  };
}
