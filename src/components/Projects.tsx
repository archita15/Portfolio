'use client';
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'FlickFix',
    description: 'Movie ticket booking system built with the MERN stack and GraphQL. Features include a fast and efficient booking flow, admin panel with full CRUD operations, and Stripe integration for secure payments.',
    image: 'https://offloadmedia.feverup.com/secretldn.com/wp-content/uploads/2022/02/25143725/shutterstock_1464729836-2-1024x683.jpg',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    githubUrl: 'https://github.com/archita15/FLICKFIX---Movie-Booking-Management-Application'
  },
  {
    id: 2,
    title: 'Echo Tunes',
    description: 'Custom music player app built with Next.js, Firebase, and Redux. Features include audio playback, playlist management, Cloudinary-powered file uploads, and automated deployments with Jenkins.',
    image: 'https://i.pinimg.com/originals/0d/4b/44/0d4b44ca527c67b2db5e3faf17a9848b.jpg',
    technologies: ['Next.js', 'JavaScript', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com/archita15/EchoTunes---Music-Player-Application'
  },
  {
    id: 3,
    title: 'Secure Banking System',
    description: 'Secure banking application built with React.js, Spring Boot, and PostgreSQL. Features include JWT-based authentication, HTTPS/TLS encryption, optimized payment processing, and containerized deployment with Docker.',
    image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/archita15/Secure-Banking-system'
  }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};
const paragraphVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-white to-[#F5F5DC] overflow-hidden font-serif text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute -top-16 -left-16 w-72 h-72 bg-[#EDE6C0]/50 rounded-full filter blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/60 rounded-full filter blur-2xl"
        animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-56 h-56 bg-[#DDD4B0]/50 rotate-45 filter blur-xl"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          className="text-center mb-12"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            My <span className="text-[#D2B48C]">Projects</span>
          </h2>
          <motion.p
            className="mt-4 text-base text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={paragraphVariants}
          >
            A showcase of my recent work and creative projects.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md transition-shadow duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-[#A89F91]/30 transition-all duration-200"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2 group-hover:text-[#D2B48C] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-[#EDE6C0]/50 text-[#A89F91] text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <a
            href="https://github.com/archita15?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[#D2B48C] to-[#A89F91] text-white font-medium rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
