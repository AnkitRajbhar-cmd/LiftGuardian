import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import RealTimeMonitor from '../Dashboard/RealTimeMonitor';
import PostureStats from '../Dashboard/PostureStats';
import PostureChart from '../Dashboard/PostureChart';
import PostureComparison from '../Dashboard/PostureComparison';
import PostureTips from '../Dashboard/PostureTips';
import NotificationCenter from '../Dashboard/NotificationCenter';
import { Bell, Settings, HelpCircle, Activity, Menu, X } from 'lucide-react';

const Dashboard: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('http://localhost:6000/api/users/profile', {
          withCredentials: true
        });
        setUserProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch user profile:');
      }
    };

    fetchUserProfile();
  }, []);

  const updateWorkspace = async (newWorkspace: string) => {
    try {
      const response = await axios.put('http://localhost:6000/api/users/workspace', { workspace: newWorkspace }, {
        withCredentials: true
      });
      console.log('Workspace updated:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Failed to update workspace:', error.response?.data || error.message);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  const startSession = async () => {
    try {
      const response = await axios.post('http://localhost:6000/api/sessions/start', {}, {
        withCredentials: true
      });
      console.log('Session started:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Failed to start session:', error.response?.data || error.message);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  const endSession = async (sessionId: string, sessionData: Record<string, any>) => {
    try {
      const response = await axios.put(`http://localhost:6000/api/sessions/${sessionId}/end`, sessionData, {
        withCredentials: true
      });
      console.log('Session ended:', response.data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error('Failed to end session:', error.response?.data || error.message);
      } else {
        console.error('An unexpected error occurred:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Mobile menu */}
      <div className="md:hidden">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed bottom-4 right-4 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg w-4/5 p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Menu</h3>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
              <nav className="space-y-2">
                <button 
                  onClick={() => {
                    setActiveTab('dashboard');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'dashboard' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Activity className="h-5 w-5 mr-2" />
                  Dashboard
                </button>
                <button 
                  onClick={() => {
                    setActiveTab('tips');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'tips' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <HelpCircle className="h-5 w-5 mr-2" />
                  Posture Tips
                </button>
                <button 
                  onClick={() => {
                    setActiveTab('notifications');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'notifications' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Bell className="h-5 w-5 mr-2" />
                  Notifications
                </button>
                <button 
                  onClick={() => {
                    setActiveTab('settings');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    activeTab === 'settings' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Settings className="h-5 w-5 mr-2" />
                  Settings
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Posture Dashboard</h1>
            <p className="mt-1 text-sm text-gray-500">Monitor and improve your posture with real-time feedback</p>
          </div>
          
          <div className="mt-4 md:mt-0 hidden md:flex space-x-2">
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <Bell className="h-4 w-4 mr-1.5" />
              Alerts
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <Settings className="h-4 w-4 mr-1.5" />
              Settings
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors">
              <HelpCircle className="h-4 w-4 mr-1.5" />
              Help
            </button>
          </div>
        </div>
        
        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <RealTimeMonitor />
              </div>
              <div>
                <PostureStats />
              </div>
            </div>
            
            <div className="mt-6">
              <PostureChart />
            </div>
            
            <div className="mt-6">
              <PostureComparison />
            </div>
          </>
        )}
        
        {/* Tips Content */}
        {activeTab === 'tips' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PostureTips />
            </div>
            <div>
              <RealTimeMonitor />
            </div>
          </div>
        )}
        
        {/* Notifications Content */}
        {activeTab === 'notifications' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <NotificationCenter />
            </div>
            <div>
              <PostureStats />
            </div>
          </div>
        )}
        
        {/* Settings Content */}
        {activeTab === 'settings' && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Settings</h2>
            <p className="text-gray-600">Settings panel will be available in the next update.</p>
          </div>
        )}
        
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>PostureGuard v1.0 - Your Ergonomic Health Companion</p>
          <p className="mt-1">© 2025 PostureGuard. All rights reserved.</p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;