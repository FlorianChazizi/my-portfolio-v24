// components/ProjectGrid.tsx
import React from 'react';
import ProjectCard from './ProjectCard';
import projects from '../data/projects.json';

// Ensure TypeScript knows the structure of each project
interface Project {
  title: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectGrid: React.FC = () => {
  return (
    <section className="py-12 bg-navy" id='projects'>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;