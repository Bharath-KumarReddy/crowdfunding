import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {

    const navigate = useNavigate();

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900 to-gray-700 text-white text-center py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.h1
          className="text-6xl font-extrabold mb-6 leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Turn <span className="text-yellow-400">Dreams</span> into Reality
        </motion.h1>
        <p className="text-xl mb-8 text-gray-300">
          Support and launch innovative projects with the power of community.
        </p>

        <motion.button
         onClick={() => navigate('/campaigns')}
          className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Explore Campaigns
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;
