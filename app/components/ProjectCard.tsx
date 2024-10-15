// components/ProjectCard.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Define the structure of the project
interface Project {
  title: string;
  image: StaticImageData;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, image, techStack, githubUrl, liveUrl } = project;

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform hover:scale-105">
      {/* Using Next.js Image component for optimization */}
      <Image
        src={image}
        alt={title}
        width={500}
        height={300}  // Specify dimensions for optimization
        objectFit="cover"
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl text-center font-semibold mb-2">{title}</h3>
  {/* Tech Stack Mapping */}
  <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-blue-900 to-blue-400 text-white"
            >
              {tech}
            </span>
          ))}
        </div>        <div className="flex justify-between items-center">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-colors"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Live Preview</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
