import React from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/router";
import Image from 'next/image'; // Import next/image
import {logErrorToProduction} from '@/utils/productionLogger';
import { Sparkles } from 'lucide-react';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AIListingGenerator } from "@/components/listing/AIListingGenerator";


// Define the form schema with zod
const productSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  price: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {
      message: "Price must be a valid number",
    }),
  category: z.string().min(1, "Please select a category"),
  image: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  video: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  model: typeof window === 'undefined' ? z.any().optional() : z.instanceof(File).optional(),
  tags: z.string().optional(),
});

// Type for our form values
type ProductFormValues = z.infer<typeof productSchema>;

export function ProductSubmissionForm() {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState(null as string | null);
  const [activeTab, setActiveTab] = React.useState("manual");
  
  // Initialize the form
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: "",
      video: undefined,
      model: undefined,
      tags: "",
    },
  });
  
  // Handle image upload preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("image", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("video", file);
    }
  };

  const handleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      form.setValue("model", file);
    }
  };

  // Apply AI-generated content to the form
  const handleApplyGenerated = (content: any) => {
    form.setValue("description", content.description);
    form.setValue("tags", content.tags.join(", "));
    
    // Set a default price as the middle of the suggested range
    const averagePrice = ((content.suggestedPrice.min + content.suggestedPrice.max) / 2).toFixed(2);
    form.setValue("price", averagePrice);
    
    // Switch to the manual tab to show applied content
    setActiveTab("manual");
  };

  // Handle form submission
  const onSubmit = async (values: ProductFormValues) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "You must be logged in to publish products",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Create the product listing
      const productData = {
        title: values.title,
        description: values.description,
        price: parseFloat(values.price),
        category: values.category,
        currency: "USD", // Default currency
        tags: values.tags ? values.tags.split(',').map(tag => tag.trim()) : [],
        author: {
          name: user.displayName || "Anonymous Creator",
          id: user.id,
        },
        createdAt: new Date().toISOString(),
      };
      
      const { data: productRecord, error: productError } = await supabase
        .from('product_listings')
        .insert([productData])
        .select('id')
        .single();
        
      if (productError) {
        throw new Error(productError.message);
      }

      let imagePublicUrl: string | undefined;

      // If we have an image, upload it
      if (values.image) {
        const imagePath = `product_images/${productRecord.id}/${values.image.name}`;
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(imagePath, values.image);
          
        if (uploadError) {
          throw new Error(uploadError.message);
        }
        
        // Get the public URL for the image
        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(imagePath);
        imagePublicUrl = publicUrlData.publicUrl;
          
        // Update the product with the image URL
        const { error: updateError } = await supabase
          .from('product_listings')
          .update({
            images: [imagePublicUrl]
          })
          .eq('id', productRecord.id);
          
      if (updateError) {
        throw new Error(updateError.message);
      }
    }

      // Upload video if provided
      if (values.video) {
        const videoPath = `product_videos/${productRecord.id}/${values.video.name}`;
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(videoPath, values.video);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(videoPath);

        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ video_url: publicUrlData.publicUrl })
          .eq('id', productRecord.id);

        if (updateError) {
          throw new Error(updateError.message);
        }
      }

      // Upload model if provided
      if (values.model) {
        const modelPath = `product_models/${productRecord.id}/${values.model.name}`;
        const { error: uploadError } = await supabase.storage
          .from('products')
          .upload(modelPath, values.model);

        if (uploadError) {
          throw new Error(uploadError.message);
        }

        const { data: publicUrlData } = supabase.storage
          .from('products')
          .getPublicUrl(modelPath);

        const { error: updateError } = await supabase
          .from('product_listings')
          .update({ model_url: publicUrlData.publicUrl })
          .eq('id', productRecord.id);

        if (updateError) {
          throw new Error(updateError.message);
        }
      }

      // Send listing to moderation service
      try {
        await supabase.functions.invoke('moderate-listing', {
          body: {
            listingId: productRecord.id,
            listingType: 'product',
            description: values.description,
            images: imagePublicUrl ? [imagePublicUrl] : [],
            sellerId: user.id,
          }
        });
      } catch (err) {
        logErrorToProduction('Error invoking moderation:', { data: err });
      }
      
      // Show success message
      toast({
        title: "Product Published!",
        description: "Your product has been successfully published on Zion.",
      });
      
      // Redirect to product page
      router.push(`/marketplace/listing/${productRecord.id}`);
    } catch (error) {
      toast({
        title: "Publication Failed",
        description: error instanceof Error ? error.message : "An unknown error occurred",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
      <TabsList className="grid grid-cols-2 mb-6">
        <TabsTrigger value="manual" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          Manual Creation
        </TabsTrigger>
        <TabsTrigger value="ai" className="data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple">
          <Sparkles className="h-4 w-4 mr-2" />
          AI-Powered Creation
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="manual">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues, "title"> }) => {
                const { onChange, onBlur, value, ref } = field;
                return (
                  <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter product title"
                        onChange={onChange}
                        onBlur={onBlur}
                        value={value}
                        ref={ref}
                      />
                    </FormControl>
                    <FormDescription>
                      Create a compelling title that describes your product
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues, "description"> }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your product in detail..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Provide a detailed description of what you're offering
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="price"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues, "price"> }) => (
                  <FormItem>
                    <FormLabel>Price (USD)</FormLabel>
                    <FormControl>
                      <Input type="number" min="0" step="0.01" placeholder="0.00" {...field} />
                    </FormControl>
                    <FormDescription>
                      Set your price in USD
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }: { field: ControllerRenderProps<ProductFormValues, "category"> }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {...field}
                      >
                        <option value="">Select a category</option>
                        <option value="digital_product">Digital Product</option>
                        <option value="service">Service</option>
                        <option value="ai_tool">AI Tool</option>
                        <option value="course">Course</option>
                        <option value="template">Template</option>
                        <option value="other">Other</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="tags"
              render={({ field }: { field: ControllerRenderProps<ProductFormValues, "tags"> }) => (
                <FormItem>
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter tags separated by commas" {...field} />
                  </FormControl>
                  <FormDescription>
                    Add relevant tags to help users find your product (e.g., ai, productivity, design)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={() => (
                <FormItem>
                  <FormLabel>Product Image</FormLabel>
                  <FormControl>
                    <Input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange}
                      className="cursor-pointer"
                    />
                  </FormControl>
                  <FormDescription>
                    Upload a high-quality image of your product (recommended size: 1200x800px)
                  </FormDescription>
                  <FormMessage />
                  
                  {imagePreview && (
                    <div className="mt-2 w-full max-w-md border rounded overflow-hidden">
                      <AspectRatio ratio={3/2}>
                        <Image
                          src={imagePreview}
                          alt="Product image preview"
                          width={600} // Example width, adjust as needed
                          height={400} // Example height, adjust as needed
                          className="w-full h-full object-cover"
                          priority={false} // Preview images are not LCP
                          // `sizes` might not be strictly necessary for a preview of this nature,
                          // but can be added if responsive behavior is critical here.
                          // For local object URLs, optimization via loader won't occur.
                        />
                      </AspectRatio>
                    </div>
                  )}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="video"
              render={() => (
                <FormItem>
                  <FormLabel>Product Video (MP4)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="video/mp4" onChange={handleVideoChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Optional video demonstrating your product
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="model"
              render={() => (
                <FormItem>
                  <FormLabel>3D Model (glb)</FormLabel>
                  <FormControl>
                    <Input type="file" accept="model/gltf-binary,.glb" onChange={handleModelChange} className="cursor-pointer" />
                  </FormControl>
                  <FormDescription>
                    Upload a 3D model for interactive viewing
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end">
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                {isSubmitting ? "Publishing..." : "Publish Product"}
              </Button>
            </div>
          </form>
        </Form>
      </TabsContent>
      
      <TabsContent value="ai">
        <AIListingGenerator 
          onApplyGenerated={handleApplyGenerated}
          initialValues={{
            title: form.getValues("title"),
            category: form.getValues("category")
          }}
        />
      </TabsContent>
    </Tabs>
  );
}