import { Facebook, Instagram, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>info@liftguardian.com</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md text-gray-900 flex-1"
              />
              <button className="bg-green-400 px-4 py-2 rounded-r-md hover:bg-green-500">
                Subscribe
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-400">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-green-400">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 flex justify-between">
          <div className="text-sm">
            © 2024 LiftGuardian. All rights reserved.
          </div>
          <div className="space-x-4 text-sm">
            <a href="#" className="hover:text-green-400">Terms</a>
            <a href="#" className="hover:text-green-400">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;