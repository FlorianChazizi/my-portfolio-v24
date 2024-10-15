import React from 'react';

const Technologies: React.FC = () => {
  return (
    <section className="h-screen flex justify-center items-center" id="technologies">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Technologies I Use</h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {/* Frontend Card */}
          <div className="relative w-80 h-64 bg-gray-800 rounded-lg shadow-lg overflow-hidden group" data-aos="fade-down">
            <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold bg-gray-800 group-hover:translate-y-full transition-transform duration-500 z-10">
              Frontend
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-500 flex flex-col justify-center items-center text-white text-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <ul className="list-none text-center space-y-2 z-0">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Vue</li>
                <li>NextJS</li>
              </ul>
            </div>
          </div>

          {/* Backend Card */}
          <div className="relative w-80 h-64 bg-gray-800 rounded-lg shadow-lg overflow-hidden group" data-aos="fade-up">
            <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold bg-gray-800 group-hover:translate-y-full transition-transform duration-500 z-10">
              Backend
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-600 flex flex-col justify-center items-center text-white text-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <ul className="list-none text-center space-y-2 z-0">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>API Development</li>
              </ul>
            </div>
          </div>

          {/* Database Card */}
          <div className="relative w-80 h-64 bg-gray-800 rounded-lg shadow-lg overflow-hidden group" data-aos="fade-down">
            <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold bg-gray-800 group-hover:translate-y-full transition-transform duration-500 z-10">
              Databases
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-red-500 flex flex-col justify-center items-center text-white text-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <ul className="list-none text-center space-y-2 z-0">
                <li>SQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
