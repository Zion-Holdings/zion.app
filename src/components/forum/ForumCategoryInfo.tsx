import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, MessageSquare, Clock, TrendingUp } from '@/components/icons';

interface ForumCategoryInfoProps {
  category: {
    id: string;
    name: string;
    description: string;
    memberCount: number;
    postCount: number;
    lastActivity: string;
    trending: boolean;
    tags: string[];
  };
}

export function ForumCategoryInfo({ category }: ForumCategoryInfoProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-zion-blue">
            {category.name}
          </CardTitle>
          {category.trending && (
            <Badge variant="secondary" className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white">
              <TrendingUp className="w-4 h-4 mr-1" />
              Trending
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-zion-slate-600 dark:text-zion-slate-300">
          {category.description}
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-zion-blue" />
            <div>
              <p className="text-sm font-medium">{category.memberCount}</p>
              <p className="text-xs text-zion-slate-500">Members</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-4 h-4 text-zion-purple" />
            <div>
              <p className="text-sm font-medium">{category.postCount}</p>
              <p className="text-xs text-zion-slate-500">Posts</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-zion-cyan" />
            <div>
              <p className="text-sm font-medium">Active</p>
              <p className="text-xs text-zion-slate-500">{category.lastActivity}</p>
            </div>
          </div>
        </div>
        
        {category.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {category.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}