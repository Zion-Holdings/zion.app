import { useState } from "react";
import { Header } from "@/components/Header";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { logInfo } from '@/utils/productionLogger';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { UseFormRegisterReturn } from "react-hook-form";

const schema = z.object({
  name: z.string().min(2, "Required"),
  entityType: z.string().min(1, "Required"),
  contact: z.string().email("Enter a valid email"),
  useCase: z.string().min(1, "Required"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export default function PartnerIntegration() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      entityType: "",
      contact: "",
      useCase: "",
      message: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    logInfo('Partner API request', { data: values });
    setSubmitted(true);
  };

  return (
    <>
      <SEO
        title="Partner API Integration"
        description="Connect your organization to the Zion platform"
        canonical="https://app.ziontechgroup.com/integrate"
      />
      <Header />
      <main className="bg-background text-white py-12">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <h1 className="text-4xl font-bold mb-4 text-center">Zion Partner API</h1>
          <p className="text-center text-zion-slate-light mb-8">
            Integrate Zion's talent marketplace and learning tools into your own platform.
          </p>

          {submitted ? (
            <div className="bg-green-900/30 border border-green-800 p-6 rounded-md text-center">
              <p className="text-xl font-semibold mb-2">Application received</p>
              <p className="text-zion-slate-light">We'll review your request and reach out soon.</p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 bg-zion-blue-dark p-6 rounded-md border border-zion-blue-light"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }: { field: UseFormRegisterReturn }) => (
                    <FormItem>
                      <FormLabel>Institution Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Acme University" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="entityType"
                  render={({ field }: { field: UseFormRegisterReturn }) => (
                    <FormItem>
                      <FormLabel>Entity Type</FormLabel>
                      <Select onValueChange={(value) => field.onChange({ target: { value } } as any)} value={form.watch('entityType')}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="University">University</SelectItem>
                          <SelectItem value="Government">Government</SelectItem>
                          <SelectItem value="Bank">Bank</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }: { field: UseFormRegisterReturn }) => (
                    <FormItem>
                      <FormLabel>Point of Contact Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="useCase"
                  render={({ field }: { field: UseFormRegisterReturn }) => (
                    <FormItem>
                      <FormLabel>Use Case</FormLabel>
                      <Select onValueChange={(value) => field.onChange({ target: { value } } as any)} value={form.watch('useCase')}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select use case" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Education Partnership">Education Partnership</SelectItem>
                          <SelectItem value="Workforce Development">Workforce Development</SelectItem>
                          <SelectItem value="Token Integration">Token Integration</SelectItem>
                          <SelectItem value="Custom Marketplace Instance">Custom Marketplace Instance</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }: { field: UseFormRegisterReturn }) => (
                    <FormItem>
                      <FormLabel>Additional Details</FormLabel>
                      <FormControl>
                        <Textarea rows={3} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full bg-zion-purple">
                  Submit Application
                </Button>
              </form>
            </Form>
          )}

          <section className="mt-12 space-y-6">
            <h2 className="text-2xl font-bold">Available Endpoints</h2>
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">
              <li><code>POST /talents</code></li>
              <li><code>GET /jobs</code></li>
              <li><code>GET /certifications</code></li>
              <li><code>POST /verify-student</code></li>
              <li><code>POST /redeem-grant</code></li>
            </ul>
            <h2 className="text-2xl font-bold">Use Cases</h2>
            <ul className="list-disc list-inside text-zion-slate-light space-y-1">
              <li>Universities → Auto-certify & publish students who complete AI track</li>
              <li>Banks → Sync KYC for token wallet support</li>
              <li>Governments → Track funded courses & success rate</li>
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
