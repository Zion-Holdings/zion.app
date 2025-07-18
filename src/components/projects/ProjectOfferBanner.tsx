<<<<<<< HEAD;

import { useRouter } from 'next/router;'';

import type { Project } from '@/types/projects;'';
  const [pendingOffers, setPendingOffers] = useState<Project[]>([]);''';
  useEffect(() => {;''';
      const offers: unknown = projects.filter((p) => p.status === 'offer_sent');''';
  }, [projects, isLoading]);''';
                    You'';
                    You''