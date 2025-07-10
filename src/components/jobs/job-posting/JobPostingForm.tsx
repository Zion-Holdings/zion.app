
import React, { useState, useEffect, useCallback } from 'react';
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useJobForm } from './useJobForm';
import { BasicInfoFields } from './BasicInfoFields';
import { DateFields } from './DateFields';
import { DescriptionFields } from './DescriptionFields';
import { useJobs } from "@/hooks/useJobs";
import type { JobSchemaType } from './validation';
import {logErrorToProduction} from '@/utils/productionLogger';


interface JobPostingFormProps {
  jobId: string | undefined;
  onSuccess: (() => void) | undefined;
}

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {
  // const router = useRouter(); // Available for navigation if needed // Changed from useNavigate
  const { createJob, updateJob, getJobById } = useJobs();
  const [isFormLoading, setIsFormLoading] = useState(false);
  const [editorContent, setEditorContent] = useState("");
  
  const {
    form,
    isLoading,
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    isRemote,
    setIsRemote,
    submitJob
  } = useJobForm({ jobId, onSuccess });

  const { handleSubmit, setValue, formState } = form;
  const { isSubmitting } = formState;

  useEffect(() => {
    if (jobId) {
      setIsFormLoading(true);
      getJobById(jobId)
        .then((job) => {
          if (job) {
            const currentValues = form.getValues();
            Object.entries(job).forEach(([key, value]) => {
              if (key === 'published_date' && value) {
                setStartDate(new Date(value as string));
                setValue('published_date', value as string);
              } else if (key === 'expiry_date' && value) {
                setEndDate(new Date(value as string));
                setValue('expiry_date', value as string);
              } else if (key === 'is_remote') {
                setIsRemote(value as boolean);
              } else if (key === 'description') {
                setEditorContent(value as string);
                setValue('description', value as string);
              } else if (key in currentValues) {
                setValue(key as keyof JobSchemaType, value as JobSchemaType[keyof JobSchemaType]);
              }
            });
          }
        })
        .catch((error) => {
          logErrorToProduction('Failed to load job:', { data: error });
          toast.error("Failed to load job");
        })
        .finally(() => {
          setIsFormLoading(false);
        });
    }
  }, [jobId, getJobById, setValue, setStartDate, setEndDate, setIsRemote]);

  const handleEditorChange = useCallback((value: string) => {
    setEditorContent(value);
    setValue('description', value);
  }, [setValue]);

  const onSubmit = async (values: JobSchemaType) => {
    setIsFormLoading(true);

    try {
      const jobDataRaw = await submitJob(values);
      if (!jobDataRaw) {
        toast.error("Failed to process job data");
        setIsFormLoading(false);
        return;
      }
      // Construct a Job object with all required fields
      const now = new Date().toISOString();
      // Parse budget from salary_range or use default
      let budget = { min: 0, max: 0, currency: 'USD' };
      if (jobDataRaw.budget && typeof jobDataRaw.budget === 'object') {
        budget = jobDataRaw.budget;
      } else if (typeof jobDataRaw.salary_range === 'string' && jobDataRaw.salary_range.trim() !== '') {
        const match = jobDataRaw.salary_range.match(/(\d+)/g);
        if (match && match.length >= 2) {
          budget.min = parseInt(match[0], 10);
          budget.max = parseInt(match[1], 10);
        }
      }
      const jobData = {
        id: jobId || '',
        client_id: jobDataRaw.user_id || '',
        title: jobDataRaw.title || '',
        description: jobDataRaw.description || '',
        category: (jobDataRaw.category as any) || 'other',
        skills: [], // No skills in form, provide empty array
        budget: { min: 0, max: 0, currency: 'USD' },
        deadline: jobDataRaw.expiry_date || now,
        status: jobDataRaw.status || 'new',
        created_at: jobDataRaw.created_at || now,
        updated_at: now,
      };
      if (jobId) {
        await updateJob(jobId, jobData);
        toast.success("Job updated successfully!");
      } else {
        await createJob(jobData);
        toast.success("Job posted successfully!");
        form.reset();
        setEditorContent("");
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      logErrorToProduction('Error creating/updating job:', { data: error });
      toast.error(error.message || "Failed to post job");
    } finally {
      setIsFormLoading(false);
    }
  };

  if (isLoading || isFormLoading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>;
  }

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <h3 className="text-lg font-medium">Post a Job</h3>
          <p className="text-sm text-muted-foreground">
            Fill in the details below to create a job posting.
          </p>
        </div>

        <BasicInfoFields control={form.control} />
        
        <DateFields 
          startDate={startDate} 
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
        />

        <div>
          <Label htmlFor="isRemote">
            <Input
              type="checkbox"
              id="isRemote"
              checked={isRemote}
              className="mr-2"
              onChange={(e) => setIsRemote(e.target.checked)}
            />
            Remote
          </Label>
        </div>

        <DescriptionFields 
          control={form.control} 
          handleEditorChange={handleEditorChange}
          editorContent={editorContent}
        />

        <Button type="submit" disabled={isSubmitting || isFormLoading}>
          {isSubmitting || isFormLoading ? "Submitting..." : jobId ? "Update Job" : "Post Job"}
        </Button>
      </form>
    </Form>
  );
}

