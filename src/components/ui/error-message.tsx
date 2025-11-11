import React from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface ErrorMessageProps {
  message: string;
  className?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className }) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-lg border-2 border-red-200 bg-red-50 p-4 text-red-800",
        "dark:border-red-900 dark:bg-red-950/30 dark:text-red-400",
        "animate-in fade-in slide-in-from-top-2 duration-300",
        className
      )}
      role="alert"
    >
      <AlertCircle className="h-5 w-5 flex-shrink-0" />
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
};

