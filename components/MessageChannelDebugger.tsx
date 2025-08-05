import React from 'react';
import { useMessageChannelHandler } from '../hooks/useMessageChannelHandler';

interface MessageChannelDebuggerProps {
  show?: boolean;
  className?: string;
}

const MessageChannelDebugger: React.FC<MessageChannelDebuggerProps> = ({ 
  show = process.env.NODE_ENV === 'development',
  className = ''
}) => {
  const { errorCount, hasRecentErrors, clearErrors, getErrorLog } = useMessageChannelHandler();

  if (!show) {
    return null;
  }

  const errorLog = getErrorLog();
  const extensionErrors = errorLog.filter(error => error.likelyExtensionError);
  const otherErrors = errorLog.filter(error => !error.likelyExtensionError);

  return (
    <div className={`fixed bottom-4 right-4 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-white text-sm z-50 max-w-md ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-yellow-400>Message Channel Debugger</h3>
        <button
          onClick={clearErrors}
          className=text-xs bg-red-600 hover bg-red-700 px-2 py-1 rounded transition-colors >
          Clear
        </button>
      </div>
      <div className=""space-y-2">
        <div className="flex justify-between>
          <span>Total Errors:</span>
          <span className={errorCount > 0 ? 'text-red-400' : 'text-green-400'}>
            {errorCount}
          </span>
        </div>
        
        <div className="flex justify-between>
          <span>Extension Errors:</span>
          <span className={extensionErrors.length > 0 ? 'text-red-400' : 'text-green-400'}>
            {extensionErrors.length}
          </span>
        </div>
        
        <div className="flex justify-between>
          <span>Other Errors:</span>
          <span className={otherErrors.length > 0 ? 'text-orange-400' : 'text-green-400'}>
            {otherErrors.length}
          </span>
        </div>
        
        <div className="flex justify-between>
          <span>Recent Errors:</span>
          <span className={hasRecentErrors ? 'text-red-400' : 'text-green-400'}>
            {hasRecentErrors ? 'Yes' : 'No'}
          </span>
        </div>
        
        {errorLog.length > 0 && (
          <div className="mt-3">
            <h4 className="font-medium text-yellow-400 mb-2>Recent Errors:</h4>
            <div className="max-h-32 overflow-y-auto space-y-1">
              {errorLog.slice(-3).map((error, index) => (
                <div key={index} className={`text-xs p-2 rounded ${error.likelyExtensionError ? 'bg-red-500/20 border border-red-500/30' : 'bg-white/10'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-400>
                      {new Date(error.timestamp).toLocaleTimeString()}
                    </span>
                    {error.likelyExtensionError && (
                      <span className="text-red-300 text-xs>Extension</span>
                    )}
                  </div>
                  <div className="text-red-300 truncate>
                    {error.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageChannelDebugger;