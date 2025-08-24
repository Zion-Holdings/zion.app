import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  className?: string;
  count?: number;
  height?: string;
  width?: string;
  rounded?: boolean;
}

export function LoadingSkeleton({ 
  className, 
  count = 1, 
  height = "h-4", 
  width = "w-full",
  rounded = true 
}: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className={cn(
            "bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark",
            height,
            width,
            rounded && "rounded",
            className
          )}
          animate={{
            background: [
              "linear-gradient(90deg, hsl(var(--zion-slate-dark)) 0%, hsl(var(--zion-blue-dark)) 50%, hsl(var(--zion-slate-dark)) 100%)",
              "linear-gradient(90deg, hsl(var(--zion-slate-dark)) 0%, hsl(var(--zion-blue-dark)) 100%, hsl(var(--zion-slate-dark)) 0%)",
              "linear-gradient(90deg, hsl(var(--zion-slate-dark)) 0%, hsl(var(--zion-blue-dark)) 50%, hsl(var(--zion-slate-dark)) 100%)"
            ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            backgroundSize: "200% 100%"
          }}
        />
      ))}
    </>
  );
}

export function CardSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("p-6 border border-zion-blue-light/20 rounded-xl bg-zion-blue-dark/50", className)}>
      <div className="flex items-center space-x-4 mb-4">
        <LoadingSkeleton className="w-12 h-12 rounded-full" />
        <div className="space-y-2 flex-1">
          <LoadingSkeleton height="h-4" width="w-3/4" />
          <LoadingSkeleton height="h-3" width="w-1/2" />
        </div>
      </div>
      <div className="space-y-2">
        <LoadingSkeleton height="h-3" width="w-full" />
        <LoadingSkeleton height="h-3" width="w-5/6" />
        <LoadingSkeleton height="h-3" width="w-4/6" />
      </div>
    </div>
  );
}

export function GridSkeleton({ 
  columns = 3, 
  className 
}: { 
  columns?: number; 
  className?: string 
}) {
  return (
    <div className={cn(
      "grid gap-6",
      columns === 1 && "grid-cols-1",
      columns === 2 && "grid-cols-1 sm:grid-cols-2",
      columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      className
    )}>
      {Array.from({ length: columns }).map((_, index) => (
        <CardSkeleton key={index} />
      ))}
    </div>
  );
}

export function HeroSkeleton({ className }: { className?: string }) {
  return (
    <div className={cn("py-20 md:py-32 min-h-screen flex items-center", className)}>
      <div className="container mx-auto px-4 text-center space-y-8">
        <LoadingSkeleton height="h-16 md:h-20" width="w-3/4" className="mx-auto" />
        <LoadingSkeleton height="h-6 md:h-8" width="w-2/3" className="mx-auto" />
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <LoadingSkeleton height="h-14" width="w-32" className="rounded-md" />
          <LoadingSkeleton height="h-14" width="w-40" className="rounded-md" />
        </div>
      </div>
    </div>
  );
}