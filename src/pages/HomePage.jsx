import { ArrowRight, Activity, Bell, FileText, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI-Powered Biomechanical Intelligence for Heavy Lifting Optimization
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            Prevent injuries and optimize your lifting technique with real-time AI-powered posture monitoring.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center px-6 py-3 bg-green-400 rounded-md text-white font-semibold hover:bg-green-500 transition-colors"
          >
            Read More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Activity,
                title: 'Posture Detection',
                description: 'Real-time AI-powered posture analysis for optimal form',
              },
              {
                icon: Bell,
                title: 'Real-time Alerts',
                description: 'Instant feedback when posture needs correction',
              },
              {
                icon: FileText,
                title: 'Smart Reports',
                description: 'Detailed analysis and progress tracking over time',
              },
              {
                icon: Cpu,
                title: 'Wearable Sensors',
                description: 'Comfortable, precise motion tracking technology',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <item.icon className="h-12 w-12 mx-auto mb-4 text-blue-900" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Advanced AI Technology</h3>
                <p className="text-gray-600 mb-4">
                  Our state-of-the-art machine learning algorithms provide accurate, real-time posture analysis and personalized feedback.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2" />
                    <span>SVM-based classification for precise detection</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2" />
                    <span>Continuous learning and adaptation</span>
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-green-400 mr-2" />
                    <span>Industry-specific optimization</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="AI Technology"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;