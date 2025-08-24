import React from 'react';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    content: string;
    authorName: string;
    createdAt: string;
    likes: number;
    replies: number;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4">
      <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
      <p className="text-zion-slate-light mb-4 line-clamp-3">{post.content}</p>
      <div className="flex justify-between items-center text-sm text-zion-slate-light">
        <span>By {post.authorName}</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        <div className="flex items-center space-x-4">
          <span>{post.likes} likes</span>
          <span>{post.replies} replies</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;