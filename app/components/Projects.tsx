import React from 'react'

const Projects = () => {

    const projects = [
        { title: "Community Engagement Platform", link: "https://community-front-red.vercel.app/", description: "Full-stack web app with React.js, Node.js, and MongoDB" },
        // Add more projects
      ];
      
  return (
    <div>
         <section id="">
    <h2>Projects</h2>
    <ul>
      {projects.map((project, idx) => (
        <li key={idx}>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        </li>
      ))}
    </ul>
  </section>
    </div>
  )
}

export default Projects