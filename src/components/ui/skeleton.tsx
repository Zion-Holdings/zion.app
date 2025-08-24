
import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-zion-slate-200 dark:bg-zion-slate-700", className)}
      {...props}
    />
  );
}

export { Skeleton };
