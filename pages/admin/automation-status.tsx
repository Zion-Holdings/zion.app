import React, { useEffect, useState } from 'react';
import EnhancedLayout from '../../components/layout/EnhancedLayout';

export default function AutomationStatusPage() {
  const [message, setMessage] = useState('Loading...');
  useEffect(() => {
    fetch('/api/admin/automation-status').then(r=>r.json()).then(d=>setMessage(d.message||'OK')).catch(()=>setMessage('Error'));
  }, []);
  return (
    <EnhancedLayout>
      <h1 className="text-2xl font-semibold">Automation Status</h1>
      <p className="text-gray-600">{message}</p>
    </EnhancedLayout>
  );
}