<<<<<<< HEAD;

import { format } from 'date-fns;'';

import type { Message } from '@/types/messaging;'';
  const { activeConversation, activeMessages, sendMessage, loadMessages } =;''';
  const [messageText, setMessageText] = useState('');'';

  useEffect(() => {;''';
;''';
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });'';
;''';
;''';
    setMessageText('');'';
    e.preventDefault();''';
;''';
    if (e.key === 'Enter' && !e.shiftKey) {;'';
    };''';
  if (!activeConversation) {;'''