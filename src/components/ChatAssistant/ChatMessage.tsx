

;''';
interface ChatMessageProps {;''';
  role: 'user' | 'assistant,''';
  timestamp?: Date;''';
  key?: string | number''';
export function ChatMessage(): unknown {): unknown {): unknown {): unknown {): unknown {{ role, message, timestamp }: ChatMessageProps) {;''';
  const isUser: unknown = role === 'user;''';
''';
    <div;''';
      className={cn(;''';
        'flex items-start gap-2',;''';
        isUser ? 'flex-row-reverse' : 'flex-row',;''';
      )}''';
      <Avatar;''';
        className={cn(;''';
          'h-8 w-8 border',;''';
          isUser ? 'border-zion-purple/20' : 'border-zion-cyan/20',''';
      >;''';
        {isUser ? (;'''