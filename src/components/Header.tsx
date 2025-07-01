'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm transition-colors duration-300 ${
        scrolled ? 'bg-white/90 shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="relative max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo & Blob */}
        <div className="relative flex items-center">
          <motion.div
            className="absolute -left-4 -top-4 w-16 h-16 bg-[#EDE6C0]/40 rounded-full filter blur-xl"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          <h1 className="relative text-2xl font-bold text-gray-900">
            <span className="text-[#D2B48C]">A</span>P
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(item => (
            <motion.button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              variants={itemVariants}
              className="text-gray-700 font-medium hover:text-[#D2B48C] transition-colors duration-200"
            >
              {item.label}
            </motion.button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(open => !open)} className="text-gray-900">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute top-full inset-x-4 bg-white rounded-xl shadow-lg overflow-hidden mt-2"
            >
              <div className="flex flex-col p-4">
                {navItems.map(item => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    variants={itemVariants}
                    className="w-full text-left py-2 text-gray-700 hover:text-[#D2B48C] transition-colors duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
