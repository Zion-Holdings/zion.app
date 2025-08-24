import React from 'react';
import { Toast, ToastClose, ToastDescription, ToastTitle, ToastViewport } from './toast';
import { useToast } from './use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastViewport>
      {toasts.map((toast, index) => (
        <Toast key={index}>
          <div className="grid gap-1">
            {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
            {toast.description && (
              <ToastDescription>{toast.description}</ToastDescription>
            )}
          </div>
          {toast.action}
          <ToastClose>×</ToastClose>
        </Toast>
      ))}
    </ToastViewport>
  );
}