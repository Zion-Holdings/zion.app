import React, { useEffect, useState } from 'react';
import { Toaster } from 'sonner';
import { globalToastManager, ToastType } from '@/utils/globalToastManager';
import { cn } from '@/lib/utils';

interface ToastContainerProps {
  className?: string;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
  showQueueIndicator?: boolean;
}

/**
 * Enhanced toast container with queue management and visual indicators
 */
export function ToastContainer({
  className,
  position = 'top-right',
  showQueueIndicator = true
}: ToastContainerProps) {
  const [queueLength, setQueueLength] = useState(0);

  useEffect(() => {
    const updateQueueInfo = () => {
      setQueueLength(globalToastManager.getQueueLength());
    };

    updateQueueInfo();
    const interval = setInterval(updateQueueInfo, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={cn('toast-container', className)}>
      <Toaster
        position={position}
        theme="dark"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
          duration: 4000,
        }}
        gap={8}
        visibleToasts={3}
        expand={true}
        offset={16}
      />

      {/* Queue indicator */}
      {showQueueIndicator && queueLength > 0 && (
        <div className="fixed top-4 right-4 z-[100] flex items-center gap-2 px-3 py-2 text-xs font-medium bg-background/95 backdrop-blur-sm border border-border rounded-full shadow-lg text-muted-foreground">
          <div className="flex items-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
          <span>{queueLength} more waiting</span>
          <button
            onClick={() => globalToastManager.dismissAll()}
            className="ml-2 text-xs hover:text-foreground underline"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

/**
 * Toast queue manager component - displays current queue status
 */
export function ToastQueueManager() {
  const [activeToasts, setActiveToasts] = useState(globalToastManager.getActiveToasts());
  const [queueLength, setQueueLength] = useState(globalToastManager.getQueueLength());

  useEffect(() => {
    const updateStatus = () => {
      setActiveToasts(globalToastManager.getActiveToasts());
      setQueueLength(globalToastManager.getQueueLength());
    };

    const interval = setInterval(updateStatus, 500);
    return () => clearInterval(interval);
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed top-4 left-4 z-[102] p-3 bg-background border border-border rounded-lg shadow-lg text-xs space-y-2 max-w-sm">
      <div className="font-semibold text-foreground">Toast Manager Debug</div>
      
      <div className="space-y-1">
        <div>Active Toasts: {activeToasts.length}/3</div>
        <div>Queued Toasts: {queueLength}</div>
      </div>

      {activeToasts.length > 0 && (
        <div className="space-y-1">
          <div className="font-medium">Active:</div>
          {activeToasts.map((toast) => (
            <div key={toast.id} className="text-muted-foreground text-xs">
              {toast.type}: {toast.message.substring(0, 30)}...
            </div>
          ))}
        </div>
      )}

      <div className="flex gap-2 mt-2">
        <button
          onClick={() => globalToastManager.dismissAll()}
          className="px-2 py-1 bg-destructive text-destructive-foreground rounded text-xs"
        >
          Clear All
        </button>
        <button
          onClick={() => {
            globalToastManager.showToast({
              message: 'Test toast message',
              type: ToastType.INFO,
            });
          }}
          className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs"
        >
          Test Toast
        </button>
      </div>
    </div>
  );
} 