import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { format } from 'date-fns';
import { Loader2, Edit, Trash2 } from 'lucide-react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { WorkExperience } from '@/types/resume';



import { useResume } from '@/hooks/useResume';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import { AIEnhancementButton } from '@/components/resume-builder/forms/AIEnhancementButton';

// Define schema for form validation
const workExperienceSchema = z.object({
  company_name: z.string().min(1, 'Company name is required'),
  role_title: z.string().min(1, 'Job title is required'),
  start_date: z.string().min(1, 'Start date is required'),
  end_date: z.string().optional(),
  is_current: z.boolean().default(false),
  description: z.string().optional(),
  location: z.string().optional(),
});

type WorkExperienceFormValues = z.infer<typeof workExperienceSchema>;

interface WorkExperienceFormProps {
  resumeId: string;
  workExperiences: WorkExperience[];
  onComplete: () => void;
  onBack: () => void;
}

export function WorkExperienceForm({ resumeId, workExperiences, onComplete, onBack }: WorkExperienceFormProps) {
  const { addWorkExperience, updateWorkExperience, deleteWorkExperience, isLoading } = useResume();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Helper function to format dates to string
  const formatDateValue = (dateValue: string | Date | undefined): string => {
    if (!dateValue) return '';
    if (typeof dateValue === 'string') return dateValue;
    return format(dateValue, 'yyyy-MM-dd');
  };

  const form = useForm<WorkExperienceFormValues>({
    resolver: zodResolver(workExperienceSchema),
    defaultValues: {
      company_name: '',
      role_title: '',
      start_date: format(new Date(), 'yyyy-MM-dd'),
      is_current: false,
      description: '',
      location: '',
    },
  });

  const handleAddOrUpdate = async (data: WorkExperienceFormValues) => {
    try {
      setError(null);
      let success;

      const experienceData: WorkExperience = {
        company_name: data.company_name, // Required field
        role_title: data.role_title, // Required field
        start_date: data.start_date, // Required field
        end_date: data.is_current ? undefined : (data.end_date || undefined),
        is_current: data.is_current,
        description: data.description,
        location: data.location,
      };

      if (editingId) {
        success = await updateWorkExperience(editingId, experienceData);
      } else {
        success = await addWorkExperience(resumeId, experienceData);
      }

      if (success) {
        form.reset({
          company_name: '',
          role_title: '',
          start_date: format(new Date(), 'yyyy-MM-dd'),
          is_current: false,
          description: '',
          location: '',
        });
        setEditingId(null);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
    }
  };

  const handleEdit = (work: WorkExperience) => {
    setEditingId(work.id!);
    form.reset({
      ...work,
      start_date: formatDateValue(work.start_date),
      end_date: work.end_date && !work.is_current ? formatDateValue(work.end_date) : undefined,
    });
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this work experience?')) {
      await deleteWorkExperience(id);
    }
  };

  const handleEnhanceDescription = (enhancedContent: string) => {
    form.setValue('description', enhancedContent);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-2">Work Experience</h2>
        <p className="text-muted-foreground">
          Add your work history to showcase your professional experience.
        </p>
      </div>

      {workExperiences.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-md font-medium">Added Experience</h3>
          {workExperiences.map((work) => (
            <Card key={work.id} className="bg-muted/40">
              <CardContent className="pt-6">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-medium">{work.role_title}</h4>
                    <p className="text-sm text-muted-foreground">{work.company_name}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {typeof work.start_date === 'string' 
                        ? work.start_date 
                        : format(work.start_date, 'MMM yyyy')} - {work.is_current 
                        ? 'Present' 
                        : (work.end_date ? (typeof work.end_date === 'string' 
                          ? work.end_date 
                          : format(work.end_date, 'MMM yyyy')) : '')}
                    </p>
                    {work.location && (
                      <p className="text-xs text-muted-foreground">{work.location}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleEdit(work)}
                      aria-label="Edit experience"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(work.id!)}
                      aria-label="Delete experience"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                {work.description && (
                  <p className="text-sm mt-3 line-clamp-2">{work.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div className="bg-muted/40 p-6 rounded-lg">
        <h3 className="text-md font-medium mb-4">
          {editingId ? 'Update Experience' : 'Add Experience'}
        </h3>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleAddOrUpdate)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company_name"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Company Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Google, Microsoft, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role_title"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Software Engineer, Product Manager, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="start_date"
                render={({ field }: { field: any }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>
                    <FormControl>
                      <Input 
                        type="date" 
                        {...field} 
                        value={field.value || ''}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="is_current"
                  render={({ field }: { field: any }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-2">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>I currently work here</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {!form.watch('is_current') && (
                  <FormField
                    control={form.control}
                    name="end_date"
                    render={({ field }: { field: any }) => (
                      <FormItem>
                        <FormLabel>End Date</FormLabel>
                        <FormControl>
                          <Input 
                            type="date" 
                            {...field} 
                            value={field.value || ''} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            </div>

            <FormField
              control={form.control}
              name="location"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel>Location (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="San Francisco, CA (Remote)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }: { field: any }) => (
                <FormItem>
                  <FormLabel className="flex justify-between">
                    <span>Job Description</span>
                    <AIEnhancementButton
                      currentContent={field.value || ''}
                      enhancementType="work-description"
                      context={`Role: ${form.getValues('role_title')} at ${form.getValues('company_name')}`}
                      onEnhanced={handleEnhanceDescription}
                    />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe your responsibilities and accomplishments..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && <Alert variant="destructive"><AlertDescription>{error}</AlertDescription></Alert>}

            <div className="flex justify-between pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (editingId) {
                    setEditingId(null);
                    form.reset({
                      company_name: '',
                      role_title: '',
                      start_date: format(new Date(), 'yyyy-MM-dd'),
                      is_current: false,
                      description: '',
                      location: '',
                    });
                  } else {
                    onBack();
                  }
                }}
              >
                {editingId ? 'Cancel' : 'Back'}
              </Button>

              <div className="flex gap-2">
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingId ? 'Update' : 'Add'} Experience
                </Button>

                {!editingId && workExperiences.length > 0 && (
                  <Button type="button" onClick={onComplete}>
                    Next
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
