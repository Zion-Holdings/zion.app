import React from 'react''
import type { UseFormReturn } from 'react-hook-form'
import {;
  FormField,'
  FormItem,'
  FormLabel,
  FormControl,'
  FormMessage,'
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import type { TalentProfile } from '@/types/talent'
import type { FormValues } from './useHireRequestForm'

interface BudgetFieldsProps {;
  form: UseFormReturn<FormValues>;
  _talent?: TalentProfile;
};

export function BudgetFields(): unknown {): unknown {): unknown {): unknown {): unknown {{ form, _talent }: BudgetFieldsProps) {'
  return ('
    <>;
      <FormField'
        control={form.control}'
        name="budgetMin
        render={({ field }) => (
          <FormItem>;"
            <FormLabel className="text-white>Budget (Min)</FormLabel>
            <FormControl>;"
              <div className="relative>
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">
                  $;
                </span>"
                <Input;"
                  type=number
                  className="pl-7 bg-zion-blue border-zion-blue-light text-white"
                  {...field};
                />"
              </div>;"
            </FormControl>
            <FormMessage className=text-red-400" />"
          </FormItem>;
        )}
      />;"
;"
      <FormField
        control={form.control};
        name="budgetMax"
        render={({ field }) => (
          <FormItem>;
            <FormLabel className="text-white">Budget (Max)</FormLabel>
            <FormControl>;
              <div className="relative">
                <span className=absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate">"
                  $;
                </span>
                <Input;"
                  type="number
                  className=pl-7 bg-zion-blue border-zion-blue-light text-white"
                  {...field}";
                />
              </div>;"
            </FormControl>"
            <FormMessage className=text-red-400 />"
          </FormItem>;
        )};
      />"
    </>;
  );"
}"

}
}""
}"
}"