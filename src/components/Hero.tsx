import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-[#00f0ff] via-[#005eff] to-[#00c3ff] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bloc principal avec logo, texte et bouton */}
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start mb-8 md:mb-0">
            <img
              src={process.env.PUBLIC_URL + '/1000039446.png'}
              alt="U&Power logo"
              className="w-64 h-64 md:w-96 md:h-96 -ml-6 md:-ml-16 mr-0 md:mr-8 mb-6 md:mb-0 rounded-full bg-white object-contain border-4 border-green-500 shadow-lg"
            />
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center md:text-left">
                U&Power: Your energy, our green commitment
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-200 text-center md:text-left">
                We offer reliable energy solutions with transparent rates
                and exceptional customer service for over 25 years.
              </p>
              <div className="flex justify-center md:justify-start w-full">
                <button
                  className="mt-2 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg bg-gradient-to-r from-yellow-400 via-green-400 to-green-600 text-white hover:from-yellow-500 hover:to-green-700 transition-colors"
                  type="button"
                >
                  Leave the past, join us and enjoy
                </button>
              </div>
              <div className="flex justify-center md:justify-start w-full">
                <button
                  className="mt-4 px-6 py-3 rounded-full text-base font-medium shadow bg-white text-green-700 border border-green-400 hover:bg-green-50 transition-colors flex items-center gap-2"
                  type="button"
                  onClick={() => {
                    const section = document.getElementById('ask-green-section');
                    if (section) {
                      section.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  Scroll to Ask us anything green
                </button>
              </div>
            </div>
          </div>
          {/* Carrés d'offres à droite */}
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="bg-white rounded-xl shadow-lg p-6 w-48 flex flex-col items-center border-2 border-green-400 text-center">
                <span className="text-xl font-bold text-green-700 mb-2 text-center">Offer Green</span>
                <span className="text-2xl font-extrabold text-green-600 text-center">-10%</span>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 w-48 flex flex-col items-center border-2 border-green-500 text-center">
                <span className="text-xl font-bold text-green-800 mb-2 text-center">Super Green</span>
                <span className="text-2xl font-extrabold text-green-700 text-center">-20%</span>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 w-48 flex flex-col items-center border-2 border-green-600 text-center">
                <span className="text-xl font-bold text-green-900 mb-2 text-center">The Greener</span>
                <span className="text-2xl font-extrabold text-green-800 text-center">-25%</span>
                <span className="text-4xl mt-2 text-center" role="img" aria-label="cookie">🍪</span>
                <span className="text-sm text-gray-600 mt-1 text-center">A little treat for you!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
