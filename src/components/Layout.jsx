import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import QuoteBanner from './QuoteBanner';
import Footer from './Footer';
import HomePage from '../pages/HomePage';
// import Dashboard from '../components/Layout1/Dashboard'; // Import the Dashboard component
// import { PostureProvider } from './context/PostureContext'; // Import the context provider
// import AboutPage from '../pages/AboutPage';
import Aboutus from '../pages/Aboutus'; // Import the About Page

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <QuoteBanner />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutus />} />
          {/* <Route path="/about" element={ <PostureProvider>
      <Dashboard />
    </PostureProvider>}/> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
