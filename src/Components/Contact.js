import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white flex flex-col items-center py-12">
      <motion.h2
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h2>
      <div className="w-full max-w-4xl px-6">
        {/* Contact Form */}
        <motion.section
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-semibold mb-6 text-center text-purple-500">Get in Touch</h3>
          <form
            action="#"
            method="POST"
            className="space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="John Doe"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="john.doe@example.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your message here..."
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-purple-700 hover:bg-purple-900 text-white py-3 px-4 rounded-xl transition-transform transform hover:scale-105 font-semibold"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-semibold mb-4">Our Contact Information</h3>
          <p className="text-lg mb-2">Email: <a href="mailto:ar0117785@gmail.com" className="text-green-500">ar0117785@gmail.com</a></p>
          <p className="text-lg mb-2">Phone: <span className="text-green-500">03321999945</span></p>
          <p className="text-lg mb-2">Address: Gulshan-E-Iqbal, Karachi, Pakistan</p>
          <p className="text-lg mb-2">Instagram: <a href="https://www.instagram.com/_.eupheriqx/" className="text-green-500" target="_blank" rel="noopener noreferrer">@_.eupheriqx</a></p>
        </motion.section>
      </div>
    </div>
  );
};

export default Contact;
