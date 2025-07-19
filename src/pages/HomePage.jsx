// --------------------------
// src/pages/HomePage.jsx
// --------------------------
import React from 'react';
import { useNavigate } from 'react-router-dom';
import AsanaCard from '../components/AsanaCard';
import BlogCard from '../components/BlogCard';
import MainLayout from '../MainLayout';
import blogPosts from '../data/blog-posts.json';
import asanas from '../data/asanas.json';
import { motion } from 'framer-motion';

const benefits = [
  { icon: '🧘‍♀️', title: 'Flexibility' },
  { icon: '🫁', title: 'Breath Awareness' },
  { icon: '🧠', title: 'Mental Clarity' },
  { icon: '💪', title: 'Strength & Balance' },
];

const HomePage = () => {
  const navigate = useNavigate();
  const featuredAsanas = asanas.slice(0, 4);
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <MainLayout>
      <div className="font-body text-accenttext bg-offwhite">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-center bg-cover bg-[url('/images/hero-bg.jpg')] flex items-center justify-center">
          <div className="bg-black bg-opacity-40 p-10 rounded text-center text-white">
            <h1 className="text-4xl font-heading mb-4">Welcome to the Yoga & Wellness Hub</h1>
            <p className="mb-6">Explore asanas, philosophy, and ancient wisdom.</p>
            <button
              onClick={() => navigate('/asanas')}
              className="bg-skyblue text-white px-6 py-2 rounded shadow hover:bg-accenttext transition"
            >
              Explore Asanas
            </button>
          </div>
        </section>

        {/* Featured Asanas */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading mb-6 text-center">Popular Asanas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAsanas.map((asana, idx) => (
              <motion.div
                key={asana.sanskritName}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <AsanaCard asana={asana} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-beige py-12 px-4">
          <h2 className="text-3xl font-heading text-center mb-8">Benefits of Yoga</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="bg-white p-6 rounded shadow hover:shadow-md transition">
                  <div className="text-4xl mb-2">{benefit.icon}</div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <h2 className="text-3xl font-heading mb-6 text-center">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestPosts.map((post, idx) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;