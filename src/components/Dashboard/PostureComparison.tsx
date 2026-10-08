import React from 'react';
import { CheckCircle, XCircle, Info, Shield, Brain, Heart, ArrowRight } from 'lucide-react';

const PostureComparison: React.FC = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">Good vs. Bad Posture Comparison</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center mb-4">
            <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            <h3 className="text-lg font-semibold text-green-800">Good Posture</h3>
          </div>
          
          <ul className="space-y-3 text-green-800">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-200 text-green-600 mr-2">✓</span>
              <span>Neck aligned with spine, ears over shoulders</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-200 text-green-600 mr-2">✓</span>
              <span>Back straight with natural curves maintained</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-200 text-green-600 mr-2">✓</span>
              <span>Shoulders relaxed and pulled back slightly</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-200 text-green-600 mr-2">✓</span>
              <span>Elbows at approximately 90° angle when typing</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-green-200 text-green-600 mr-2">✓</span>
              <span>Feet flat on the floor or on a footrest</span>
            </li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-green-200">
            <h4 className="text-sm font-medium text-green-800 flex items-center mb-2">
              <Shield className="h-4 w-4 mr-1" /> Benefits
            </h4>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Reduced muscle tension and fatigue</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Decreased strain on joints and ligaments</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Improved breathing and circulation</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Enhanced concentration and productivity</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-red-50 rounded-lg p-6 transition-all duration-300 hover:shadow-md">
          <div className="flex items-center mb-4">
            <XCircle className="h-8 w-8 text-red-500 mr-3" />
            <h3 className="text-lg font-semibold text-red-800">Bad Posture</h3>
          </div>
          
          <ul className="space-y-3 text-red-800">
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-600 mr-2">✗</span>
              <span>Forward head position, chin jutting forward</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-600 mr-2">✗</span>
              <span>Rounded shoulders, slumped position</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-600 mr-2">✗</span>
              <span>Excessive lower back arching or flattening</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-600 mr-2">✗</span>
              <span>Wrists bent during typing or mouse use</span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-red-200 text-red-600 mr-2">✗</span>
              <span>Legs crossed or not supported properly</span>
            </li>
          </ul>
          
          <div className="mt-6 pt-4 border-t border-red-200">
            <h4 className="text-sm font-medium text-red-800 flex items-center mb-2">
              <Info className="h-4 w-4 mr-1" /> Consequences
            </h4>
            <ul className="space-y-2 text-sm text-red-700">
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Neck and back pain, "tech neck" syndrome</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Headaches and increased muscle tension</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Decreased lung capacity and energy levels</span>
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-3 w-3 mr-1 flex-shrink-0" />
                <span>Potential for chronic pain conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 p-5 rounded-lg">
        <h3 className="text-base font-medium text-blue-800 flex items-center mb-3">
          <Brain className="h-5 w-5 mr-2" /> Workplace Ergonomic Tips
        </h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
          <li className="flex items-start text-sm text-blue-700">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2">1</span>
            <span>Position monitor at eye level, arm's length away</span>
          </li>
          <li className="flex items-start text-sm text-blue-700">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2">2</span>
            <span>Use an ergonomic chair with proper lumbar support</span>
          </li>
          <li className="flex items-start text-sm text-blue-700">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2">3</span>
            <span>Take regular breaks (5 min every hour)</span>
          </li>
          <li className="flex items-start text-sm text-blue-700">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2">4</span>
            <span>Use ergonomic keyboard and mouse</span>
          </li>
          <li className="flex items-start text-sm text-blue-700">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2">5</span>
            <span>Keep frequently used items within easy reach</span>
          </li>
          <li className="flex items-start text-sm text-blue-700">
            <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2">6</span>
            <span>Stretch regularly throughout the workday</span>
          </li>
        </ul>
      </div>
      
      <div className="mt-6 text-center">
        <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
          <Heart className="h-4 w-4 mr-2" />
          Get Personalized Posture Recommendations
        </button>
      </div>
    </div>
  );
};

export default PostureComparison;