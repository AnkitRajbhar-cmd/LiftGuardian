import { PostureData, PostureType } from '../types';

// Generate random sensor data
const generateSensorData = () => ({
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

// Generate mock data for the past 7 days
export const mockData: PostureData[] = Array.from({ length: 100 }, (_, i) => {
  const date = new Date();
  date.setHours(date.getHours() - Math.floor(Math.random() * 168)); // Random time in the last 7 days
  
  // Randomly assign posture type with weighted distribution
  const rand = Math.random();
  let postureType: PostureType;
  if (rand < 0.6) {
    postureType = 'Good';
  } else if (rand < 0.9) {
    postureType = 'Bad';
  } else {
    postureType = 'Risky';
  }
  
  return {
    timestamp: date,
    postureType,
    confidence: parseFloat((Math.random() * 0.3 + 0.7).toFixed(2)), // 70-100% confidence
    sensorData: generateSensorData(),
  };
}).sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());