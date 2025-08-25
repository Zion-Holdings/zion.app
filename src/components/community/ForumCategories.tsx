import React from 'react';

interface ForumCategoriesProps {
  categories: Array<{
    id: string;
    name: string;
    description: string;
    postCount: number;
  }>;
}

const ForumCategories: React.FC<ForumCategoriesProps> = ({ categories }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => (
        <div key={category.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
          <p className="text-zion-slate-light mb-4">{category.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-zion-slate-light">
              {category.postCount} posts
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForumCategories;