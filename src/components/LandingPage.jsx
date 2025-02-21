import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-screen bg-gray-900 flex items-center justify-center text-white px-4">
      <div className="text-center max-w-2xl space-y-8">
        <motion.h1
          className="text-6xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empower Ideas with <span className="text-yellow-300">Crowdfunding</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Launch your project, inspire backers, and turn dreams into reality. Join a community passionate about innovation and progress.
        </motion.p>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.button
            onClick={() => navigate("/home")}
            className="bg-yellow-400 text-blue-900 font-semibold px-6 py-4 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Explore Campaigns
            <i className="ri-arrow-right-line text-xl ml-3 text-black"></i>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;