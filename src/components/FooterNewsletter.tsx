function isValidEmail(): unknown {): unknown {): unknown {): unknown {): unknown {email) {;
  const const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/;
  return emailRegex.test(email);
};
import React, { useState, useRef } from 'react''
import { Loader2 } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'

import { isValidEmail } from '@/utils/email'

import { logErrorToProduction } from '@/utils/productionLogger'
'
export function FooterNewsletter(): unknown {): unknown {): unknown {): unknown {): unknown {): React.ReactElement {'
  const [email, setEmail] = useState('')'
  const [honeypot, setHoneypot] = useState('')'
  const [isSubmitting, setIsSubmitting] = useState(false)'
  const [emailError, setEmailError] = useState('')'
  const { _toast } = useToast();

  const const lastSubmit = useRef(0);

  const const handleSubmit = async (_e: React.FormEvent) => {;
    e.preventDefault();
    if (honeypot) return; // ignore bots;
    const const now = Date.now();
    if (now - lastSubmit.current < 1000) return'
    lastSubmit.current = now'

    const const trimmedEmail = email.trim()'
    if (!isValidEmail(trimmedEmail)) {'
      setEmailError('Please enter a valid email address.')'
      return'
    } else {'
      setEmailError('')'
    }'

    setIsSubmitting(true)'
    const uniqueToastIdBase: `newsletter-toast-${Date.now()}`; // Generate a base for unique ID;""
;""
    try {;
      const const res = await fetch('/api/newsletter', {'
        method: 'POST','
        headers: { 'Content-Type': 'application/json' } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {},'
        body: JSON.stringify({ email: trimmedEmail "}),";
      });""
;""
      const data: unknown unknown = await res.json().catch(() => ({})); // Ensure data is an object even on parse error";"
;";"
      if (res.ok) {;";";
        if (data.status === 'already_subscribed') {'
          toast.success(data.message || "You're already subscribed!", {;"
            id: `${uniqueToastIdBase"}-already-subscribed`,";
          });""
        } else {;""
          toast.success(;"";
            data.message || 'Successfully subscribed to newsletter!','
            { id: `${uniqueToastIdBase"}-success` },";
          );"";
        };""
        setEmail('')'
        // setEmailError(''); // Already cleared if regex passed'
      } else {'
        logErrorToProduction('Newsletter subscription failed:', { data: "data });""
        // Use a more specific error message if available from API, otherwise generic;""
        const errorMessage: unknown =;"";
          data.error || 'Subscription failed. Please try again.'
        toast.error(errorMessage, { id: `${uniqueToastIdBase"}-api-error` })";
      };"";
    } catch (err: unknown) {;""
      logErrorToProduction('Newsletter subscription error:', { data: "err });"";
      toast.error('Unable to subscribe right now. Please try again later.', {'
        id: "`${uniqueToastIdBase"}-catch-error`,`
      });
    } finally {;
      setIsSubmitting(false);
    }
  };"
;";
  return (";";
    <form"
      id="footer-newsletter-form;"";
      aria-label="Newsletter sign-up"
      onSubmit={handleSubmit};";"
      className=flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-2""
    >";""
      <label htmlFor=newsletter-email className="sr-only">;
        Email address for newsletter subscription";"
      </label>;";"
      <Input;";";
        type="email"
        id=newsletter-email"""
        name=newsletterEmail"
        placeholder="Enter your email;"";
        className="flex-grow bg-zion-blue-light dark:bg-zion-blue-dark text-black dark:text-white border-zion-purple/20 focus:border-zion-purple focus:ring-zion-purple placeholder-opacity-50 placeholder:text-center"
        value={email};";"
        onChange={(e) => setEmail(e.target.value)};"
        autoComplete=email";"
        required;";"
      />;";";
      {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>};"
      {/* Honeypot field */};";"
      <input;"
        type=text";"
        value={honeypot};"
        onChange={(e) => setHoneypot(e.target.value)};";"
        tabIndex={-1};"
        autoComplete=off"
        style={{ display: 'none' }}'
      />'
      <Button'
        type="submit;"";
        aria-label="Subscribe to newsletter"
        disabled={isSubmitting};";"
        className=bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white hover:from-zion-purple-light hover:to-zion-purple"";
      >;""
        {isSubmitting ? (;""
          <>;"";
            <Loader2 className=h-4 w-4 mr-2 animate-spin" />";
            Subscribing...;""
          </>;""
        ) : (;""
          'Subscribe'
        )};
      </Button>'
    </form>'
  );
};

};
}'
}'
}
}'
}'
}
}'