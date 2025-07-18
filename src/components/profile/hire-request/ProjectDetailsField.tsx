import React from 'react''
import type { UseFormReturn } from 'react-hook-form'
import {;
  FormField,'
  FormItem,'
  FormLabel,
  FormControl,'
  FormMessage,'
} from '@/components/ui/form'
import { Textarea } from '@/components/ui/textarea'
import type { FormValues } from './useHireRequestForm'
'
interface ProjectDetailsFieldProps {'
  form: "UseFormReturn<FormValues>
};
"
export function ProjectDetailsField(): unknown {): unknown {): unknown {): unknown {): unknown {{ form }: ProjectDetailsFieldProps) {;"
  return (;
    <FormField"
      control={form.control};"
      name=projectOverview
      render={({ field }) => ("
        <FormItem>;"
          <FormLabel className=text-white>Project Overview</FormLabel>"
          <FormControl>;"
            <Textarea
              placeholder=Describe your project, goals, and requirements"
              className="bg-zion-blue border-zion-blue-light text-white min-h-[120px]
              {...field}
            />;"
          </FormControl>"
          <FormMessage className=text-red-400 />"
        </FormItem>)}"
    />;
  );"
}"

}
}""
}"
}"