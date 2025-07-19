// --------------------------
// src/pages/AboutPage.jsx
// --------------------------
import React from 'react';
import MainLayout from '../MainLayout';

const AboutPage = () => {
  return (
    <MainLayout>
      <div className="bg-offwhite text-accenttext font-body px-6 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column */}
          <div>
            <h1 className="text-4xl font-heading mb-6">Rooted in Tradition</h1>
            <p className="mb-4">
              Yoga & Wellness Hub is a platform dedicated to preserving and sharing the authentic practices of yoga,
              rooted in the rich traditions of India. Our aim is to provide a welcoming space for anyone seeking physical,
              mental, and spiritual well-being.
            </p>
            <p>
              Whether you're a beginner or seasoned practitioner, we offer resources that honor the classical texts,
              contemporary adaptations, and mindful living. This space is lovingly curated by educators and yogis from
              around the world.
            </p>
          </div>

          {/* Right Column */}
          <div className="bg-sage p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-heading mb-4">Our Mission</h2>
            <p className="mb-4">
              To create a serene and supportive environment for learning and deepening one's yoga journey through
              accessible knowledge, modern tools, and community connection.
            </p>
            <blockquote className="italic border-l-4 border-accenttext pl-4 text-lg text-gray-700">
              “Yoga is the journey of the self, through the self, to the self.” — Bhagavad Gita
            </blockquote>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;