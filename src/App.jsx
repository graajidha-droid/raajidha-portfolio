import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

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

const Leetcode = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414 0-1.954l-2.396-2.392c-2.21-2.207-5.815-2.239-8.063-.074-.014.013-.027.027-.039.038l-4.277 4.193a5.938 5.938 0 0 1-1.271 1.818 5.83 5.83 0 0 1-.349 1.017 5.527 5.527 0 0 1-.062 2.362 5.35 5.35 0 0 1 .125.513 5.266 5.266 0 0 1 1.209 2.104l3.854 4.126 5.406 5.788a1.374 1.374 0 0 0 .961.438h11.234a1.374 1.374 0 0 0 1.374-1.374V1.374A1.374 1.374 0 0 0 24.717 0H13.483z" />
  </svg>
);

import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import { resumeData } from './data/resumeData';

export default function App() {
  const [isLoading] = useState(false);
  const isDark = true;

  // Ensure the page stays in dark mode only
  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen transition-colors duration-300 font-sans bg-mesh-dark text-slate-50">
      
      {/* Modern startup loader screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 z-[999] bg-[#0F172A] flex flex-col justify-center items-center gap-4"
          >
            <div className="relative">
              {/* Spinner core */}
              <div className="w-16 h-16 rounded-full border-t-2 border-r-2 border-sky-400 animate-spin" />
              <div className="absolute inset-2 w-12 h-12 rounded-full border-b-2 border-l-2 border-purple-500 animate-spin" style={{ animationDirection: 'reverse' }} />
            </div>
            
            {/* Branding pulse */}
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="text-sm font-extrabold tracking-widest text-sky-400 font-mono"
            >
              R A A J I D H A . P O R T F O L I O
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          {/* Global Floating Blobs & Particles Background */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute -top-[20%] -left-[10%] w-[500px] h-[500px] rounded-full bg-sky-500/10 blur-[120px] mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute top-[40%] -right-[10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[150px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute -bottom-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-sky-400/10 blur-[100px] mix-blend-screen animate-pulse-slow" style={{ animationDelay: '4s' }}></div>
            
            {/* Minimal CSS Particle Overlay */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
              backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          {/* Custom Cursor Glow Layer */}
          <CursorGlow />

          {/* Sticky Header Nav */}
          <div className="relative z-50">
            <Navbar />
          </div>

          {/* Sections Layout Frame */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* 1. Hero Block */}
            <Hero />

            {/* 2. About Me Block */}
            <About />

            {/* 3. Skills Matrix Block */}
            <Skills />

            {/* 4. Experience Timeline Block */}
            <Experience />

            {/* 5. Projects Interactive Filter Block */}
            <Projects />

            {/* 6. Education Timeline Block */}
            <Education />

            {/* 7. Certifications Card Grid Block */}
            <Certifications />

            {/* 9. Contact Form Block */}
            <Contact />

          </div>

          {/* Scroll-To-Top Trigger FAB */}
          <ScrollToTop />

          {/* Footer Component */}
          <footer className={`border-t py-12 mt-20 transition-all ${
            isDark ? 'bg-slate-800/60 border-slate-900/60 text-slate-500' : 'bg-slate-100 border-slate-200 text-slate-500'
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-8">
                {/* Top section: branding and social icons */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  {/* Left branding */}
                  <div>
                    <span className="text-lg font-extrabold tracking-widest bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent block">
                      GADDE RAAJIDHA
                    </span>
                    <span className="text-xs font-semibold text-slate-400 block mt-1">
                      Computer Science Student & AIML Engineer
                    </span>
                  </div>

                  {/* Social networking icons - centered on mobile, right-aligned on desktop */}
                  <div className="flex justify-center sm:justify-end gap-3">
                    <a
                      href={resumeData.personalInfo.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200/20 dark:border-white/10 bg-slate-900/10 dark:bg-slate-900/40 hover:text-sky-400 hover:border-sky-400/50 transition-all duration-300"
                      aria-label="GitHub Icon"
                    >
                      <Github className="h-5 w-5 text-slate-400" />
                    </a>
                    <a
                      href={resumeData.personalInfo.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200/20 dark:border-white/10 bg-slate-900/10 dark:bg-slate-900/40 hover:text-sky-400 hover:border-sky-400/50 transition-all duration-300"
                      aria-label="LinkedIn Icon"
                    >
                      <Linkedin className="h-5 w-5 text-slate-400" />
                    </a>
                    <a
                      href={resumeData.personalInfo.leetcode}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200/20 dark:border-white/10 bg-slate-900/10 dark:bg-slate-900/40 hover:text-sky-400 hover:border-sky-400/50 transition-all duration-300"
                      aria-label="LeetCode Icon"
                    >
                      <Leetcode className="h-5 w-5 text-slate-400" />
                    </a>
                    <a
                      href={`mailto:${resumeData.personalInfo.email}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200/20 dark:border-white/10 bg-slate-900/10 dark:bg-slate-900/40 hover:text-sky-400 hover:border-sky-400/50 transition-all duration-300"
                      aria-label="Mail Icon"
                    >
                      <Mail className="h-5 w-5 text-slate-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom copyright notice */}
              <div className="flex flex-col items-center gap-2 mt-8 pt-8 border-t border-slate-200/10 dark:border-white/5 text-[14px] font-medium text-slate-400 tracking-wide pb-4">
                <span>&copy; Developed and Designed by Gadde Raajidha</span>
                <span className="text-[12px] opacity-80">@{currentYear}</span>
              </div>
            </div>
          </footer>
        </>
      )}

    </div>
  );
}
