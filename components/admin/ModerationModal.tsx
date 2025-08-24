import React, { useState } from 'react';

export type ModerationModalProps = {
  flag: any | null;
  onClose: () => void;
  onAction: (action: 'approve' | 'remove' | 'warn' | 'ban', adminNotes?: string) => Promise<void>;
};

export default function ModerationModal({ flag, onClose, onAction }: ModerationModalProps) {
  const [adminNotes, setAdminNotes] = useState('');
  if (!flag) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-black w-full max-w-2xl rounded shadow-lg">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="font-semibold">Review Flag — {flag.id}</div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        <div className="p-4 space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-gray-500">Content Type</div>
              <div className="font-medium">{flag.contentType}</div>
            </div>
            <div>
              <div className="text-gray-500">User</div>
              <div className="font-medium">{flag.userEmail}</div>
            </div>
            <div>
              <div className="text-gray-500">Reason</div>
              <div className="font-medium">{flag.reason}</div>
            </div>
            <div>
              <div className="text-gray-500">Status</div>
              <div className="font-medium">{flag.status}</div>
            </div>
          </div>
          <div>
            <div className="text-gray-500 mb-1">Preview</div>
            <div className="border rounded p-3 bg-gray-50 dark:bg-gray-900 whitespace-pre-wrap max-h-48 overflow-auto">{flag.snippet}</div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 border rounded">
              <div className="text-gray-500">Toxicity</div>
              <div className="font-semibold">{Math.round((flag.aiScores?.toxicity || 0) * 100)}%</div>
            </div>
            <div className="p-3 border rounded">
              <div className="text-gray-500">NSFW</div>
              <div className="font-semibold">{Math.round((flag.aiScores?.nsfw || 0) * 100)}%</div>
            </div>
            <div className="p-3 border rounded">
              <div className="text-gray-500">Scam</div>
              <div className="font-semibold">{Math.round((flag.aiScores?.scam || 0) * 100)}%</div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Admin Notes</label>
            <textarea value={adminNotes} onChange={e => setAdminNotes(e.target.value)} rows={3} className="w-full border rounded px-3 py-2 bg-white dark:bg-black" />
          </div>
        </div>
        <div className="p-4 border-t flex items-center justify-end gap-2">
          <button onClick={() => onAction('approve', adminNotes)} className="px-3 py-2 rounded bg-green-600 text-white">Approve</button>
          <button onClick={() => onAction('remove', adminNotes)} className="px-3 py-2 rounded bg-red-600 text-white">Remove</button>
          <button onClick={() => onAction('warn', adminNotes)} className="px-3 py-2 rounded bg-yellow-600 text-white">Warn</button>
          <button onClick={() => onAction('ban', adminNotes)} className="px-3 py-2 rounded bg-gray-800 text-white">Ban User</button>
        </div>
      </div>
    </div>
  );
}