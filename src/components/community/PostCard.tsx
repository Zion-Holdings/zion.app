import React from 'react';

const PostCard: React.FC = () => {
  return (
    <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-4">
          Post Card
        </h3>
        <p className="text-zion-slate-light">
          Coming soon - post cards will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default PostCard;