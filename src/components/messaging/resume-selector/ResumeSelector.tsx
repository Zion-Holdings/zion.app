
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Plus, Loader2 } from 'lucide-react';


import { useResume } from "@/hooks/useResume";
import { exportResumeToPDF } from "@/utils/pdfExport";
import { toast } from "@/components/ui/use-toast";
import { ResumePreviewCard } from './ResumePreviewCard';
import { UploadSection } from './UploadSection';
import { SelectResumeSection } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps } from './types';
import {logErrorToProduction} from '@/utils/productionLogger';

export function ResumeSelector({ onResumeSelected }: ResumeSelectorProps) {

  const [selectedOption, setSelectedOption] = useState<'recent' | 'select' | 'upload'>('recent');
  const [selectedResume, setSelectedResume] = useState<ResumeOption | null>(null);
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);
  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  const { resume, fetchResume } = useResume();
  
  // Fetch resume data when component mounts
  useEffect(() => {
    const loadResumes = async () => {
      setIsLoading(true);
      try {
        await fetchResume();
      } catch (error) {
        logErrorToProduction('Error loading resumes:', { data: error });
      } finally {
        setIsLoading(false);
      }
    };
    
    loadResumes();
  }, [fetchResume]);
  
  // Update resume options when resume data changes
  useEffect(() => {
    if (resume) {
      const options: ResumeOption[] = [{
        id: resume.id || 'current',
        title: resume.basic_info.title,
        type: 'ai_resume',
        resume: resume
      }];
      
      setResumeOptions(options);
      
      // Pre-select the most recent resume
      if (options.length > 0 && selectedOption === 'recent' && options[0]) {
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]);
  
  // Handle radio option change
  const handleOptionChange = (value: 'recent' | 'select' | 'upload') => {
    setSelectedOption(value);
    
    if (value === 'recent' && resumeOptions.length > 0 && resumeOptions[0]) {
      setSelectedResume(resumeOptions[0]);
      onResumeSelected(resumeOptions[0]);
    } else if (value === 'select') {
      // Reset selection until user chooses
      setSelectedResume(null);
    } else if (value === 'upload') {
      setSelectedResume(null);
    }
  };
  
  // Handle resume selection change
  const handleResumeSelect = (resumeId: string) => {
    const selected = resumeOptions.find(opt => opt.id === resumeId);
    if (selected) {
      setSelectedResume(selected);
      onResumeSelected(selected);
    }
  };
  
  // Handle custom file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check if it's a PDF file
      if (file.type !== 'application/pdf') {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive"
        });
        return;
      }
      
      // Create a custom resume option
      const customOption: ResumeOption = {
        id: 'custom-upload',
        title: file.name,
        type: 'custom_upload',
        file: file
      };
      
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
  };
  
  // Handle resume download
  const handleDownloadResume = async () => {
    if (!selectedResume || selectedResume.type !== 'ai_resume' || !selectedResume.resume) {
      return;
    }
    
    try {
      setIsLoading(true);
      const pdfBlob = await exportResumeToPDF(selectedResume.resume);
      
      // Create download link
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${selectedResume.title || 'Resume'}.pdf`;
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      
      toast({
        title: "Success!",
        description: "Your resume has been downloaded.",
      });
    } catch (error) {
      logErrorToProduction('Error downloading PDF:', { data: error });
      toast({
        title: "Download failed",
        description: "There was an error downloading your resume.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Handle "Generate Resume Now" button
  const handleGenerateResume = () => {
    window.open('/dashboard/talent/portfolio', '_blank');
  };
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Attach Resume</h3>
      
      <RadioGroup 
        value={selectedOption} 
        onValueChange={(value) => handleOptionChange(value as 'recent' | 'select' | 'upload')}
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">Select from saved versions</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload" className="text-white">Upload a custom resume (PDF)</Label>
        </div>
      </RadioGroup>
      
      {/* Resume selection options based on radio selection */}
      {selectedOption === 'recent' && resume && (
        <ResumePreviewCard
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
      
      {selectedOption === 'select' && (
        <SelectResumeSection
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
      
      {selectedOption === 'upload' && (
        <UploadSection
          customFile={customFile}
          onFileUpload={handleFileUpload}
        />
      )}
      
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={handleGenerateResume}
          className="text-zion-purple border-zion-purple/20"
        >
          <Plus className="h-4 w-4 mr-2" />
          Generate Resume Now
        </Button>
      </div>
    </div>
  );
}
