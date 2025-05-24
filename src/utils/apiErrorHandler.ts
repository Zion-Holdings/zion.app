import { toast } from "@/hooks/use-toast";

/**
 * Display a toast for API errors using a consistent style.
 * Falls back to a generic message when the error has no message.
 */
export function showApiError(error: unknown, fallback = "Something went wrong") {
  const message =
    typeof error === "string"
      ? error
      : error instanceof Error && error.message
      ? error.message
      : fallback;

  toast({
    title: "Error",
    description: message,
    variant: "destructive",
  });
}
