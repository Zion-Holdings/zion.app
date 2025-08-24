import React from 'react';
import { Route } from 'react-router-dom';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';

export default function ContentRoutes() {
  return (
    <>
      <Route path="blog" element={<Blog />} />
      <Route path="blog/:slug" element={<BlogPost />} />
    </>
  );
}