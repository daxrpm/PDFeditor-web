import React from "react";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-10 w-10",
  lg: "h-16 w-16",
};

export const Loading: React.FC<LoadingProps> = ({
  size = "md",
  text,
  className,
}) => {
  return (
    <div className={cn("flex flex-col items-center justify-center gap-3", className)}>
      <Loader2 className={cn("animate-spin text-blue-600 dark:text-blue-500", sizeClasses[size])} />
      {text && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
};

