'use client';
import React from 'react';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <motion.section
      id="about"
      className="relative py-16 bg-white overflow-hidden font-serif text-gray-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-[#EDE6C0]/30 rounded-full filter blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-white/60 rounded-full filter blur-2xl"
        animate={{ x: [0, -60, 0], y: [0, -30, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#DDD4B0]/40 rotate-45 filter blur-lg"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            About <span className="text-[#D2B48C]">Me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '4rem' }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-[#D2B48C] to-[#A89F91] mx-auto rounded"
          />
        </motion.div>

        {/* Content & Photo */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Text */}
          <motion.div
            className="md:w-1/2 space-y-4"
            variants={containerVariants}
          >
            <motion.p variants={paragraphVariants} className="text-base leading-relaxed">
              💡 I'm a software engineer passionate about crafting solutions that matter. From Node.js backends to React frontends, I write clean, scalable code.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-base leading-relaxed">
              🚀 Highlight: Led a healthcare web app project with predictive models for faster diagnoses, collaborating across teams to align tech with goals.
            </motion.p>
            <motion.p variants={paragraphVariants} className="text-base leading-relaxed">
              🧠 Always learning—exploring AWS, automating workflows, and refining UX. I thrive in agile teams and mentorship roles.
            </motion.p>
            <motion.div variants={paragraphVariants} className="text-base leading-relaxed">
              <strong>Key Skills:</strong>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Full-Stack: Java, Python, React, Node.js, Flask</li>
                <li>DBs: PostgreSQL, MongoDB</li>
                <li>Cloud & DevOps: AWS EC2, S3, Docker</li>
                <li>Agile & Product: Sprint planning, Figma design</li>
              </ul>
            </motion.div>
            <motion.p variants={paragraphVariants} className="text-base leading-relaxed">
              Let’s connect if you’re building something exciting or want to collaborate! 👋
            </motion.p>

            {/* Badges */}
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              variants={paragraphVariants}
            >
              {['2.5+ Years Experience', 'Open to Work'].map((badge, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={
                    `px-3 py-1 rounded-full font-medium transition-transform text-sm ` +
                    (badge === 'Open to Work'
                      ? 'bg-gray-800 text-white shadow'
                      : 'bg-[#EDE6C0]/50 text-[#A89F91]')
                  }
                >
                  {badge}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo */}
          <motion.div
            className="md:w-1/2 flex justify-center relative md:-top-6 md:left-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 180 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative w-72 h-72 rounded-lg overflow-hidden border-4 border-[#EDE6C0]/40 shadow-lg">
              <img
                src="/self.jpeg"
                alt="Archita Palkar"
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-[#D2B48C] to-[#A89F91] rounded-full flex items-center justify-center shadow-md">
                <Code className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
