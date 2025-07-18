});
type UpdatePasswordFormValues = z.infer<typeof updatePasswordSchema>;
export default function UpdatePassword(): ;
  const [isLoading, setIsLoading] = useState(false);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);