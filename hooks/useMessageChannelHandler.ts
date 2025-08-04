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
    likelyExtensionError: boolean;
  }>;
  extensionInfo: {
    hasExtensions: boolean;
    extensionCount: number;
    extensions: never[];
  };
}

export const useMessageChannelHandler = (): UseMessageChannelHandlerReturn => {
  const [errorCount, setErrorCount] = useState(0);
  const [hasRecentErrors, setHasRecentErrors] = useState(false);
  const [extensionInfo, setExtensionInfo] = useState<{
    hasExtensions: boolean;
    extensionCount: number;
    extensions: never[];
  }>({
    hasExtensions: false,
    extensionCount: 0,
    extensions: []
  });

  useEffect(() => {
    const handler = new MessageChannelHandler();
    
    // Set up error tracking
    const updateErrorCount = () => {
      const errorLog = handler.getErrorLog();
      setErrorCount(errorLog.length);
      setHasRecentErrors(errorLog.some(error => 
        Date.now() - error.timestamp < 60000 // Last minute
      ));
    };

    // Get extension info
    const detectedExtensionInfo = handler.getExtensionInfo();
    const hasExtensions = detectedExtensionInfo.hasExtensions || false;
    const extensionCount = detectedExtensionInfo.extensionCount || 0;

    setExtensionInfo({
      hasExtensions,
      extensionCount,
      extensions: []
    });

    // Initial error count
    updateErrorCount();

    // Set up periodic error checking
    const interval = setInterval(updateErrorCount, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const clearErrors = () => {
    const handler = new MessageChannelHandler();
    handler.clearErrorLog();
    setErrorCount(0);
    setHasRecentErrors(false);
  };

  const getErrorLog = () => {
    const handler = new MessageChannelHandler();
    return handler.getErrorLog();
  };

  return {
    errorCount,
    hasRecentErrors,
    clearErrors,
    getErrorLog,
    extensionInfo
  };
}; 