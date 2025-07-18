import { useState } from 'react';
import { Loader2 } from '@/components/ui/icons;'
import { zodResolver } from '@hookform/resolvers/zod;'
import { useForm } from 'react-hook-form;'
import { z } from 'zod;'
import type { WorkExperience } from '@/types/resume;'
import { Button } from '@/components/ui/button;'
import { Calendar } from '@/components/ui/calendar;
import {;
  Form,;
  FormControl,;'
  FormField,;
  FormItem,;
  FormLabel,;'
  FormMessage,;;
} from '@/components/ui/form;'
import { Input } from '@/components/ui/input;'
import {;
  Popover,;
  PopoverContent,;'
  PopoverTrigger,;;
} from '@/components/ui/popover;'
import { Textarea } from '@/components/ui/textarea;'
import { cn } from '@/lib/utils;'
import { Switch } from '@/components/ui/switch;'
import { format } from 'date-fns;
;;
import type { ControllerRenderProps } from 'react-hook-form;
;;
import { AIEnhancementButton } from '@/components/ai-enhancement/AIEnhancementButton;'
import { AIEnhancementDialog } from '@/components/ai-enhancement/AIEnhancementDialog;
;
// Define form schema;'
const formSchema: unknown "unknown = z.object({;",;"
  company_name: "z.string().min(1", 'Company name is required'),;;
  role_title: "z.string().min(1", 'Role title is required'),;;
  start_date: "z.date()",;";";";";"
  end_date: "z.date().optional()",;";";";";"
  is_current: "z.boolean().optional()", // Make optional, defaultValues will handle initial state;";";";";"
  description: "z.string().optional()",;";";";";"
  location: "z.string().optional()",;
});
;"
type FormValues = z.infer<typeof formSchema>;";"
;";";"
interface WorkExperienceItemFormProps {;";";";"
  initialData?: WorkExperience;";";";";"
  onSubmit: "(data: WorkExperience) => Promise<void>;",;";";";";"
  onCancel: "() => void;";
};
;
export function WorkExperienceItemForm(): unknown {): unknown {): unknown {): unknown {): unknown {{;
  initialData,;
  onSubmit,;
  onCancel,;
}: WorkExperienceItemFormProps) {;"
  const [isEnhancementDialogOpen, setIsEnhancementDialogOpen] = useState(false);";"
;";";"
  // Set up form;";";";"
  const form: unknown = useForm<FormValues>({;";,";";";"
    resolver: "zodResolver(formSchema)",;";";";";"
    defaultValues: "{;",;";";";";"
      company_name: initialData?.company_name || '',;;
      role_title: initialData?.role_title || '',;
      start_date: initialData?.start_date;
        ? new Date(initialData.start_date);'
        : new Date(),;
      end_date: initialData?.end_date;
        ? new Date(initialData.end_date);'
        : undefined,;;
      is_current: "initialData?.is_current || false",;";";";";"
      description: initialData?.description || '',;;
      location: initialData?.location || '',;'
    },;
  });
;'
  const { _isSubmitting } = form.formState;;
  const watchIsCurrent: unknown = form.watch('is_current');;
  const watchRoleTitle: unknown = form.watch('role_title');;
  const watchCompanyName: unknown = form.watch('company_name');'
;
  const handleFormSubmit: unknown = async (_values: FormValues) => {;
    // Create a properly typed WorkExperience object with all required fields;'
    const workExperience: unknown WorkExperience = {;;
      ...(initialData?.id && { id: "initialData.id "}),;";";";";"
      company_name: "values.company_name", // Required;";";";";"
      role_title: "values.role_title", // Required;";";";";"
      start_date: "values.start_date", // Required;";";";";"
      ...(values.end_date && { end_date: "values.end_date "}),;";";";";"
      is_current: "values.is_current ?? false",;";";";";"
      ...(values.description && { description: "values.description "}),;";";";";"
      ...(values.location && { location: "values.location "}),;
    };
;"
    await onSubmit(workExperience);";"
  };";";"
;";";";"
  const handleAIEnhancement: unknown = (_content: string) => {;";";";";"
    form.setValue('description', content, { shouldDirty: "true "});
    setIsEnhancementDialogOpen(false);
  };
;
  return (;"
    <>;";"
      <Form {...form}>;";";"
        <form;";";";"
          onSubmit={form.handleSubmit(handleFormSubmit)};";";";";"
          className="space-y-6";";";";"
        >;";";";";"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;";";"
            <FormField;";";";"
              control={form.control};";";";";"
              name="company_name";";"
              render={({;";";"
                field,;";";";"
              }: {;";";";";"
                field: "ControllerRenderProps<FormValues", 'company_name'>;'
              }) => (;
                <FormItem>;
                  <FormLabel>Company Name</FormLabel>;'
                  <FormControl>;;
                    <Input placeholder="e.g. Acme Corporation" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )};"
            />;";"
;";";"
            <FormField;";";";"
              control={form.control};";";";";"
              name="role_title";";"
              render={({;";";"
                field,;";";";"
              }: {;";";";";"
                field: "ControllerRenderProps<FormValues", 'role_title'>;'
              }) => (;
                <FormItem>;
                  <FormLabel>Role Title</FormLabel>;'
                  <FormControl>;;
                    <Input placeholder="e.g. Senior Developer" {...field} />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;"
              )};";"
            />;";";"
          </div>;";";";"
;";";";";"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;";";"
            <FormField;";";";"
              control={form.control};";";";";"
              name="location";";"
              render={({;";";"
                field,;";";";"
              }: {;";";";";"
                field: "ControllerRenderProps<FormValues", 'location'>;
              }) => (;'
                <FormItem>;
                  <FormLabel>Location</FormLabel>;
                  <FormControl>;'
                    <Input;;
                      placeholder="e.g. New York, NY (Remote)";
                      {...field};
                    />;
                  </FormControl>;
                  <FormMessage />;
                </FormItem>;
              )};"
            />;";"
;";";"
            <FormField;";";";"
              control={form.control};";";";";"
              name="is_current";";"
              render={({;";";"
                field,;";";";"
              }: {;";";";";"
                field: "ControllerRenderProps<FormValues", 'is_current'>;'
              }) => (;;
                <FormItem className="flex flex-col">;";";";"
                  <FormLabel>Current Position</FormLabel>;";";";";"
                  <div className="flex items-center gap-2 h-10">;";";";"
                    <Switch;";";";";"
                      aria-label="Current position";";";"
                      checked={Boolean(field.value)};";";";"
                      onCheckedChange={field.onChange};";";";";"
                      id="current-position-switch";";";"
                    />;";";";"
                    <label;";";";";"
                      htmlFor="current-position";";";";";"
                      className="text-sm text-muted-foreground";
                    >;
                      I currently work here;
                    </label>;
                  </div>;
                  <FormMessage />;
                </FormItem>;"
              )};";"
            />;";";"
          </div>;";";";"
;";";";";"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">;";";"
            <FormField;";";";"
              control={form.control};";";";";"
              name="start_date";";"
              render={({;";";"
                field,;";";";"
              }: {;";";";";"
                field: "ControllerRenderProps<FormValues", 'start_date'>;'
              }) => (;;
                <FormItem className="flex flex-col">;
                  <FormLabel>Start Date</FormLabel>;"
                  <Popover>;";"
                    <PopoverTrigger asChild>;";";"
                      <FormControl>;";";";"
                        <Button;";";";";"
                          variant={'outline'};'
                          className={cn(;;
                            'w-full pl-3 text-left font-normal',;;
                            !field.value && 'text-muted-foreground',;
                          )};
                        >;'
                          {field.value ? (;;
                            format(field.value, 'MMM yyyy');'
                          ) : (;
                            <span>Select date</span>;
                          )};'
                          <CalendarIcon;;
                            className="ml-auto h-4 w-4 opacity-50";";";";";"
                            aria-hidden="true";"
                          />;";"
                        </Button>;";";"
                      </FormControl>;";";";"
                    </PopoverTrigger>;";";";";"
                    <PopoverContent className="w-auto p-0" align="start">;";";";"
                      <Calendar;";";";";"
                        mode="single";";"
                        selected={field.value};";";"
                        onSelect={field.onChange};";";";"
                        initialFocus;";";";";"
                        captionLayout="dropdown";
                        fromYear={1990};
                        toYear={new Date().getFullYear()};
                      />;
                    </PopoverContent>;
                  </Popover>;
                  <FormMessage />;
                </FormItem>;
              )};
            />;"
;";"
            {!watchIsCurrent && (;";";"
              <FormField;";";";"
                control={form.control};";";";";"
                name="end_date";";"
                render={({;";";"
                  field,;";";";"
                }: {;";";";";"
                  field: "ControllerRenderProps<FormValues", 'end_date'>;'
                }) => (;;
                  <FormItem className="flex flex-col">;
                    <FormLabel>End Date</FormLabel>;"
                    <Popover>;";"
                      <PopoverTrigger asChild>;";";"
                        <FormControl>;";";";"
                          <Button;";";";";"
                            variant={'outline'};'
                            className={cn(;;
                              'w-full pl-3 text-left font-normal',;;
                              !field.value && 'text-muted-foreground',;
                            )};
                          >;'
                            {field.value ? (;;
                              format(field.value, 'MMM yyyy');'
                            ) : (;
                              <span>Select date</span>;
                            )};'
                            <CalendarIcon;;
                              className="ml-auto h-4 w-4 opacity-50";";";";";"
                              aria-hidden="true";"
                            />;";"
                          </Button>;";";"
                        </FormControl>;";";";"
                      </PopoverTrigger>;";";";";"
                      <PopoverContent className="w-auto p-0" align="start">;";";";"
                        <Calendar;";";";";"
                          mode="single";";"
                          selected={field.value || undefined};";";"
                          onSelect={field.onChange};";";";"
                          initialFocus;";";";";"
                          captionLayout="dropdown";
                          fromYear={1990};
                          toYear={new Date().getFullYear()};
                          disabled={(date) => date > new Date()};
                        />;
                      </PopoverContent>;
                    </Popover>;
                    <FormMessage />;
                  </FormItem>;
                )};
              />;
            )};"
          </div>;";"
;";";"
          <FormField;";";";"
            control={form.control};";";";";"
            name="description";";"
            render={({;";";"
              field,;";";";"
            }: {;";";";";"
              field: "ControllerRenderProps<FormValues", 'description'>;
            }) => (;'
              <FormItem>;;
                <div className="flex justify-between items-center">;";";";"
                  <FormLabel>Description</FormLabel>;";";";";"
                  <div className="flex gap-2">;";";"
                    <AIEnhancementButton;";";";"
                      options={{;";";";";"
                        enhancementType: 'work-description',;;
                        content: field.value || '',;;
                        context: "`${watchRoleTitle"} at ${watchCompanyName}`,;";";"
                      }};";";";"
                      onEnhanced={(content) =>;";";";";"
                        form.setValue('description', content, {;;
                          shouldDirty: "true",;";";"
                        });";";";"
                      };";";";";"
                      buttonText="Enhance with AI";";";"
                    />;";";";"
                    <Button;";";";";"
                      type="button";";";";";"
                      variant="outline";";";";";"
                      size="sm";";";";"
                      onClick={() => setIsEnhancementDialogOpen(true)};";";";";"
                      className="text-xs";
                    >;
                      AI Writer;
                    </Button>;"
                  </div>;";"
                </div>;";";"
                <FormControl>;";";";"
                  <Textarea;";";";";"
                    placeholder="Describe your responsibilities, achievements, and skills used in this role...";";";";";"
                    className="min-h-[150px]";
                    {...field};
                  />;
                </FormControl>;
                <FormMessage />;"
              </FormItem>;";"
            )};";";"
          />;";";";"
;";";";";"
          <div className="flex justify-end gap-2">;";";";";"
            <Button type="button" variant="outline" onClick={onCancel}>;";";"
              Cancel;";";";"
            </Button>;";";";";"
            <Button type="submit" disabled={isSubmitting}>;";";"
              {isSubmitting ? (;";";";"
                <>;";";";";"
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />;
                  Saving...;
                </>;
              ) : (;
                <>Save</>;
              )};
            </Button>;
          </div>;"
        </form>;";"
      </Form>;";";"
;";";";"
      <AIEnhancementDialog;";";";";"
        title="Enhance Work Experience Description";"
        isOpen={isEnhancementDialogOpen};";"
        onClose={() => setIsEnhancementDialogOpen(false)};";";"
        onApply={handleAIEnhancement};";";";"
        defaultOptions={{;";";";";"
          enhancementType: 'work-description',;;
          content: form.getValues('description') || '',;;
          context: "`${watchRoleTitle"} at ${watchCompanyName}`,;";";";"
        }};";";";";"
        initialContent={form.getValues('description') || ''};
      />;'
    </>;
  );
};
;
};'
}
}'
}'