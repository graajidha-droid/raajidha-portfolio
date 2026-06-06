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
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden relative">
      {/* Background Radial Glow Ambient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-sky-500/10 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-600/10 blur-[100px] pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Copy (8cols desktop) */}
        <div className="lg:col-span-7 space-y-6 text-left">


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight"
          >
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-sky-400 via-purple-400 to-sky-400 bg-clip-text text-transparent drop-shadow-sm">
              {name}
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl font-bold text-sky-300 tracking-wide mt-2"
          >
            AI/ML Enthusiast | Full Stack Developer
          </motion.h2>

          {/* Typing Subheading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-10 text-xl sm:text-2xl font-semibold text-slate-300 flex items-center"
          >
            <span>Specializing in&nbsp;</span>
            <span className="text-sky-400 typing-caret pr-1 font-mono font-bold bg-sky-400/5 px-2 rounded-md">
              {typedText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed font-sans"
          >
            {profileSummary}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-white bg-sky-500 hover:bg-sky-400 shadow-xl hover:shadow-sky-400/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              View Projects
              <ArrowRight className="h-5 w-5" />
            </a>

            <a
              href="/resume.pdf"
              download="G Raajidha Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-slate-300 dark:text-slate-50 bg-slate-900/60 dark:bg-slate-800/60 border border-slate-700/50 hover:border-sky-400/50 backdrop-blur-md hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <Download className="h-5 w-5 text-sky-400" />
              Download Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold text-slate-400 dark:text-slate-300 bg-transparent hover:text-white transition-colors duration-300"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex items-center gap-4 pt-4"
          >
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/40 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/40 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${email}`}
              className="p-2.5 rounded-full bg-slate-900/40 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all duration-300"
              aria-label="Send Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={`tel:${phone.replace(/\s+/g, '')}`}
              className="p-2.5 rounded-full bg-slate-900/40 border border-slate-800 hover:border-sky-400 hover:text-sky-400 transition-all duration-300"
              aria-label="Call Mobile"
            >
              <Phone className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        {/* Hero Photo / Avatar (5cols desktop) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
          >
            {/* Background glowing rings */}
            <div className="absolute inset-0 rounded-full border border-sky-400/25 animate-spin-slow pointer-events-none scale-105" />
            <div className="absolute inset-0 rounded-full border border-dashed border-purple-500/25 animate-spin-slow pointer-events-none scale-110" style={{ animationDirection: 'reverse' }} />
            <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-sky-400 via-purple-500 to-sky-400 blur-2xl opacity-20 animate-pulse-slow pointer-events-none" />

            {/* Profile image with Glassmorphism wrap */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden glass-card p-3 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              <img
                src={profilePic}
                alt={name}
                className="w-full h-full object-cover rounded-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
