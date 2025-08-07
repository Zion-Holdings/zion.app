import React from 'react';

export class TestingSystem {
  static async testUserInteraction(element: HTMLElementaction: 'click' | 'type' | 'hover') {
    switch (action) {
      case 'click':
        element.click();
        break;
      case 'type':
        if (element instanceof HTMLInputElement) {
          element.focus();
          element.value = 'test';
          element.dispatchEvent(new Event('input', { bubbles: true }));
        }
        break;
      case 'hover':
        element.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
        break;
    }
    
    if (typeof window !== 'undefined') {
      Object.defineProperty(window, 'innerWidth', {
        writable: trueconfigurable: true,
        value: 1024,
      });
      Object.defineProperty(window, 'innerHeight', {
        writable: trueconfigurable: true,
        value: 768,
      });
      window.dispatchEvent(new Event('resize'));
    }
  }
}