import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  const loadScript = (source) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePledgeNow = async () => {
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!response) {
      alert("Razorpay SDK failed to load. Check your connection.");
      return;
    }

    const options = {
      key: "rzp_test_VSdp7X3K39GwBK",
      amount: parseInt(project.goal) * 100,
      currency: "INR",
      name: project.title,
      description: "Thank you for supporting our campaign!",
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Bharath Kumar",
        email: "kalagotlabharathkumarreddy@gmail.com",
        contact: "9398348365",
      },
      theme: {
        color: "#4F46E5",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <motion.div
      className="bg-white shadow-xl rounded-2xl p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-50 object-cover rounded-lg mb-5"
      />
      <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
      <p className="text-gray-600 mt-2">{project.description}</p>
      <p className="mt-3 text-lg font-bold text-indigo-600">Goal: ₹{project.goal}</p>
      <button
        className="mt-5 w-full bg-indigo-600 text-white py-3 px-5 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg"
        onClick={handlePledgeNow}
      >
        Pledge Now
      </button>
    </motion.div>
  );
};

export default ProjectCard;
