import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Phone } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import profilePic from '../assets/profile.jpg';

const Github = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const { name, title, specialization, subroles, profileSummary, github, linkedin, email, phone } = resumeData.personalInfo;
  
  // Custom Typing Loop
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const roles = subroles;
    let timer;
    const currentFullRole = roles[currentRoleIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(currentFullRole.substring(0, typedText.length - 1));
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(currentFullRole.substring(0, typedText.length + 1));
      }, 100);
    }

    if (!isDeleting && typedText === currentFullRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText === '') {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentRoleIndex, subroles]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-12 sm:pb-16 overflow-hidden relative">
      {/* Background Radial Glow Ambient Orbs - more subtle */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full bg-sky-500/5 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full bg-purple-600/5 blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col items-center gap-10 sm:gap-14 text-center">
        {/* Profile Image - Much larger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
        >
          {/* Background glowing rings */}
          <div className="absolute inset-0 rounded-3xl border-2 border-sky-400/20 animate-spin-slow pointer-events-none scale-105" />
          <div className="absolute inset-0 rounded-3xl border-2 border-dashed border-purple-500/15 animate-spin-slow pointer-events-none scale-110" style={{ animationDirection: 'reverse' }} />

          {/* Profile image with Glassmorphism wrap */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden glass-card p-4 shadow-2xl hover:scale-[1.01] transition-transform duration-500">
            <img
              src={profilePic}
              alt={name}
              className="w-full h-full object-cover rounded-2xl grayscale-[15%] hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>

        {/* Hero Copy */}
        <div className="space-y-4 sm:space-y-6 max-w-3xl">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-2xl font-semibold text-slate-300"
          >
            Hello.
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            <span className="block text-slate-100">I'm</span>
            <span className="block bg-gradient-to-r from-sky-400 via-purple-400 to-sky-400 bg-clip-text text-transparent drop-shadow-sm">
              {name}
            </span>
          </motion.h1>

          {/* Title/Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-xl sm:text-3xl font-bold text-slate-200 leading-relaxed"
          >
            {title}
          </motion.h2>

          {/* Profile Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl leading-relaxed font-sans mx-auto"
          >
            {profileSummary}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 pt-6 justify-center"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold text-white bg-sky-500 hover:bg-sky-400 shadow-xl hover:shadow-sky-400/20 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
          >
            View Projects
            <ArrowRight className="h-6 w-6" />
          </a>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="G Raajidha Resume.pdf"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold text-slate-200 dark:text-slate-50 bg-slate-900/60 dark:bg-slate-800/60 border border-slate-700/50 hover:border-sky-400/50 backdrop-blur-md hover:text-white transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <Download className="h-6 w-6 text-sky-400" />
            Resume
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 sm:px-10 py-4 sm:py-5 rounded-full text-lg sm:text-xl font-bold text-slate-300 dark:text-slate-300 bg-transparent border border-slate-700/50 hover:border-sky-400/50 hover:text-white transition-colors duration-300 w-full sm:w-auto"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-4 pt-8 flex-wrap"
        >
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-900/40 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-slate-900/40 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${email}`}
            className="p-3 rounded-full bg-slate-900/40 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
            aria-label="Send Email"
          >
            <Mail className="h-6 w-6" />
          </a>
          <a
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="p-3 rounded-full bg-slate-900/40 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all duration-300 hover:scale-110"
            aria-label="Call Mobile"
          >
            <Phone className="h-6 w-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
