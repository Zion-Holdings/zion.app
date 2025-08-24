import React from 'react';
import { Button } from '@/components/ui/button';

interface CreatePostButtonProps {
  categoryId?: string;
}

export default function CreatePostButton({ categoryId }: CreatePostButtonProps) {
  return (
    <Button className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate-dark">
      Create New Post
    </Button>
  );
}