import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import axios from 'axios';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = async (data) => {
      try {
        const response = await axios.post('http://localhost:6000/api/auth/login', data, {
          withCredentials: true
        });
        console.log('Login successful:', response.data);
        // Redirect or update UI based on login success
      } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
        // Show error message to the user
      }
    };
  
    return (
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute w-full h-full object-cover z-0"
        >
          <source src="/Liftbox.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Login Form */}
        <div className="relative z-10 w-96 p-8 rounded-lg bg-white bg-opacity-70 backdrop-blur-md shadow-lg ml-auto mr-24 transition-all duration-300">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <span className="text-sm text-red-600">{errors.email.message}</span>}
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })}
              />
              {errors.password && <span className="text-sm text-red-600">{errors.password.message}</span>}
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
            >
              Login
            </button>
          </form>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-600 font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
  };
  
  export default Login;
