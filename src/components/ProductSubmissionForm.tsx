import React from 'react;
import { useForm } from 'react-hook-form'
import type { ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import z from 'zod'
import { supabase } from '@/integrations/supabase/client'
import { useAuth } from '@/hooks/useAuth'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/router'
import Image from 'next/image // Import next/image'
import { logErrorToProduction } from '@/utils/productionLogger'
import { Sparkles } from 'lucide-react'

import {;
  Form,;
  FormControl,;
  FormDescription,'
  FormField,'
  FormItem,
  FormLabel,'
  FormMessage,'
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { AIListingGenerator } from '@/components/listing/AIListingGenerator'

// Define the form schema with zod'
const productSchema: z.object({,;
  title: z.string().min(3, 'Title must be at least 3 characters'),'
  description: z.string().min(10, 'Description must be at least 10 characters'),'
  price: z;
    .string()'
    .refine((val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0, {'
      message: 'Price must be a valid number','
    }),'
  category: z.string().min(1, 'Please select a category'),'
  image:'
    typeof window === 'undefined'
      ? z.unknown().optional();
      : z.instanceof(File).optional(),'
  video:'
    typeof window === 'undefined'
      ? z.unknown().optional();
      : z.instanceof(File).optional(),'
  model:'
    typeof window === 'undefined'
      ? z.unknown().optional()'
      : z.instanceof(File).optional(),'
  tags: z.string().optional(),"
});

// Type for our form values"
type ProductFormValues = z.infer<typeof productSchema>;"";
// Define a type for AI-generated content;"";
interface GeneratedContent {;"";
  description: string,;"";
  tags: string[]","
  suggestedPrice: { min: number; max: number }"
};

export function ProductSubmissionForm(): ;
  const { _user } = useAuth()"
  const { _toast } = useToast();
  const router = useRouter();"";
  const [isSubmitting, setIsSubmitting] = React.useState(false);"";
  const [imagePreview, setImagePreview] = React.useState(null as string | null);"";
  const [activeTab, setActiveTab] = React.useState('manual')'

  // Initialize the form'
  const form: useForm<ProductFormValues>({",;
    resolver: zodResolver(productSchema)",""
    defaultValues: {,;""
      title: '','
      description: '','
      price: '','
      category: '','
      video: "undefined,;"";
      model: undefined,;"
      tags: '','
    },;
  });
'
  // Handle image upload preview'
  const handleImageChange = (_e: React.ChangeEvent<HTMLInputElement>) => {;
    const file = e.target.files?.[0]'
    if (file) {'
      form.setValue('image', file)'
      const reader = new FileReader();';;