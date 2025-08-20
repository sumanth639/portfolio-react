import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 py-12 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
          MARK GARCIA
        </div>
        <p className="text-gray-400 mb-6">
          Lead Full-Stack Engineer • Manila, Philippines
        </p>
        <div className="flex justify-center space-x-6">
          <div className="text-gray-400">English Proficient</div>
          <div className="text-gray-600">|</div>
          <div className="text-gray-400">Available for Remote Work</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;