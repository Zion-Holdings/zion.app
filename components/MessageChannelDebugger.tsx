import React from "react";
import { useMessageChannelHandler } from '../utils/messageChannelHandler";

interface MessageChannelDebuggerProps {
  show?: boolean;
  className?: string;
}

const MessageChannelDebugger: React.FC<MessageChannelDebuggerProps> = ({ 
  show = process.env.NODE_ENV === 'development',
  className = ''
}) => {
  const { errorCount, hasRecentErrors, clearErrors, getErrorLog } = useMessageChannelHandler();

  if (!show || errorCount === 0) return null;

  const errorLog = getErrorLog();
  const extensionErrors = errorLog.filter(error => error.likelyExtensionError);
  const otherErrors = errorLog.filter(error => !error.likelyExtensionError);

  return (
    <div className={`fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm z-50 max-w-md ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-yellow-400">Message Channel Debugger</h3>
        <button onClick={clearErrors} className="text-gray-400 hover:text-white">
          Clear
        </button>
      </div>
      
      {extensionErrors.length > 0 && (
        <div className="mb-3">
          <h4 className="text-orange-400 font-medium mb-2">Extension Errors ({extensionErrors.length})</h4>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {extensionErrors.map((error, index) => (
              <div key={index} className="text-xs bg-orange-900/50 p-2 rounded">
                {error.message}
              </div>
            ))}
          </div>
        </div>
      )}
      
      {otherErrors.length > 0 && (
        <div>
          <h4 className="text-red-400 font-medium mb-2">Other Errors ({otherErrors.length})</h4>
          <div className="space-y-1 max-h-32 overflow-y-auto">
            {otherErrors.map((error, index) => (
              <div key={index} className="text-xs bg-red-900/50 p-2 rounded">
                {error.message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageChannelDebugger;