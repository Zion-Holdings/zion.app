import { supabase } from '@/integrations/supabase/client';
import type { JobSchemaType } from '@/components/jobs/job-posting/validation';

export interface JobPosting extends JobSchemaType {
  id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}

export async function createJobPosting(
  jobData: JobSchemaType & { user_id: string },
) {
  if (!supabase) throw new Error('Supabase client is not initialized');

  const { data, error } = await supabase
    .from('job_postings')
    .insert([jobData])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateJobPosting(
  jobId: string,
  jobData: Partial<JobSchemaType>,
) {
  if (!supabase) throw new Error('Supabase client is not initialized');

  const { data, error } = await supabase
    .from('job_postings')
    .update(jobData)
    .eq('id', jobId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getJobPostingById(jobId: string) {
  if (!supabase) throw new Error('Supabase client is not initialized');

  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('id', jobId)
    .single();

  if (error) throw error;
  return data;
}

export async function getJobPostingsByUserId(userId: string) {
  if (!supabase) throw new Error('Supabase client is not initialized');

  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}
