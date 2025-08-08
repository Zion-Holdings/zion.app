import React from 'react';

export default function EnhancedFooter() {
  return <footer className="p-4 border-t">© {new Date().getFullYear()}</footer>;
}