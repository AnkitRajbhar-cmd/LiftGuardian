import { Link } from 'react-router-dom';
import { Dumbbell, User } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-blue-900" />
            <span className="text-xl font-bold text-blue-900">LiftGuardian</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-900">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-900">About Us</Link>
             <Link to="/dashboard" className="text-gray-700 hover:text-blue-900">Dashboard</Link>
            <Link to="/login" className="flex items-center text-gray-700 hover:text-blue-900">
              <User className="h-5 w-5 mr-1" />
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;