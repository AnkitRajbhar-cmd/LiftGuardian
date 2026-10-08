import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import Layout from './components/Layout'; // This is the new layout wrapper
// import HomePage from './pages/HomePage';
// import NotificationCenter from './components/Dashboard/NotificationCenter';
// import PostureChart from './components/Dashboard/PostureChart';
// import PostureComparison from './components/Dashboard/PostureComparison';
// import PostureStats from './components/Dashboard/PostureStats';
// import PostureTips from './components/Dashboard/PostureTips';
// import RealTimeMonitor from './components/Dashboard/RealTimeMonitor';
import Dashboard from './components/Layout1/Dashboard'; // Import the Dashboard component
import { PostureProvider } from '../context/PostureContext';

function App() {
  return (
    <Router>
      <PostureProvider>
        <Routes>
          {/* Standalone Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* All other routes go inside the layout */}
          <Route path="/*" element={<Layout />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </PostureProvider>
    </Router>
  );
}

export default App;
