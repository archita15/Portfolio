'use client';
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  companyUrl: string;
}

const experiences: ExperienceItem[] = [
  { id: 1, company: 'Project 990', position: 'Software Developer', duration: 'Jan 2025 – Present', location: 'Remote', companyUrl: 'https://bradrfulton.com/research/projects/f-g-network/' },
  { id: 2, company: 'Marchup', position: 'SDE Intern', duration: 'Jun 2024 – Aug 2024', location: 'San Francisco, CA', companyUrl: 'https://marchup.net/user/auth/login' },
  { id: 3, company: 'SLB', position: 'Software Engineer', duration: 'Aug 2021 – Jul 2023', location: 'Pune, India', companyUrl: 'https://www.slb.com/' },
  { id: 4, company: 'Persistent Systems', position: 'Software Engineer Intern', duration: 'Nov 2020 – Mar 2021', location: 'Remote', companyUrl: 'https://www.persistent.com/' }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="relative py-20 bg-white overflow-hidden font-serif text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-[#EDE6C0]/30 rounded-full filter blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-white/70 rounded-full filter blur-2xl"
        animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#DDD4B0]/50 rotate-45 filter blur-lg"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My <span className="text-[#D2B48C]">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D2B48C] to-[#A89F91] rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const left = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${left ? 'md:flex-row' : 'md:flex-row-reverse'} md:justify-between`}
                >
                  {/* Timeline Card */}
                  <div className={`w-full md:w-1/2 p-4 ${left ? 'md:pr-8' : 'md:pl-8'}`}>
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: left ? -1 : 1 }}
                        className="relative bg-white before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-l-full before:bg-gradient-to-b before:from-[#D2B48C] before:to-[#A89F91] border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-2xl font-semibold text-gray-800">{exp.position}</h3>
                          <ExternalLink className="w-5 h-5 text-[#A89F91]" />
                        </div>
                        <p className="text-sm font-medium text-gray-600 mb-3">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />{exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />{exp.location}
                          </span>
                        </div>
                      </motion.div>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
