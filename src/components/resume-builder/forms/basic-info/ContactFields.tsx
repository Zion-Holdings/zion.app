
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";
import { BasicInfoFormData } from "./schema";

interface ContactFieldsProps {
  control: Control<BasicInfoFormData>;
}

export function ContactFields({ control }: ContactFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        control={control}
        name="location"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="San Francisco, CA" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="website"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>Website</FormLabel>
            <FormControl>
              <Input placeholder="https://yourwebsite.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="linkedin"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder="https://linkedin.com/in/username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="github"
        render={({ field }: { field: any }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder="https://github.com/username" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
