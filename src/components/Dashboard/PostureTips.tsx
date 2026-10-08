import React, { useState } from 'react';
import { BookOpen, ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface TipCategory {
  title: string;
  icon: React.ReactNode;
  tips: string[];
}

const PostureTips: React.FC = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(0);
  
  const categories: TipCategory[] = [
    {
      title: "Desk Setup Tips",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="20" height="12" rx="2" stroke="currentColor" strokeWidth="2"/>
        <rect x="10" y="10" width="4" height="4" fill="currentColor"/>
      </svg>,
      tips: [
        "Position your monitor at eye level to reduce neck strain",
        "Keep your keyboard at elbow height for neutral wrist position",
        "Position your chair so your feet rest flat on the floor",
        "Use an ergonomic chair with lumbar support",
        "Arrange frequently used items within arm's reach"
      ]
    },
    {
      title: "Sitting Posture",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8v10" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 14h10" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 22l2-4 2 4" stroke="currentColor" strokeWidth="2"/>
      </svg>,
      tips: [
        "Keep your back straight against the chair",
        "Position your hips as far back in the chair as possible",
        "Maintain a small gap between the back of your knees and the chair",
        "Keep your shoulders relaxed, not hunched or tense",
        "Avoid crossing your legs for extended periods"
      ]
    },
    {
      title: "Movement Breaks",
      icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2"/>
      </svg>,
      tips: [
        "Take a 5-minute break every hour to stand and stretch",
        "Try the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds",
        "Perform desk stretches throughout the day",
        "Consider a sit-stand desk to alternate positions",
        "Walk around during phone calls when possible"
      ]
    }
  ];
  
  const toggleCategory = (index: number) => {
    if (expandedCategory === index) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(index);
    }
  };
  
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center mb-4">
        <BookOpen className="h-6 w-6 text-indigo-500 mr-2" />
        <h2 className="text-xl font-semibold text-gray-800">Posture Improvement Tips</h2>
      </div>
      
      <div className="space-y-4">
        {categories.map((category, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button 
              className={`w-full flex items-center justify-between p-4 text-left ${
                expandedCategory === index ? 'bg-indigo-50' : 'bg-white'
              }`}
              onClick={() => toggleCategory(index)}
            >
              <div className="flex items-center">
                <span className="text-indigo-500 mr-3">{category.icon}</span>
                <span className="font-medium text-gray-800">{category.title}</span>
              </div>
              {expandedCategory === index ? 
                <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                <ChevronDown className="h-5 w-5 text-gray-500" />
              }
            </button>
            
            {expandedCategory === index && (
              <div className="p-4 bg-indigo-50 border-t">
                <ul className="space-y-3">
                  {category.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="flex items-start text-sm">
                      <ArrowRight className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-indigo-100 flex justify-between items-center">
                  <span className="text-xs text-indigo-600">
                    Follow these tips to improve your posture
                  </span>
                  <button className="inline-flex items-center text-xs text-indigo-600 font-medium">
                    Mark as read <CheckCircle className="h-3 w-3 ml-1" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="w-full text-center text-indigo-600 text-sm font-medium hover:text-indigo-700">
          View All Posture Resources
        </button>
      </div>
    </div>
  );
};

export default PostureTips;