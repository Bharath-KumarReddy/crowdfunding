import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-4"
      whileHover={{ scale: 1.05 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-fit object-cover rounded-md mb-4" />
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p>{project.description}</p>
      <p className="mt-2 text-blue-600 font-bold">Goal: {project.goal}</p>
    </motion.div>
  );
};

export default ProjectCard;
