import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-3xl font-extrabold text-white tracking-wide">
          🌟 CrowdFund
        </Link>
        <div className="space-x-6">
          <Link
            to="/home"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/campaigns"
            className="text-white text-lg font-medium hover:text-yellow-300 transition duration-300"
          >
            Campaigns
          </Link>
        </div>
        <Link
          to="/login"
          className="bg-yellow-400 text-blue-900 font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-500 transition duration-300"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;