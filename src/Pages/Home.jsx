import React from 'react';
import HeroSection from '../../../frontend/src/components/HeroSection';
import ProjectCard from '../../../frontend/src/components/ProjectCard';
import Navbar from '../../../frontend/src/components/Navbar';

const Home = () => {
  const projects = [
    { id: 1, title: 'Innovative App', description: 'A cutting-edge mobile app.', goal: '$10,000', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW50fGVufDB8fDB8fHww' },
    { id: 2, title: 'Eco-Friendly Product', description: 'Sustainable and innovative.', goal: '$15,000', image: 'https://plus.unsplash.com/premium_photo-1661368421663-13b2d8115241?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvJTIwZnJpZW5kbHl8ZW58MHx8MHx8fDA%3D' },
  ];

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Featured Campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
