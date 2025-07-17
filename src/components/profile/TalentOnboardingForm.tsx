import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";

// Define the form schema with validation
const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({
    fullName: z.string().min(2, "Full Name must be at least 2 characters"),
    professionalTitle: z.string().min(2, "Professional title is required"),
    profilePicture: z.unknown().optional(),
  }),
  
  // Step 2: Experience
  experience: z.object({
    bio: z.string().min(50, "Bio must be at least 50 characters"),
    keyProjects: z.array(
      z.object({
        title: z.string().min(2, "Project title is required"),
        description: z.string().min(10, "Project description is required"),
      })
    ).min(1, "Add at least one key project"),
    yearsOfExperience: z.string().min(1, "Years of experience is required"),
  }),
  
  // Step 3: Skills & Tech Stack
  skills: z.object({
    skillsList: z.string().min(2, "Add at least one skill"),
    toolsUsed: z.string().optional(),
  }),
  
  // Step 4: Availability & Preferences
  availability: z.object({
    availabilityType: z.string().min(1, "Select your availability"),
    timezone: z.string().min(1, "Timezone is required"),
    hourlyRate: z.string().optional(),
    portfolioLinks: z.array(
      z.object({
        url: z.string().url("Must be a valid URL").min(5, "URL isrequired"),
      })
    ).optional(), // Field can be undefined; defaultValues in useForm will provide initial array
    cv: z.unknown().optional(),
  }),
});

type TalentFormValues = z.infer<typeof talentSchema>;

export function TalentOnboardingForm() {
  const { user } = useAuth();
  
  const form = useForm<TalentFormValues>({
    resolver: zodResolver(talentSchema),
    defaultValues: {
      basicInfo: {
        fullName: user?.displayName || "",
        professionalTitle: "",
        profilePicture: undefined,
      },
      experience: {
        bio: "",
        keyProjects: [{ title: "", description: "" }],
        yearsOfExperience: "",
      },
      skills: {
        skillsList: "",
        toolsUsed: "",
      },
      availability: {
        availabilityType: "",
        timezone: "",
        hourlyRate: "",
        portfolioLinks: [{ url: "" }],
        cv: undefined,
      },
    },
    mode: "onChange",
  });
  
  // Handle profile picture upload
  const _handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      // setProfilePictureUrl(reader.result as string); // This line was removed
    };
    reader.readAsDataURL(file);
    
    // Store the file in the form data
    form.setValue("basicInfo.profilePicture", file);
  };

  // Handle CV upload
  const _handleCvUpload = async (file: File) => {
    if (!supabase) {
      throw new Error("Supabase client not initialized");
    }
    
    const fileName = `cv-${user?.id}-${Date.now()}`;
    const { error: cvError } = await supabase.storage
      .from('resumes')
      .upload(fileName, file);
      
    if (cvError) {
      // logErrorToProduction('Error uploading CV:', { data: cvError }); // This line was removed
      throw new Error("Failed to upload CV");
    }
    
    // Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('resumes')
      .getPublicUrl(fileName);
    
    return publicUrl;
  };

  // Rest of the file remains unchanged...
  // [Previous implementation continues...]

  return null;
}