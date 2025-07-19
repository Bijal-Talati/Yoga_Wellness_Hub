// --------------------------
// src/pages/AyurvedaPage.jsx
// --------------------------
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../MainLayout';

const AyurvedaPage = () => {
  return (
    <MainLayout>
      <main className="bg-offwhite dark:bg-warmgray text-accenttext font-body min-h-screen">
      <section className="bg-offwhite dark:bg-warmgray text-accenttext font-body py-12 px-6 lg:px-20 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-heading mb-8">Ayurveda & Holistic Wellness</h1>

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            <div>
              <h2 className="text-2xl font-heading mb-4">Introduction to Ayurveda</h2>
              <p className="leading-relaxed">
                Ayurveda, the “Science of Life,” is an ancient Indian system of medicine focused on
                balance between body, mind, and spirit. It emphasizes prevention and natural healing
                through lifestyle, nutrition, herbs, and therapies.
              </p>
            </div>

            <div>
              <img
                src="/images/ayurveda_intro.jpg"
                alt="Ayurvedic herbs"
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            <div>
              <img
                src="/images/ayurveda_team.jpg"
                alt="Practitioners"
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-heading mb-4">Our Mission</h2>
              <p className="leading-relaxed">
                Our mission is to bridge ancient Ayurvedic wisdom with modern lifestyles. We aim to
                offer accessible, trustworthy, and personalized wellness guidance for individuals
                around the world.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-heading mb-4">Meet Our Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Dr. Anaya', 'Kiran Joshi', 'Meera Patil'].map((member, idx) => (
                <div
                  key={member}
                  className="bg-white dark:bg-beige p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={`/images/team${idx + 1}.jpg`}
                    alt={member}
                    className="rounded-xl mb-4 h-48 w-full object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member}</h3>
                  <p className="text-sm">Ayurveda Practitioner</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-heading mb-4">Contact Us</h2>
            <p>Email: <a href="mailto:connect@yogahub.com" className="underline">connect@yogahub.com</a></p>
            <p>Location: Pune, Maharashtra, India</p>
            <p className="mt-4 text-sm">
              Return to <Link to="/" className="text-skyblue underline">Home</Link>
            </p>
          </div>
        </div>
      </section>
      </main>
    </MainLayout>
  );
};

export default AyurvedaPage;