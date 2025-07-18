

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert;'';

import type { Resume } from '@/types/resume;'';
;''';

import { RESUME_STEPS } from './constants;'';
  const { isLoading, error, resume, fetchResume, createResume } = useResume();''';
  const [activeTab, setActiveTab] = useState('basic-info');'';

      fetchResume();''';
;'''