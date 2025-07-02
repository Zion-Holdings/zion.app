import { useState } from "react";
import { useRouter } from 'next/router';
import { useJobApplications } from "@/hooks/useJobApplications";
import { useResume } from "@/hooks/useResume";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, FileText, Loader2 } from 'lucide-react';



import { formatDistanceToNow } from "date-fns";
import { Job } from "@/types/jobs";
import { toast } from "sonner";

interface ApplyToJobFormProps {
  job: Job;
  onSuccess?: () => void;
}

export function ApplyToJobForm({ job, onSuccess }: ApplyToJobFormProps) {
  const { user } = useAuth();
  const { applyToJob } = useJobApplications();
  const { resumes, isLoading: isResumesLoading } = useResume();
  const router = useRouter();
  
  const [coverLetter, setCoverLetter] = useState(`I'm interested in the "${job.title}" position and would like to apply. My skills and experience align well with this role.`);
  const [selectedResumeId, setSelectedResumeId] = useState<string>("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("You must be logged in to apply");
      router.push(`/login?returnTo=${encodeURIComponent(`/jobs/${job.id}`)}`);
      return;
    }
    
    if (!coverLetter.trim()) {
      setError("Please provide a cover letter");
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const success = await applyToJob(
        job.id,
        coverLetter,
        selectedResumeId || undefined,
        resumeFile || undefined
      );
      
      if (success) {
        toast.success("Your application has been submitted!");
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (err: any) {
      setError(err.message || "Failed to submit application");
      toast.error("Failed to submit application");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-1">Apply to: {job.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Posted {formatDistanceToNow(new Date(job.created_at), { addSuffix: true })}
        </p>
      </div>
      
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="coverLetter">Cover Letter</Label>
          <Textarea
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            rows={6}
            placeholder="Introduce yourself and explain why you are a good fit for this job..."
            className="mt-1"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Provide a brief introduction and highlight your relevant skills and experience.
          </p>
        </div>
        
        <div>
          <Label htmlFor="resume">Select Resume (Optional)</Label>
          {isResumesLoading ? (
            <div className="flex items-center gap-2 mt-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Loading your resumes...</span>
            </div>
          ) : resumes && resumes.length > 0 ? (
            <Select
              value={selectedResumeId}
              onValueChange={setSelectedResumeId}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select a resume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">No resume</SelectItem>
                {resumes.map((resume) => {
                  if (resume.id) {
                    return (
                      <SelectItem key={resume.id} value={resume.id}>
                        {resume.basic_info.title || "Untitled Resume"}
                      </SelectItem>
                    );
                  }
                  return null;
                })}
              </SelectContent>
            </Select>
          ) : (
            <div className="flex items-center justify-between mt-2 p-3 border rounded-md">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span>No resumes found</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                type="button"
                onClick={() => router.push("/dashboard/talent/portfolio")}
              >
                Create Resume
              </Button>
            </div>
          )}
        </div>

        <div>
          <Label htmlFor="cvUpload">Or Upload CV (PDF)</Label>
          <input
            id="cvUpload"
            type="file"
            accept=".pdf"
            className="mt-1"
            onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
          />
        </div>
      </div>
      
      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          disabled={isSubmitting}
          onClick={() => {
            if (onSuccess) onSuccess();
          }}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </div>
    </form>
  );
}
