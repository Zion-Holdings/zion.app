
  const router = useRouter(); // Changed from navigate'';
    const confirmVerification = async () => {'';
        if (!supabase) throw new Error('Supabase client not initialized'';
        // We need to ensure a session is active, which implies Supabase confirmed the email.''