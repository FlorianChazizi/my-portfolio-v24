import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import social icons

const ContactMe: React.FC = () => {
  return (
    <section className="min-h-96	 bg-navy flex justify-center items-center" id="contact">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">Contact Me</h2>

        {/* Contact Information */}
        <div className="text-white text-lg mb-8">
          <p>Email: <a href="mailto:your-email@example.com" className="underline hover:text-gray-300">chazizi.florian@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="underline hover:text-gray-300">+30 6944634180</a></p>
        </div>

         {/* Social Media Links */}
         <div className="flex justify-center space-x-8 text-4xl text-white">
          <a
            href="https://www.linkedin.com/in/florian-chazizi-191b00175/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transform hover:scale-125 transition-transform duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/FlorianChazizi"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transform hover:scale-125 transition-transform duration-300"
          >
            <FaGithub />
          </a>
          {/* Add other social icons here */}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
