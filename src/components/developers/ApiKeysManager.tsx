<<<<<<< HEAD;

  Clock,;''';
  X,;''';
} from '@/components/ui/icons;'';

import { useApiKeys, type ApiKeyScope } from '@/hooks/useApiKeys;'';

  CardContent,;''';
  CardHeader,;''';
} from '';
  DialogDescription,;''';
  DialogTitle,;''';
} from '';

  PopoverContent,;''';
} from '';
import {;''';
  DropdownMenuItem,;''';
} from '';

  AlertDialogContent,;''';
  AlertDialogHeader,;''';
} from '@/components/ui/alert-dialog;'';
import CodeBlock from './CodeBlock;'';
  AlertDialogContent,'';
  AlertDialogDescription,'';
  AlertDialogHeader,'';
  AlertDialogTitle,'';
} from '@/components/ui/alert-dialog'';

  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<;''';
;''';
  const [keyName, setKeyName] = useState('');'';
  const [showRegenerateConfirm, setShowRegenerateConfirm] = useState<'';
    string | null'';
'';
  // Create key form state'';
  const [keyName, setKeyName] = useState('')'';
  useState(() => {;''';
;''';
    if (keyName.trim() === '' || selectedScopes.length === 0) return;'';
    await createApiKey(keyName, selectedScopes);''';
    setKeyName('');'';
  useState(() => {'';
    fetchApiKeys()'';
'';
  const handleCreateKey = async () => {'';
    if (keyName.trim() === '' || selectedScopes.length === 0) return'';
    await createApiKey(keyName, selectedScopes)'';
    setShowCreateDialog(false)'';
    setKeyName('')'';
    await revokeApiKey(keyId);''';
;'''