import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CampaignForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', goal: '' });
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => { 
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/api/camp/createcamp', formData);
      alert('Campaign Created! you can see it in HomePage');
      setFormData({ title: '', description: '', goal: '' }); // Reset form
      fetchCampaigns(); // Refresh campaign list
    } catch (error) {
      setError(error.response?.data?.message || 'Error creating campaign');
    } finally {
      setLoading(false);
    }
  };

  // Fetch campaigns from backend
  const fetchCampaigns = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/camp/allcamps');
      setCampaigns(response.data);
    } catch (error) {
      setError(error.response?.data?.message || 'Error fetching campaigns');
    }
  };

  // Fetch campaigns on component mount
  useEffect(() => {
    fetchCampaigns();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8">
      {/* Campaign Form */}
      <form onSubmit={handleSubmit} className=" bg-black shadow-xl p-8 rounded-2xl space-y-6 " style={{backgroundColor:"black"}}>
        <h2 className="text-3xl font-semibold text-center text-white">Create a New Campaign</h2>

        <div className="grid gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter campaign title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500"
              placeholder="Describe your campaign"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-1">Goal Amount ($)</label>
            <input
              type="number"
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter goal amount"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Create Campaign'}
        </button>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </form>

      {/* <div className="mt-10">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Campaigns</h2>

        {campaigns.length === 0 ? (
          <p className="text-center text-gray-600">No campaigns available.</p>
        ) : (
          <div className="grid gap-6">
            {campaigns.map((camp) => (
              <div key={camp._id} className="border rounded-lg p-5 shadow-md bg-white">
                <h3 className="text-xl font-semibold">{camp.title}</h3>
                <p className="text-gray-700">{camp.description}</p>
                <p className="text-green-600 font-semibold mt-2">Goal: ${camp.goal}</p>
              </div>
            ))}
          </div>
        )}
      </div> */}
    </div>
  );
};

export default CampaignForm;
