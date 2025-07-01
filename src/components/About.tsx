'use client';
import React from 'react';
import selfPic from './self.jpeg';
import { Code } from 'lucide-react';
import { motion } from 'framer-motion';

// Variants for staggered children
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};
const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const headingVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="relative py-16 bg-white overflow-hidden font-serif text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Background Blobs */}
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

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-8"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            About <span className="text-[#D2B48C]">Me</span>
          </h2>
        </motion.div>

        {/* Two-column content */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          {/* Text Column */}
          <motion.div className="md:w-3/5 space-y-6" variants={containerVariants}>
            {[
              "💡 I'm a software engineer driven by the challenge of building real-world solutions that make a difference. With hands-on experience across the full stack, from backend systems with JavaScript, Node.js, and Flask to dynamic frontends in React, I love solving complex problems through clean, scalable code.",
              "🚀 One highlight from my work includes leading the development of a healthcare web app powered by predictive models to support faster diagnosis. I’ve also collaborated closely with cross-functional teams and stakeholders to align tech solutions with business goals, driving both innovation and efficiency.",
              "🧠 I'm always learning, whether it's diving into cloud platforms like AWS, automation, or refining UI/UX workflows. I thrive in agile environments and enjoy mentoring peers, driving team collaboration, and turning ideas into impact."
            ].map((txt, idx) => (
              <motion.p
                key={idx}
                className="text-base leading-relaxed"
                variants={paragraphVariants}
              >
                {txt}
              </motion.p>
            ))}

            <motion.p className="text-base leading-relaxed" variants={paragraphVariants}>
              Let’s connect if you’re building something exciting or just want to talk tech! 👋
            </motion.p>

            <motion.div className="mt-6 flex flex-wrap gap-3" variants={paragraphVariants}>
              {['2.5+ Years Experience', 'Open to Work'].map((b, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 rounded-full font-medium text-sm transition-transform ${
                    b === 'Open to Work'
                      ? 'bg-gray-800 text-white'
                      : 'bg-[#A89F91] text-white'
                  }`}
                >
                  {b}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo Column */}
          <motion.div
            className="md:w-2/5 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={paragraphVariants}
            transition={{ delay: 0.8, type: 'spring', stiffness: 180 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-[30rem] h-[30rem] rounded-lg overflow-hidden border-4 border-[#EDE6C0]/40 shadow-lg">
              <img src={selfPic} alt="Archita Palkar" className="w-full h-full object-cover" />
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-gradient-to-r from-[#D2B48C] to-[#A89F91] rounded-full flex items-center justify-center shadow-md">
                <Code className="w-14 h-14 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
