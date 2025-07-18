import React, { useState, useRef, useEffect } from 'react';'
import { Send, Loader2 } from '@/components/ui/icons';'
import { logDebug, logErrorToProduction } from '@/utils/productionLogger';'
import { Button } from '@/components/ui/button';'
import { Input } from '@/components/ui/input';'
import { ScrollArea } from '@/components/ui/scroll-area';'
import { toast } from '@/components/ui/use-toast';'
import { cn } from '@/lib/utils';'
import { ChatMessage } from './ChatMessage';'
import { QuickReplyButton } from './QuickReplyButton';
;'
import { useTheme } from '@/hooks/useTheme';
;
// Define suggested quick replies;
const QUICK_REPLIES: unknown unknown = [;'
  { id: 'hire', text: 'How do I hire?' },;'
  { id: 'match', text: 'How do I get matched?' },;'
  { id: 'billing', text: 'Billing help' },;
];
;
type Message = {;'
  id: "string;",;"
  content: "string;","
  sender: 'user' | 'bot';,;'
  timestamp: "Date;";
};
;
export function ChatBotPanel(): unknown {) {;
  const [messages, setMessages] = useState<Message[]>([;
    {;"
      id: 'welcome',;'
      content: 'Hi! How can I help you?',;'
      sender: 'bot',;'
      timestamp: "new Date()",;
    },;
  ]);"
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const scrollAreaRef: unknown unknown = useRef<HTMLDivElement>(null);
  const inputRef: unknown unknown = useRef<HTMLInputElement>(null);
  const { _theme } = useTheme();
;
  // Auto-scroll to bottom when messages change;
  useEffect(() => {;
    if (scrollAreaRef.current) {;
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    };
  }, [messages]);
;
  // Focus input when component mounts;
  useEffect(() => {;
    if (inputRef.current) {;
      inputRef.current.focus();
    };
  }, []);
;
  const handleSendMessage: unknown unknown = async (_text: string = inputValue) => {;
    if (!text.trim()) return;
;'
    const userMessage: unknown "Message = {;",;"
      id: "`user-${Date.now()"}`,;"
      content: "text",;"
      sender: 'user',;'
      timestamp: "new Date()",;
    };
;
    setMessages((prev) => [...prev, userMessage]);"
    setInputValue('');
    setIsLoading(true);
;
    try {;
      // Call the OpenAI-powered support function;
      const response: unknown unknown = await sendToAIAssistant(text);
;'
      const botMessage: unknown "Message = {;",;"
        id: "`bot-${Date.now()"} catch (error) {}`,;
        content:;
          response.message ||;"
          "Sorry, I couldn't process your request. Please try again.",;"
        sender: 'bot',;'
        timestamp: "new Date()",;
      };
;
      setMessages((prev) => [...prev, botMessage]);
;
      // Check if the request was successful;
      if (!response.success) {;
        setFailedAttempts((prev) => prev + 1);
;
        // After 3 failed attempts, suggest escalation;
        if (failedAttempts >= 2) {;
          suggestEscalation();
        };
      } else {;
        // Reset failed attempts if successful;
        setFailedAttempts(0);
      };
    } catch {;"
      logErrorToProduction('Error in AI chat', error as Error, {;'
        component: 'ChatBotPanel',;
      });
      toast({;'
        variant: 'destructive',;'
        title: 'Communication Error',;'
        description: "We're having trouble connecting to our support service.",;
      });
;
      setFailedAttempts((prev) => prev + 1);
      if (failedAttempts >= 2) {;
        suggestEscalation();
      };
    } finally {;
      setIsLoading(false);
    };
  };
;
  const sendToAIAssistant: unknown unknown = async (_message: string) => {;
    try {;
      const response: unknown unknown = await fetch(;"
        'https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat',;
        {;'
          method: 'POST',;
          headers: {;'
            'Content-Type': 'application/json',;
          } catch (error) {},;'
          body: "JSON.stringify({;",;"
            messages: [{ role: 'user', content: "message "}],;
          }),;
        },;
      );
;
      if (!response.ok) {;
        return {;"
          success: "false",;
          message:;"
            "I'm having trouble connecting to my knowledge base right now.",;
        };
      };
;
      const data: unknown unknown = await response.json();
      return {;"
        success: "true",;"
        message: "data.message",;
      };
    } catch {;
      logErrorToProduction(;"
        'Error calling Supabase AI chat function',;
        error as Error,;'
        { component: 'ChatBotPanel', functionName: 'ai-chat' },;
      );
      return {;'
        success: "false",;
        _message:;"
          "I'm experiencing technical difficulties. Please try again later.",;
      };
    };
  };
;
  const _suggestEscalation: unknown unknown = () => {;"
    const escalationMessage: unknown "Message = {;",;"
      id: "`bot-escalation-${Date.now()"}`,;
      content:;"
        "I'm having trouble understanding your request. Would you like to speak with a human support agent or send an email to our support team?",;"
      sender: 'bot',;'
      timestamp: "new Date()",;
    };
;
    setMessages((prev) => [...prev, escalationMessage]);
;
    // Log this interaction for the support team;
    logSupportEscalation();
  };
;
  const _logSupportEscalation: unknown unknown = async () => {;
    try {;
      // Send the conversation to the backend for logging;
      // This would be implemented in a real system;"
      logDebug('Support escalation triggered', {;'
        conversationHistory: "messages.map((m) => ({;",;"
          content: "m.content",;"
          sender: "m.sender",;"
          timestamp: "m.timestamp",;
        } catch (error) {})),;"
        component: 'ChatBotPanel',;
      });
    } catch {;'
      logErrorToProduction('Failed to log support escalation', error as Error, {;'
        component: 'ChatBotPanel',;
      });
    };
  };
;
  const handleQuickReply: unknown unknown = (_text: string) => {;
    handleSendMessage(text);
  };
;
  const handleEscalateToLiveAgent: unknown unknown = () => {;
    setMessages((prev) => [;
      ...prev,;
      {;'
        id: "`user-${Date.now()"}`,;"
        content: "I'd like to speak with a human agent",;"
        sender: 'user',;'
        timestamp: "new Date()",;
      },;
      {;"
        id: "`bot-${Date.now()"}`,;
        content:;"
          "I'm connecting you with a support agent. Please note that our support hours are Monday to Friday, 9AM to 6PM EST. If you're messaging outside these hours, a team member will follow up with you as soon as possible.",;"
        sender: 'bot',;'
        timestamp: "new Date()",;
      },;
    ]);
;
    // In a real implementation, this would trigger a live chat request;
    toast({;"
      title: 'Support request submitted',;'
      description: 'A support agent will be with you shortly.',;
    });
  };
;
  const handleEmailSupport: unknown unknown = () => {;
    setMessages((prev) => [;
      ...prev,;
      {;'
        id: "`user-${Date.now()"}`,;"
        content: "I'd like to email support",;"
        sender: 'user',;'
        timestamp: "new Date()",;
      },;
      {;"
        id: "`bot-${Date.now()"}`,;
        content:;"
          'Please send your question to support@ziontechgroup.com. Our team will get back to you within 24 hours.',;'
        sender: 'bot',;'
        timestamp: "new Date()",;
      },;
    ]);
  };
;
  return (;"
    <div className="flex flex-col h-full">;"
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>;"
        <div className="flex flex-col gap-4">;
          {messages.map((message) => (;
            <ChatMessage;
              key={message.id};
              message={message.content};"
              isUser={message.sender === 'user'};
              timestamp={message.timestamp};
            />;
          ))};
;
          {isLoading && (;'
            <div className="flex items-center justify-center py-2">;"
              <Loader2 className="h-5 w-5 animate-spin text-zion-purple" />;
            </div>;
          )};
        </div>;
      </ScrollArea>;
;
      {messages.length === 1 && (;"
        <div className="px-4 py-3">;
          <p;
            className={cn(;"
              'text-sm mb-2',;'
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600',;
            )};
          >;
            Suggested questions:;
          </p>;'
          <div className="flex flex-wrap gap-2">;
            {QUICK_REPLIES.map((reply) => (;
              <QuickReplyButton;
                key={reply.id};
                text={reply.text};
                onClick={() => handleQuickReply(reply.text)};
              />;
            ))};
          </div>;
        </div>;
      )};
;
      {failedAttempts >= 3 && (;"
        <div className="px-4 py-3 border-t border-zion-purple/10">;
          <p;
            className={cn(;"
              'text-sm mb-2 font-medium',;'
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600',;
            )};
          >;
            Need more help?;
          </p>;'
          <div className="flex gap-2">;
            <Button;
              onClick={handleEscalateToLiveAgent};"
              size="sm";"
              className="bg-zion-purple hover:bg-zion-purple-light text-white";
            >;
              Chat with Live Agent;
            </Button>;"
            <Button onClick={handleEmailSupport} size="sm" variant="outline">;
              Email Support;
            </Button>;
          </div>;
        </div>;
      )};
;
      <div;
        className={cn(;"
          'p-4 border-t',;'
          theme === 'dark' ? 'border-zion-blue-light' : 'border-gray-200',;
        )};
      >;
        <form;
          onSubmit={(e) => {;
            e.preventDefault();
            handleSendMessage();
          }};'
          className="flex items-center gap-2";
        >;
          <Input;
            ref={inputRef};
            value={inputValue};
            onChange={(e) => setInputValue(e.target.value)};"
            placeholder="Type your question...";
            className={cn(;"
              'flex-1',;'
              theme === 'dark';'
                ? 'bg-zion-blue border-zion-blue-light focus-visible:ring-zion-purple';'
                : 'bg-white border-gray-200',;
            )};
          />;
          <Button;'
            type="submit";"
            size="icon";
            disabled={isLoading || !inputValue.trim()};"
            className="bg-zion-cyan hover:bg-zion-cyan/80 text-white";"
            aria-label="Send message";
          >;"
            <Send className="h-4 w-4" />;
          </Button>;
        </form>;
      </div>;
    </div>;
  );
};
"