import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockData } from '../data/mockData';
import { PostureData, PostureType } from '../types';

interface PostureContextType {
  data: PostureData[];
  currentPosture: PostureType;
  filterByTimeRange: (start: Date, end: Date) => void;
  filterByPostureType: (type: PostureType | 'All') => void;
  filteredData: PostureData[];
}

// Create context
const PostureContext = createContext<PostureContextType | undefined>(undefined);

// Create provider
export const PostureProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<PostureData[]>(mockData);
  const [filteredData, setFilteredData] = useState<PostureData[]>(mockData);
  const [currentPosture, setCurrentPosture] = useState<PostureType>('Good');
  
  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly change current posture
      const postures: PostureType[] = ['Good', 'Bad', 'Risky'];
      const randomPosture = postures[Math.floor(Math.random() * postures.length)];
      setCurrentPosture(randomPosture);
    }, 5000);
    
    return () => clearInterval(interval as NodeJS.Timeout);
  }, []);
  
  // Filter functions
  const filterByTimeRange = (start: Date, end: Date) => {
    const filtered = data.filter(item => 
      item.timestamp >= start && item.timestamp <= end
    );
    setFilteredData(filtered);
  };
  
  const filterByPostureType = (type: PostureType | 'All') => {
    if (type === 'All') {
      setFilteredData(data);
      return;
    }
    
    const filtered = data.filter(item => item.postureType === type);
    setFilteredData(filtered);
  };
  
  return (
    <PostureContext.Provider value={{
      data,
      currentPosture,
      filterByTimeRange,
      filterByPostureType,
      filteredData,
    }}>
      {children}
    </PostureContext.Provider>
  );
};

// Create hook for using context
export const usePosture = () => {
  const context = useContext(PostureContext);
  if (context === undefined) {
    throw new Error('usePosture must be used within a PostureProvider');
  }
  return context;
};