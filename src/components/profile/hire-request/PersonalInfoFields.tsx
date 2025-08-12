
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./useHireRequestForm";

interface PersonalInfoFieldsProps {
  form: UseFormReturn<FormValues>;
}

export function PersonalInfoFields({ form }: PersonalInfoFieldsProps) {
  return (
    <>
      <FormField
        control={form.control}
        name="requesterName"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel className="text-white">Your Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your full name"
                {...field}
                className="bg-zion-blue-light/20 dark:bg-zion-blue-dark/30 border-zion-blue-light text-black dark:text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="requesterEmail"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel className="text-white">Your Email</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter your email address"
                type="email"
                {...field}
                className="bg-zion-blue-light/20 dark:bg-zion-blue-dark/30 border-zion-blue-light text-black dark:text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
