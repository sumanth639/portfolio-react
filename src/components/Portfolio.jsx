import React, { useState, useEffect } from 'react';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
  FaAws,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiPython,
  SiGraphql,
} from 'react-icons/si';
import {
  Mail,
  Phone,
  MapPin,
  Code,
  Users,
  Zap,
  Award,
  ChevronDown,
} from 'lucide-react';

import Navigation from './Navigation';
import Hero from './Hero';
import Stats from './Stats';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

// Data is now declared here and passed down as props
const experiences = [
  // ... (same experience data as before)
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
  // ... (same skills data as before)
  { name: 'React', level: 95, icon: <FaReact className="text-sky-400" /> },
  { name: 'Node.js', level: 92, icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Python', level: 88, icon: <SiPython className="text-yellow-400" /> },
  {
    name: 'TypeScript',
    level: 90,
    icon: <SiTypescript className="text-blue-500" />,
  },
  { name: 'GraphQL', level: 85, icon: <SiGraphql className="text-pink-500" /> },
  { name: 'AWS', level: 88, icon: <FaAws className="text-orange-400" /> },
  {
    name: 'MongoDB',
    level: 85,
    icon: <SiMongodb className="text-green-600" />,
  },
  { name: 'MySQL', level: 80, icon: <SiMysql className="text-blue-400" /> },
  {
    name: 'TailwindCSS',
    level: 87,
    icon: <SiTailwindcss className="text-cyan-400" />,
  },
  { name: 'HTML5', level: 93, icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', level: 91, icon: <FaCss3Alt className="text-blue-400" /> },
  { name: 'Git', level: 90, icon: <FaGitAlt className="text-red-500" /> },
  {
    name: 'Bootstrap',
    level: 85,
    icon: <FaBootstrap className="text-purple-500" />,
  },
  {
    name: 'Express.js',
    level: 82,
    icon: <SiExpress className="text-gray-400" />,
  },
  { name: 'Vercel', level: 80, icon: <SiVercel className="text-black" /> },
  {
    name: 'Netlify',
    level: 80,
    icon: <SiNetlify className="text-green-400" />,
  },
  {
    name: 'Postman',
    level: 85,
    icon: <SiPostman className="text-orange-400" />,
  },
];

const stats = [
  // ... (same stats data as before)
  { number: '9+', label: 'Years Experience', icon: Code },
  { number: '8', label: 'Team Size Led', icon: Users },
  { number: '40%', label: 'Performance Boost', icon: Zap },
  { number: '25%', label: 'Productivity Increase', icon: Award },
];



const Portfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen overflow-x-hidden font-sans">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
          style={{ left: mousePosition.x - 192, top: mousePosition.y - 192 }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/10 to-gray-900" />
      </div>

      <Navigation scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} />
      <Stats stats={stats} />
      <Experience experiences={experiences} />
      <Skills skills={skills} />
      <Projects />
      <Testimonials  />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
