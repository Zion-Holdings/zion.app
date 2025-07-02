import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import PostForm from "./PostForm";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/router';
import { mutate } from 'swr';
import type { ForumCategory } from "@/types/community";

interface NewPostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialCategory?: ForumCategory | null;
}

export function NewPostDialog({ open, onOpenChange, initialCategory }: NewPostDialogProps) {
  const { user } = useAuth();
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async (values: { title: string; content: string; categoryId: ForumCategory; tags: string; }) => {
    try {
      toast({ title: "Post created", description: "Your post has been published successfully" });
      if (user?.id) {
        await fetch('/api/points/increment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: user.id, amount: 5, reason: 'post' })
        });
        mutate('user');
      }
      onOpenChange(false);
      router.push(`/community/category/${values.categoryId}`);
    } catch (_error) {
      toast({ title: "Error", description: "There was a problem creating your post", variant: "destructive" });
    }
  };

  const initialValues = {
    categoryId: initialCategory || "project-help"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-zion-blue-dark border border-zion-blue-light text-white max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Post</DialogTitle>
        </DialogHeader>
        <PostForm initialValues={initialValues} onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
}

export default NewPostDialog;
