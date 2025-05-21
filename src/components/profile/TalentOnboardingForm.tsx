
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { 
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from "@/components/ui/select";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { toast } from "@/components/ui/use-toast";
import { 
  User, Briefcase, Star, Calendar, Globe, DollarSign, FileText, Link, Upload, ArrowRight, ArrowLeft, 
  Trash2, Plus, CheckCircle2
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useTalentProfileEnhancer } from "@/hooks/useTalentProfileEnhancer";
import { supabase } from "@/integrations/supabase/client";

// Define the form schema with validation
const talentSchema = z.object({
  // Step 1: Basic Info
  basicInfo: z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    professionalTitle: z.string().min(2, "Professional title is required"),
    profilePicture: z.any().optional(),
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
        url: z.string().url("Must be a valid URL").min(5, "URL is required"),
      })
    ).optional().default([]),
    cv: z.any().optional(),
  }),
});

type TalentFormValues = z.infer<typeof talentSchema>;

export function TalentOnboardingForm() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [profilePictureUrl, setProfilePictureUrl] = useState<string | null>(null);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  
  const { enhanceProfile, isGenerating, error: enhanceError } = useTalentProfileEnhancer();
  
  const totalSteps = 4;
  
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
  
  const { fields: projectFields, append: appendProject, remove: removeProject } = 
    useFieldArray({
      name: "experience.keyProjects",
      control: form.control,
    });
    
  const { fields: linkFields, append: appendLink, remove: removeLink } = 
    useFieldArray({
      name: "availability.portfolioLinks",
      control: form.control,
    });

  // Handle profile picture upload
  const handleProfilePictureUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    // Preview the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfilePictureUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    // Store the file in the form data
    form.setValue("basicInfo.profilePicture", file);
  };

  // Handle CV upload
  const handleCvUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setCvFileName(file.name);
    form.setValue("availability.cv", file);
  };
  
  // Navigation functions
  const nextStep = async () => {
    let isValid = false;
    
    // Validate current step before proceeding
    switch(currentStep) {
      case 1:
        isValid = await form.trigger("basicInfo", { shouldFocus: true });
        break;
      case 2:
        isValid = await form.trigger("experience", { shouldFocus: true });
        break;
      case 3:
        isValid = await form.trigger("skills", { shouldFocus: true });
        break;
      case 4:
        isValid = await form.trigger("availability", { shouldFocus: true });
        break;
      default:
        isValid = false;
    }
    
    if (isValid && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // Process the file uploads and return the URLs
  const processUploads = async (userId: string) => {
    const profilePictureFile = form.getValues("basicInfo.profilePicture");
    const cvFile = form.getValues("availability.cv");
    let profilePictureUrl = null;
    let cvUrl = null;
    
    // Upload profile picture if available
    if (profilePictureFile) {
      const fileName = `profile-${userId}-${Date.now()}`;
      const { data: pictureData, error: pictureError } = await supabase.storage
        .from('profile-images')
        .upload(fileName, profilePictureFile);
        
      if (pictureError) {
        console.error("Error uploading profile picture:", pictureError);
        throw new Error("Failed to upload profile picture");
      }
      
      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('profile-images')
        .getPublicUrl(fileName);
      
      profilePictureUrl = publicUrl;
    }
    
    // Upload CV if available
    if (cvFile) {
      const fileName = `cv-${userId}-${Date.now()}`;
      const { data: cvData, error: cvError } = await supabase.storage
        .from('resumes')
        .upload(fileName, cvFile);
        
      if (cvError) {
        console.error("Error uploading CV:", cvError);
        throw new Error("Failed to upload CV");
      }
      
      // Get the public URL
      const { data: { publicUrl } } = supabase.storage
        .from('resumes')
        .getPublicUrl(fileName);
      
      cvUrl = publicUrl;
    }
    
    return { profilePictureUrl, cvUrl };
  };
  
  // Form submission handler
  const onSubmit = async (data: TalentFormValues) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create a profile",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Process file uploads
      const { profilePictureUrl, cvUrl } = await processUploads(user.id);
      
      // Parse skills into array
      const skills = data.skills.skillsList
        .split(',')
        .map(skill => skill.trim())
        .filter(skill => skill.length > 0);
        
      // Parse tools into array
      const tools = data.skills.toolsUsed
        ? data.skills.toolsUsed
            .split(',')
            .map(tool => tool.trim())
            .filter(tool => tool.length > 0)
        : [];
        
      // Format portfolio links
      const portfolioLinks = data.availability.portfolioLinks
        .filter(link => link.url.trim().length > 0)
        .map(link => link.url);
        
      // Use AI to enhance profile
      const enhancedProfile = await enhanceProfile({
        name: data.basicInfo.fullName,
        title: data.basicInfo.professionalTitle,
        bio: data.experience.bio,
        skills: [...skills, ...tools],
        location: data.availability.timezone
      });
      
      // Prepare the talent profile data
      const talentProfileData = {
        user_id: user.id,
        full_name: data.basicInfo.fullName,
        professional_title: data.basicInfo.professionalTitle,
        bio: data.experience.bio,
        summary: enhancedProfile?.summary || "",
        profile_picture_url: profilePictureUrl,
        years_experience: parseInt(data.experience.yearsOfExperience) || 0,
        key_projects: data.experience.keyProjects,
        skills: skills,
        tools_platforms: tools,
        categorized_skills: enhancedProfile?.categorizedSkills || {
          programming: [],
          devops: [],
          platforms: [],
          softSkills: [],
          other: []
        },
        availability_type: data.availability.availabilityType,
        timezone: data.availability.timezone,
        hourly_rate: data.availability.hourlyRate ? parseFloat(data.availability.hourlyRate) : null,
        portfolio_links: portfolioLinks,
        cv_url: cvUrl,
        created_at: new Date().toISOString(),
        is_published: true
      };
      
      // Save talent profile to database
      const { error } = await supabase
        .from('talent_profiles')
        .insert(talentProfileData);
        
      if (error) throw error;
      
      // Show success screen
      setShowSuccessScreen(true);
      
      // You can also update the user's profile to mark onboarding as complete
      await supabase
        .from('profiles')
        .update({
          profile_complete: true,
          user_type: 'talent'
        })
        .eq('id', user.id);
        
      // Send notification email
      try {
        await supabase.functions.invoke('send-notification-email', {
          body: {
            to: user.email,
            subject: "Your Zion Talent Profile is Ready!",
            type: "talent_profile_created"
          }
        });
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError);
      }
      
    } catch (error: any) {
      console.error("Error creating profile:", error);
      toast({
        title: "Error creating profile",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step content renderer
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 py-4">
            <h2 className="text-2xl font-bold text-white">Basic Information</h2>
            <p className="text-zion-slate-light">Let's start with some basic information about you</p>
            
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="basicInfo.fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                        <Input 
                          className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                          placeholder="Enter your full name"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="basicInfo.professionalTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Professional Title</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                        <Input 
                          className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                          placeholder="e.g., Senior Machine Learning Engineer"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormItem>
                <FormLabel className="text-white">Profile Picture</FormLabel>
                <div className="flex items-center gap-6">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">
                    {profilePictureUrl ? (
                      <AspectRatio ratio={1/1}>
                        <img
                          src={profilePictureUrl}
                          alt="Profile preview"
                          className="w-full h-full object-cover"
                        />
                      </AspectRatio>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <User className="h-10 w-10 text-zion-slate opacity-50" />
                      </div>
                    )}
                  </div>

                  <label className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">
                    <Upload className="mr-2 h-4 w-4" />
                    <span>Upload Photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleProfilePictureUpload}
                    />
                  </label>
                </div>
                <p className="text-sm text-zion-slate mt-2">
                  For best results, use a square image of at least 400x400 pixels
                </p>
              </FormItem>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6 py-4">
            <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
            <p className="text-zion-slate-light">Tell us about your professional background and key projects</p>
            
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="experience.bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Professional Bio</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-32 bg-zion-blue border-zion-blue-light text-white"
                        placeholder="Describe your professional background, expertise, and achievements..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                    <p className="text-sm text-zion-slate mt-1">
                      {field.value.length}/1000 characters (minimum 50)
                    </p>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="experience.yearsOfExperience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Years of Experience</FormLabel>
                    <FormControl>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full bg-zion-blue border-zion-blue-light text-white">
                          <SelectValue placeholder="Select years of experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Less than 1 year</SelectItem>
                          <SelectItem value="2">1-2 years</SelectItem>
                          <SelectItem value="3">3-5 years</SelectItem>
                          <SelectItem value="6">6-9 years</SelectItem>
                          <SelectItem value="10">10+ years</SelectItem>
                          <SelectItem value="15">15+ years</SelectItem>
                          <SelectItem value="20">20+ years</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <div className="space-y-4">
                <FormLabel className="text-white">Key Projects or Roles</FormLabel>
                
                {projectFields.map((field, index) => (
                  <div key={field.id} className="grid gap-4 p-4 border border-zion-blue-light rounded-md bg-zion-blue/30">
                    <div className="flex justify-between items-center">
                      <h4 className="text-white font-medium">Project {index + 1}</h4>
                      {projectFields.length > 1 && (
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeProject(index)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      )}
                    </div>
                    
                    <FormField
                      control={form.control}
                      name={`experience.keyProjects.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Project Title</FormLabel>
                          <FormControl>
                            <Input 
                              className="bg-zion-blue border-zion-blue-light text-white"
                              placeholder="e.g., AI-Powered Recommendation Engine"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name={`experience.keyProjects.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Description</FormLabel>
                          <FormControl>
                            <Textarea
                              className="min-h-20 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Describe the project, your role, and outcomes..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendProject({ title: "", description: "" })}
                  className="mt-2 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Another Project
                </Button>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6 py-4">
            <h2 className="text-2xl font-bold text-white">Skills & Tech Stack</h2>
            <p className="text-zion-slate-light">List your technical skills and tools you're experienced with</p>
            
            <div className="grid grid-cols-1 gap-6">
              <FormField
                control={form.control}
                name="skills.skillsList"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Technical Skills</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-20 bg-zion-blue border-zion-blue-light text-white"
                        placeholder="e.g., Python, Machine Learning, Data Analysis, JavaScript, React (comma-separated)"
                        {...field}
                      />
                    </FormControl>
                    <p className="text-sm text-zion-slate mt-1">
                      Enter your skills as comma-separated values
                    </p>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="skills.toolsUsed"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Tools & Platforms Used</FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-20 bg-zion-blue border-zion-blue-light text-white"
                        placeholder="e.g., AWS, Docker, TensorFlow, PyTorch, Kubernetes (comma-separated)"
                        {...field}
                      />
                    </FormControl>
                    <p className="text-sm text-zion-slate mt-1">
                      Enter tools and platforms as comma-separated values (optional)
                    </p>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6 py-4">
            <h2 className="text-2xl font-bold text-white">Availability & Preferences</h2>
            <p className="text-zion-slate-light">Tell us about your availability and work preferences</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="availability.availabilityType"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="text-white">Current Availability</FormLabel>
                    <FormControl>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full bg-zion-blue border-zion-blue-light text-white">
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="full-time">Full-time</SelectItem>
                          <SelectItem value="part-time">Part-time</SelectItem>
                          <SelectItem value="contract">Contract</SelectItem>
                          <SelectItem value="project-based">Project-based</SelectItem>
                          <SelectItem value="not-available">Not Currently Available</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="availability.timezone"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="text-white">Preferred Timezone</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full pl-10 bg-zion-blue border-zion-blue-light text-white">
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="UTC-12:00">UTC-12:00</SelectItem>
                            <SelectItem value="UTC-11:00">UTC-11:00</SelectItem>
                            <SelectItem value="UTC-10:00">UTC-10:00</SelectItem>
                            <SelectItem value="UTC-09:00">UTC-09:00</SelectItem>
                            <SelectItem value="UTC-08:00">UTC-08:00 (PST)</SelectItem>
                            <SelectItem value="UTC-07:00">UTC-07:00 (MST)</SelectItem>
                            <SelectItem value="UTC-06:00">UTC-06:00 (CST)</SelectItem>
                            <SelectItem value="UTC-05:00">UTC-05:00 (EST)</SelectItem>
                            <SelectItem value="UTC-04:00">UTC-04:00</SelectItem>
                            <SelectItem value="UTC-03:00">UTC-03:00</SelectItem>
                            <SelectItem value="UTC-02:00">UTC-02:00</SelectItem>
                            <SelectItem value="UTC-01:00">UTC-01:00</SelectItem>
                            <SelectItem value="UTC+00:00">UTC+00:00</SelectItem>
                            <SelectItem value="UTC+01:00">UTC+01:00 (CET)</SelectItem>
                            <SelectItem value="UTC+02:00">UTC+02:00</SelectItem>
                            <SelectItem value="UTC+03:00">UTC+03:00</SelectItem>
                            <SelectItem value="UTC+04:00">UTC+04:00</SelectItem>
                            <SelectItem value="UTC+05:00">UTC+05:00</SelectItem>
                            <SelectItem value="UTC+05:30">UTC+05:30 (IST)</SelectItem>
                            <SelectItem value="UTC+06:00">UTC+06:00</SelectItem>
                            <SelectItem value="UTC+07:00">UTC+07:00</SelectItem>
                            <SelectItem value="UTC+08:00">UTC+08:00</SelectItem>
                            <SelectItem value="UTC+09:00">UTC+09:00 (JST)</SelectItem>
                            <SelectItem value="UTC+10:00">UTC+10:00</SelectItem>
                            <SelectItem value="UTC+11:00">UTC+11:00</SelectItem>
                            <SelectItem value="UTC+12:00">UTC+12:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="availability.hourlyRate"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="text-white">
                      Hourly Rate (USD)
                      <span className="text-zion-slate-light ml-1 text-sm">(Optional)</span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                        <Input
                          className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                          placeholder="e.g., 75"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              
              <div className="col-span-1 md:col-span-2">
                <FormLabel className="text-white">
                  Portfolio Links
                  <span className="text-zion-slate-light ml-1 text-sm">(Optional)</span>
                </FormLabel>
                
                {linkFields.map((field, index) => (
                  <div key={field.id} className="flex items-center gap-2 mb-2">
                    <FormField
                      control={form.control}
                      name={`availability.portfolioLinks.${index}.url`}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <div className="relative">
                              <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="https://your-portfolio.com"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                    
                    {linkFields.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeLink(index)}
                        className="text-red-400 hover:text-red-300 hover:bg-red-900/20"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => appendLink({ url: "" })}
                  className="mt-1 border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                >
                  <Plus className="h-4 w-4 mr-1" /> Add Another Link
                </Button>
              </div>
              
              <div className="col-span-1 md:col-span-2">
                <FormLabel className="text-white">
                  Upload CV
                  <span className="text-zion-slate-light ml-1 text-sm">(Optional)</span>
                </FormLabel>
                <div className="mt-1">
                  <label className="flex items-center gap-4">
                    <div className="flex items-center justify-center px-4 py-2 rounded-md bg-zion-purple hover:bg-zion-purple-dark text-white cursor-pointer transition-colors">
                      <FileText className="mr-2 h-4 w-4" />
                      <span>Select File</span>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                        onChange={handleCvUpload}
                      />
                    </div>
                    {cvFileName && (
                      <span className="text-zion-slate-light truncate max-w-xs">{cvFileName}</span>
                    )}
                  </label>
                  <p className="text-sm text-zion-slate mt-2">
                    Accepted formats: PDF, DOC, DOCX (max 5MB)
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };
  
  // Success screen
  if (showSuccessScreen) {
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Profile Created!
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Thanks! We're using AI to optimize your profile. You'll appear in search results shortly.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button
              onClick={() => navigate("/talent-profile")}
              className="bg-zion-purple hover:bg-zion-purple-dark text-white"
            >
              View My Profile
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/dashboard")}
              className="border-zion-blue-light text-white hover:bg-zion-blue-light"
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8 relative">
        <div className="h-2 bg-zion-blue-light rounded-full">
          <div 
            className="h-full bg-zion-purple rounded-full transition-all duration-300 ease-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-2">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className={`h-6 w-6 rounded-full flex items-center justify-center text-sm ${
                  currentStep > index + 1
                    ? 'bg-zion-purple text-white'
                    : currentStep === index + 1
                    ? 'bg-zion-cyan border-2 border-zion-purple text-zion-blue-dark font-bold'
                    : 'bg-zion-blue text-zion-slate-light'
                }`}
              >
                {index + 1}
              </div>
              <span 
                className={`text-xs mt-1 ${
                  currentStep >= index + 1 ? 'text-white' : 'text-zion-slate-light'
                }`}
              >
                {['Basic Info', 'Experience', 'Skills', 'Availability'][index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 sm:p-8 shadow-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="space-y-8">
              {/* Step Content */}
              {renderStepContent()}
              
              {/* Navigation */}
              <div className="flex justify-between pt-6 border-t border-zion-blue-light">
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className={`border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white ${
                    currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="bg-zion-purple hover:bg-zion-purple-dark text-white"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Creating Profile..." : "Complete Profile"}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
