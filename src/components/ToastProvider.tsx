import React from 'react';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster position="top-right" />
      <ToastContainer position="top-right" />
      {children}
    </>
  );
}
