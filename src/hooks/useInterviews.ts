<<<<<<< HEAD
import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client'
import type {;
  Interview,;
  InterviewRequest,'
  InterviewResponse,;
} from '@/types/interview'
import { toast } from '@/components/ui/use-toast'
import  { logErrorToProduction }  from '@/utils/productionLogger;
export function useInterviews(): ;
  const [interviews, setInterviews] = useState<Interview[]>([]);;
  const [isLoading, setIsLoading] = useState(false);;
  const [error, setError] = useState<string | null>(null)'
  const { _user } = useAuth();
  // Request an interview as a client'
  const requestInterview: async (;",;"
    interviewRequest: InterviewRequest,;"
  ): Promise<Interview | null> => {;"
    if (!supabase) throw new Error('Supabase client not initialized');
    if (!user) {'
      toast({;
        title: 'Authentication required',;
        description: 'You must be logged in to request interviews',;
        variant: 'destructive',;
      });
      return null;
    };
    setIsLoading(true)'
    setError(null);
    try {'
      // Insert the interview into the database;
      const { data, error: "insertError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;"
        .from('interviews')'
        .insert({;
          client_id: "interviewRequest.client_id"
          talent_id: "interviewRequest.talent_id"
          scheduled_date: "interviewRequest.scheduled_date"
          duration_minutes: "interviewRequest.duration_minutes"
          notes: "interviewRequest.notes"
          meeting_link: "interviewRequest.meeting_link"
          meeting_platform: "interviewRequest.meeting_platform"
          interview_type: "interviewRequest.interview_type"
          title: "interviewRequest.title"
          status: 'requested','
        });
        .select('*');
        .single();
'
      if (insertError) {;
        logErrorToProduction('Error requesting interview:', {;
          data: insertError,;
        });
        setError(insertError.message);
        return null;
      };"
;";"
      // Create notification for talent;"
      await createInterviewNotification(;"
        interviewRequest.talent_id,;"
        'interview_request',;
        'New Interview Request',;
        `You have received an interview request for ${interviewRequest.scheduled_date}`,;
        data.id,'
      );
      return data'
    } catch (err: unknown) {;
      logErrorToProduction('Error in requestInterview:', { data: "err "});
=======
import { useState } from 'react';';
import { useAuth } from '@/hooks/useAuth;'';
import { supabase } from '@/integrations/supabase/client;'';
import type {;
  Interview,;
  InterviewRequest,;''
  InterviewResponse,;;
} from '@/types/interview;'';
import { toast } from '@/components/ui/use-toast;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;
export function useInterviews(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const [interviews, setInterviews] = useState<Interview[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);''
  const { _user } = useAuth();
;
  // Request an interview as a client;''
  const requestInterview: unknown "unknown = async (;",;""
    interviewRequest: "InterviewRequest",;";";";""
  ): Promise<Interview | null> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');'
    if (!user) {;''
      toast({;;
        title: 'Authentication required',;;'
        description: 'You must be logged in to request interviews',;;'
        variant: 'destructive',;'
      });
      return null;
    };
;
    setIsLoading(true);''
    setError(null);
;
    try {;''
      // Insert the interview into the database;;
      const { data, error: "insertError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";""
        .from('interviews');''
        .insert({;;
          client_id: "interviewRequest.client_id",;";";";";""
          talent_id: "interviewRequest.talent_id",;";";";";""
          scheduled_date: "interviewRequest.scheduled_date",;";";";";""
          duration_minutes: "interviewRequest.duration_minutes",;";";";";""
          notes: "interviewRequest.notes",;";";";";""
          meeting_link: "interviewRequest.meeting_link",;";";";";""
          meeting_platform: "interviewRequest.meeting_platform",;";";";";""
          interview_type: "interviewRequest.interview_type",;";";";";""
          title: "interviewRequest.title",;";";";";""
          status: 'requested',;''
        });;
        .select('*');'
        .single();
;''
      if (insertError) {;;
        logErrorToProduction('Error requesting interview:', {;;'
          data: "insertError",;"
        });
        setError(insertError.message);
        return null;
      };""
;";""
      // Create notification for talent;";";""
      await createInterviewNotification(;";";";""
        interviewRequest.talent_id,;";";";";""
        'interview_request',;;'
        'New Interview Request',;'
        `You have received an interview request for ${interviewRequest.scheduled_date}`,;
        data.id,;''
      );
;
      return data;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error in requestInterview:', { data: "err "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      setError(err instanceof Error ? err.message : String(err));
      return null;
    } finally {;
      setIsLoading(false);
<<<<<<< HEAD
    };"
  };";"
;"
  // Fetch interviews for the current user (as client or talent);"
  const fetchInterviews = async (): Promise<Interview[]> => {;"
    if (!supabase) throw new Error('Supabase client not initialized');
=======
    };""
  };";""
;";";""
  // Fetch interviews for the current user (as client or talent);";";";""
  const fetchInterviews: unknown = async (): Promise<Interview[]> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    if (!user?.id) {;
      setInterviews([]);
      return [];
    };
<<<<<<< HEAD
    setIsLoading(true)'
    setError(null);
    try {'
      // Get interviews where the user is either the client or the talent;
      const { data, error: "fetchError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;"
        .from('interviews');
        .select(;
          `'
          *,;
          clients: client_id(id, display_name, avatar_url),;"
          talents: talent_id(id, full_name, profile_picture_url);"
        `,;"
        );"
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`);"
        .order('scheduled_date', { ascending: "true "});"
;"
      if (fetchError) {;"
        logErrorToProduction('Error fetching interviews:', {;
          data: fetchError,;
        });
        setError(fetchError.message);"
        return [];";"
      };"
;"
      // Transform the data to match Interview type. Default to an empty array to;"
      // avoid "map is not a function" errors when no interviews are returned;"
      type InterviewRaw = {;"
        id: "string;"
        client_id: string;,"
        talent_id: string;,;"
        scheduled_date: string;"
        end_time?: string;"
        duration_minutes: number;,;"
        status: string;";"
        notes?: string;"
        meeting_link?: string;"
        meeting_platform?: string;"
        created_at: "string;"
        updated_at: string;,"
        title: string;,;
        interview_type: string;"
        clients?: { display_name?: string; avatar_url?: string };";"
        talents?: { full_name?: string; profile_picture_url?: string };"
      };"
      const validStatuses = [;"
        'requested',;
        'confirmed',;
        'declined',;
        'rescheduled',;
        'completed',;
        'cancelled',;
      ] as const'
      const validPlatforms = [;
        'zoom',;
        'google-meet',;
        'teams',;
        'other',;
        'in-app','
      ] as const;
      const validTypes = ['video', 'phone', 'in-person'] as const;
      const formattedInterviews = (data ?? []).map(;
        (interview: InterviewRaw): Interview => {'
          const status = validStatuses.includes(;
            interview.status as (typeof validStatuses)[number],;
          )'
            ? (interview.status as (typeof validStatuses)[number]);
            : 'requested;
          const meeting_platform: unknown =;
            interview.meeting_platform &&'
            validPlatforms.includes(;
              interview.meeting_platform as (typeof validPlatforms)[number],;
            )'
              ? (interview.meeting_platform as (typeof validPlatforms)[number]);
              : 'zoom // Default to 'zoom' instead of undefined'
          const interview_type = validTypes.includes(;
            interview.interview_type as (typeof validTypes)[number],;
          )'
            ? (interview.interview_type as (typeof validTypes)[number]);
            : 'video'
          const result: unknown "Interview = {;"
            id: "interview.id"
            client_id: "interview.client_id"
            talent_id: "interview.talent_id"
            scheduled_date: interview.scheduled_date,;"
            end_time:;"
              interview.end_time !== undefined ? interview.end_time : '',;
            duration_minutes: interview.duration_minutes,;"
            status,;"
            meeting_platform,;"
            created_at: "interview.created_at"
            updated_at: interview.updated_at,;
            interview_type,;"
          };";"
          if (interview.meeting_link !== undefined);"
            result.meeting_link = interview.meeting_link;"
          if (interview.notes !== undefined) result.notes = interview.notes;"
          if (typeof interview.title === 'string');
=======
;
    setIsLoading(true);''
    setError(null);
;
    try {;''
      // Get interviews where the user is either the client or the talent;;
      const { data, error: "fetchError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";""
        .from('interviews');'
        .select(;
          `;''
          *,;;
          clients: "client_id(id", display_name, avatar_url),;";";";";""
          talents: "talent_id(id", full_name, profile_picture_url);";""
        `,;";";""
        );";";";""
        .or(`client_id.eq.${user.id},talent_id.eq.${user.id}`);";";";";""
        .order('scheduled_date', { ascending: "true "});";";""
;";";";""
      if (fetchError) {;";";";";""
        logErrorToProduction('Error fetching interviews:', {;;'
          data: "fetchError",;"
        });
        setError(fetchError.message);""
        return [];";""
      };";";""
;";";";""
      // Transform the data to match Interview type. Default to an empty array to;";";";";""
      // avoid "map is not a function" errors when no interviews are returned;";";";""
      type InterviewRaw = {;";";";";""
        id: "string;",;";";";";""
        client_id: "string;",";";";";""
        talent_id: "string;",;";";""
        scheduled_date: string;";";";""
        end_time?: string;";";";";""
        duration_minutes: "number;",;""
        status: string;";""
        notes?: string;";";""
        meeting_link?: string;";";";""
        meeting_platform?: string;";";";";""
        created_at: "string;",;";";";";""
        updated_at: "string;",";";";";""
        title: "string;",;"
        interview_type: string;""
        clients?: { display_name?: string; avatar_url?: string };";""
        talents?: { full_name?: string; profile_picture_url?: string };";";""
      };";";";""
      const validStatuses: unknown = [;";";";";""
        'requested',;;'
        'confirmed',;;'
        'declined',;;'
        'rescheduled',;;'
        'completed',;;'
        'cancelled',;'
      ] as const;''
      const validPlatforms: unknown = [;;
        'zoom',;;'
        'google-meet',;;'
        'teams',;;'
        'other',;;'
        'in-app',;''
      ] as const;;
      const validTypes: unknown = ['video', 'phone', 'in-person'] as const;'
      const formattedInterviews: unknown = (data ?? []).map(;
        (interview: InterviewRaw): Interview => {;''
          const status: unknown = validStatuses.includes(;
            interview.status as (typeof validStatuses)[number],;
          );''
            ? (interview.status as (typeof validStatuses)[number]);;
            : 'requested;'
          const meeting_platform: unknown =;
            interview.meeting_platform &&;''
            validPlatforms.includes(;
              interview.meeting_platform as (typeof validPlatforms)[number],;
            );''
              ? (interview.meeting_platform as (typeof validPlatforms)[number]);;
              : 'zoom // Default to 'zoom' instead of undefined;''
          const interview_type: unknown = validTypes.includes(;
            interview.interview_type as (typeof validTypes)[number],;
          );''
            ? (interview.interview_type as (typeof validTypes)[number]);;
            : 'video;''
          const result: unknown "Interview = {;",;";";";";""
            id: "interview.id",;";";";";""
            client_id: "interview.client_id",;";";";";""
            talent_id: "interview.talent_id",;";";";";""
            scheduled_date: "interview.scheduled_date",;";";";""
            end_time:;";";";";""
              interview.end_time !== undefined ? interview.end_time : '',;;'
            duration_minutes: "interview.duration_minutes",;";";""
            status,;";";";""
            meeting_platform,;";";";";""
            created_at: "interview.created_at",;";";";";""
            updated_at: "interview.updated_at",;"
            interview_type,;""
          };";""
          if (interview.meeting_link !== undefined);";";""
            result.meeting_link = interview.meeting_link;";";";""
          if (interview.notes !== undefined) result.notes = interview.notes;";";";";""
          if (typeof interview.title === 'string');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
            result.title = interview.title;
          if (interview.clients?.display_name !== undefined);
            result.client_name = interview.clients.display_name;
          if (interview.talents?.full_name !== undefined);
            result.talent_name = interview.talents.full_name;
          if (interview.clients?.avatar_url !== undefined);
            result.client_avatar = interview.clients.avatar_url;
          if (interview.talents?.profile_picture_url !== undefined);
            result.talent_avatar = interview.talents.profile_picture_url;
          return result;
        },;
<<<<<<< HEAD
      )'
;
      setInterviews(formattedInterviews);
      return formattedInterviews'
    } catch (err: unknown) {;
      logErrorToProduction('Error in fetchInterviews:', { data: "err "});
=======
      );''
;
      setInterviews(formattedInterviews);
      return formattedInterviews;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error in fetchInterviews:', { data: "err "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      setError(err instanceof Error ? err.message : String(err));
      return [];
    } finally {;
      setIsLoading(false);
<<<<<<< HEAD
    };"
  };";"
;"
  // Respond to an interview request (as talent);"
  const respondToInterview = async (;";,"
    interviewId: "string"
    response: InterviewResponse,;"
  ): Promise<boolean> => {;"
    if (!supabase) throw new Error('Supabase client not initialized');
    if (!user?.id) {'
      toast({;
        title: 'Authentication required',;
        description: 'You must be logged in to respond to interviews',;
        variant: 'destructive',;
      });
      return false;
    };
    setIsLoading(true)'
    setError(null);
    try {'
      // Update the interview status;
      const { error: "updateError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;"
        .from('interviews')'
        .update({;
          status: "response.status"
          updated_at: new Date().toISOString(),;"
        });"
        .eq('id', interviewId);
'
      if (updateError) {;
        logErrorToProduction('Error responding to interview:', {;
          data: updateError,;
        });
        setError(updateError.message);"
        return false;";"
      };"
;"
      // Get the interview to notify the client;"
      const { data: interview, error: "fetchError "} = await supabase;"
        .from('interviews');
        .select('*');
        .eq('id', interviewId);
        .single();
'
      if (fetchError) {;
        logErrorToProduction('Error fetching interview:', { data: "fetchError "});
        setError(fetchError.message);"
        return false;";"
      };"
;"
      // Create notification for client;"
      let notificationType = 'interview_confirmed'
      let title = 'Interview Confirmed;
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`'
;
      if (response.status === 'declined') {;
        notificationType = 'interview_declined'
        title = 'Interview Declined;
        message = `Your interview request has been declined`;
      } else if (response.status === 'rescheduled') {;
        notificationType = 'interview_rescheduled'
        title = 'Interview Rescheduled'
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`;
=======
    };""
  };";""
;";";""
  // Respond to an interview request (as talent);";";";""
  const respondToInterview: unknown = async (;";,";";";""
    interviewId: "string",;";";";";""
    response: "InterviewResponse",;";";";""
  ): Promise<boolean> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');'
    if (!user?.id) {;''
      toast({;;
        title: 'Authentication required',;;'
        description: 'You must be logged in to respond to interviews',;;'
        variant: 'destructive',;'
      });
      return false;
    };
;
    setIsLoading(true);''
    setError(null);
;
    try {;''
      // Update the interview status;;
      const { error: "updateError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";""
        .from('interviews');''
        .update({;;
          status: "response.status",;";";";";""
          updated_at: "new Date().toISOString()",;";";";""
        });";";";";""
        .eq('id', interviewId);'
;''
      if (updateError) {;;
        logErrorToProduction('Error responding to interview:', {;;'
          data: "updateError",;"
        });
        setError(updateError.message);""
        return false;";""
      };";";""
;";";";""
      // Get the interview to notify the client;";";";";""
      const { data: "interview", error: "fetchError "} = await supabase;";";";";""
        .from('interviews');;'
        .select('*');;'
        .eq('id', interviewId);'
        .single();
;''
      if (fetchError) {;;
        logErrorToProduction('Error fetching interview:', { data: "fetchError "});"
        setError(fetchError.message);""
        return false;";""
      };";";""
;";";";""
      // Create notification for client;";";";";""
      let notificationType = 'interview_confirmed;''
      let title = 'Interview Confirmed;'
      let message = `Your interview request for ${interview.scheduled_date} has been confirmed`;''
;;
      if (response.status === 'declined') {;;'
        notificationType = 'interview_declined;''
        title = 'Interview Declined;'
        message = `Your interview request has been declined`;;
      } else if (response.status === 'rescheduled') {;;'
        notificationType = 'interview_rescheduled;''
        title = 'Interview Rescheduled;''
        message = `Your interview has been rescheduled to ${response.alternative_date || 'a new time'}`;'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      };
      await createInterviewNotification(;
        interview.client_id,;
        notificationType,;
        title,;
        message,;
        interviewId,;
      );
<<<<<<< HEAD
'
      // Refresh the interviews list;
      await fetchInterviews();
      return true'
    } catch (err: unknown) {;
      logErrorToProduction('Error in respondToInterview:', { data: "err "});
=======
;''
      // Refresh the interviews list;
      await fetchInterviews();
      return true;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error in respondToInterview:', { data: "err "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      setError(err instanceof Error ? err.message : String(err));
      return false;
    } finally {;
      setIsLoading(false);
<<<<<<< HEAD
    };"
  };";"
;"
  // Helper function to create interview notifications;"
  const createInterviewNotification = async (;";,"
    userId: "string"
    type: "string"
    title: "string"
    message: "string"
    _relatedId: string,;"
  ) => {;"
    if (!supabase) throw new Error('Supabase client not initialized')'
    try {;
      await supabase.from('notifications').insert({;
        user_id: userId,;"
        type,;"
        title,;"
        message,;"
        related_id: relatedId,;"
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});"
    } catch {;"
      logErrorToProduction('Error creating notification:', { data: "error "});
    };"
  };";"
;"
  // Cancel an interview (either client or talent can cancel);"
  const cancelInterview = async (interviewId: string): Promise<boolean> => {;"
    if (!supabase) throw new Error('Supabase client not initialized');
    if (!user?.id) return false;
    setIsLoading(true)'
    setError(null);
    try {'
      // Get the interview first to check permissions and get IDs for notifications;
      const { data: interview, error: "fetchError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;"
        .from('interviews');
        .select('*');
        .eq('id', interviewId);
=======
    };""
  };";""
;";";""
  // Helper function to create interview notifications;";";";""
  const createInterviewNotification: unknown = async (;";,";";";""
    userId: "string",;";";";";""
    type: "string",;";";";";""
    title: "string",;";";";";""
    message: "string",;";";";";""
    _relatedId: "string",;";";";""
  ) => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');''
    try {;;
      await supabase.from('notifications').insert({;;'
        user_id: "userId",;";""
        type,;";";""
        title,;";";";""
        message,;";";";";""
        related_id: "relatedId",;";";""
      } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {});";";";""
    } catch {;";";";";""
      logErrorToProduction('Error creating notification:', { data: "error "});"
    };""
  };";""
;";";""
  // Cancel an interview (either client or talent can cancel);";";";""
  const cancelInterview: unknown = async (interviewId: string): Promise<boolean> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');'
    if (!user?.id) return false;
;
    setIsLoading(true);''
    setError(null);
;
    try {;''
      // Get the interview first to check permissions and get IDs for notifications;;
      const { data: "interview", error: "fetchError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";""
        .from('interviews');;'
        .select('*');;'
        .eq('id', interviewId);'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        .single();
      if (fetchError) {;
        setError(fetchError.message);
<<<<<<< HEAD
        return false'
      };
      // Check if user is part of this interview'
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {;
        setError("You don't have permission to cancel this interview");"
        return false;";"
      };"
;"
      // Update the interview status;"
      const { error: "updateError "} = await supabase;"
        .from('interviews')'
        .update({;
          status: 'cancelled',;
          updated_at: new Date().toISOString(),;"
        });"
        .eq('id', interviewId);
=======
        return false;''
      };
;
      // Check if user is part of this interview;''
      if (interview.client_id !== user.id && interview.talent_id !== user.id) {;;
        setError("You don't have permission to cancel this interview");""
        return false;";""
      };";";""
;";";";""
      // Update the interview status;";";";";""
      const { error: "updateError "} = await supabase;";";";";""
        .from('interviews');''
        .update({;;
          status: 'cancelled',;;'
          updated_at: "new Date().toISOString()",;";";";""
        });";";";";""
        .eq('id', interviewId);'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      if (updateError) {;
        setError(updateError.message);
        return false;
      };
      // Determine who to notify;
      const notifyUserId: unknown =;
        interview.client_id === user.id;
          ? interview.talent_id;
<<<<<<< HEAD
          : interview.client_id'
;
      // Create notification for the other party;
      await createInterviewNotification('
        notifyUserId,;
        'interview_cancelled',;
        'Interview Cancelled',;
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`,;
        interviewId,;
      );
'
      // Refresh the interviews list;
      await fetchInterviews();
      return true'
    } catch (err: unknown) {;
      logErrorToProduction('Error in cancelInterview:', { data: "err "});
=======
          : interview.client_id;''
;
      // Create notification for the other party;
      await createInterviewNotification(;''
        notifyUserId,;;
        'interview_cancelled',;;'
        'Interview Cancelled',;'
        `The scheduled interview for ${interview.scheduled_date} has been cancelled`,;
        interviewId,;
      );
;''
      // Refresh the interviews list;
      await fetchInterviews();
      return true;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error in cancelInterview:', { data: "err "});"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      setError(err instanceof Error ? err.message : String(err));
      return false;
    } finally {;
      setIsLoading(false);
    };
  };
  return {;
    interviews,;
    isLoading,;
    error,;
    requestInterview,;
    fetchInterviews,;
<<<<<<< HEAD
    respondToInterview,;"
    cancelInterview,;";"
  };"
};"
"
}"
}";"
}"
}"
=======
    respondToInterview,;""
    cancelInterview,;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
