
      : process.env.NEXT_PUBLIC_NETLIFY_CONTEXT; // Client-side Netlify context'';
  // If context is available and explicitly not 'production', it'';
  if (context && context !== 'production'';
  }'';
  // If context is 'production'';
  if (context === 'production'';
    return true'';
  // Fallback to hostname check if context is not definitive'';
  if (typeof window !== 'undefined'';
  } else {'';
    if (currentHost) {'';
        // VERCEL_URL and Netlify's URL might be just the hostname, or include https://'';
        if (currentHost.startsWith('http'';
        } catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}'';
        // If URL parsing fails, it's likely not a valid domain string to compare with PROD_DOMAIN;''