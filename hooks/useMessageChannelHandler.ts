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
    extensions: Array<{
      name: string;
      id: string;
      type: string;
      detected: boolean;
    }>;
  };
}

export const useMessageChannelHandler = (): UseMessageChannelHandlerReturn => {
  const [errorCount, setErrorCount] = useState(0);
  const [hasRecentErrors, setHasRecentErrors] = useState(false);
  const [extensionInfo, setExtensionInfo] = useState<{
    hasExtensions: boolean;
    extensionCount: number;
    extensions: Array<{
      name: string;
      id: string;
      type: string;
      detected: boolean;
    }>;
  }>({
    hasExtensions: false,
    extensionCount: 0,
    extensions: []
  });

  useEffect(() => {
    const handler = MessageChannelHandler.getInstance();
    
    // Update error count and recent errors status
    const updateErrorStatus = () => {
      const errorLog = handler.getErrorLog();
      setErrorCount(errorLog.length);
      setHasRecentErrors(errorLog.some((error: any) =>
        Date.now() - error.timestamp < 5 * 60 * 1000 // 5 minutes
      ));
    };

    // Update extension info
    const updateExtensionInfo = () => {
      const detectedExtensionInfo = handler.getExtensionInfo();
      setExtensionInfo({
        hasExtensions: detectedExtensionInfo.hasExtensions,
        extensionCount: detectedExtensionInfo.extensionCount,
        extensions: detectedExtensionInfo.extensions || []
      });
    };

    // Initial update
    updateErrorStatus();
    updateExtensionInfo();

    // Set up interval to check for new errors
    const interval = setInterval(() => {
      updateErrorStatus();
      updateExtensionInfo();
    }, 1000); // Check every second

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