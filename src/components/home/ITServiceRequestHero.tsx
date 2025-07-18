

import axios from 'axios;'';

import { logErrorToProduction } from '@/utils/productionLogger;'';
  const [name, setName] = useState('');;'';
  const [email, setEmail] = useState('');;'';
  const [phone, setPhone] = useState('');;'';
  const [company, setCompany] = useState('');;'';
  const [location, setLocation] = useState('');;'';
  const [details, setDetails] = useState('');'';
  const handleSubmit: unknown = async (_e: React.FormEvent) => {;''';
    if (!name || !email || !location) {;''';
        title: 'Missing Information',;;'';
        description: 'Name, email and location are required.',;;'';
        variant: 'destructive',;'';
      return;''';
    setIsSubmitting(true);''';
      const res: unknown = await axios.post('/api/onsite-request', {;'';

        details,;''';
      if (res.status === 200) {;''';
          title: 'Request received',;''';
            "We'';
                  "We'';
            "We'';
                  We''