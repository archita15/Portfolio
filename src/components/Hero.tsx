'use client';
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = ['Software Developer', 'Full-Stack Developer', 'Software Engineer', 'Frontend Developer', 'UI/UX Designer'];

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // Typing effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (!deleting && charIndex <= currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 120);
    } else if (!deleting && charIndex > currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 60);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollToAbout = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-white to-[#F5F5DC] overflow-hidden font-serif text-gray-800"
    >
      {/* Creative Blobs & Shapes */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#EDE6C0]/60 rounded-full filter blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white/80 rounded-full filter blur-2xl"
        animate={{ x: [0, -80, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-56 h-56 bg-[#DDD4B0]/50 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />

      {/* Main Content */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#A89F91] leading-tight"
        >
          Hello, I'm{' '}
          <span className="text-gray-800">Archita Palkar</span>
        </motion.h1>
        {/* Typing Effect Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-4 text-lg text-gray-700 h-8 leading-snug"
        >
          {text}
          <span className="inline-block w-1 h-6 bg-gray-800 animate-pulse align-middle ml-1" />
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-4 max-w-2xl mx-auto text-base text-gray-600 leading-relaxed"
        >
          Putting the ‘fun’ in function because buttons shouldn’t be boring
        </motion.p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 flex justify-center space-x-6"
        >
          {[
            { icon: <Github className="w-8 h-8 text-gray-800" />, link: 'https://github.com/archita15' },
            { icon: <Linkedin className="w-8 h-8 text-gray-800" />, link: 'https://www.linkedin.com/in/architapalkar/' },
            { icon: <Mail className="w-8 h-8 text-gray-800" />, link: 'mailto:architapalkar15@gmail.com' }
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              className="transition-transform"
            >
              {item.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-10 flex justify-center gap-6"
        >
          <button
            onClick={scrollToAbout}
            className="px-8 py-3 bg-[#D2B48C] text-white font-medium rounded-full shadow-lg hover:bg-[#C4AA78] transition-colors duration-300"
          >
            Explore
          </button>
          <a
            href="https://drive.google.com/file/d/1xS1-fQzN7fqgK9HD63xhZvYQnx0CLi8L/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border-2 border-[#A89F91] text-gray-800 font-medium rounded-full hover:bg-[#A89F91] hover:text-white transition-colors duration-300"
          >
            Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
