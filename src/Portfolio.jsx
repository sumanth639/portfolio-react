import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Code,
  Users,
  Zap,
  Award,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const experiences = [
    {
      title: 'Senior Full-Stack Engineer',
      company: 'PuzzleHR',
      duration: '09/2022 - 08/2025',
      location: 'Quezon City, Philippines',
      highlights: [
        'Engineered large-scale enterprise applications using Python, Node.js, and React',
        'Introduced GraphQL APIs reducing client-server round trips by 40%',
        'Implemented CI/CD pipelines cutting deployment times from hours to minutes',
      ],
    },
    {
      title: 'Lead Full-Stack Engineer',
      company: 'Yondu, Inc',
      duration: '08/2019 - 08/2022',
      location: 'Manila',
      highlights: [
        'Led team of 8 engineers, increased productivity by 25%',
        'Designed microservices architecture using Node.js, GraphQL, and AWS Lambda',
        'Mentored junior developers through code reviews and pair programming',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'Orange and Bronze Software Labs',
      duration: '06/2017 - 06/2019',
      location: 'Manila',
      highlights: [
        'Built web applications using JavaScript, PHP, and MySQL',
        'Developed reusable UI components for scalable front-end development',
        'Migrated legacy applications to modern stacks',
      ],
    },
  ];

  const skills = [
    { name: 'React', level: 95, icon: '⚛️' },
    { name: 'Node.js', level: 92, icon: '🟢' },
    { name: 'Python', level: 88, icon: '🐍' },
    { name: 'TypeScript', level: 90, icon: '📘' },
    { name: 'GraphQL', level: 85, icon: '🔗' },
    { name: 'AWS', level: 88, icon: '☁️' },
  ];

  const stats = [
    { number: '9+', label: 'Years Experience', icon: Code },
    { number: '8', label: 'Team Size Led', icon: Users },
    { number: '40%', label: 'Performance Boost', icon: Zap },
    { number: '25%', label: 'Productivity Increase', icon: Award },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-lg border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              MG
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Experience', 'Skills', 'Contact'].map(
                (item) => (
                  <button
                    key={item}
                    className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                    onClick={() => setActiveSection(item.toLowerCase())}
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300" />
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-pulse">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-4xl font-bold mb-6">
              MG
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
            MARK GARCIA
          </h1>

          <h2 className="text-2xl md:text-3xl text-purple-300 mb-8 font-light">
            Lead Full-Stack Engineer
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            9+ years of progressive experience designing, developing, and
            delivering scalable web and mobile solutions. Passionate about
            combining technical innovation with strategic vision.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <a
              href="tel:+639204428788"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>+63 920 442 8788</span>
            </a>
            <a
              href="mailto:markgarcia4652@gmail.com"
              className="flex items-center space-x-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>markgarcia4652@gmail.com</span>
            </a>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin className="w-5 h-5" />
              <span>Makati, Metro Manila, Philippines</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-purple-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-colors">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {exp.title}
                      </h3>
                      <div className="text-purple-400 font-medium text-lg mb-2">
                        {exp.company}
                      </div>
                      <div className="text-gray-400">{exp.location}</div>
                    </div>
                    <div className="text-gray-300 font-mono text-sm bg-gray-700/50 px-4 py-2 rounded-full mt-4 md:mt-0">
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start space-x-3 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-xl font-semibold text-white">
                      {skill.name}
                    </span>
                  </div>

                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Bachelor's Degree in Computer Science
                </h3>
                <div className="text-purple-400 font-medium text-lg mb-2">
                  University of Santo Tomas
                </div>
                <div className="text-gray-400 font-mono">08/2013 - 07/2017</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let's discuss how we can
            create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:markgarcia4652@gmail.com"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Email</span>
            </a>

            <a
              href="tel:+639204428788"
              className="group relative px-8 py-4 bg-gray-800 border border-gray-700 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-purple-500 flex items-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Portfolio;
