import React from 'react';
import { motion } from 'framer-motion';
import TeamMember1 from '../Assets/person 1.jpeg'; 
import TeamMember2 from '../Assets/person 2.jpeg'; 

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white flex flex-col items-center">
      <div className="flex-grow max-w-4xl px-6 py-12">
        {/* Intro Section */}
        <section className="text-center mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-lg leading-relaxed mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            Welcome to Futsal Vista! We are passionate about providing the best futsal experience. Our team is dedicated to bringing you the latest news, team updates, and engaging content related to futsal. Join us as we explore the world of futsal and connect with enthusiasts from around the globe.
          </motion.p>
        </section>

        {/* Team Section */}
        <section className="mb-12">
          <motion.h3
            className="text-3xl font-semibold mb-6 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Meet the Team
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Team Member 1 */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={TeamMember1} 
                alt="Team Member 1" 
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2 text-center text-purple-400">Ahmed Rizwan</h4>
              <p className="text-sm text-center font-semibold">Lead Developer</p>
              <p className="text-sm mt-2 text-center">
                John is the mastermind behind our website’s development, ensuring everything runs smoothly and efficiently.
              </p>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div 
              className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src={TeamMember2} 
                alt="Team Member 2" 
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />
              <h4 className="text-xl font-semibold mb-2 text-center text-purple-400">Achievements</h4>
              <p className="text-sm mt-2 text-center">
                 Developed several young players who went on to have successful careers in top leagues. Successfully promoted a lower league team to the top division. Led the team to three consecutive league titles.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
