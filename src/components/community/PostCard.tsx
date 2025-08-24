import React from 'react';
import { ForumPost } from '@/types/community';

interface PostCardProps {
  post: ForumPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-4">
      <div className="flex items-start space-x-4">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-zion-cyan mb-2">{post.title}</h3>
          <p className="text-zion-slate-light mb-3 line-clamp-3">{post.content}</p>
          <div className="flex items-center justify-between text-sm text-zion-slate-light">
            <span>By {post.author.name}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-4 mt-2 text-sm text-zion-slate-light">
            <span>{post.replies.length} replies</span>
            <span>{post.likes} likes</span>
            <span>{post.views} views</span>
          </div>
        </div>
      </div>
    </div>
  );
}