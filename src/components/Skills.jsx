import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section id="skills" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl hover:scale-105 transition p-6 border border-gray-700/50 hover:border-purple-500/50"
            >
              <div className="flex items-center space-x-4 mb-4">
                {skill.icon}
                <span className="text-xl font-semibold">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  style={{ width: `${skill.level}%` }}
                  className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                />
              </div>
              <span className="text-sm text-gray-400">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;