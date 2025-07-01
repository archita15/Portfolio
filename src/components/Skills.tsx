'use client';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Postman', icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'Power BI', icon: 'https://img.icons8.com/color/48/power-bi.png' },
  { name: 'Selenium', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg' },
  { name: 'Microsoft Azure', icon: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg' },
  { name: 'AWS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Tableau', icon: 'https://img.icons8.com/color/48/tableau-software.png' }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
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
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="relative py-24 bg-gradient-to-br from-white to-[#F5F5DC] overflow-hidden font-serif text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-[#EDE6C0]/40 rounded-full filter blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-white/70 rounded-full filter blur-2xl"
        animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#DDD4B0]/50 rotate-45 filter blur-xl"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Section Title */}
      <motion.div
        className="text-center mb-12"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            My <span className="text-[#D2B48C]">Skills</span>
          </h2>
        <motion.p
          className="mt-4 text-base text-gray-600 max-w-2xl mx-auto leading-relaxed"
          variants={paragraphVariants}
        >
          A curated stack of tools and technologies I use to build modern web experiences.
        </motion.p>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 px-6"
        variants={containerVariants}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ scale: 1.07, rotate: 5 }}
            className="flex flex-col items-center gap-2 p-4 bg-white bg-opacity-60 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-[#DDD4B0]"
          >
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
            <span className="text-sm font-medium text-gray-800">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
