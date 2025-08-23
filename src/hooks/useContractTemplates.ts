import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ContractTemplate } from "@/types/contracts";
import { ContractFormValues } from "@/components/contracts/components/ContractForm";
import {logErrorToProduction} from '@/utils/productionLogger';

export function useContractTemplates() {

  const { user, isAuthenticated } = useAuth();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  // Fetch templates for the current user
  const { 
    data: templates = [], 
    isLoading: isLoadingTemplates,
    error: templatesError 
  } = useQuery({
    queryKey: ['contractTemplates', user?.id],
    queryFn: async () => {
      if (!isAuthenticated || !user) {
        return [];
      }

      const { data, error } = await supabase
        .from('contract_templates')
        .select('*')
        .order('is_default', { ascending: false })
        .order('created_at', { ascending: false });
      
      if (error) {
        throw error;
      }
      
      return data as ContractTemplate[];
    },
    enabled: isAuthenticated && !!user
  });

  // Create a new template
  const createTemplate = useMutation({
    mutationFn: async ({ 
      title, 
      templateData, 
      isDefault = false 
    }: {
      title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;
    }) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user.id)
            .eq('is_default', true);
        }
        
        // Insert the new template
        const { data, error } = await supabase
          .from('contract_templates')
          .insert({
            user_id: user.id,
            title: title,
            template_data: templateData,
            is_default: isDefault
          })
          .select()
          .single();
        
        if (error) throw error;
        return data as ContractTemplate;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template saved",
        description: "Contract template has been successfully saved.",
      });
    },
    onError: (error: Error) => {
      logErrorToProduction('Error saving template:', { data: error });
      toast({
        title: "Failed to save template",
        description: "There was an error saving your contract template.",
        variant: "destructive",
      });
    }
  });

  // Update an existing template
  const updateTemplate = useMutation({
    mutationFn: async ({
      templateId,
      title,
      templateData,
      isDefault = false
    }: {
      templateId: string;
      title: string;
      templateData: ContractFormValues;
      isDefault?: boolean;
    }) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        // If this is set as default, unset any existing default
        if (isDefault) {
          await supabase
            .from('contract_templates')
            .update({ is_default: false })
            .eq('user_id', user.id)
            .eq('is_default', true)
            .neq('id', templateId);
        }
        
        // Update the template
        const { data, error } = await supabase
          .from('contract_templates')
          .update({
            title: title,
            template_data: templateData,
            is_default: isDefault,
            updated_at: new Date().toISOString()
          })
          .eq('id', templateId)
          .eq('user_id', user.id)
          .select()
          .single();
        
        if (error) throw error;
        return data as ContractTemplate;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template updated",
        description: "Contract template has been successfully updated.",
      });
    },
    onError: (error: Error) => {
      logErrorToProduction('Error updating template:', { data: error });
      toast({
        title: "Failed to update template",
        description: "There was an error updating your contract template.",
        variant: "destructive",
      });
    }
  });

  // Delete a template
  const deleteTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        const { error } = await supabase
          .from('contract_templates')
          .delete()
          .eq('id', templateId)
          .eq('user_id', user.id);
        
        if (error) throw error;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Template deleted",
        description: "Contract template has been successfully deleted.",
      });
    },
    onError: (error: Error) => {
      logErrorToProduction('Error deleting template:', { data: error });
      toast({
        title: "Failed to delete template",
        description: "There was an error deleting your contract template.",
        variant: "destructive",
      });
    }
  });

  // Set a template as default
  const setDefaultTemplate = useMutation({
    mutationFn: async (templateId: string) => {
      if (!user) throw new Error("User not authenticated");
      
      setIsLoading(true);
      
      try {
        // First unset any existing default
        await supabase
          .from('contract_templates')
          .update({ is_default: false })
          .eq('user_id', user.id)
          .eq('is_default', true);
        
        // Then set the new default
        const { error } = await supabase
          .from('contract_templates')
          .update({ is_default: true })
          .eq('id', templateId)
          .eq('user_id', user.id);
        
        if (error) throw error;
      } finally {
        setIsLoading(false);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contractTemplates', user?.id] });
      toast({
        title: "Default template set",
        description: "Default contract template has been updated.",
      });
    },
    onError: (error: Error) => {
      logErrorToProduction('Error setting default template:', { data: error });
      toast({
        title: "Failed to set default template",
        description: "There was an error setting your default contract template.",
        variant: "destructive",
      });
    }
  });

  return {
    templates,
    isLoading: isLoading || isLoadingTemplates,
    error: templatesError,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    setDefaultTemplate
  };
}