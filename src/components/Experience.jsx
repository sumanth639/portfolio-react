import React from 'react';

const Experience = ({ experiences }) => {
  return (
    <section id="experience" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Professional Experience
        </h2>

        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 bg-gradient-to-b from-purple-500 via-pink-500 to-purple-600 rounded-full shadow-lg h-full" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className="relative mb-10 flex justify-between items-start w-full"
              >
                {/* Left side content */}
                <div
                  className={`w-1/2 ${
                    isLeft ? 'pr-8 text-right' : 'hidden md:block'
                  }`}
                >
                  {isLeft && (
                    <div className="inline-block bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/50 cursor-default">
                      <h3 className="text-xl font-semibold mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-purple-400 font-medium">
                        {exp.company}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {exp.location}
                      </div>
                      <div className="mt-2 bg-gray-700/40 px-4 py-1 rounded-full text-sm font-semibold inline-block">
                        {exp.duration}
                      </div>
                      <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Timeline node */}
                <div className="z-20 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-pink-600/80 ring-4 ring-gray-900">
                  <div className="w-5 h-5 rounded-full bg-gray-900" />
                </div>

                {/* Right side content */}
                <div
                  className={`w-1/2 ${
                    !isLeft ? 'pl-8 text-left' : 'hidden md:block'
                  }`}
                >
                  {!isLeft && (
                    <div className="inline-block bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-2xl p-6 shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-pink-500/50 cursor-default">
                      <h3 className="text-xl font-semibold mb-1">
                        {exp.title}
                      </h3>
                      <div className="text-purple-400 font-medium">
                        {exp.company}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {exp.location}
                      </div>
                      <div className="mt-2 bg-gray-700/40 px-4 py-1 rounded-full text-sm font-semibold inline-block">
                        {exp.duration}
                      </div>
                      <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                        {exp.highlights.map((h, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500" />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
