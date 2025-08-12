
import { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

interface ReplyFormProps {
  onSubmit: (content: string) => Promise<void>;
  parentId?: string;
}

interface ReplyFormValues {
  content: string;
}

export const ReplyForm = ({ onSubmit, parentId }: ReplyFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ReplyFormValues>({
    defaultValues: {
      content: ""
    }
  });

  const handleSubmit = async (values: ReplyFormValues) => {
    setIsSubmitting(true);
    try {
      await onSubmit(values.content);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="content"
              render={({ field }: { field: ControllerRenderProps<ReplyFormValues, "content"> }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder={parentId ? "Write your reply..." : "Join the discussion..."}
                      className="min-h-[100px] resize-y"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-4 flex justify-end">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Post Reply"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ReplyForm;
