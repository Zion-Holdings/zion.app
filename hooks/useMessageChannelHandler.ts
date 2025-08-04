import { useEffect, useState } from 'react';
import MessageChannelHandler from '../utils/messageChannelHandler';

interface UseMessageChannelHandlerReturn {
  errorCount: number;
  hasRecentErrors: boolean;
  clearErrors: () => void;
  getErrorLog: () => Array<{
    type: 'message_channel_closed';
    message: string;
    timestamp: number;
  }>;
}

export const useMessageChannelHandler = (): UseMessageChannelHandlerReturn => {
  const [errorCount, setErrorCount] = useState(0);
  const [hasRecentErrors, setHasRecentErrors] = useState(false);

  useEffect(() => {
    const handler = MessageChannelHandler.getInstance();
    
    // Update state every second to reflect current error status
    const interval = setInterval(() => {
      setErrorCount(handler.getErrorCount());
      setHasRecentErrors(handler.hasRecentErrors(5)); // Check last 5 minutes
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const clearErrors = () => {
    const handler = MessageChannelHandler.getInstance();
    handler.clearErrorLog();
    setErrorCount(0);
    setHasRecentErrors(false);
  };

  const getErrorLog = () => {
    const handler = MessageChannelHandler.getInstance();
    return handler.getErrorLog();
  };

  return {
    errorCount,
    hasRecentErrors,
    clearErrors,
    getErrorLog
  };
}; 