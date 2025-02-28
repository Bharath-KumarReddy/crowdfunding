import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";


const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number,setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
     
    e.preventDefault();

    try {
      
      const data = await axios.post('http://localhost:5000/api/auth/signup',{
        name:username,
        email,
        password,
        number,
 })

      // console.log(data);
      console.log(data.data);
      toast.success("User created successfully",{
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      
    } catch (error) {
       console.log(error);
       toast.error(`${error.message}`)
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="w-full h-screen lg:w-1/2 flex items-center justify-center bg-gray">
        <div className="w-[70%] h-[70%] bg-gray-800 p-8 rounded-lg shadow-lg text-white">
          <h2 className="text-3xl font-extrabold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="username" className="block text-lg font-medium">
                Username
              </label>
              <input
                id="username"
                type="text"
                className="mt-2 w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="number" className="block text-lg font-medium">
                Number
              </label>
              <input
                id="number"
                type="text"
                className="mt-2 w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-lg font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                className="mt-2 w-full p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full bg-purple-600 text-white py-3 rounded-md shadow-lg transition-all duration-300 ${
                  loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-700"
                }`}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-500 hover:text-purple-400">
              Login
            </Link>
          </p>
        </div>
      </div>

      <div
        className="hidden lg:block w-1/2 h-screen bg-cover"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg)",
          objectFit: "fill",
        }}
      ></div>

      <ToastContainer position="top-right" autoClose={5000} hideProgressBar />
    </div>
  );
};

export default SignupPage;