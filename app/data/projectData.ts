import cepImage from '../assets/cep.png';
import conco from '../assets/prift.png';
import rightArrowImage from '../assets/right-arrow.png';
import  { StaticImageData } from 'next/image';

// Define the structure of your project data
interface Project {
  title: string;
  image: StaticImageData;  // Use 'StaticImageData' type for images imported with next/image
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

// Export your project data as an array of objects
export const projects: Project[] = [
  {
    title: "Community Engagement Platform",
    image: cepImage,  // Directly use the imported image
    techStack: ["ReactJS", "Node.js", "ExpressJS", "MongoDB", "API", "Authentication"],
    githubUrl: "https://github.com/your-username/project1",
    liveUrl: "https://community-front-red.vercel.app/"
  },
  {
    title: "Construction Company",
    image: conco,
    techStack: ["NextJS", "TailwindCSS"],
    githubUrl: "https://github.com/FlorianChazizi/constructioncompany",
    liveUrl: "https://constructioncompany-l1cy.vercel.app/"
  },
  {
    title: "Project 3",
    image: rightArrowImage,
    techStack: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/your-username/project3",
    liveUrl: "https://project3-live-demo.com"
  }
];