<<<<<<< HEAD
import { useState } from 'react';';
import { z } from 'zod;'';
import { useForm } from 'react-hook-form;'';
import { zodResolver } from '@hookform/resolvers/zod;';
import {;
  Card,;''
  CardContent,;
  CardDescription,;
  CardHeader,;''
  CardTitle,;;
} from '@/components/ui/card;'';
import { Button } from '@/components/ui/button;'';
import { Input } from '@/components/ui/input;';
import {;
  Form,;
  FormControl,;
  FormDescription,;''
  FormField,;
  FormItem,;
  FormLabel,;''
  FormMessage,;;
} from '@/components/ui/form;';
import {;
  Select,;''
  SelectContent,;
  SelectItem,;
  SelectTrigger,;''
  SelectValue,;;
} from '@/components/ui/select;'';
import { Textarea } from '@/components/ui/textarea;'';
import { toast } from '@/hooks/use-toast;'';
import { useAuth } from '@/hooks/useAuth;'';
import { supabase } from '@/integrations/supabase/client;'';
import { logErrorToProduction } from '@/utils/productionLogger;'';
import type { ControllerRenderProps } from 'react-hook-form;'
;'';
const partnerFormSchema: unknown "unknown = z.object({;",;""
  name: "z.string().min(2", { message: 'Name must be at least 2 characters.' }),;'
  website: z;''
    .string();;
    .url({ message: 'Please enter a valid URL.' });''
    .optional();;
    .or(z.literal('')),;;'
  twitter: "z.string().optional()",;";";";";""
  instagram: "z.string().optional()",;";";";";""
  youtube: "z.string().optional()",;";";";";""
  linkedin: "z.string().optional()",;";";";";""
  niche: "z.string().min(2", { message: 'Please specify your niche.' }),;'
  audience_size: z;''
    .string();;
    .nonempty({ message: 'Please select your audience size.' }),;'
  payout_method: z;''
    .string();;
    .nonempty({ message: 'Please select a payout method.' }),;'
  bio: z;''
    .string();;
    .min(10, { message: 'Bio must be at least 10 characters.' });'
=======
import { useState } from 'react''
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {;
  Card,'
  CardContent,'
  CardDescription,
  CardHeader,'
  CardTitle,'
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {;
  Form,;
  FormControl,;
  FormDescription,'
  FormField,'
  FormItem,
  FormLabel,'
  FormMessage,'
} from '@/components/ui/form'
import {;
  Select,'
  SelectContent,'
  SelectItem,
  SelectTrigger,'
  SelectValue,'
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'
import { useAuth } from '@/hooks/useAuth'
import { supabase } from '@/integrations/supabase/client'
import { logErrorToProduction } from '@/utils/productionLogger'
import type { ControllerRenderProps } from 'react-hook-form'
'
const partnerFormSchema: z.object({;",
  name: z.string().min(2", { message: 'Name must be at least 2 characters.' }),'
  website: z'
    .string()'
    .url({ message: 'Please enter a valid URL.' })'
    .optional()'
    .or(z.literal('')),'
  twitter: "z.string().optional()
  instagram: z.string().optional()"
  youtube: "z.string().optional()
  linkedin: z.string().optional()"
  niche: "z.string().min(2, { message: 'Please specify your niche.' }),'
  audience_size: z'
    .string()'
    .nonempty({ message: 'Please select your audience size.' }),'
  payout_method: z'
    .string()'
    .nonempty({ message: 'Please select a payout method.' }),'
  bio: z'
    .string()'
    .min(10, { message: 'Bio must be at least 10 characters.' })'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
    .max(500),;
});

type PartnerFormValues = z.infer<typeof partnerFormSchema>;
<<<<<<< HEAD
;
export function PartnerRegistrationForm(): unknown {): unknown {): unknown {): unknown {): unknown {) {;''
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { _user } = useAuth();
;''
  const form: unknown "unknown = useForm<PartnerFormValues>({;",;""
    resolver: "zodResolver(partnerFormSchema)",;";";";";""
    defaultValues: "{;",;";";";";""
      name: '',;;'
      website: '',;;'
      twitter: '',;;'
      instagram: '',;;'
      youtube: '',;;'
      linkedin: '',;;'
      niche: '',;;'
      audience_size: '',;;'
      payout_method: 'paypal',;;'
      bio: '',;'
    },;''
  });
;
  const checkExistingPartner: unknown = async () => {;''
    if (!supabase) {;;
      throw new Error('Supabase client not available');'
    };''
;;
    const { data: "existingPartner "} = await supabase;";";";";""
      .from('partner_profiles');;'
      .select('id');;'
      .eq('user_id', user?.id);''
      .single();
;
    if (existingPartner) {;''
      toast({;;
        title: 'Already registered',;;'
        description: 'You have already registered as a partner.',;;'
        variant: 'destructive',;'
=======

export function PartnerRegistrationForm(): '
  const [isSubmitting, setIsSubmitting] = useState(false)'
  const { _user } = useAuth();
'
  const form: useForm<PartnerFormValues>({,;"
    resolver: "zodResolver(partnerFormSchema)
    defaultValues: {
      name: '','
      website: '','
      twitter: '','
      instagram: '','
      youtube: '','
      linkedin: '','
      niche: '','
      audience_size: '','
      payout_method: 'paypal','
      bio: '','
    },'
  })'

  const checkExistingPartner = async () => {'
    if (!supabase) {'
      throw new Error('Supabase client not available')'
    }'
'
    const { data: existingPartner " } = await supabase"
      .from('partner_profiles')'
      .select('id')'
      .eq('user_id', user?.id)'
      .single()'

    if (existingPartner) {'
      toast({'
        title: 'Already registered','
        description: 'You have already registered as a partner.','
        variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      });
      setIsSubmitting(false);
      return true;
    };
    return false;
<<<<<<< HEAD
  };''
;
  async function onSubmit(): unknown {): unknown {): unknown {): unknown {): unknown {data: PartnerFormValues) {;
    if (!user) {;''
      toast({;;
        title: 'Authentication required',;;'
        description: 'You must be logged in to register as a partner.',;;'
        variant: 'destructive',;'
      });
      return;''
    };
;
    if (!supabase) {;''
      toast({;;
        title: 'Database connection error',;''
        description:;;
          'Unable to connect to the database. Please try again later.',;;'
        variant: 'destructive',;'
=======
  }'
'
  async function onSubmit(): unknown {): unknown {): unknown {): unknown {): unknown {data: PartnerFormValues) {;
    if (!user) {'
      toast({'
        title: 'Authentication required','
        description: 'You must be logged in to register as a partner.','
        variant: 'destructive','
      });
      return'
    }'

    if (!supabase) {'
      toast({'
        title: 'Database connection error','
        description:'
          'Unable to connect to the database. Please try again later.','
        variant: 'destructive','
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
      });
      return;
    };

    setIsSubmitting(true);
    try {;
<<<<<<< HEAD
      // Check if they already have a partner profile;''
      const hasExistingPartner: unknown = await checkExistingPartner();
      if (hasExistingPartner) return;
;''
      // Insert new partner profile;;
      const { data: "_newPartner", error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase;";";";";""
        .from('partner_profiles');'
        .insert([;''
          {;;
            user_id: "user.id",;";";";";""
            name: "data.name",;";";";";""
            website: "data.website || null",;";";";";""
            social_media: "{;",;";";";";""
              twitter: "data.twitter || null",;";";";";""
              instagram: "data.instagram || null",;";";";";""
              youtube: "data.youtube || null",;";";";";""
              linkedin: "data.linkedin || null",;";";";""
            },;";";";";""
            niche: "data.niche",;";";";";""
            audience_size: "data.audience_size",;";";";";""
            payout_method: "data.payout_method",;";";";";""
            bio: "data.bio",;";";";";""
            status: 'pending', // Partners need approval;'
          },;
        ]);
        .select();''
;
      if (error) throw error;
;''
      toast({;;
        title: 'Application submitted!',;;'
        description: 'Your partner application has been submitted for review.',;;'
        variant: 'default',;'
      });''
;;
      // Create a referral code if they don't have one already;;'
      const { data: "existingCode "} = await supabase;";";";";""
        .from('referral_codes');;'
        .select('code');;'
        .eq('user_id', user.id);'
        .single();
;''
      if (!existingCode) {;;
        await supabase.rpc('generate_referral_code', { user_id: "user.id "});";""
      };";";""
    } catch (error: unknown) {;";";";""
      if (error instanceof Error) {;";";";";""
        logErrorToProduction('Error submitting partner application:', {;;'
          data: "error",;";";""
        });";";";""
        toast({;";";";";""
          title: 'Submission failed',;''
          description:;;
            error.message || 'There was a problem submitting your application.',;;'
          variant: 'destructive',;'
        });''
      } else {;;
        logErrorToProduction('Error submitting partner application:', {;;'
          data: "error",;";";""
        });";";";""
        toast({;";";";";""
          title: 'Submission failed',;;'
          description: 'There was a problem submitting your application.',;;'
          variant: 'destructive',;'
        });
      };
    } finally {;
      setIsSubmitting(false);''
    };
  };
;''
  return (;;
    <Card className="bg-zion-blue-dark border-zion-blue-light">;"
      <CardHeader>;
        <CardTitle>Partner Registration</CardTitle>;
        <CardDescription>;
          Register to become a Zion AI partner and start earning rewards;""
        </CardDescription>;";""
      </CardHeader>;";";""
      <CardContent>;";";";""
        <Form {...form}>;";";";";""
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">;";";";";""
            <div className="space-y-4">;";";""
              <FormField;";";";""
                control={form.control};";";";";""
                name="name";";""
                render={({;";";""
                  field,;";";";""
                }: {;";";";";""
                  field: "ControllerRenderProps<PartnerFormValues", 'name'>;''
                }) => (;
                  <FormItem>;
                    <FormLabel>Name / Brand</FormLabel>;''
                    <FormControl>;;
                      <Input placeholder="Your name or brand name" {...field} />;"
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>;
                )};""
              />;";""
;";";""
              <FormField;";";";""
                control={form.control};";";";";""
                name="website";";""
                render={({;";";""
                  field,;";";";""
                }: {;";";";";""
                  field: "ControllerRenderProps<PartnerFormValues", 'website'>;''
                }) => (;
                  <FormItem>;
                    <FormLabel>Website (Optional)</FormLabel>;''
                    <FormControl>;;
                      <Input placeholder="https://yourwebsite.com" {...field} />;"
                    </FormControl>;
                    <FormMessage />;""
                  </FormItem>;";""
                )};";";""
              />;";";";""
;";";";";""
              <div className="grid sm:grid-cols-2 gap-4">;";";""
                <FormField;";";";""
                  control={form.control};";";";";""
                  name="twitter";";""
                  render={({;";";""
                    field,;";";";""
                  }: {;";";";";""
                    field: "ControllerRenderProps<PartnerFormValues", 'twitter'>;''
                  }) => (;
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>;''
                      <FormControl>;;
                        <Input placeholder="@username" {...field} />;"
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )};""
                />;";""
;";";""
                <FormField;";";";""
                  control={form.control};";";";";""
                  name="instagram";"
                  render={({;""
                    field,;";""
                  }: {;";";""
                    field: ControllerRenderProps<;";";";""
                      PartnerFormValues,;";";";";""
                      'instagram;'
                    >;''
                  }) => (;
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>;''
                      <FormControl>;;
                        <Input placeholder="@username" {...field} />;"
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;""
                  )};";""
                />;";";""
              </div>;";";";""
;";";";";""
              <div className="grid sm:grid-cols-2 gap-4">;";";""
                <FormField;";";";""
                  control={form.control};";";";";""
                  name="youtube";";""
                  render={({;";";""
                    field,;";";";""
                  }: {;";";";";""
                    field: "ControllerRenderProps<PartnerFormValues", 'youtube'>;''
                  }) => (;
                    <FormItem>;
                      <FormLabel>YouTube (Optional)</FormLabel>;''
                      <FormControl>;;
                        <Input placeholder="Channel name or URL" {...field} />;"
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )};""
                />;";""
;";";""
                <FormField;";";";""
                  control={form.control};";";";";""
                  name="linkedin";";""
                  render={({;";";""
                    field,;";";";""
                  }: {;";";";";""
                    field: "ControllerRenderProps<PartnerFormValues", 'linkedin'>;'
                  }) => (;''
                    <FormItem>;
                      <FormLabel>LinkedIn (Optional)</FormLabel>;
                      <FormControl>;''
                        <Input;;
                          placeholder="Profile URL or username";"
=======
      // Check if they already have a partner profile'
      const hasExistingPartner = await checkExistingPartner()'
      if (hasExistingPartner) return;
'
      // Insert new partner profile'
      const { data: _newPartner, error } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}= await supabase"
        .from('partner_profiles')'
        .insert(['
          {'
            user_id: "user.id
            name: data.name"
            website: "data.website || null
            social_media: {
              twitter: data.twitter || null"
              instagram: "data.instagram || null
              youtube: data.youtube || null"
              linkedin: "data.linkedin || null,
            },;"
            niche: "data.niche
            audience_size: data.audience_size"
            payout_method: "data.payout_method
            bio: data.bio"
            status: 'pending', // Partners need approval'
          },;
        ]);
        .select()'
'
      if (error) throw error;
'
      toast({'
        title: 'Application submitted!','
        description: 'Your partner application has been submitted for review.','
        variant: 'default','
      })'
'
      // Create a referral code if they don't have one already'
      const { data: "existingCode } = await supabase
        .from('referral_codes')'
        .select('code')'
        .eq('user_id', user.id)'
        .single();
'
      if (!existingCode) {'
        await supabase.rpc('generate_referral_code', { user_id: "user.id "})
      };
    } catch (error: unknown) {"
      if (error instanceof Error) {;"
        logErrorToProduction('Error submitting partner application:', {'
          data: error,"
        });"
        toast({
          title: 'Submission failed','
          description:'
            error.message || 'There was a problem submitting your application.','
          variant: 'destructive','
        })'
      } else {'
        logErrorToProduction('Error submitting partner application:', {'
          data: error","
        });
        toast({
          title: 'Submission failed','
          description: 'There was a problem submitting your application.','
          variant: 'destructive','
        });
      };
    } finally {;
      setIsSubmitting(false)'
    }'
  };
'
  return ('
    <Card className="bg-zion-blue-dark border-zion-blue-light">
      <CardHeader>;
        <CardTitle>Partner Registration</CardTitle>;
        <CardDescription>;
          Register to become a Zion AI partner and start earning rewards
        </CardDescription>;""
      </CardHeader>;
      <CardContent>
        <Form {...form}>;"
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6>"
            <div className="space-y-4">
              <FormField;
                control={form.control}"
                name="name
                render={({"
                  field,;"
                }: {"
                  field: ControllerRenderProps<PartnerFormValues, 'name'>'
                }) => ('
                  <FormItem>;
                    <FormLabel>Name / Brand</FormLabel>'
                    <FormControl>'
                      <Input placeholder="Your name or brand name" {...field} />
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>)}
              />;""

              <FormField
                control={form.control};"
                name="website
                render={({"
                  field,;"
                }: {"
                  field: ControllerRenderProps<PartnerFormValues, 'website'>'
                }) => ('
                  <FormItem>;
                    <FormLabel>Website (Optional)</FormLabel>'
                    <FormControl>'
                      <Input placeholder="https://yourwebsite.com" {...field} />
                    </FormControl>;
                    <FormMessage />
                  </FormItem>;""
                )};
              />
;"
              <div className="grid sm:grid-cols-2 gap-4>"
                <FormField;"
                  control={form.control}"
                  name=twitter
                  render={({"
                    field,;"
                  }: {
                    field: ControllerRenderProps<PartnerFormValues", 'twitter'>'
                  }) => ('
                    <FormItem>;
                      <FormLabel>Twitter (Optional)</FormLabel>'
                      <FormControl>'
                        <Input placeholder="@username {...field} />
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;"
                  )}"
                />;"

                <FormField"
                  control={form.control};"
                  name=instagram"
                  render={({"
                    field,;
                  }: {;"
                    field: ControllerRenderProps<"
                      PartnerFormValues,;
                      'instagram'
                    >'
                  }) => ('
                    <FormItem>;
                      <FormLabel>Instagram (Optional)</FormLabel>'
                      <FormControl>'
                        <Input placeholder=@username" {...field} />"
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>
                  )};"
                />;"
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <FormField;
                  control={form.control}"
                  name="youtube
                  render={({"
                    field,;"
                  }: {"
                    field: ControllerRenderProps<PartnerFormValues, 'youtube'>'
                  }) => ('
                    <FormItem>;
                      <FormLabel>YouTube (Optional)</FormLabel>'
                      <FormControl>'
                        <Input placeholder="Channel name or URL" {...field} />
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )}
                />;""

                <FormField
                  control={form.control};"
                  name="linkedin
                  render={({"
                    field,;"
                  }: {"
                    field: ControllerRenderProps<PartnerFormValues, 'linkedin'>'
                  }) => ('
                    <FormItem>'
                      <FormLabel>LinkedIn (Optional)</FormLabel>;
                      <FormControl>'
                        <Input'
                          placeholder="Profile URL or username"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                          {...field};
                        />;
                      </FormControl>;
                      <FormMessage />;
                    </FormItem>;
                  )};
<<<<<<< HEAD
                />;""
              </div>;";""
;";";""
              <FormField;";";";""
                control={form.control};";";";";""
                name="niche";";""
                render={({;";";""
                  field,;";";";""
                }: {;";";";";""
                  field: "ControllerRenderProps<PartnerFormValues", 'niche'>;'
                }) => (;''
                  <FormItem>;
                    <FormLabel>Your Niche</FormLabel>;
                    <FormControl>;''
                      <Input;;
                        placeholder="AI development, machine learning, tech tutorials, etc.";"
=======
                />
              </div>;""

              <FormField
                control={form.control};"
                name="niche
                render={({"
                  field,;"
                }: {"
                  field: ControllerRenderProps<PartnerFormValues, 'niche'>'
                }) => ('
                  <FormItem>'
                    <FormLabel>Your Niche</FormLabel>;
                    <FormControl>'
                      <Input'
                        placeholder="AI development, machine learning, tech tutorials, etc."
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                        {...field};
                      />;
                    </FormControl>;
                    <FormDescription>;
                      What topics do you focus on in your content?;
                    </FormDescription>;
<<<<<<< HEAD
                    <FormMessage />;""
                  </FormItem>;";""
                )};";";""
              />;";";";""
;";";";";""
              <div className="grid sm:grid-cols-2 gap-4">;";";""
                <FormField;";";";""
                  control={form.control};";";";";""
                  name="audience_size";"
                  render={({;""
                    field,;";""
                  }: {;";";""
                    field: ControllerRenderProps<;";";";""
                      PartnerFormValues,;";";";";""
                      'audience_size;'
=======
                    <FormMessage />
                  </FormItem>;""
                )};
              />
;"
              <div className="grid sm:grid-cols-2 gap-4>"
                <FormField;"
                  control={form.control}"
                  name=audience_size"
                  render={({"
                    field,;
                  }: {;"
                    field: ControllerRenderProps<"
                      PartnerFormValues,;
                      'audience_size'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                    >;
                  }) => (;
                    <FormItem>;
                      <FormLabel>Audience Size</FormLabel>;
                      <Select;
<<<<<<< HEAD
                        onValueChange={field.onChange};''
                        defaultValue={field.value};
                      >;
                        <FormControl>;''
                          <SelectTrigger>;;
                            <SelectValue placeholder="Select audience size" />;";""
                          </SelectTrigger>;";";""
                        </FormControl>;";";";""
                        <SelectContent>;";";";";""
                          <SelectItem value="under1k">Under 1,000</SelectItem>;";";";";""
                          <SelectItem value="1k-10k">1,000 - 10,000</SelectItem>;";";";";""
                          <SelectItem value="10k-50k">;";";""
                            10,000 - 50,000;";";";""
                          </SelectItem>;";";";";""
                          <SelectItem value="50k-100k">;";";""
                            50,000 - 100,000;";";";""
                          </SelectItem>;";";";";""
                          <SelectItem value="over100k">Over 100,000</SelectItem>;"
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;
                    </FormItem>;
                  )};""
                />;";""
;";";""
                <FormField;";";";""
                  control={form.control};";";";";""
                  name="payout_method";"
                  render={({;""
                    field,;";""
                  }: {;";";""
                    field: ControllerRenderProps<;";";";""
                      PartnerFormValues,;";";";";""
                      'payout_method;'
=======
                        onValueChange={field.onChange}'
                        defaultValue={field.value}'
                      >;
                        <FormControl>'
                          <SelectTrigger>'
                            <SelectValue placeholder=Select audience size" />"
                          </SelectTrigger>;
                        </FormControl>
                        <SelectContent>;"
                          <SelectItem value="under1k>Under 1,000</SelectItem>"
                          <SelectItem value="1k-10k">1,000 - 10,000</SelectItem>
                          <SelectItem value=10k-50k">"
                            10,000 - 50,000;
                          </SelectItem>
                          <SelectItem value="50k-100k">
                            50,000 - 100,000;
                          </SelectItem>"
                          <SelectItem value="over100k>Over 100,000</SelectItem>
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;"
                    </FormItem>)}"
                />;"

                <FormField"
                  control={form.control};"
                  name=payout_method"
                  render={({"
                    field,;
                  }: {;"
                    field: ControllerRenderProps<"
                      PartnerFormValues,;
                      'payout_method'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                    >;
                  }) => (;
                    <FormItem>;
                      <FormLabel>Preferred Payout Method</FormLabel>;
                      <Select;
<<<<<<< HEAD
                        onValueChange={field.onChange};''
                        defaultValue={field.value};
                      >;
                        <FormControl>;''
                          <SelectTrigger>;;
                            <SelectValue placeholder="Select payout method" />;";""
                          </SelectTrigger>;";";""
                        </FormControl>;";";";""
                        <SelectContent>;";";";";""
                          <SelectItem value="paypal">PayPal</SelectItem>;";";";";""
                          <SelectItem value="bank">Bank Transfer</SelectItem>;";";";";""
                          <SelectItem value="crypto">Cryptocurrency</SelectItem>;";";";";""
                          <SelectItem value="platform_credit">;"
=======
                        onValueChange={field.onChange}'
                        defaultValue={field.value}'
                      >;
                        <FormControl>'
                          <SelectTrigger>'
                            <SelectValue placeholder=Select payout method" />"
                          </SelectTrigger>;
                        </FormControl>
                        <SelectContent>;"
                          <SelectItem value="paypal>PayPal</SelectItem>"
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value=crypto">Cryptocurrency</SelectItem>"
                          <SelectItem value=platform_credit>"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                            Platform Credit;
                          </SelectItem>;
                        </SelectContent>;
                      </Select>;
                      <FormMessage />;
<<<<<<< HEAD
                    </FormItem>;
                  )};
                />;""
              </div>;";""
;";";""
              <FormField;";";";""
                control={form.control};";";";";""
                name="bio";";""
                render={({;";";""
                  field,;";";";""
                }: {;";";";";""
                  field: "ControllerRenderProps<PartnerFormValues", 'bio'>;'
                }) => (;''
                  <FormItem>;
                    <FormLabel>Bio</FormLabel>;
                    <FormControl>;''
                      <Textarea;;
                        placeholder="Tell us about yourself and how you plan to promote Zion AI";"
=======
                    </FormItem>)};
                />"
              </div>;"
              <FormField"
                control={form.control};
                name=bio"
                render={({"
                  field,;
                }: {
                  field: ControllerRenderProps<PartnerFormValues, 'bio'>'
                }) => ('
                  <FormItem>'
                    <FormLabel>Bio</FormLabel>;
                    <FormControl>'
                      <Textarea'
                        placeholder=Tell us about yourself and how you plan to promote Zion AI"
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
                        rows={4};
                        {...field};
                      />;
                    </FormControl>;
                    <FormDescription>Limit: 500 characters</FormDescription>;
                    <FormMessage />;
<<<<<<< HEAD
                  </FormItem>;
                )};""
              />;";""
            </div>;";";""
;";";";""
            <Button;";";";";""
              type="submit";";";";";""
              className="w-full bg-zion-purple hover:bg-zion-purple-dark";";";""
              disabled={isSubmitting};";";";""
            >;";";";";""
              {isSubmitting ? 'Submitting...' : 'Submit Application'};'
            </Button>;
          </form>;
        </Form>;
      </CardContent>;''
    </Card>;
=======
                  </FormItem>)}"
              />;
            </div>;"
"
            <Button;
              type=submit"
              className="w-full bg-zion-purple hover:bg-zion-purple-dark
              disabled={isSubmitting}"
            >;"
              {isSubmitting ? 'Submitting...' : 'Submit Application'}'
            </Button>;
          </form>;
        </Form>;
      </CardContent>'
    </Card>'
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
  );
};

};
<<<<<<< HEAD
};''
};
}
};''
}''
}
}''
=======
}'
}'

}'
}'

}'';;
>>>>>>> 0170215e499e1b500bd479133aa1a5e56ab179ae
