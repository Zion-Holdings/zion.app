import { toast } from "@/hooks/use-toast";

if (typeof window !== "undefined" && window.fetch) {
  const originalFetch = window.fetch.bind(window);

  window.fetch = async (...args: Parameters<typeof fetch>): Promise<Response> => {
    try {
      const response = await originalFetch(...args);
      if (!response.ok) {
        try {
          const data = await response.clone().json();
          if (data && data.error) {
            toast.error(String(data.error));
          } else {
            toast.error(`Error ${response.status}`);
          }
        } catch {
          toast.error(`Error ${response.status}`);
        }
      }
      return response;
    } catch (err: any) {
      const message = err?.response?.data?.error ?? "Network error";
      toast.error(message);
      throw err;
    }
  };
}

