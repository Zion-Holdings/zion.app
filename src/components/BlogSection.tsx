import { GradientHeading } from "./GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-posts";
import Image from 'next/image';
import React, { useState } from 'react'; // Ensure React and useState are imported

// Get the 3 most recent blog posts
const recentPosts = [...BLOG_POSTS].sort((a, b) => {
  return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
}).slice(0, 3);

// Define a sub-component for the image to manage its state
const PostImage = ({ post }: { post: typeof recentPosts[0] }) => {
  const [imageSrc, setImageSrc] = useState(post.featuredImage);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    if (!imageError) { // Prevent infinite loops if placeholder also fails
      setImageSrc("/images/blog-placeholder.svg");
      setImageError(true);
    }
  };

  return (
    <Image
      src={imageSrc}
      alt={post.title}
      width={300} // Placeholder width
      height={200} // Placeholder height
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // General sizes
      onError={handleImageError}
      className="object-cover w-full h-full hover:opacity-80 transition-opacity duration-300"
      priority={false} // Not LCP
    />
  );
};

export function BlogSection() {
  return (
    <section className="py-20 bg-zion-blue-dark" id="blog">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <GradientHeading>Latest Insights</GradientHeading>
            <p className="mt-2 text-zion-slate-light text-xl max-w-2xl">
              Stay updated with trends in AI technology, marketplace strategies, and IT services
            </p>
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 border-zion-purple text-white hover:bg-zion-purple/10"
            asChild
          >
            <Link href="/blog">View All Articles</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <Card
              key={post.id}
              asChild
              className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/50 transition-all duration-300 overflow-hidden group-hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="block group">
                <div className="h-48 bg-zion-blue-dark relative overflow-hidden">
                  <PostImage post={post} /> {/* Use the sub-component */}
                  <div className="absolute bottom-4 left-4 text-zion-purple/70 text-4xl font-bold">{index + 1}</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-white bg-zion-blue-dark px-2 py-1 rounded">{post.category}</span>
                    <div className="text-xs text-zion-slate-light">{post.publishedDate} • {post.readTime}</div>
                  </div>
                  <h3 className="text-xl font-bold text-zion-blue-dark mb-3">{post.title}</h3>
                  <p className="text-zion-blue-dark line-clamp-2">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <span className="text-zion-blue-dark group-hover:text-zion-purple-dark">Read More →</span>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
