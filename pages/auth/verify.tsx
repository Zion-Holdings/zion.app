import { useState, useEffect } from "react";
import { createClientComponentClient } from "@supabase / auth - helpers - nextjs";
import { useRouter } from "next / router";

export default function Verify() {
  const [isVerifying, setIsVerifying] = useState(true);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() = > {
    const handleEmailVerification = async () = > {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          setMessage("Verification failed. Please try again.");
          setIsVerifying(false);
          return;
        }

        if (data.session?.user?.email_confirmed_at) {
          setMessage("Email verified successfully! Redirecting...");
          setTimeout(() = > {
            router.push(" / dashboard");
          }, 2000);
        } else {
          setMessage("Please check your email and click the verification link.");
          setIsVerifying(false);
        }
      } catch (error) {
        setMessage("An unexpected error occurred");
        setIsVerifying(false);
      }
    };

    handleEmailVerification();
  }, [supabase.auth, router]);

  return (
    <div className = "min - h - screen flex items - center justify - center bg - gray - 50">;
      <div className = "max - w - md w - full space - y - 8">;
        <div>;
          <h2 className = "mt - 6 text - center text - 3xl font - extrabold text - gray - 900">;
            Email Verification;
          < / h2>;
        < / div>;
        <div className = "text - center">;
          {isVerifying ? (
            <div>;
              <div className = "animate - spin rounded - full h - 12 w - 12 border - b - 2 border - indigo - 600 mx - auto mb - 4">< / div>;
              <p>Verifying your email...< / p>;
            < / div>;
          ): (
            <div>;
              <p className = "text - sm text - gray - 600">{message}< / p>;
              <button;
                onClick = {() = > router.push(" / auth")}
                className = "mt - 4 text - indigo - 600 hover: text - indigo - 500";
              >;
                Back to sign in;
              < / button>;
            < / div>;
          )}
        < / div>;
      < / div>;
    < / div>;
  );
}
