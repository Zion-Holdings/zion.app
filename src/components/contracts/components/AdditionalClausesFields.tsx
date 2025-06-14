
import { UseFormReturn, ControllerRenderProps } from "react-hook-form";
import {
  FormField,
  FormItem,
  FormLabel, 
  FormControl, 
  FormDescription 
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { ContractFormValues } from "./ContractForm";

interface AdditionalClausesFieldsProps {
  form: UseFormReturn<ContractFormValues>;
}

export function AdditionalClausesFields({ form }: AdditionalClausesFieldsProps) {
  return (
    <FormField
      control={form.control}
      name="additionalClauses"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel>Additional Clauses</FormLabel>
            <FormDescription>
              Select additional clauses to include in your contract
            </FormDescription>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="additionalClauses"
              render={({ field }: { field: ControllerRenderProps<ContractFormValues, "additionalClauses"> }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('nda')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, 'nda'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'nda')
                            );
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Confidentiality (NDA)
                    </FormLabel>
                    <FormDescription>
                      Protect sensitive information
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="additionalClauses"
              render={({ field }: { field: ControllerRenderProps<ContractFormValues, "additionalClauses"> }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('ip')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, 'ip'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'ip')
                            );
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Intellectual Property Transfer
                    </FormLabel>
                    <FormDescription>
                      Transfer ownership of work products
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="additionalClauses"
              render={({ field }: { field: ControllerRenderProps<ContractFormValues, "additionalClauses"> }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('termination')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, 'termination'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'termination')
                            );
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Termination Clause
                    </FormLabel>
                    <FormDescription>
                      Define conditions for ending the contract
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="additionalClauses"
              render={({ field }: { field: ControllerRenderProps<ContractFormValues, "additionalClauses"> }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value?.includes('revisions')}
                      onCheckedChange={(checked) => {
                        const currentValues = field.value || [];
                        return checked
                          ? field.onChange([...currentValues, 'revisions'])
                          : field.onChange(
                              currentValues.filter((value) => value !== 'revisions')
                            );
                      }}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      Revisions & Amendments
                    </FormLabel>
                    <FormDescription>
                      Define how changes to the contract are handled
                    </FormDescription>
                  </div>
                </FormItem>
              )}
            />
          </div>
        </FormItem>
      )}
    />
  );
}
