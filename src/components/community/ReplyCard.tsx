import React from 'react';
import { ForumReply } from '@/types/community';

interface ReplyCardProps {
  reply: ForumReply;
  className?: string;
  onMarkAnswer?: () => void;
  canMarkAnswer?: boolean;
}

export default function ReplyCard({ reply, className = '', onMarkAnswer, canMarkAnswer }: ReplyCardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm rounded-lg p-4 mb-3 ml-8 ${className}`}>
      <div className="flex items-start space-x-3">
        <img
          src={reply.author.avatar}
          alt={reply.author.name}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <span className="font-medium text-zion-cyan">{reply.author.name}</span>
            <span className="text-xs text-zion-slate-light">
              {new Date(reply.createdAt).toLocaleDateString()}
            </span>
            {reply.isSolution && (
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                Solution
              </span>
            )}
          </div>
          <p className="text-zion-slate-light text-sm">{reply.content}</p>
          <div className="flex items-center space-x-4 mt-2 text-xs text-zion-slate-light">
            <button className="hover:text-zion-cyan">Like ({reply.likes})</button>
            <button className="hover:text-zion-cyan">Reply</button>
            {canMarkAnswer && onMarkAnswer && (
              <button 
                onClick={onMarkAnswer}
                className="hover:text-zion-cyan text-green-500"
              >
                Mark as Answer
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}