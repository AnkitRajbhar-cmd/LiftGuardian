import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FunctionComponent = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Activity className="h-8 w-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">PostureGuard</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-900 border-b-2 border-blue-500 px-3 py-2 text-sm font-medium">Dashboard</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">History</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Settings</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium">Profile</a>
          </nav>
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Connect Device
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;