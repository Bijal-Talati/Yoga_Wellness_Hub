import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-sage text-accenttext py-8 mt-12 border-t border-warmgray">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-lg mb-2">Yoga & Wellness Hub</h3>
          <p className="text-warmgray">
            A digital sanctuary to explore the roots of yoga, understand the
            body, and reconnect with breath and balance.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Explore</h4>
          <ul className="space-y-1">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/asanas" className="hover:underline">Asanas</Link></li>
            <li><Link to="/sequences" className="hover:underline">Sequences</Link></li>
            <li><Link to="/literature" className="hover:underline">Literature</Link></li>
            <li><Link to="/ayurveda" className="hover:underline">Ayurveda</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1">
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/styles" className="hover:underline">Style Guide</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Stay Connected</h4>
          <p className="mb-2 text-warmgray">Follow us for new flows and wisdom:</p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Instagram" className="hover:opacity-80">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="YouTube" className="hover:opacity-80">
              <img src="/icons/youtube.svg" alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Newsletter" className="hover:underline text-sm">
              Newsletter
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-warmgray">
        © {new Date().getFullYear()} Yoga & Wellness Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
