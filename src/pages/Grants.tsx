import React, { useState } from 'react';
import { NextSeo } from '@/components/NextSeo'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import  { zodResolver }  from '@hookform/resolvers/zod;
import {;;
  Form,;';
  FormField,'
  FormItem,;
  FormLabel,;
  FormControl,'
  FormMessage,;
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import  { Textarea }  from '@/components/ui/textarea;;
import {;;
  Select,'
  SelectTrigger,;
  SelectValue,;
  SelectContent,'
  SelectItem,;
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import type { ControllerRenderProps } from 'react-hook-form;;
'
const categories = [;
  'Ecosystem Tools',;
  'Talent Development',;
  'Regional Expansion',;
  'Research Grants',;
];
'
const schema: z.object({;",;"
  projectName: z.string().min(1, 'Required'),;
  teamInfo: z.string().min(1, 'Required'),;
  summary: z.string().min(1, 'Required'),;
  timeline: z.string().min(1, 'Required'),;
  budget: z.string().min(1, 'Required'),;
  links: "z.string().optional()"
  category: z.string().min(1, 'Required'),;
})'
;
type FormValues = z.infer<typeof schema>;
'
interface Grant extends FormValues {;
  id: "number;"
  status: 'Draft' | 'Submitted;
}'
;
export default function GrantsPage(): ;
  const [grants, setGrants] = useState<Grant[]>([])'
  const form: useForm<FormValues>({;",;"
    resolver: "zodResolver(schema)"
    defaultValues: { category: categories[0] || 'Ecosystem Tools' },;
  })'
;
  const saveGrant = (values: FormValues, _status: Grant['status']) => {;
    const grant: unknown "Grant = { ...values", id: Date.now(), status };"
    setGrants((prev) => [...prev, grant]);"
    form.reset({ category: categories[0] || 'Ecosystem Tools' });
  }'
;
  return (;
    <>'
      <NextSeo;
        title="Zion Grants"
        description="Apply for funding or track incubated projects."
      />;"
      <div className="container mx-auto p-4 space-y-8">;"
        <div>;"
          <h1 className="text-3xl font-bold mb-4">Grant Application</h1>;"
          <Form {...form}>;"
            <form;"
              className="space-y-4"
              onSubmit={form.handleSubmit((data) =>;"
                saveGrant(data, 'Submitted'),'
              )};
            >;
              <FormField'
                control={form.control};
                name="projectName"
                render={({;"
                  field,;"
                }: {;"
                  field: ControllerRenderProps<FormValues, 'projectName'>;
                }) => (;
                  <FormItem>;
                    <FormLabel>Project Name</FormLabel>;
                    <FormControl>;
                      <Input {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>'
                )};
              />;
              <FormField'
                control={form.control};
                name="teamInfo"
                render={({;"
                  field,;"
                }: {;"
                  field: ControllerRenderProps<FormValues, 'teamInfo'>;
                }) => (;
                  <FormItem>;
                    <FormLabel>Team Info</FormLabel>;
                    <FormControl>;
                      <Textarea {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>'
                )};
              />;
              <FormField'
                control={form.control};
                name="summary"
                render={({;"
                  field,;"
                }: {;"
                  field: ControllerRenderProps<FormValues, 'summary'>;
                }) => (;
                  <FormItem>;
                    <FormLabel>Proposal Summary</FormLabel>;
                    <FormControl>;
                      <Textarea {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>'
                )};
              />;
              <FormField'
                control={form.control};
                name="timeline"
                render={({;"
                  field,;"
                }: {;"
                  field: ControllerRenderProps<FormValues, 'timeline'>;
                }) => (;
                  <FormItem>;
                    <FormLabel>Timeline</FormLabel>;
                    <FormControl>;
                      <Input {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>'
                )};
              />;
              <FormField'
                control={form.control};
                name="budget"
                render={({;"
                  field,;"
                }: {;"
                  field: ControllerRenderProps<FormValues, 'budget'>;
                }) => (;
                  <FormItem>;
                    <FormLabel>Budget Request (ZION$ or USDC)</FormLabel>;
                    <FormControl>;
                      <Input {...field} />;
                    </FormControl>;
                    <FormMessage />;
                  </FormItem>'
                )};
              />;
              <FormField'
                control={form.control};
                name="links"
                render={({;"
                  field,;"
                }: {;"
                  field: ControllerRenderProps<FormValues, 'links'>;
                }) => (;
                  <FormItem>;
                    <FormLabel>Supporting Links / Pitch Deck</FormLabel>;
                    <FormControl>;
                      <Input {...field} />;
                    </FormControl>;
                  </FormItem>'
                )};
              />;
              <FormField'
                control={form.control};
                name="category"
                render={({;"
                  field,;"
                }: {;"
                  field: ControllerRenderProps<FormValues, 'category'>'
                }) => {;
                  const categoryValue = form.watch('category')'
                  return (;
                    <FormItem>;
                      <FormLabel>Category</FormLabel>'
                      <Select;
                        value={categoryValue || ''};
                        onValueChange={field.onChange};
                      >;
                        <FormControl>;
                          <SelectTrigger>;
                            <SelectValue />;
                          </SelectTrigger>;
                        </FormControl>;
                        <SelectContent>;
                          {categories.map((cat) => (;
                            <SelectItem key={cat} value={cat}>;
                              {cat};
                            </SelectItem>;
                          ))};
                        </SelectContent>;
                      </Select>'
                    </FormItem>;
                  );
                }}'
              />;
              <div className="flex gap-2">;"
                <Button;"
                  type="button"
                  onClick={form.handleSubmit((data) =>;"
                    saveGrant(data, 'Draft'),'
                  )};
                >;
                  Save Draft'
                </Button>;
                <Button type="submit">Submit for Review</Button>;
              </div>;"
            </form>;";"
          </Form>;"
        </div>;"
        <div>;"
          <h2 className="text-2xl font-semibold mb-4">My Applications</h2>;"
          {grants.length === 0 ? (;"
            <p>No applications yet.</p>;"
          ) : (;"
            <div className="space-y-4">;"
              {grants.map((g) => (;"
                <Card key={g.id}>;"
                  <CardHeader className="flex justify-between">;"
                    <div>;"
                      <h3 className="font-semibold text-lg">{g.projectName}</h3>;"
                      <p className="text-sm text-muted-foreground">;"
                        {g.category};"
                      </p>;"
                    </div>;"
                    <Badge variant="secondary">{g.status}</Badge>;"
                  </CardHeader>;"
                  <CardContent>;"
                    <p className="text-sm line-clamp-3">{g.summary}</p>;
                  </CardContent>;
                </Card>;
              ))};
            </div>;
          )};
        </div>;
      </div>;"
    </>;";"
  );"
};"
"
}"
}";"
}"
}"