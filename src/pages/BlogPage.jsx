// --------------------------
// src/pages/BlogPage.jsx
// --------------------------
import React, { useState, useEffect } from 'react';
import blogPostsData from '../data/blog-posts.json';
import BlogCard from '../components/BlogCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import { motion } from 'framer-motion';
import MainLayout from '../MainLayout';

const POSTS_PER_PAGE = 6;

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handleFilter = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const uniqueTags = [...new Set(blogPostsData.flatMap((post) => post.tags))];

  return (
    <MainLayout>
      <main className="bg-offwhite dark:bg-warmgray text-accenttext font-body min-h-screen">
      <section className="bg-offwhite dark:bg-warmgray text-accenttext font-body min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-heading mb-6 text-center">Yoga & Wellness Blog</h1>
          <div className="mb-6">
            <SearchBar onSearch={handleSearch} placeholder="Search blog posts..." />
          </div>
          <div className="mb-6">
            <FilterBar tags={uniqueTags} onFilter={handleFilter} selectedTag={selectedTag} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedPosts.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>

          {/* Numbered Pagination Controls */}
          <div className="mt-10 flex justify-center items-center gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${
                  currentPage === page ? 'bg-skyblue text-white' : 'bg-white dark:bg-warmgray text-accenttext hover:bg-skyblue hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
        </section>
      </main>
    </MainLayout>
  );
};

export default BlogPage;