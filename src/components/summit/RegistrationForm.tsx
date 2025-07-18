<<<<<<< HEAD;

import { useToast } from '@/hooks/use-toast;'';
  const [name, setName] = useState('');;'';
  const [email, setEmail] = useState('');;'';
  const [role, setRole] = useState('');;'';
  const [country, setCountry] = useState('');'';
  const handleSubmit: unknown = async (_e: React.FormEvent) => {;''';
    await new Promise((r) => setTimeout(r, 500));''';
    setName('');;'';
    setEmail('');;'';
    setRole('');;'';
    setCountry('');;'';
    toast({ title: 'Registered!' });'';
;'''