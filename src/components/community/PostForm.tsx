
import { useState } from "react";
import { useForm, ControllerRenderProps } from "react-hook-form";
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ForumCategory } from "@/types/community";

interface PostFormValues {
  title: string;
  content: string;
  categoryId: ForumCategory;
  tags: string;
}

interface PostFormProps {
  initialValues?: Partial<PostFormValues>;
  onSubmit: (values: PostFormValues) => void;
  isEditing?: boolean;
}

export const PostForm = ({
  initialValues,
  onSubmit,
  isEditing = false
}: PostFormProps) => {
  const form = useForm<PostFormValues>({
    defaultValues: {
      title: initialValues?.title || "",
      content: initialValues?.content || "",
      categoryId: initialValues?.categoryId || "project-help",
      tags: initialValues?.tags || ""
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values: PostFormValues) => {
    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{isEditing ? "Edit Post" : "Create New Post"}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-6" onSubmit={form.handleSubmit(handleSubmit)}>
            <FormField
              control={form.control}
              name="title"
              render={({ field }: { field: ControllerRenderProps<PostFormValues, "title"> }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter post title..." {...field} data-testid="post-title-input" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }: { field: ControllerRenderProps<PostFormValues, "content"> }) => (
                <FormItem>
                  <FormLabel>Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your post content here..."
                      className="min-h-[200px]"
                      {...field}
                      data-testid="post-content-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="categoryId"
              render={({ field }: { field: ControllerRenderProps<PostFormValues, "categoryId"> }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <select
                      className="w-full p-2 border rounded-md"
                      {...field}
                    >
                      <option value="getting-hired">Getting Hired</option>
                      <option value="project-help">Project Help</option>
                      <option value="ai-tools">AI Tools Discussion</option>
                      <option value="feedback">Feedback & Feature Requests</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="tags"
              render={({ field }: { field: ControllerRenderProps<PostFormValues, "tags"> }) => (
                <FormItem>
                  <FormLabel>Tags (comma-separated)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g. resume, hiring, flutter"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" disabled={isSubmitting} data-testid="publish-post-button">
              {isSubmitting ? "Submitting..." : isEditing ? "Update Post" : "Create Post"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default PostForm;
