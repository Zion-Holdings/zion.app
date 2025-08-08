import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { generateGoogleMeetLink, generateZoomLink } from '../../utils/meetLinks';

export interface SchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (payload: {
    startTimeIso: string;
    durationMinutes: number;
    meetingLink?: string;
    notes?: string;
  }) => Promise<void> | void;
}

export default function SchedulerModal({ isOpen, onClose, onSubmit }: SchedulerModalProps) {
  const [startDate, setStartDate] = useState<Date>(new Date(Date.now() + 60 * 60000));
  const [duration, setDuration] = useState<number>(30);
  const [meetingLink, setMeetingLink] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submitting, setSubmitting] = useState(false);

  if (!isOpen) return null;

  async function handleSubmit() {
    setSubmitting(true);
    try {
      await onSubmit({
        startTimeIso: startDate.toISOString(),
        durationMinutes: duration,
        meetingLink: meetingLink || undefined,
        notes: notes || undefined,
      });
      onClose();
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white dark:bg-gray-900 p-4 shadow-xl">
        <h3 className="text-lg font-semibold mb-3">Schedule Interview</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Date & Time</label>
            <DatePicker
              selected={startDate}
              onChange={(d) => d && setStartDate(d)}
              showTimeSelect
              timeIntervals={15}
              dateFormat="Pp"
              className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Duration</label>
            <select
              value={duration}
              onChange={(e) => setDuration(parseInt(e.target.value))}
              className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800"
            >
              <option value={15}>15 minutes</option>
              <option value={30}>30 minutes</option>
              <option value={60}>60 minutes</option>
            </select>
          </div>
          <div>
            <label className="block text-sm mb-1">Meeting Link (optional)</label>
            <div className="flex gap-2">
              <input
                value={meetingLink}
                onChange={(e) => setMeetingLink(e.target.value)}
                placeholder="Paste Zoom/Meet link or generate"
                className="flex-1 border rounded px-3 py-2 bg-white dark:bg-gray-800"
              />
              <button
                type="button"
                className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
                onClick={() => setMeetingLink(generateZoomLink())}
              >Zoom</button>
              <button
                type="button"
                className="px-3 py-2 rounded bg-gray-100 dark:bg-gray-800"
                onClick={() => setMeetingLink(generateGoogleMeetLink())}
              >Meet</button>
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Notes</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g., We'll discuss milestone 1 scope"
              className="w-full border rounded px-3 py-2 bg-white dark:bg-gray-800"
              rows={3}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-end gap-2">
          <button className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800" onClick={onClose} disabled={submitting}>Cancel</button>
          <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={handleSubmit} disabled={submitting}>
            {submitting ? 'Scheduling…' : 'Schedule'}
          </button>
        </div>
      </div>
    </div>
  );
}