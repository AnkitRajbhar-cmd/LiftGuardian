import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  
  const onSubmit = async (data) => {
    try {
      const formattedData = {
        ...data,
        height: { value: data.height, unit: heightUnit },
        weight: { value: data.weight, unit: weightUnit }
      };

      const response = await axios.post('http://localhost:6000/api/auth/register', formattedData, {
        withCredentials: true
      });
      console.log('Registration successful:', response.data);
      // Redirect or update UI based on registration success
    } catch (error) {
      console.error('Registration failed:', error.response?.data || error.message);
      // Show error message to the user
    }
  };

  // For password confirmation
  const password = watch("password", "");

  return (
    <div className="relative w-full h-screen flex items-start justify-start overflow-hidden">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-full h-full object-cover z-0"
      >
        <source src="./public/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Registration Form - Positioned to the left and top */}
      <div className="relative z-10 w-96 px-10 py-6 rounded-lg bg-black bg-opacity-30 backdrop-blur-lg shadow-xl border-2 border-blue-400 transition-all duration-300 ml-16 mt-16">
        <h2 className="text-xl font-bold text-center text-white mb-6 font-sans">Create an Account</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-sans">
          {/* Full Name */}
          <div className="mb-1">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent text-white placeholder-blue-200 italic font-light"
              {...register("fullName", { required: "Required" })}
            />
            {errors.fullName && <span className="text-xs text-red-400">{errors.fullName.message}</span>}
          </div>
          
          {/* Email */}
          <div className="mb-1">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent text-white placeholder-blue-200 italic font-light"
              {...register("email", {
                required: "Required",
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Invalid email" }
              })}
            />
            {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
          </div>
          
          {/* Birth Date */}
          <div className="mb-1">
            <div className="grid grid-cols-3 gap-1">
              <select
                className="px-1 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent text-white italic font-light"
                {...register("birthDay", { required: true })}
              >
                <option value="" className="bg-gray-800 text-white">Day</option>
                {[...Array(31)].map((_, i) => (
                  <option key={i+1} value={i+1} className="bg-gray-800 text-white">{i+1}</option>
                ))}
              </select>
              <select
                className="px-1 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent text-white italic font-light"
                {...register("birthMonth", { required: true })}
              >
                <option value="" className="bg-gray-800 text-white">Month</option>
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                  .map((month, i) => (
                    <option key={i} value={i+1} className="bg-gray-800 text-white">{month}</option>
                  ))}
              </select>
              <select
                className="px-1 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent text-white italic font-light"
                {...register("birthYear", { required: true })}
              >
                <option value="" className="bg-gray-800 text-white">Year</option>
                {[...Array(100)].map((_, i) => {
                  const year = new Date().getFullYear() - i;
                  return <option key={year} value={year} className="bg-gray-800 text-white">{year}</option>;
                })}
              </select>
            </div>
            {(errors.birthDay || errors.birthMonth || errors.birthYear) && 
              <span className="text-xs text-red-400">Birth date required</span>}
          </div>
          
          {/* Height and Weight in same row */}
          <div className="flex gap-2">
            {/* Height Input */}
            <div className="w-1/2 mb-1">
              <div className="flex">
                <input
                  type="number"
                  placeholder="Height"
                  className="w-2/3 px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent text-white placeholder-blue-200 italic font-light"
                  {...register("height", {
                    required: "Required",
                    min: { value: heightUnit === 'cm' ? 50 : 20, message: "Too low" },
                    max: { value: heightUnit === 'cm' ? 250 : 98, message: "Too high" }
                  })}
                />
                <select
                  className="w-1/3 px-1 py-1 text-sm border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent text-white italic font-light"
                  value={heightUnit}
                  onChange={(e) => setHeightUnit(e.target.value)}
                >
                  <option value="cm" className="bg-gray-800 text-white">cm</option>
                  <option value="inches" className="bg-gray-800 text-white">in</option>
                </select>
              </div>
              {errors.height && <span className="text-xs text-red-400">{errors.height.message}</span>}
            </div>

            {/* Weight Input */}
            <div className="w-1/2 mb-1">
              <div className="flex">
                <input
                  type="number"
                  placeholder="Weight"
                  className="w-2/3 px-2 py-1 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent text-white placeholder-blue-200 italic font-light"
                  {...register("weight", {
                    required: "Required",
                    min: { value: weightUnit === 'kg' ? 20 : 44, message: "Too low" },
                    max: { value: weightUnit === 'kg' ? 300 : 660, message: "Too high" }
                  })}
                />
                <select
                  className="w-1/3 px-1 py-1 text-sm border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-blue-500 bg-transparent text-white italic font-light"
                  value={weightUnit}
                  onChange={(e) => setWeightUnit(e.target.value)}
                >
                  <option value="kg" className="bg-gray-800 text-white">kg</option>
                  <option value="lbs" className="bg-gray-800 text-white">lbs</option>
                </select>
              </div>
              {errors.weight && <span className="text-xs text-red-400">{errors.weight.message}</span>}
            </div>
          </div>
          
          {/* Password */}
          <div className="mb-1">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 bg-transparent text-white placeholder-blue-200 italic font-light"
              {...register("password", {
                required: "Required",
                minLength: { value: 8, message: "Min 8 chars" },
                pattern: {
                  value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                  message: "Need uppercase, lowercase & number"
                }
              })}
            />
            {errors.password && <span className="text-xs text-red-400">{errors.password.message}</span>}
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-transparent hover:text-white hover:border-2 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition mt-4 font-medium"
          >
            Register
          </button>
        </form>
        
        <p className="mt-4 text-center text-sm text-blue-200 font-light">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 font-medium hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;