import React, { useState } from 'react';
import Countdown from './Countdown';
import SchedulerModal from './SchedulerModal';
import type { Interview } from '../../utils/types/interview';
import { buildGoogleCalendarUrl } from '../../utils/meetLinks';

export interface InterviewCardProps {
  interview: Interview;
  currentUserId: string;
  onRefresh: () => void;
}

export default function InterviewCard({ interview, currentUserId, onRefresh }: InterviewCardProps) {
  const [openPropose, setOpenPropose] = useState(false);
  const isTalent = currentUserId === interview.talentId;
  const isClient = currentUserId === interview.clientId;

  async function act(action: 'accept' | 'decline' | 'propose', payload?: any) {
    await fetch(`/api/interviews/${interview.id}?userId=${currentUserId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...(payload || {}) }),
    });
    onRefresh();
  }

  const end = new Date(new Date(interview.startTimeIso).getTime() + interview.durationMinutes * 60000).toISOString();
  const calendarUrl = buildGoogleCalendarUrl({
    title: 'Zion Marketplace Interview',
    details: interview.notes || '',
    startTimeIso: interview.startTimeIso,
    endTimeIso: end,
    location: interview.meetingLink || 'Online',
  });

  return (
    <div className="enhanced-card">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm text-gray-500">{interview.status.toUpperCase()}</div>
          <h4 className="text-lg font-semibold">Interview</h4>
        </div>
        <div className="text-right text-sm">
          <div>Starts in: <Countdown startTimeIso={interview.startTimeIso} /></div>
          <div>Duration: {interview.durationMinutes} min</div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
        <div>
          <div><span className="text-gray-500">Client:</span> {interview.clientName || interview.clientId}</div>
          <div><span className="text-gray-500">Talent:</span> {interview.talentName || interview.talentId}</div>
        </div>
        <div>
          <div><span className="text-gray-500">When:</span> {new Date(interview.startTimeIso).toLocaleString()}</div>
          {interview.meetingLink && (<div><span className="text-gray-500">Link:</span> <a className="text-blue-600 underline" href={interview.meetingLink} target="_blank" rel="noreferrer">{interview.meetingLink}</a></div>)}
        </div>
      </div>
      {interview.notes && <div className="mt-3 text-sm"><span className="text-gray-500">Notes:</span> {interview.notes}</div>}

      <div className="mt-4 flex flex-wrap gap-2">
        {(isTalent && interview.status === 'requested') && (
          <>
            <button className="px-3 py-2 rounded bg-green-600 text-white" onClick={() => act('accept')}>Accept</button>
            <button className="px-3 py-2 rounded bg-yellow-600 text-white" onClick={() => setOpenPropose(true)}>Propose New Time</button>
            <button className="px-3 py-2 rounded bg-gray-300" onClick={() => act('decline')}>Decline</button>
          </>
        )}
        {(interview.status === 'confirmed') && (
          <>
            <a className="px-3 py-2 rounded bg-blue-600 text-white" href={calendarUrl} target="_blank" rel="noreferrer">Add to Google Calendar</a>
            {interview.meetingLink && (
              <a
                className={`px-3 py-2 rounded ${Date.now() >= new Date(interview.startTimeIso).getTime() ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-500 pointer-events-none'}`}
                href={interview.meetingLink}
                target="_blank"
                rel="noreferrer"
              >Join Interview</a>
            )}
          </>
        )}
      </div>

      <SchedulerModal
        isOpen={openPropose}
        onClose={() => setOpenPropose(false)}
        onSubmit={async (payload) => {
          await act('propose', { proposedTimeIso: payload.startTimeIso, durationMinutes: payload.durationMinutes });
        }}
      />
    </div>
  );
}