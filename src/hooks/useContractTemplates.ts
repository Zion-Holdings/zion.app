import { useState } from 'react''
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { supabase } from '@/integrations/supabase/client'
import { useToast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'
import type { ContractTemplate } from '@/types/contracts'
import type { ContractFormValues } from '@/components/contracts/components/ContractForm'
import  { logErrorToProduction }  from '@/utils/productionLogger'
export function useContractTemplates(): ;
  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const { _toast } = useToast()'
  const [isLoading, setIsLoading] = useState(false)'
  // Fetch templates for the current user'
  const {'
    data: "templates = []
    isLoading: isLoadingTemplates"
    error: templatesError,"
  } = useQuery({;
    queryKey: ['contractTemplates', user?.id],'
    _queryFn: async () => {'
      if (!supabase) throw new Error('Supabase client not initialized')'
      if (!isAuthenticated || !user) {'
        return []'
      };
'
      const { data, error } = await supabase'
        .from('contract_templates')'
        .select('*')'
        .order('is_default', { ascending: false "})"
        .order('created_at', { ascending: false })"
      if (error) {;
        throw error"
      };
;"
      return data as ContractTemplate[]"
    },;
    enabled: isAuthenticated && !!user,
  });""

  // Create a new template
  const createTemplate: useMutation({;","
    mutationFn: async ({
      title,;"
      templateData,;"
      isDefault = false,
    }: {;
      _title: string;,"
      templateData: ContractFormValues;"
      isDefault?: boolean
    }) => {;
      if (!user) throw new Error('User not authenticated')'
      if (!supabase) throw new Error('Supabase client not initialized')'
      setIsLoading(true);
'
      try {'
        // If this is set as default, unset any existing default;
        if (isDefault) {'
          await supabase'
            .from('contract_templates')'
            .update({ is_default: "false "} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {})
            .eq('user_id', user.id)'
            .eq('is_default', true)'
        }'
        // Insert the new template'
        const { data, error } = await supabase'
          .from('contract_templates')'
          .insert({'
            user_id: user.id"
            title: "title
            template_data: templateData"
            is_default: isDefault,'';;