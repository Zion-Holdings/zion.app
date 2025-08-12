
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./useHireRequestForm";

interface TimelineFieldProps {
  form: UseFormReturn<FormValues>;
}

export function TimelineField({ form }: TimelineFieldProps) {
  const timelineOptions = [
    { value: "Less than 1 week", label: "Less than 1 week" },
    { value: "1-2 weeks", label: "1-2 weeks" },
    { value: "2-4 weeks", label: "2-4 weeks" },
    { value: "1-2 months", label: "1-2 months" },
    { value: "3-6 months", label: "3-6 months" },
    { value: "6+ months", label: "6+ months" },
    { value: "Ongoing", label: "Ongoing" }
  ];

  return (
    <FormField
      control={form.control}
      name="timeline"
      render={({ field }: { field: any }) => (
        <FormItem>
          <FormLabel className="text-white">Project Timeline</FormLabel>
          <FormControl>
            <Select 
              onValueChange={field.onChange} 
              value={field.value}
              defaultValue={field.value}
            >
              <SelectTrigger className="bg-zion-blue-light/20 dark:bg-zion-blue-dark/30 border-zion-blue-light text-black dark:text-white">
                <SelectValue placeholder="Select estimated timeline" />
              </SelectTrigger>
              <SelectContent>
                {timelineOptions.map((option: { value: string; label: string }) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
