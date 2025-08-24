import React from 'react';

export const toast = {
  success: (message: string) => {
    console.log('Success:', message);
  },
  error: (message: string) => {
    console.error('Error:', message);
  },
  info: (message: string) => {
    console.log('Info:', message);
  },
  warning: (message: string) => {
    console.warn('Warning:', message);
  }
};