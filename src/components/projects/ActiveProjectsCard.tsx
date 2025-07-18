<<<<<<< HEAD;

import Link from 'next/link;'';

  CardContent,;''';
  CardHeader,;''';
} from '';

import type { Project } from '@/types/projects;'';
  const [activeProjects, setActiveProjects] = useState<Project[]>([]);''';
    if (projects && !isLoading) {;''';
        .filter((p) => ['offer_accepted', 'in_progress'].includes(p.status));'';

;''';
      <Card>;'''