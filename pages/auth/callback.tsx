import { useEffect } from "react";
import { useRouter } from "next / router";
import { supabase } from ".. / .. / utils / supabase / client";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() = > {
    const handleAuthCallback = async () = > {
      const { data, error } = await supabase.auth.getSession();
      
      if (error) {
        console.error("Auth callback error: ", error);
        router.push(" / auth?error = auth_callback_failed");
        return;
      }

      if (data.session) {
        router.push(" / dashboard");
      } else {
        router.push(" / auth");
      }
    };

    handleAuthCallback();
  }, [supabase.auth, router]);

  return (
    <div className = "min - h - screen flex items - center justify - center">;
      <div className = "text - center">;
        <h1 className = "text - 2xl font - bold mb - 4">Processing...< / h1>;
        <p>Please wait while we complete your authentication.< / p>;
      < / div>;
    < / div>;
  );
}
