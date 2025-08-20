import React from 'react';

const Stats = ({ stats }) => {
  return (
    <section id="about" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700/40 hover:scale-105 transition p-6"
          >
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full">
              <stat.icon className="w-8 h-8 text-purple-300" />
            </div>
            <div className="text-3xl font-bold">{stat.number}</div>
            <div className="text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;