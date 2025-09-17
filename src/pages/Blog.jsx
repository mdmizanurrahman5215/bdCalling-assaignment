import React from "react";
import { Link } from "react-router-dom";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "How AI is Revolutionizing Text Humanization",
    category: "AI & Technology",
    excerpt: "Explore how artificial intelligence is reshaping the way we interact with and refine text, making it sound more natural and human-like.",
    imageUrl: "/images/Frame 1618873370.png",
    slug: "ai-revolutionizing-text-humanization"
  },
  {
    id: 2,
    title: "How AI is Revolutionizing Text Humanization",
    category: "AI & Technology",
    excerpt: "Explore how artificial intelligence is reshaping the way we interact with and refine text, making it sound more natural and human-like.",
    imageUrl: "/images/Frame 1618873370.png",
    slug: "ai-revolutionizing-text-humanization"
  },
  {
    id: 3,
    title: "How AI is Revolutionizing Text Humanization",
    category: "AI & Technology",
    excerpt: "Explore how artificial intelligence is reshaping the way we interact with and refine text, making it sound more natural and human-like.",
    imageUrl: "/images/Frame 1618873370.png",
    slug: "ai-revolutionizing-text-humanization"
  },
  {
    id: 4,
    title: "How AI is Revolutionizing Text Humanization",
    category: "AI & Technology",
    excerpt: "Explore how artificial intelligence is reshaping the way we interact with and refine text, making it sound more natural and human-like.",
    imageUrl: "/images/Frame 1618873370.png",
    slug: "ai-revolutionizing-text-humanization"
  },
  {
    id: 5,
    title: "How AI is Revolutionizing Text Humanization",
    category: "AI & Technology",
    excerpt: "Explore how artificial intelligence is reshaping the way we interact with and refine text, making it sound more natural and human-like.",
    imageUrl: "/images/Frame 1618873370.png",
    slug: "ai-revolutionizing-text-humanization"
  },
  {
    id: 6,
    title: "How AI is Revolutionizing Text Humanization",
    category: "AI & Technology",
    excerpt: "Explore how artificial intelligence is reshaping the way we interact with and refine text, making it sound more natural and human-like.",
    imageUrl: "/images/Frame 1618873370.png",
    slug: "ai-revolutionizing-text-humanization"
  },

];

const BlogCard = ({ post }) => (
  <div className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
    <Link to={`/blog/${post.slug}`}>
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-44 sm:h-52 md:h-48 lg:h-56 object-cover"
      />
    </Link>
    <div className="p-5">
      <div className="text-xs text-primary font-medium mb-2">{post.category}</div>
      <Link to={`/blog/${post.slug}`} className="block">
        <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-primary transition-colors">{post.title}</h3>
      </Link>
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{post.excerpt}</p>
    </div>
  </div>
);

const Blog = () => {
  return (
    <div className="bg-white py-16 px-4 mt-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Explore Our Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into informative articles, expert opinions, and updates on all things AI and learning.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
