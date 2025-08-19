
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { JobSchemaType } from './validation';

interface JobPostingFormProps {
  jobId?: string;
  onSuccess?: () => void;
}

export function JobPostingForm({ jobId, onSuccess }: JobPostingFormProps) {
  const navigate = useNavigate();
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
            // Set form values
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
              } else {
                try {
                  // @ts-ignore - We know these fields exist in our form
                  setValue(key, value as any);
                } catch (e) {
                  // Skip fields that don't exist in our form
                }
              }
            });
          }
        })
        .catch((error) => {
          console.error("Failed to load job:", error);
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
      const jobData = await submitJob(values);
      
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
      console.error("Error creating/updating job:", error);
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
