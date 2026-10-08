import React from 'react';
import { Shield, Activity, ChevronDown, Award, Users, AlertTriangle } from 'lucide-react';

export default function AboutUs() {
  const [activeSection, setActiveSection] = React.useState(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Shield size={64} className="text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LiftGuardian</h1>
          <p className="text-xl md:text-2xl">AI-Powered Biomechanical Intelligence for Heavy Lifting Optimization and Injury Prevention</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        
        {/* About Project Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">About Our Project</h2>
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <p className="text-lg mb-4">
              LiftGuardian is an innovative AI-based biomechanical monitoring system designed to optimize heavy lifting techniques and prevent injuries. Our system integrates cutting-edge sensor technology with advanced machine learning algorithms to provide real-time feedback on lifting posture, muscle fatigue, and movement patterns.
            </p>
            <p className="text-lg">
              By combining an ESP32 microcontroller with ISM330DHCX IMU and BioAmp Patchy EMG sensors, LiftGuardian creates a comprehensive picture of your lifting biomechanics. Our solution has applications in industrial settings, gyms, rehabilitation centers, and construction sites, making it a versatile tool for anyone engaged in heavy lifting activities.
            </p>
          </div>
        </section>

        {/* Posture Risks Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Risks of Poor Lifting Posture</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div 
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => toggleSection('immediate')}
            >
              <div className="bg-red-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">Immediate Risks</h3>
                <ChevronDown 
                  size={24} 
                  className={`transition-transform ${activeSection === 'immediate' ? 'rotate-180' : ''}`}
                />
              </div>
              <div className={`p-6 transition-all ${activeSection === 'immediate' ? 'max-h-96' : 'max-h-0 overflow-hidden p-0'}`}>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Acute muscle strains and tears</li>
                  <li>Ligament sprains and injuries</li>
                  <li>Herniated discs causing severe pain</li>
                  <li>Joint damage to the knees, hips, and shoulders</li>
                  <li>Decreased lifting capacity and performance</li>
                </ul>
              </div>
            </div>
            
            <div 
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => toggleSection('longterm')}
            >
              <div className="bg-orange-600 text-white p-4 flex justify-between items-center">
                <h3 className="text-xl font-bold">Long-term Consequences</h3>
                <ChevronDown 
                  size={24} 
                  className={`transition-transform ${activeSection === 'longterm' ? 'rotate-180' : ''}`}
                />
              </div>
              <div className={`p-6 transition-all ${activeSection === 'longterm' ? 'max-h-96' : 'max-h-0 overflow-hidden p-0'}`}>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Chronic back pain and reduced mobility</li>
                  <li>Degenerative disc disease</li>
                  <li>Arthritis in weight-bearing joints</li>
                  <li>Reduced work capacity and early retirement</li>
                  <li>Increased healthcare costs and lost productivity</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Benefits of Proper Lifting Technique</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p>Enhanced performance and strength development</p>
              </div>
              <div className="flex items-start">
                <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p>Reduced risk of acute and chronic injuries</p>
              </div>
              <div className="flex items-start">
                <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p>Improved muscle recruitment and balance</p>
              </div>
              <div className="flex items-start">
                <Award className="text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p>Extended career longevity for athletes and workers</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">How LiftGuardian Works</h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-3 divide-x divide-gray-200">
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Data Collection</h3>
                <p>Our wearable sensors capture real-time motion data (IMU) and muscle activity (EMG) during lifting movements.</p>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">AI Analysis</h3>
                <p>Machine learning algorithms (SVM) analyze the combined sensor data to classify movements and detect anomalies.</p>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Real-time Feedback</h3>
                <p>The system provides immediate notifications about posture issues and muscle fatigue to prevent injuries.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-blue-700 mb-2">Hardware Components</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>ESP32 Microcontroller for wireless data transmission</li>
                  <li>ISM330DHCX IMU Sensor for motion tracking</li>
                  <li>BioAmp Patchy EMG Sensor for muscle activity monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-blue-700 mb-2">AI Capabilities</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Movement classification with 94.8% accuracy</li>
                  <li>Fatigue detection through EMG signal analysis</li>
                  <li>Anomaly detection for injury prevention</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Results Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Results</h2>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="bg-blue-50 p-4 rounded-lg text-center mb-4 md:mb-0 md:w-1/4">
                <div className="text-4xl font-bold text-blue-600 mb-2">94.8%</div>
                <p className="text-gray-700">Combined IMU+EMG Classification Accuracy</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-center mb-4 md:mb-0 md:w-1/4">
                <div className="text-4xl font-bold text-blue-600 mb-2">85.6%</div>
                <p className="text-gray-700">EMG-Only Classification Accuracy</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg text-center md:w-1/4">
                <div className="text-4xl font-bold text-blue-600 mb-2">79.2%</div>
                <p className="text-gray-700">IMU-Only Classification Accuracy</p>
              </div>
            </div>
            
            <p className="text-lg mb-4">
              Our research demonstrates that combining IMU and EMG sensor data significantly improves classification accuracy compared to using either sensor type alone. This fusion approach provides a more comprehensive picture of lifting biomechanics and enables more accurate detection of improper techniques.
            </p>
            
            <p className="text-lg">
              The system successfully detects muscle fatigue through decreasing Mean Absolute Value (MAV) and Root Mean Square (RMS) metrics in EMG signals, allowing for timely intervention before injury occurs.
            </p>
          </div>
        </section>
        
        {/* Applications Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Applications</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Industrial Safety</h3>
                <p>Protect warehouse and factory workers from lifting-related injuries by providing real-time feedback on proper technique and early fatigue detection.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Fitness & Training</h3>
                <p>Help athletes and gym-goers optimize their lifting technique, prevent injuries, and track progress over time with detailed biomechanical analysis.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-2"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Rehabilitation</h3>
                <p>Support physical therapists and patients in recovery by monitoring movement quality and ensuring safe exercise progression with objective data.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Our Team</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={36} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Niyati Trivedi</h3>
                <p className="text-gray-600">Department of Computer Engineering</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={36} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Ankit Rajbhar</h3>
                <p className="text-gray-600">Department of Computer Engineering</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={36} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Divy Jani</h3>
                <p className="text-gray-600">Department of Computer Engineering</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">From Gandhinagar Institute Of Technology, Gandhinagar University</p>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-blue-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2025 LiftGuardian. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}