import React, { useState } from 'react';
import SchedulerModal from './SchedulerModal';

interface Props {
  clientId: string;
  talentId: string;
  talentName?: string;
  clientName?: string;
}

export default function RequestInterviewButton({ clientId, talentId }: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function schedule(payload: { startTimeIso: string; durationMinutes: number; meetingLink?: string; notes?: string }) {
    setSubmitting(true);
    try {
      await fetch(`/api/interviews?userId=${clientId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientId,
          talentId,
          startTimeIso: payload.startTimeIso,
          durationMinutes: payload.durationMinutes,
          meetingLink: payload.meetingLink,
          notes: payload.notes,
        }),
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <button className="enhanced-button enhanced-button-primary" onClick={() => setOpen(true)} disabled={submitting}>
        {submitting ? 'Requesting…' : 'Request Interview'}
      </button>
      <SchedulerModal isOpen={open} onClose={() => setOpen(false)} onSubmit={schedule} />
    </>
  );
}