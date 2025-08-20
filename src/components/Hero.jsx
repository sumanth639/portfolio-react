import React from 'react';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="text-center md:text-left">
          <div className="w-64 h-64 object-cover md:w-80 md:h-80 mx-auto md:mx-0 rounded-full border-4 border-purple-500 shadow-lg shadow-purple-500/30 overflow-hidden">
            <img
              src="/hero.jpg"
              alt="Mark Garcia"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-lg text-gray-300 mt-6 md:mt-8">
            A passionate Lead Full-Stack Engineer with a proven track record of
            building scalable and innovative solutions.
          </p>
        </div>
        {/* Right Column */}
        <div className="text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            MARK GARCIA
          </h1>
          <h2 className="text-2xl md:text-3xl text-purple-300 mb-6 font-light">
            Lead Full-Stack Engineer
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            9+ years of progressive experience building scalable web & mobile
            solutions. Passionate about merging technical innovation with
            strategic vision.
          </p>
          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
            <a
              href="tel:+639204428788"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:bg-purple-600/40 transition"
            >
              <Phone className="w-5 h-5 text-purple-300" />
              <span>+63 920 442 8788</span>
            </a>
            <a
              href="mailto:markgarcia4652@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:bg-pink-600/40 transition"
            >
              <Mail className="w-5 h-5 text-pink-300" />
              <span>markgarcia4652@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/60 border border-gray-700">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span>Makati, Metro Manila, Philippines</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
