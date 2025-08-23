
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from 'next/router';

import { jobSchema, JobSchemaType } from './validation';
import { useAuth } from "@/hooks/useAuth";

import {logErrorToProduction} from "@/utils/productionLogger";

export interface JobPostingProps {
  jobId?: string;
  
  onSuccess?: () => void;
}

export const useJobForm = ({ jobId, onSuccess }: JobPostingProps) => {
  const { user } = useAuth();
  const router = useRouter();
  
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [isRemote, setIsRemote] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState<JobSchemaType | null>(null);

  const form = useForm<JobSchemaType>({
    resolver: zodResolver(jobSchema),
    defaultValues: {
      title: '',
      company: '',
      location: '',
      job_type: '',
      salary_range: '',
      description: '',
      responsibilities: '',
      qualifications: '',
      benefits: '',
      application_instructions: '',
      contact_email: '',
      published_date: '',
      expiry_date: '',
      is_remote: false,
      category: '',
      status: '',
      external_apply_link: '',
    },
    mode: "onChange",
  });

  // Function to create/update jobs that will be implemented by parent component
  const submitJob = async (values: JobSchemaType) => {
    if (!user) {
      toast.error("You must be logged in to post a job");
      router.push("/login");
      return;
    }

    setIsLoading(true);

    try {
      const publishedDate = startDate ? startDate.toString() : '';
      const expiryDate = endDate ? endDate.toString() : '';

      const jobData = {
        ...values,
        published_date: publishedDate,
        expiry_date: expiryDate,
        is_remote: isRemote,
        user_id: user.id,
      };

      if (onSuccess) {
        onSuccess();
      }
      
      return jobData;
    } catch (error: any) {
      logErrorToProduction('Error in job form submission:', { data: error });
      toast.error(error.message || "Failed to process form");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    form,
    isLoading,
    startDate,
    setStartDate,
    endDate, 
    setEndDate,
    isRemote,
    setIsRemote,
    initialValues,
    setInitialValues,
    submitJob
  };
};
