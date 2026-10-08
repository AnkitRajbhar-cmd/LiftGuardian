import React from 'react';
import { usePosture } from '../../../context/PostureContext';
import { CheckCircle, XCircle, AlertTriangle, Clock, TrendingUp, Award } from 'lucide-react';

const PostureStats: React.FC = () => {
  const { data } = usePosture();
  
  // Calculate stats
  const goodPostureCount = data.filter(item => item.postureType === 'Good').length;
  const badPostureCount = data.filter(item => item.postureType === 'Bad').length;
  const riskyPostureCount = data.filter(item => item.postureType === 'Risky').length;
  
  const totalCount = data.length;
  const goodPosturePercentage = Math.round((goodPostureCount / totalCount) * 100);
  
  // Calculate streak and session time (mock data)
  const avgSessionMinutes = 48; // Example value
  const daysStreak = 7; // Example value
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Posture Statistics</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Posture Distribution</h3>
          <div className="mt-2 flex items-center">
            <div className="flex-1">
              <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-green-500 rounded-full transition-all duration-500" 
                  style={{ width: `${goodPosturePercentage}%` }}
                ></div>
              </div>
              <div className="mt-2 flex justify-between text-xs text-gray-500">
                <span>0%</span>
                <span>50%</span>
                <span>100%</span>
              </div>
            </div>
            <div className="ml-4">
              <span className="text-2xl font-bold text-gray-900">{goodPosturePercentage}%</span>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-3 gap-3 text-center">
            <div className="flex flex-col items-center bg-green-50 p-3 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-500 mb-1" />
              <span className="text-xs text-gray-500">Good</span>
              <span className="text-sm font-semibold text-gray-800">{goodPostureCount}</span>
            </div>
            <div className="flex flex-col items-center bg-red-50 p-3 rounded-lg">
              <XCircle className="h-5 w-5 text-red-500 mb-1" />
              <span className="text-xs text-gray-500">Bad</span>
              <span className="text-sm font-semibold text-gray-800">{badPostureCount}</span>
            </div>
            <div className="flex flex-col items-center bg-yellow-50 p-3 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-yellow-500 mb-1" />
              <span className="text-xs text-gray-500">Risky</span>
              <span className="text-sm font-semibold text-gray-800">{riskyPostureCount}</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center">
              <Clock className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Avg. Session</h3>
            </div>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{avgSessionMinutes} min</p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-lg">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-indigo-500 mr-2" />
              <h3 className="text-sm font-medium text-gray-900">Current Streak</h3>
            </div>
            <p className="mt-1 text-2xl font-semibold text-gray-900">{daysStreak} days</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
          <div className="flex items-center">
            <Award className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="text-sm font-medium text-gray-900">Achievement Status</h3>
          </div>
          <div className="mt-2">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" style={{ width: '65%' }}></div>
            </div>
            <p className="mt-1 text-sm text-gray-600">65% to "Posture Pro" badge</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostureStats;