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
    const handler = MessageChannelHandler.getInstance();
    
    // Update state every second to reflect current error status
    const interval = setInterval(() => {
      setErrorCount(handler.getErrorCount());
      setHasRecentErrors(handler.hasRecentErrors(5)); // Check last 5 minutes
      
      // Get extension info and handle it safely
      try {
        const detectedExtensionInfo = handler.getExtensionInfo();
        if (detectedExtensionInfo && typeof detectedExtensionInfo === 'object') {
          // Use the hasExtensions property directly from the handler
          const hasExtensions = detectedExtensionInfo.hasExtensions || false;
          setExtensionInfo({
            hasExtensions,
            extensionCount: detectedExtensionInfo.extensionCount || 0,
            extensions: []
          });
        }
      } catch (error) {
        // If there's an error getting extension info, just keep the default state
        console.warn('Error getting extension info:', error);
      }
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
    getErrorLog,
    extensionInfo
  };
}; 