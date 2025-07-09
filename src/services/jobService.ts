
import { supabase } from "@/integrations/supabase/client";

export async function createJob(jobData: unknown) {
  if (!supabase) throw new Error('Supabase client is not initialized');
  const { data, error } = await supabase
    .from('jobs')
    .insert([jobData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateJob(jobId: string, jobData: unknown) {
  if (!supabase) throw new Error('Supabase client is not initialized');
  const { data, error } = await supabase
    .from('jobs')
    .update(jobData)
    .eq('id', jobId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getJobById(jobId: string) {
  if (!supabase) throw new Error('Supabase client is not initialized');
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', jobId)
    .single();

  if (error) throw error;
  return data;
}
