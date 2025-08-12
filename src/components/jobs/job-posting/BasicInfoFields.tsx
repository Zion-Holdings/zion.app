import React, { useState } from "react";
import { Control, ControllerRenderProps } from "react-hook-form";
import {
  FormField,
  FormItem, 
  FormLabel, 
  FormControl, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ClientBudgetRecommender } from "@/components/pricing/ClientBudgetRecommender";
import { Card, CardContent } from "@/components/ui/card";

interface BasicInfoFieldsProps {
  control: Control<any>;
}

export const BasicInfoFields: React.FC<BasicInfoFieldsProps> = ({ control }) => {
  const [_minBudget, setMinBudget] = useState<string>("");
  const [_maxBudget, setMaxBudget] = useState<string>("");

  const handleSuggestionApplied = (min: number, max: number) => {
    setMinBudget(min.toString());
    setMaxBudget(max.toString());
  };

  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="title"
        render={({ field }: { field: ControllerRenderProps<any, "title"> }) => (
          <FormItem>
            <FormLabel>Job Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Senior React Developer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name="company"
        render={({ field }: { field: ControllerRenderProps<any, "company"> }) => (
          <FormItem>
            <FormLabel>Company</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Acme Corporation" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={control}
        name="category"
        render={({ field }: { field: ControllerRenderProps<any, "category"> }) => (
          <FormItem>
            <FormLabel>Job Category</FormLabel>
            <FormControl>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                {...field}
              >
                <option value="">Select a category</option>
                <option value="development">Development</option>
                <option value="design">Design</option>
                <option value="marketing">Marketing</option>
                <option value="content">Content</option>
                <option value="data">Data</option>
                <option value="business">Business</option>
                <option value="other">Other</option>
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={control}
          name="budgetMin"
          render={({ field: { onChange, ...rest } }: { field: ControllerRenderProps<any, "budgetMin"> }) => (
            <FormItem>
              <FormLabel>Budget (Min)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. 30"
                  onChange={e => {
                    setMinBudget(e.target.value);
                    onChange(e);
                  }}
                  {...rest}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="budgetMax"
          render={({ field: { onChange, ...rest } }: { field: ControllerRenderProps<any, "budgetMax"> }) => (
            <FormItem>
              <FormLabel>Budget (Max)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="e.g. 60"
                  onChange={e => {
                    setMaxBudget(e.target.value);
                    onChange(e);
                  }}
                  {...rest}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <Card>
        <CardContent className="pt-4">
          <ClientBudgetRecommender
            jobTitle={control._formValues.title || ""}
            category={control._formValues.category || ""}
            experienceLevel={control._formValues.experienceLevel || ""}
            onSuggestionApplied={handleSuggestionApplied}
          />
        </CardContent>
      </Card>

      <FormField
        control={control}
        name="location"
        render={({ field }: { field: ControllerRenderProps<any, "location"> }) => (
          <FormItem>
            <FormLabel>Location</FormLabel>
            <FormControl>
              <Input placeholder="e.g. Remote, San Francisco, etc." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
