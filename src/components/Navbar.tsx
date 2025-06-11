import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 via-blue-500 to-green-400 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={process.env.PUBLIC_URL + '/1000039446.png'} alt="U&Power logo" className="h-10 w-10 mr-2 rounded-full bg-white object-contain border-2 border-green-500" />
              <span className="text-white text-xl font-bold drop-shadow">U&Power</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link to="/" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/energy-types" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Energy Types
            </Link>
            <Link to="/compare" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Compare
            </Link>
            <Link to="/offers" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Offers
            </Link>
            <Link to="/contact" className="text-white hover:bg-green-700 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-700 focus:outline-none transition-colors"
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-green-600 via-blue-500 to-green-400">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/energy-types" 
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Energy Types
            </Link>
            <Link 
              to="/compare" 
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Compare
            </Link>
            <Link 
              to="/offers" 
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Offers
            </Link>
            <Link 
              to="/contact" 
              className="text-white hover:bg-green-700 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
