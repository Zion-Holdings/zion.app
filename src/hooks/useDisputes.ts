<<<<<<< HEAD
import { useState, useEffect } from 'react''
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import type { Dispute, DisputeMessage, DisputeStatus } from '@/types/disputes'
import type { ResolutionType } from '@/types/disputes'
import { toast } from 'sonner'
import  { logErrorToProduction }  from '@/utils/productionLogger'
export function useDisputes(): ;
  const { _user } = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([])'
  const [isLoading, setIsLoading] = useState(true)'
  const [error, setError] = useState<string | null>(null);
'
  const fetchDisputes = async () => {'
    if (!supabase) throw new Error('Supabase client not initialized')'
    if (!user) {;
      setIsLoading(false);
      return;
    }'
'
    try {;
      setIsLoading(true)'
'
      const { data, error: "fetchError } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase
        .from('disputes')'
=======
import { useState, useEffect } from 'react';';
import { supabase } from '@/integrations/supabase/client;'';
import { useAuth } from '@/hooks/useAuth;'';
import type { Dispute, DisputeMessage, DisputeStatus } from '@/types/disputes;'';
import type { ResolutionType } from '@/types/disputes;'';
import { toast } from 'sonner;'';
import { logErrorToProduction } from '@/utils/productionLogger;'
;
export function useDisputes(): unknown {): unknown {): unknown {): unknown {): unknown {) {;
  const { _user } = useAuth();
  const [disputes, setDisputes] = useState<Dispute[]>([]);''
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
;''
  const fetchDisputes: unknown = async () => {;;
    if (!supabase) throw new Error('Supabase client not initialized');'
    if (!user) {;
      setIsLoading(false);
      return;
    };''
;
    try {;
      setIsLoading(true);''
;;
      const { data, error: "fetchError "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";""
        .from('disputes');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        .select(;
          `;
          *,;
          project:projects(;
            scope_summary,;
<<<<<<< HEAD
            job_id,'
            client_id,'
            talent_id,;
            job:jobs(title)'
          ),'
          client_profile: projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),;"
          talent_profile: projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))"
        `,;
        )
        .order('created_at', { ascending: "false "})
;"
      if (fetchError) throw fetchError;"

      // Transform data if needed. Use an empty array if `data` is null to avoid;
      // "map is not a function" errors when the request fails
      const transformedData = (data ?? []).map((dispute: Dispute) => dispute)
      setDisputes(transformedData as Dispute[]);""
      setError(null);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);"
      logErrorToProduction('Error fetching disputes:', { data: "err })
      setError('Failed to fetch disputes: ' + message)'
      toast.error('Failed to fetch disputes')'
    } finally {;
      setIsLoading(false)'
    }'
  };
'
  const getDisputeById = async (disputeId: string): Promise<Dispute | null> => {'
    if (!supabase) throw new Error('Supabase client not initialized')'
    try {'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase'
        .from('disputes')'
        .select(`;
          *,;
          project:projects(;
            scope_summary,;
            job_id,'
            client_id,'
            talent_id,;
            job:jobs(title)'
          ),'
          client_profile: projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name, avatar_url)),;"
          talent_profile: projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name, avatar_url))"
        `,;
        )
        .eq('id', disputeId)'
        .single();
'
      if (error) throw error'
      return {'
        ...data,'
        client_profile: "data.client_profile?.client_profile"
        talent_profile: data.talent_profile?.talent_profile,
        project: {;
          ...data.project,"
          title: data.project?.job?.title || 'Untitled Project','
        },;
      } as Dispute'
    } catch (err: unknown) {'
      logErrorToProduction('Error fetching dispute:', { data: "err })
      toast.error('Failed to fetch dispute details')'
      return null'
    };
  }'
'
  const createDispute = async (disputeData: {;,;"
    project_id: string"
    milestone_id?: string;
    reason_code: string"
    description: "string
  }): Promise<Dispute | null> => {;
    if (!supabase) throw new Error('Supabase client not initialized')'
    if (!user) {'
      toast.error('You must be logged in to create a dispute')'
      return null'
    }'
    try {'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase'
        .from('disputes')'
        .insert({'
          ...disputeData,'
          raised_by: user.id,;
        });
        .select()"
        .single();"

      if (error) throw error"
;"
      toast.success('Dispute submitted successfully')'
      fetchDisputes(); // Refresh the list'
      return data as Dispute'
    } catch (err: unknown) {'
      logErrorToProduction('Error creating dispute:', { data: err })"
      toast.error('Failed to submit dispute')'
      return null'
    }'
  };
'
  const updateDisputeStatus: async (;",
    disputeId: string"
    status: DisputeStatus,"
  ): Promise<boolean> => {;
    if (!supabase) throw new Error('Supabase client not initialized')'
    try {'
      const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase'
        .from('disputes')'
        .update({ status })'
        .eq('id', disputeId)'
=======
            job_id,;''
            client_id,;
            talent_id,;
            job:jobs(title);''
          ),;;
          client_profile: "projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name", avatar_url)),;";";";";""
          talent_profile: "projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name", avatar_url));";";""
        `,;";";";""
        );";";";";""
        .order('created_at', { ascending: "false "});""
;";""
      if (fetchError) throw fetchError;";";""
;";";";""
      // Transform data if needed. Use an empty array if `data` is null to avoid;";";";";""
      // "map is not a function" errors when the request fails;"
      const transformedData: unknown = (data ?? []).map((dispute: Dispute) => dispute);
;""
      setDisputes(transformedData as Dispute[]);";""
      setError(null);";";""
    } catch (err: unknown) {;";";";""
      const message: unknown = err instanceof Error ? err.message : String(err);";";";";""
      logErrorToProduction('Error fetching disputes:', { data: "err "});";";";";""
      setError('Failed to fetch disputes: ' + message);;'
      toast.error('Failed to fetch disputes');'
    } finally {;
      setIsLoading(false);''
    };
  };
;''
  const getDisputeById: unknown = async (disputeId: string): Promise<Dispute | null> => {;;
    if (!supabase) throw new Error('Supabase client not initialized');'
    try {;''
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
        .from('disputes');'
        .select(;
          `;
          *,;
          project:projects(;
            scope_summary,;
            job_id,;''
            client_id,;
            talent_id,;
            job:jobs(title);''
          ),;;
          client_profile: "projects!projects_client_id_fkey(client_profile:profiles!projects_client_id_fkey(display_name", avatar_url)),;";";";";""
          talent_profile: "projects!projects_talent_id_fkey(talent_profile:profiles!projects_talent_id_fkey(display_name", avatar_url));";";""
        `,;";";";""
        );";";";";""
        .eq('id', disputeId);'
        .single();
;''
      if (error) throw error;
;
      return {;''
        ...data,;;
        client_profile: "data.client_profile?.client_profile",;";";";";""
        talent_profile: "data.talent_profile?.talent_profile",;";";""
        project: {;";";";""
          ...data.project,;";";";";""
          title: data.project?.job?.title || 'Untitled Project',;'
        },;
      } as Dispute;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error fetching dispute:', { data: "err "});";";";";""
      toast.error('Failed to fetch dispute details');''
      return null;
    };
  };''
;;
  const createDispute: unknown = async (disputeData: "{;",;";";""
    project_id: string;";";";""
    milestone_id?: string;";";";";""
    reason_code: "string;",;";";";";""
    description: "string;";";";";""
  }): Promise<Dispute | null> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');''
    if (!user) {;;
      toast.error('You must be logged in to create a dispute');'
      return null;''
    };
;
    try {;''
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
        .from('disputes');'
        .insert({;''
          ...disputeData,;;
          raised_by: "user.id",;"
        });
        .select();""
        .single();";""
;";";""
      if (error) throw error;";";";""
;";";";";""
      toast.success('Dispute submitted successfully');''
      fetchDisputes(); // Refresh the list;
;
      return data as Dispute;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error creating dispute:', { data: "err "});";";";";""
      toast.error('Failed to submit dispute');'
      return null;''
    };
  };
;''
  const updateDisputeStatus: unknown "unknown = async (;",;""
    disputeId: "string",;";";";";""
    status: "DisputeStatus",;";";";""
  ): Promise<boolean> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');'
    try {;''
      const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
        .from('disputes');''
        .update({ status });;
        .eq('id', disputeId);'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      if (error) throw error;
      // Update local state;
      setDisputes((prevDisputes) =>;
        prevDisputes.map((dispute) =>;
          dispute.id === disputeId ? { ...dispute, status } : dispute,;
        ),;
<<<<<<< HEAD
      )'
'
      toast.success(`Dispute status updated to ${status}`);
      return true'
    } catch (err: unknown) {'
      logErrorToProduction('Error updating dispute status:', { data: err "})"
      toast.error('Failed to update dispute status')'
      return false'
    }'
  };
'
  const resolveDispute: async (;,
    disputeId: "string"
    resolution: { summary: string; resolution_type: string },"
  ): Promise<boolean> => {;"
    if (!supabase) throw new Error('Supabase client not initialized')'
    try {'
      const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase'
        .from('disputes')'
        .update({'
          status: 'resolved','
          resolved_at: new Date().toISOString()
          resolution_summary: "resolution.summary"
          resolution_type: resolution.resolution_type as ResolutionType,
        });
        .eq('id', disputeId)'
=======
      );''
;
      toast.success(`Dispute status updated to ${status}`);
      return true;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error updating dispute status:', { data: "err "});";";";";""
      toast.error('Failed to update dispute status');'
      return false;''
    };
  };
;''
  const resolveDispute: unknown "unknown = async (;",;""
    disputeId: "string",;";";";";""
    resolution: "{ summary: string; resolution_type: string "},;";";";""
  ): Promise<boolean> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');'
    try {;''
      const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
        .from('disputes');''
        .update({;;
          status: 'resolved',;;'
          resolved_at: "new Date().toISOString()",;";";";";""
          resolution_summary: "resolution.summary",;";";";";""
          resolution_type: "resolution.resolution_type as ResolutionType",;";";";""
        });";";";";""
        .eq('id', disputeId);'
;
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      if (error) throw error;
      // Update local state;
      setDisputes(;
<<<<<<< HEAD
        (prevDisputes) =>'
          prevDisputes.map((dispute) =>'
            dispute.id === disputeId;
              ? ({'
                  ...dispute,'
                  status: 'resolved','
                  resolved_at: "new Date().toISOString()"
                  resolution_summary: resolution.summary
                  resolution_type: resolution.resolution_type as ResolutionType,"
                } as Dispute)"
              : (dispute as Dispute),;
          ) as Dispute[],;"
      )"

      toast.success('Dispute resolved successfully')'
      return true'
    } catch (err: unknown) {'
      logErrorToProduction('Error resolving dispute:', { data: err "})"
      toast.error('Failed to resolve dispute')'
      return false'
    }'
  };
'
  const getDisputeMessages: async (;,
    disputeId: string,;"
  ): Promise<DisputeMessage[]> => {"
    if (!supabase) throw new Error('Supabase client not initialized')'
    try {'
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase'
        .from('dispute_messages')'
        .select(`'
          *,'
          user_profile: profiles!dispute_messages_user_id_fkey(display_name, avatar_url);
        `,
        );"
        .eq('dispute_id', disputeId)'
        .order('created_at', { ascending: "true })
      if (error) throw error;""

      return data as DisputeMessage[]
    } catch (err: unknown) {;"
      logErrorToProduction('Error fetching dispute messages:', { data: "err })
      toast.error('Failed to fetch messages')'
      return []'
    }'
  };
'
  const addDisputeMessage: async (;","
    disputeId: string
    message: string,"
    isAdminNote = false,;"
  ): Promise<boolean> => {
    if (!supabase) throw new Error('Supabase client not initialized')'
    if (!user) {'
      toast.error('You must be logged in to send a message')'
      return false'
    };
'
    try {'
      const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.from('dispute_messages').insert({'
        dispute_id: disputeId"
        user_id: user.id,"
        message,;
        is_admin_note: isAdminNote,
      });""

      if (error) throw error
;"
      toast.success('Message sent successfully')'
      return true'
    } catch (err: unknown) {'
      logErrorToProduction('Error sending message:', { data: "err })
      toast.error('Failed to send message')'
=======
        (prevDisputes) =>;''
          prevDisputes.map((dispute) =>;
            dispute.id === disputeId;
              ? ({;''
                  ...dispute,;;
                  status: 'resolved',;;'
                  resolved_at: "new Date().toISOString()",;";";";";""
                  resolution_summary: "resolution.summary",;";";";";""
                  resolution_type: "resolution.resolution_type as ResolutionType",;"
                } as Dispute);""
              : (dispute as Dispute),;";""
          ) as Dispute[],;";";""
      );";";";""
;";";";";""
      toast.success('Dispute resolved successfully');'
      return true;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error resolving dispute:', { data: "err "});";";";";""
      toast.error('Failed to resolve dispute');'
      return false;''
    };
  };
;''
  const getDisputeMessages: unknown "unknown = async (;",;""
    disputeId: "string",;";";";""
  ): Promise<DisputeMessage[]> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');'
    try {;''
      const { data, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;;
        .from('dispute_messages');'
        .select(;
          `;''
          *,;;
          user_profile: "profiles!dispute_messages_user_id_fkey(display_name", avatar_url);";";""
        `,;";";";""
        );";";";";""
        .eq('dispute_id', disputeId);;'
        .order('created_at', { ascending: "true "});"
;""
      if (error) throw error;";""
;";";""
      return data as DisputeMessage[];";";";""
    } catch (err: unknown) {;";";";";""
      logErrorToProduction('Error fetching dispute messages:', { data: "err "});";";";";""
      toast.error('Failed to fetch messages');'
      return [];''
    };
  };
;''
  const addDisputeMessage: unknown "unknown = async (;",;""
    disputeId: "string",;";";";";""
    message: "string",;";";""
    isAdminNote = false,;";";";""
  ): Promise<boolean> => {;";";";";""
    if (!supabase) throw new Error('Supabase client not initialized');''
    if (!user) {;;
      toast.error('You must be logged in to send a message');''
      return false;
    };
;''
    try {;;
      const { _error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase.from('dispute_messages').insert({;;'
        dispute_id: "disputeId",;";";";";""
        user_id: "user.id",;";";";""
        message,;";";";";""
        is_admin_note: "isAdminNote",;""
      });";""
;";";""
      if (error) throw error;";";";""
;";";";";""
      toast.success('Message sent successfully');'
      return true;''
    } catch (err: unknown) {;;
      logErrorToProduction('Error sending message:', { data: "err "});";";";";""
      toast.error('Failed to send message');'
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
      return false;
    };
  };
  // Fetch disputes when component mounts or user changes;
  useEffect(() => {;
    if (user) {;
      fetchDisputes();
    };
  }, [user]);
<<<<<<< HEAD
'
  return {'
    disputes,;
    isLoading,'
    error,'
    refetch: fetchDisputes,;
=======
;''
  return {;
    disputes,;
    isLoading,;''
    error,;;
    refetch: "fetchDisputes",;"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
    getDisputeById,;
    createDispute,;
    updateDisputeStatus,;
    resolveDispute,;
<<<<<<< HEAD
    getDisputeMessages,;"
    addDisputeMessage,";
  }
};"
"
}
}"
}"
}"
=======
    getDisputeMessages,;""
    addDisputeMessage,;";""
  };";";""
};";";";""
";";";""
}";";""
}";""
}""
}""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
