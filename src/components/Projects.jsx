import React from 'react';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Project Title 1',
    description: 'Short description of project 1 and technologies used.',
    image: 'https://placehold.co/600x400',
    links: [
      { type: 'Live', url: 'https://example-project1.com' },
      { type: 'Code', url: 'https://github.com/your-username/project1' },
    ],
  },
  {
    title: 'Project Title 2',
    description: 'Brief overview of project 2 and its key features.',
    image: 'https://placehold.co/600x400',
    links: [
      { type: 'Live', url: 'https://example-project2.com' },
      { type: 'Code', url: 'https://github.com/your-username/project2' },
    ],
  },
  {
    title: 'Project Title 3',
    description: 'Details about project 3, including challenges and solutions.',
    image: 'https://placehold.co/600x400',
    links: [{ type: 'Code', url: 'https://github.com/your-username/project3' }],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover rounded-t-xl"
              />
              <div className="p-6 flex flex-col flex-1">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
                {/* Project Links Section */}
                {project.links && (
                  <div className="flex justify-start space-x-4 mt-auto">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-gray-700/60 border border-gray-600  transition hover:bg-pink-700/60"
                      >
                        {link.type === 'Code' ? (
                          <Code className="w-4 h-4 text-purple-400 " />
                        ) : (
                          <ExternalLink className="w-4 h-4 text-purple-400 " />
                        )}
                        <span>{link.type}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
