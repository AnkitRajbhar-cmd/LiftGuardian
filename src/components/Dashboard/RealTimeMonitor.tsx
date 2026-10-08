import React, { useState, useEffect } from 'react';
import { usePosture } from '../../../context/PostureContext';
import { AlertTriangle, CheckCircle, XCircle, Activity } from 'lucide-react';

const RealTimeMonitor: React.FC = () => {
  const { currentPosture } = usePosture();
  const [sensorData, setSensorData] = useState({
    accelerometer: { x: 0, y: 0, z: 0 },
    gyroscope: { x: 0, y: 0, z: 0 },
  });
  
  // Simulate sensor data updates
  useEffect(() => {
    const interval = window.setInterval(() => {
      setSensorData({
        accelerometer: {
          x: parseFloat((Math.random() * 2 - 1).toFixed(2)),
          y: parseFloat((Math.random() * 2 - 1).toFixed(2)),
          z: parseFloat((Math.random() * 2 - 1).toFixed(2)),
        },
        gyroscope: {
          x: parseFloat((Math.random() * 180 - 90).toFixed(1)),
          y: parseFloat((Math.random() * 180 - 90).toFixed(1)),
          z: parseFloat((Math.random() * 180 - 90).toFixed(1)),
        },
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Determine UI elements based on posture
  const getPostureInfo = () => {
    switch (currentPosture) {
      case 'Good':
        return {
          icon: <CheckCircle className="h-16 w-16 text-green-500" />,
          label: 'Good Posture',
          description: 'Your current posture is well aligned. Keep it up!',
          color: 'bg-green-100 border-green-500',
          textColor: 'text-green-800',
        };
      case 'Bad':
        return {
          icon: <XCircle className="h-16 w-16 text-red-500" />,
          label: 'Bad Posture',
          description: 'Your posture needs correction. Try adjusting your back and neck.',
          color: 'bg-red-100 border-red-500',
          textColor: 'text-red-800',
        };
      case 'Risky':
        return {
          icon: <AlertTriangle className="h-16 w-16 text-yellow-500" />,
          label: 'Risky Posture',
          description: 'Your posture is concerning and may lead to strain if maintained.',
          color: 'bg-yellow-100 border-yellow-500',
          textColor: 'text-yellow-800',
        };
      default:
        return {
          icon: <CheckCircle className="h-16 w-16 text-green-500" />,
          label: 'Good Posture',
          description: 'Your current posture is well aligned. Keep it up!',
          color: 'bg-green-100 border-green-500',
          textColor: 'text-green-800',
        };
    }
  };
  
  const { icon, label, description, color, textColor } = getPostureInfo();
  
  return (
    <div className="bg-white shadow rounded-lg p-6 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Real-Time Posture Monitor</h2>
        <div className="flex items-center">
          <Activity className="h-5 w-5 text-blue-500 mr-2 animate-pulse" />
          <span className="text-sm text-blue-600">Live</span>
        </div>
      </div>
      
      <div className={`border ${color} rounded-lg p-6 flex items-center transition-all duration-300`}>
        <div className="mr-6">
          {icon}
        </div>
        <div>
          <h3 className={`text-2xl font-bold ${textColor}`}>{label}</h3>
          <p className={`mt-1 ${textColor}`}>{description}</p>
        </div>
      </div>
      
      <div className="mt-6">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider">Live Sensor Readings</h4>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h5 className="text-xs font-medium text-gray-500">Accelerometer</h5>
            <div className="mt-2 grid grid-cols-3">
              <div>
                <span className="text-xs text-gray-500">X</span>
                <p className="text-sm font-medium">{sensorData.accelerometer.x}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Y</span>
                <p className="text-sm font-medium">{sensorData.accelerometer.y}</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Z</span>
                <p className="text-sm font-medium">{sensorData.accelerometer.z}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-md">
            <h5 className="text-xs font-medium text-gray-500">Gyroscope</h5>
            <div className="mt-2 grid grid-cols-3">
              <div>
                <span className="text-xs text-gray-500">X</span>
                <p className="text-sm font-medium">{sensorData.gyroscope.x}°</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Y</span>
                <p className="text-sm font-medium">{sensorData.gyroscope.y}°</p>
              </div>
              <div>
                <span className="text-xs text-gray-500">Z</span>
                <p className="text-sm font-medium">{sensorData.gyroscope.z}°</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Monitoring actively</span>
          <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Calibrate Sensors
          </button>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMonitor;