import React from 'react';
import { useRouter } from 'next/router';
import CallRoom, { StartMode } from '../../../components/calls/CallRoom';
import InviteBanner from '../../../components/calls/InviteBanner';
import { supabase } from '../../../utils/supabase/client';

async function createRoom(projectId: string, preferredName?: string) {
  const res = await fetch('/api/livekit/room', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ projectId, preferredName }),
  });
  if (!res.ok) throw new Error('Failed to create room');
  return (await res.json()) as { roomName: string };
}

async function getToken(roomName: string, identity: string, name: string, audioOnly: boolean) {
  const res = await fetch('/api/livekit/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ roomName, identity, name, audioOnly }),
  });
  if (!res.ok) throw new Error('Failed to get token');
  return (await res.json()) as { token: string; url: string };
}

async function logMeeting(event: 'join' | 'leave', payload: { projectId: string; roomName: string; userId: string; durationSec?: number; }) {
  await fetch('/api/meetings/log', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...payload, event }),
  }).catch(() => {});
}

async function sendInvite(projectId: string, roomName: string, inviterName?: string) {
  await fetch('/api/meetings/invite', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ projectId, roomName, inviterName }),
  }).catch(() => {});
}

export default function ProjectRoomPage() {
  const router = useRouter();
  const { id } = router.query as { id?: string };

  const [step, setStep] = React.useState<'pre' | 'joining' | 'in'>('pre');
  const [serverUrl, setServerUrl] = React.useState<string>('');
  const [token, setToken] = React.useState<string>('');
  const [roomName, setRoomName] = React.useState<string>('');
  const [startMode, setStartMode] = React.useState<StartMode>('video');
  const [name, setName] = React.useState<string>('');
  const [invite, setInvite] = React.useState<{ from?: string; room?: string } | null>(null);
  const [joinedAt, setJoinedAt] = React.useState<number | null>(null);
  const [elapsed, setElapsed] = React.useState<number>(0);

  React.useEffect(() => {
    const stored = localStorage.getItem('user_name') || '';
    if (stored) setName(stored);
  }, []);

  React.useEffect(() => {
    if (!id) return;
    const channel = supabase.channel(`project_${id}_calls`);
    channel.on('broadcast', { event: 'call_invite' }, ({ payload }: any) => {
      setInvite({ from: payload?.inviterName || 'Host', room: payload?.roomName });
    });
    channel.subscribe();
    return () => { channel.unsubscribe(); };
  }, [id]);

  React.useEffect(() => {
    if (step !== 'in' || !joinedAt) return;
    const t = setInterval(() => setElapsed(Math.floor((Date.now() - joinedAt) / 1000)), 1000);
    return () => clearInterval(t);
  }, [step, joinedAt]);

  const startCall = async (mode: StartMode) => {
    if (!id) return;
    setStartMode(mode);
    setStep('joining');

    try {
      const identity = `${name || 'guest'}-${Math.random().toString(36).slice(2, 8)}`;
      const roomResp = await createRoom(id, name || 'host');
      setRoomName(roomResp.roomName);
      await sendInvite(id, roomResp.roomName, name || 'Host');
      const { token, url } = await getToken(roomResp.roomName, identity, name || 'Guest', mode === 'audio');
      setToken(token);
      setServerUrl(url);
      setStep('in');
      setJoinedAt(Date.now());
      logMeeting('join', { projectId: id, roomName: roomResp.roomName, userId: name || 'guest' });
    } catch (e) {
      console.error(e);
      setStep('pre');
      alert('Failed to start or join call');
    }
  };

  const inviteUrl = React.useMemo(() => {
    if (!id || !roomName) return '';
    const u = new URL(typeof window !== 'undefined' ? window.location.href : '');
    if (!u) return '' as any;
    u.searchParams.set('room', roomName);
    u.searchParams.set('invited', 'true');
    return u.toString();
  }, [id, roomName]);

  const joinIfInvited = async () => {
    const room = (router.query?.room as string) || invite?.room || '';
    const invited = (router.query?.invited as string) || (invite?.room ? 'true' : '');
    if (!id || !room || !invited) return;

    try {
      const identity = `${name || 'guest'}-${Math.random().toString(36).slice(2, 8)}`;
      setRoomName(room);
      const { token, url } = await getToken(room, identity, name || 'Guest', false);
      setToken(token);
      setServerUrl(url);
      setStartMode('video');
      setStep('in');
      setJoinedAt(Date.now());
      logMeeting('join', { projectId: id, roomName: room, userId: name || 'guest' });
    } catch (e) {
      console.error(e);
      alert('Failed to join call');
    }
  };

  React.useEffect(() => {
    if (!router.isReady) return;
    if (router.query?.invited && router.query?.room) {
      const timer = setTimeout(() => joinIfInvited(), 600);
      return () => clearTimeout(timer);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, router.query?.invited, router.query?.room]);

  const handleLeave = (durationSec: number) => {
    if (id && roomName) {
      logMeeting('leave', { projectId: id, roomName, userId: name || 'guest', durationSec });
    }
    setElapsed(0);
    setJoinedAt(null);
    router.replace(`/project/${id}`);
  };

  if (!id) return null;

  if (step !== 'in') {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 p-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Project Room</h1>
            {joinedAt && (
              <div className="text-sm text-gray-400">{Math.floor(elapsed / 60)}:{String(elapsed % 60).padStart(2, '0')}</div>
            )}
          </div>

          {invite && (
            <InviteBanner message={`${invite.from} invited you to a call`} onJoin={joinIfInvited} canJoin={Boolean(invite.room)} />
          )}

          <div className="bg-gray-900 rounded p-4 border border-gray-800 space-y-3">
            <label className="block text-sm text-gray-300">Your name</label>
            <input value={name} onChange={(e) => { setName(e.target.value); localStorage.setItem('user_name', e.target.value); }} className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-700 text-white" placeholder="Enter your name" />
          </div>

          <div className="flex gap-3">
            <button onClick={() => startCall('video')} className="px-5 py-3 rounded bg-cyan-600 text-white">Start Video</button>
            <button onClick={() => startCall('audio')} className="px-5 py-3 rounded bg-blue-600 text-white">Start Audio Only</button>
            {inviteUrl && (
              <button onClick={() => navigator.clipboard.writeText(inviteUrl)} className="px-5 py-3 rounded bg-gray-800 text-white border border-gray-700">Copy Invite</button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <CallRoom
      projectId={id}
      userId={name || 'guest'}
      displayName={name || 'Guest'}
      roomName={roomName}
      serverUrl={serverUrl}
      token={token}
      startMode={startMode}
      onLeave={handleLeave}
    />
  );
}