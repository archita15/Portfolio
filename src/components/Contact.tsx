'use client';
import React, { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6 text-[#D2B48C]" />, label: 'Email', value: 'architapalkar15@gmail.com', href: 'mailto:architapalkar15@gmail.com' },
    { icon: <Phone className="w-6 h-6 text-[#D2B48C]" />, label: 'Phone', value: '+1(812)-391-1199', href: 'tel:+1(812)-391-1199' }
  ];
  const social = [
    { icon: <Github className="w-6 h-6" />, href: 'https://github.com/archita15', label: 'GitHub' },
    { icon: <Linkedin className="w-6 h-6" />, href: 'https://www.linkedin.com/in/architapalkar/', label: 'LinkedIn' }
  ];

  const container = { hidden: {}, visible: { transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <motion.section
      id="contact"
      className="relative py-16 bg-white overflow-hidden font-serif text-gray-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {/* Background Blobs */}
      <motion.div
        className="absolute -top-12 -left-12 w-64 h-64 bg-[#EDE6C0]/30 rounded-full filter blur-3xl"
        animate={{ x: [0, 60, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-12 -right-12 w-80 h-80 bg-white/70 rounded-full filter blur-2xl"
        animate={{ x: [0, -60, 0], y: [0, -30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.h2 variants={item} className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="text-[#D2B48C]">Touch</span>
        </motion.h2>
        <motion.p variants={item} className="text-center text-gray-600 mb-12">
          Have a project in mind? Let's create something amazing together.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div variants={item} className="space-y-6">
            {contactInfo.map((c, idx) => (
              <motion.a
                key={idx}
                href={c.href}
                variants={item}
                className="flex items-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-[#D2B48C] transition-colors duration-300"
              >
                <div className="mr-4">{c.icon}</div>
                <div>
                  <p className="text-sm text-gray-600">{c.label}</p>
                  <p className="font-medium text-gray-800">{c.value}</p>
                </div>
              </motion.a>
            ))}
            <motion.div variants={item} className="flex space-x-4 mt-4">
              {social.map((s, idx) => (
                <motion.a
                  key={idx}
                  href={s.href}
                  variants={item}
                  className="p-3 bg-gray-100 rounded-full border border-gray-200 hover:border-[#D2B48C] hover:bg-[#EDE6C0]/50 transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div variants={item}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-xl border border-gray-200">
              <motion.div variants={item} className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Name *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2B48C] focus:border-[#D2B48C]"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2B48C] focus:border-[#D2B48C]"
                    placeholder="you@example.com"
                  />
                </div>
              </motion.div>
              <motion.div variants={item}>
                <label className="block mb-1 text-sm font-medium text-gray-700">Subject *</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2B48C] focus:border-[#D2B48C]"
                  placeholder="Subject"
                />
              </motion.div>
              <motion.div variants={item}>
                <label className="block mb-1 text-sm font-medium text-gray-700">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#D2B48C] focus:border-[#D2B48C] resize-none"
                  placeholder="Your message..."
                />
              </motion.div>
              <motion.button
                type="submit"
                variants={item}
                whileHover={{ scale: 1.05 }}
                className="w-full inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#D2B48C] to-[#A89F91] text-white font-semibold rounded-lg shadow-lg transition-transform duration-300"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}