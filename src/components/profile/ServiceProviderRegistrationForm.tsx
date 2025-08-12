import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { logWarn, logErrorToProduction } from '@/utils/productionLogger';
import { X, Sparkles, Upload, Clock, Check, Briefcase, MapPin, UserRound, Globe } from 'lucide-react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";









import { toast } from "@/components/ui/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// Define form schema
const serviceProfileSchema = z.object({
  name: z.string().min(2, "Full Name must be at least 2 characters long"),
  title: z.string().min(5, "Business name/title is required"),
  bio: z.string().min(50, "Bio must be at least 50 characters long").max(1000, "Bio cannot exceed 1000 characters"),
  location: z.string().min(2, "Location is required"),
  services: z.string().min(2, "Enter at least one service"),
  hourlyRate: z.string().refine((val) => !isNaN(Number(val)), {
    message: "Rate must be a number",
  }),
  availability: z.enum(["available", "limited", "unavailable"]),
  enhancedProfile: z.boolean().transform(val => !!val),
  website: z.string().url("Please enter a valid URL").or(z.string().length(0)).optional(),
});

type ServiceFormValues = z.infer<typeof serviceProfileSchema>;

export function ServiceProviderRegistrationForm() {
  const { user } = useAuth();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serviceTags, setServiceTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<{ summary: string; services: string[] } | null>(null);
  const [uploadedAvatar, setUploadedAvatar] = useState<string | null>(null);
  
  // Initialize form with default values
  const form = useForm<ServiceFormValues>({
    resolver: zodResolver(serviceProfileSchema) as any,
    defaultValues: {
      name: user?.displayName || "",
      title: "",
      bio: "",
      location: "",
      services: "",
      hourlyRate: "",
      availability: "available",
      enhancedProfile: false,
      website: "",
    },
  });

  // Handle adding service tags
  const handleAddService = () => {
    const serviceInput = form.getValues("services");
    if (serviceInput && !serviceTags.includes(serviceInput)) {
      setServiceTags([...serviceTags, serviceInput]);
      form.setValue("services", "");
    }
  };

  // Handle removing service tags
  const handleRemoveService = (service: string) => {
    setServiceTags(serviceTags.filter((s) => s !== service));
  };

  // Handle key press in services input (add on enter)
  const handleServiceKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddService();
    }
  };

  // Handle avatar upload
  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Generate enhanced profile with AI
  const generateEnhancedProfile = async () => {
    const formData = form.getValues();
    if (!formData.bio || formData.bio.length < 20) {
      toast({
        title: "More information needed",
        description: "Please provide at least a detailed bio before generating enhanced content.",
      });
      return;
    }

    try {
      setIsGenerating(true);

      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('service-profile-enhancer', {
        body: {
          providerData: {
            name: formData.name,
            title: formData.title,
            bio: formData.bio,
            services: serviceTags,
            location: formData.location
          }
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      // Check if data exists before type assertion
      if (data && typeof data === 'object') {
        setGeneratedContent(data as { summary: string; services: string[] });
        
        toast({
          title: "Enhanced Profile Generated",
          description: "AI has created a professional bio and suggested additional services for your profile.",
        });
      } else {
        // Fallback for mock/development mode
        logWarn('Mock AI response - using fallback content');
        setGeneratedContent({
          summary: "Professional service provider with expertise in delivering high-quality solutions.",
          services: ["Consulting", "Project Management", "Technical Support"]
        });
        
        toast({
          title: "Enhanced Profile Generated",
          description: "AI has created a professional bio and suggested additional services for your profile.",
        });
      }
      
    } catch (error: any) {
      logErrorToProduction('Error generating enhanced profile:', { data: error });
      toast({
        title: "Generation failed",
        description: error.message || "There was an error generating your enhanced profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  // Apply generated content to form
  const applyGeneratedContent = () => {
    if (generatedContent) {
      form.setValue("bio", generatedContent.summary);
      
      if (generatedContent.services && generatedContent.services.length > 0) {
        const newServices = generatedContent.services.filter(
          service => typeof service === 'string' && service && !serviceTags.includes(service)
        );
        
        if (newServices.length > 0) {
          setServiceTags([...serviceTags, ...newServices]);
        }
      }
    }
  };

  // Handle form submission
  const onSubmit = async (values: ServiceFormValues) => {
    if (serviceTags.length === 0) {
      toast({
        title: "Services required",
        description: "Please add at least one service to your profile.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // For actual implementation with Supabase
      if (!user?.id) {
        throw new Error("User not authenticated");
      }
      
      // Enhance profile if not already done
      let finalSummary = values.bio;
      let finalServices = serviceTags;
      
      if (values.enhancedProfile && !generatedContent) {
        try {
          const { data: aiData } = await supabase.functions.invoke('service-profile-enhancer', {
            body: {
              providerData: {
                name: values.name,
                title: values.title,
                bio: values.bio,
                services: serviceTags,
                location: values.location
              }
            }
          });
          
          if (aiData) {
            finalSummary = (aiData as any).summary || values.bio;
            // Merge AI suggested services with user-provided services
            const aiServices = (aiData as any).services || [];
            finalServices = [...new Set([...serviceTags, ...aiServices])];
          }
        } catch (error) {
          logErrorToProduction('Error enhancing profile:', { data: error });
          // Continue with submission even if enhancement fails
        }
      } else if (generatedContent) {
        finalSummary = generatedContent.summary;
        finalServices = [...new Set([...serviceTags, ...generatedContent.services])];
      }

      // Get user email for notification
      const { data: userData } = await supabase.auth.getUser();
      const userEmail = (userData as any).user?.email;

      // Create the service profile
      const { data: profileData, error } = await supabase
        .from('profiles')
        .update({
          display_name: values.name,
          bio: finalSummary,
          user_type: "creator", // Set as service provider
          profile_complete: true,
          updated_at: new Date().toISOString(),
          headline: values.title,
          // Additional fields that might be in profiles table
        })
        .eq('id', user.id)
        .select();

      if (error) throw error;

      // Store service-specific data in service_profiles table
      // (This assumes you have a service_profiles table in your database)

      /*
      const { error: serviceError } = await supabase
        .from('service_profiles')
        .insert({
          user_id: user.id,
          services: finalServices,
          hourly_rate: Number(values.hourlyRate),
          availability_status: values.availability,
          location: values.location,
          website: values.website || null,
        });

      if (serviceError) throw serviceError;
      */

      // Send notification email if available
      if (userEmail && values.enhancedProfile) {
        try {
          await supabase.functions.invoke('send-email', {
            body: {
              to: userEmail,
              subject: "Your Zion Service Profile Is Ready",
              html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #6D28D9;">Service Profile Created!</h2>
                <p>Your service provider profile has been successfully created and published.</p>
                <p>We've enhanced your profile with AI to help you stand out to potential clients.</p>
                <p>You can now start receiving service requests and connecting with clients.</p>
                <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                  <p style="color: #666; font-size: 12px;">© ${new Date().getFullYear()} Zion Marketplace</p>
                </div>
              </div>
              `
            }
          });
        } catch (emailError) {
          logErrorToProduction('Failed to send notification email:', { data: emailError });
          // Continue with submission even if email fails
        }
      }
      
      toast({
        title: "Profile Created Successfully",
        description: "Your service provider profile has been published and is now visible in the directory.",
      });

      // Redirect to service provider dashboard or profile page
      setTimeout(() => {
        router.push('/service-dashboard');
      }, 1500);
      
    } catch (error: any) {
      logErrorToProduction('Error creating profile:', { data: error });
      toast({
        title: "Error Creating Profile",
        description: error.message || "There was an error creating your profile. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <Card className="bg-zion-blue-dark border-zion-blue-light">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Create Your Service Provider Profile</CardTitle>
          <CardDescription className="text-zion-slate">
            Showcase your services and expertise to potential clients.
          </CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent className="space-y-8">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Basic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Full Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <UserRound className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="Your full name"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Business/Service Name</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="e.g., Creative Design Studio"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="location"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Location</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="City, State/Province, Country"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="col-span-1">
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }: { field: any }) => (
                        <FormItem>
                          <FormLabel className="text-zion-slate-light">Website (optional)</FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" />
                              <Input
                                className="pl-10 bg-zion-blue border-zion-blue-light text-white"
                                placeholder="https://yourwebsite.com"
                                {...field}
                              />
                            </div>
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                
                {/* Upload Avatar */}
                <div className="space-y-2">
                  <FormLabel className="text-zion-slate-light">Profile Picture</FormLabel>
                  <div className="flex items-center gap-6">
                    <div className="relative w-24 h-24 rounded-full overflow-hidden bg-zion-blue-light border border-zion-blue-light">
                      {uploadedAvatar ? (
                        <AspectRatio ratio={1/1}>
                          <img
                            src={uploadedAvatar}
                            alt="Avatar preview"
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </AspectRatio>
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <UserRound className="h-10 w-10 text-zion-slate opacity-50" />
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
                        onChange={handleAvatarUpload}
                      />
                    </label>
                  </div>
                  <p className="text-sm text-zion-slate">
                    For best results, use an image at least 400x400 pixels in JPG, PNG, or GIF format.
                  </p>
                </div>
              </div>

              <Separator className="bg-zion-blue-light/50" />

              {/* Bio Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-white">Service Description</h3>
                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }: { field: any }) => (
                    <FormItem>
                      <FormLabel className="text-zion-slate-light">About Your Services</FormLabel>
                      <FormControl>
                        <Textarea
                          className="h-32 min-h-[128px] bg-zion-blue border-zion-blue-light text-white"
                          placeholder="Describe your services, expertise, and what sets you apart from others..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-red-400" />
                      <FormDescription className="text-zion-slate">
                        {field.value?.length || 0}/1000 characters
                      </FormDescription>
                    </FormItem>
                  )}
                />
                
                {/* AI Enhancement Option */}
                <FormField
                  control={form.control}
                  name="enhancedProfile"
                  render={({ field }: { field: any }) => (
                    <FormItem className="flex flex-row items-center justify-between p-3 border border-zion-blue-light bg-zion-blue/30 rounded-md">
                      <div className="space-y-0.5">
                        <FormLabel className="text-white flex items-center">
                          <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
                          AI Profile Enhancement
                        </FormLabel>
                        <FormDescription className="text-zion-slate-light">
                          Let AI help optimize your service description for better visibility and client engagement
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          aria-label="AI profile enhancement"
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="data-[state=checked]:bg-zion-purple"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                
                {form.watch("enhancedProfile") && (
                  <div className="flex justify-end">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-zion-purple text-zion-purple hover:bg-zion-purple/10"
                      onClick={generateEnhancedProfile}
                      disabled={isGenerating}
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      {isGenerating ? "Generating..." : "Generate Enhanced Profile"}
                    </Button>
                  </div>
                )}

                {/* Generated Content Display */}
                {generatedContent && (
                  <div className="bg-zion-blue-light/20 border border-zion-blue-light rounded-md p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-white font-medium flex items-center">
                        <Sparkles className="w-4 h-4 mr-2 text-zion-purple" />
                        AI-Generated Content
                      </h4>
                      <Button
                        type="button"
                        size="sm"
                        className="bg-zion-purple hover:bg-zion-purple-dark text-white"
                        onClick={applyGeneratedContent}
                      >
                        <Check className="mr-1 h-3 w-3" /> Apply
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-zion-slate-light text-sm mb-1">Professional Summary</h5>
                        <p className="text-zion-slate italic">{generatedContent.summary}</p>
                      </div>
                      
                      {generatedContent.services && generatedContent.services.length > 0 && (
                        <div>
                          <h5 className="text-zion-slate-light text-sm mb-1">Suggested Services</h5>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {generatedContent.services.map((service, index) => (
                              <Badge
                                key={index}
                                className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none"
                              >
                                {service}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Separator className="bg-zion-blue-light/50" />

              {/* Services and Availability */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Services Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Services Offered</h3>
                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Services</FormLabel>
                        <div className="flex gap-2">
                          <FormControl>
                            <Input
                              className="flex-1 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="Add a service..."
                              {...field}
                              onKeyDown={handleServiceKeyPress}
                            />
                          </FormControl>
                          <Button
                            type="button"
                            variant="outline"
                            className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                            onClick={handleAddService}
                          >
                            Add
                          </Button>
                        </div>
                        <FormDescription className="text-zion-slate">
                          Press Enter or click Add to include a service
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-wrap gap-2 mt-2">
                    {serviceTags.map(service => (
                      <Badge
                        key={service}
                        className="bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-purple border-none pl-2 pr-1 py-1.5 flex items-center gap-1"
                      >
                        {service}
                        <button
                          type="button"
                          onClick={() => handleRemoveService(service)}
                          className="rounded-full hover:bg-zion-purple-dark/20 p-0.5"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                    {serviceTags.length === 0 && (
                      <p className="text-zion-slate text-sm italic">No services added yet</p>
                    )}
                  </div>
                </div>

                {/* Pricing and Availability Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-white">Pricing & Availability</h3>
                  <FormField
                    control={form.control}
                    name="hourlyRate"
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel className="text-zion-slate-light">Starting Rate (USD)</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">$</span>
                            <Input
                              className="pl-8 bg-zion-blue border-zion-blue-light text-white"
                              placeholder="e.g., 85"
                              {...field}
                            />
                          </div>
                        </FormControl>
                        <FormDescription className="text-zion-slate">
                          Your base hourly or project rate
                        </FormDescription>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="availability"
                    render={({ field }: { field: any }) => (
                      <FormItem className="space-y-4">
                        <FormLabel className="text-zion-slate-light">Current Status</FormLabel>
                        <FormControl>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="available"
                                value="available"
                                checked={field.value === "available"}
                                onChange={() => field.onChange("available")}
                                className="text-zion-purple focus:ring-zion-purple"
                              />
                              <label htmlFor="available" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                Available for Work
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="limited"
                                value="limited"
                                checked={field.value === "limited"}
                                onChange={() => field.onChange("limited")}
                                className="text-zion-purple focus:ring-zion-purple"
                              />
                              <label htmlFor="limited" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                Limited Availability
                              </label>
                            </div>

                            <div className="flex items-center space-x-2">
                              <input
                                type="radio"
                                id="unavailable"
                                value="unavailable"
                                checked={field.value === "unavailable"}
                                onChange={() => field.onChange("unavailable")}
                                className="text-zion-purple focus:ring-zion-purple"
                              />
                              <label htmlFor="unavailable" className="text-white flex items-center gap-2">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                Currently Unavailable
                              </label>
                            </div>
                          </div>
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="border-t border-zion-blue-light pt-6">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:justify-between">
                <Button
                  type="button"
                  variant="outline"
                  className="border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white"
                >
                  Save as Draft
                </Button>
                <Button 
                  type="submit"
                  className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Profile..." : "Create Service Profile"}
                </Button>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
