import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HeroSection from '../../../frontend/src/components/HeroSection';
import ProjectCard from '../../../frontend/src/components/ProjectCard';
import Navbar from '../../../frontend/src/components/Navbar';

const Home = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const images = [
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&auto=format&fit=crop&q=60',
    'https://plus.unsplash.com/premium_photo-1661368421663-13b2d8115241?w=500&auto=format&fit=crop&q=60',
  ];

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/camp/allcamps');
        const fetchedCampaigns = response.data.map((campaign, index) => ({
          ...campaign,
          image: campaign.image || images[index % images.length], 
        }));
        setCampaigns(fetchedCampaigns);
      } catch (err) {
        setError('Error fetching campaigns. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />

      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-6">Featured Campaigns</h2>

        {loading && <p className="text-center text-gray-500">Loading campaigns...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {campaigns.length > 0 ? (
            campaigns.map((campaign) => (
              <ProjectCard key={campaign._id} project={campaign} />
            ))
          ) : (
            !loading && <p className="text-center text-gray-600">No campaigns available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
