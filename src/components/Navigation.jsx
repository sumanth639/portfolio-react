import React from 'react';

const Navigation = ({ scrollToSection }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/70 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          MG
        </div>
        <div className="hidden md:flex space-x-8">
          {['hero', 'about', 'experience', 'skills', 'projects', 'testimonials', 'contact'].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-300 hover:text-white transition relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all" />
              </button>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;