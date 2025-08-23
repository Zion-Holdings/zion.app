
import React, { Suspense } from "react";
const ReactMarkdown = React.lazy(() => import("react-markdown"));
import { cn } from "@/lib/utils";

interface MarkdownProps {
  content: string;
  className?: string;
}

export function Markdown({ content, className }: MarkdownProps) {
  return (
    <div className={cn("prose dark:prose-invert max-w-none", className)}>
      <Suspense fallback={<div>Loading...</div>}>
        <ReactMarkdown>{content}</ReactMarkdown>
      </Suspense>
    </div>
  );
}
