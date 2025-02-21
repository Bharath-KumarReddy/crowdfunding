import React, { useState } from 'react';

const CampaignForm = () => {
  const [formData, setFormData] = useState({ title: '', description: '', goal: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Campaign Created!');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-xl p-8 rounded-2xl max-w-2xl mx-auto space-y-6">
      <h2 className="text-3xl font-semibold text-center text-gray-800">Create a New Campaign</h2>

      <div className="grid gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter campaign title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe your campaign"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Goal Amount ($)</label>
          <input
            type="number"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter goal amount"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all"
      >
        Create Campaign
      </button>
    </form>
  );
};

export default CampaignForm;
