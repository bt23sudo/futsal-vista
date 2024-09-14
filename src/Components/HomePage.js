import React from 'react';
import Image from '../Assets/Untitled_design__5_-removebg-preview (1).png';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-black flex items-center justify-center">
      <div className="flex items-center justify-between w-full max-w-6xl px-4 relative">
        {/* Text on the Left */}
        <motion.div 
          className="text-white text-left flex-1 max-w-md"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            Welcome to <span className="text-green-400">Futsal Vista</span>
          </h1>
          <p className="text-lg">
            Your ultimate destination for all things futsal. Whether you're here to check out teams, learn more about us, or just want to explore, you've come to the right place.
          </p>
        </motion.div>

        {/* Image on the Right */}
        <motion.div 
          className="flex-shrink-0 ml-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300, duration: 1 }}
        >
          <img 
            src={Image}
            alt="Placeholder" 
            className="w-96 h-96 object-cover rounded-lg  transition-transform duration-300 ease-in-out"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
