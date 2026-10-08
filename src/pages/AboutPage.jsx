import React from 'react'
import FlowDiagram from '../components/FlowDiagram'; // Adjust the path as necessary


const AboutPage = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center overflow-hidden">
      <FlowDiagram />
      <div className="relative z-10 w-96 p-8 rounded-lg bg-white bg-opacity-70 backdrop-blur-md shadow-lg ml-auto mr-24 transition-all duration-300">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-700 mb-4">We are a team of fitness enthusiasts dedicated to helping you achieve your fitness goals.</p>
        <p className="text-gray-700 mb-4">Our platform offers personalized workout plans, nutrition advice, and a supportive community.</p>
        <p className="text-gray-700">Join us on this journey to a healthier you!</p>
      </div>

    </div>
  )
}

export default AboutPage
