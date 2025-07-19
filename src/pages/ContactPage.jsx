// /src/pages/ContactPage.jsx

import { motion } from 'framer-motion'

export default function ContactPage() {
  return (
    <div className="px-6 py-12 lg:px-24 bg-offwhite text-accenttext">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column: Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-serif mb-4">Contact Us</h1>
          <p className="mb-6 text-lg">
            We'd love to hear from you. Whether you're a practitioner, teacher, or simply curious,
            feel free to reach out!
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="font-semibold">Email</h2>
              <p>hello@yogawellnesshub.org</p>
            </div>
            <div>
              <h2 className="font-semibold">Phone</h2>
              <p>+91 98765 43210</p>
            </div>
            <div>
              <h2 className="font-semibold">Location</h2>
              <p>Rooted in India. Shared with the world.</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          <div>
            <label className="block font-medium mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-warmgray rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sage"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-warmgray rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sage"
              required
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              rows="5"
              className="w-full border border-warmgray rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-skyblue"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-sage text-accenttext font-semibold px-4 py-2 rounded-lg hover:bg-beige transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  )
}