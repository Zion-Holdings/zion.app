
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { RateOptimizationSection } from "../RateOptimizationSection";
import { basicInfoSchema, BasicInfoFormData } from "./schema";
import { PersonalInfoFields } from "./PersonalInfoFields";
import { ContactFields } from "./ContactFields";

export interface BasicInfoFormProps {
  resumeId?: string;
  initialData?: Partial<BasicInfoFormData>;
  onSave: (data: BasicInfoFormData) => void;
  skills?: string[];
  yearsExperience?: number;
  onComplete?: () => void;
}

export function BasicInfoForm({
  resumeId,
  initialData = {},
  onSave,
  skills = [],
  yearsExperience = 0,
  onComplete
}: BasicInfoFormProps) {
  const form = useForm<BasicInfoFormData>({
    resolver: zodResolver(basicInfoSchema),
    defaultValues: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      website: "",
      linkedin: "",
      github: "",
      hourlyRate: 0,
      ...initialData,
    },
  });

  useEffect(() => {
    if (initialData) {
      Object.entries(initialData).forEach(([key, value]) => {
        if (value !== undefined) {
          form.setValue(key as keyof BasicInfoFormData, value as any);
        }
      });
    }
  }, [initialData, form]);

  const handleSubmit = (data: BasicInfoFormData) => {
    onSave(data);
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <Card className="p-6 space-y-6">
          <PersonalInfoFields control={form.control} />
          <ContactFields control={form.control} />

          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-lg font-medium mb-4">Rate Information</h3>
            <RateOptimizationSection
              control={form.control}
              setValue={form.setValue}
              skills={skills}
              yearsExperience={yearsExperience || 0}
              location={form.getValues("location")}
              rateType="hourly"
            />
          </div>
        </Card>

        <div className="flex justify-end">
          <Button type="submit">Save Basic Information</Button>
        </div>
      </form>
    </Form>
  );
}
