'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  companyUrl: string;
}

const experiences: ExperienceItem[] = [
  { id: 1, company: 'Project 990', position: 'Software Developer', duration: 'Jan 2025 – Present', location: 'Remote, USA', companyUrl: 'https://bradrfulton.com/research/projects/f-g-network/' },
  { id: 2, company: 'Marchup', position: 'SDE Intern', duration: 'Jun 2024 – Aug 2024', location: 'San Francisco, CA, USA', companyUrl: 'https://marchup.net/user/auth/login' },
  { id: 3, company: 'SLB', position: 'Software Engineer', duration: 'Aug 2021 – Jul 2023', location: 'Pune, MH, India', companyUrl: 'https://www.slb.com/' },
  { id: 4, company: 'Persistent Systems', position: 'Software Engineer Intern', duration: 'Nov 2020 – Mar 2021', location: 'Remote', companyUrl: 'https://www.persistent.com/' }
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-white font-serif text-gray-800">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-2">
            My <span className="text-[#D2B48C]">Experience</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D2B48C] to-[#A89F91] rounded-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 1 }}
          />

          {/* Cards */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const left = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  className={`relative flex items-center ${
                    left ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={itemVariants}
                >
                  <div className={`w-full md:w-1/2 p-4 ${left ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="block relative bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                      {/* Accent stripe */}
                      <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#D2B48C] to-[#A89F91] rounded-l-full" />

                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                          {exp.position}
                        </h3>
                        <ExternalLink className="w-5 h-5 text-[#A89F91]" />
                      </div>
                      <p className="text-sm font-medium text-gray-600 mb-3">
                        {exp.company}
                      </p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
