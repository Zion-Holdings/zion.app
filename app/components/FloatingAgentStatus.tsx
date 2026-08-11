'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { BOT_ROSTER } from '@/data/agent-logs';

export default function FloatingAgentStatus() {
  const [expanded, setExpanded] = useState(false);
  const [time, setTime] = useState('');

  const activeBots = BOT_ROSTER.filter((b) => b.status === 'active').length;

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'America/Sao_Paulo',
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 z-[9999]"
      aria-label="Agent Status"
    >
      <div
        className={`transition-all duration-300 origin-bottom-right ${
          expanded
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-100 scale-100 translate-y-0'
        }`}
      >
        {/* Expanded panel */}
        {expanded && (
          <div className="mb-3 w-64 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="p-3 border-b border-slate-800">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-semibold text-white">Fleet Status</h4>
                <span className="text-[10px] text-slate-500">{time}</span>
              </div>
            </div>
            <div className="p-2 max-h-80 overflow-y-auto">
              {BOT_ROSTER.slice(0, 8).map((bot) => (
                <div
                  key={bot.id}
                  className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-slate-800/50 transition text-xs"
                >
                  <span className="relative flex h-2 w-2 shrink-0">
                    {bot.status === 'active' && (
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        bot.status === 'active'
                          ? 'bg-emerald-400'
                          : bot.status === 'available'
                          ? 'bg-blue-400'
                          : bot.status === 'stale'
                          ? 'bg-amber-400'
                          : 'bg-slate-500'
                      }`}
                    />
                  </span>
                  <span className="truncate">{bot.emoji} {bot.name}</span>
                  <span
                    className={`ml-auto text-[9px] px-1.5 py-0.5 rounded ${
                      bot.status === 'active'
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : bot.status === 'available'
                        ? 'bg-blue-500/20 text-blue-400'
                        : bot.status === 'stale'
                        ? 'bg-amber-500/20 text-amber-400'
                        : 'bg-slate-500/20 text-slate-400'
                    }`}
                  >
                    {bot.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-2 border-t border-slate-800 flex gap-2">
              <Link
                href="/dashboard"
                className="text-[10px] text-center flex-1 px-2 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition"
              >
                Ops Dashboard
              </Link>
              <Link
                href="/agents-monitoring"
                className="text-[10px] text-center flex-1 px-2 py-1.5 border border-slate-700 rounded-lg text-slate-300 hover:border-purple-500 transition"
              >
                Client View
              </Link>
            </div>
          </div>
        )}

        {/* Toggle button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-12 h-12 rounded-full border border-slate-700/70 flex items-center justify-center shadow-2xl backdrop-blur-xl transition-all duration-300 ${
            expanded
              ? 'bg-slate-800 rotate-45'
              : 'bg-gradient-to-br from-purple-600 to-pink-600'
          }`}
          aria-label={expanded ? 'Hide agent status' : 'Show agent status'}
          aria-expanded={expanded}
        >
          <span
            className={`text-xl transition-transform duration-300 ${
              expanded ? 'rotate-45 text-white' : ''
            }`}
          >
            {expanded ? '✕' : '⚡'}
          </span>
        </button>
      </div>
    </div>
  );
}
