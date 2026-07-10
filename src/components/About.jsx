import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Heart, CheckCircle, GraduationCap } from 'lucide-react';
import { resumeData } from '../data/resumeData';

// Simple CountUp widget using standard React states
function CountUp({ end, duration = 2, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const isInView = useInView(elementRef, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const endVal = parseFloat(end);
    if (isNaN(endVal)) return;

    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / endVal), 20);
    
    const timer = setInterval(() => {
      start += Math.ceil(endVal / 50); // Increment step
      if (start >= endVal) {
        clearInterval(timer);
        setCount(endVal);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const { profileSummary, location } = resumeData.personalInfo;
  const stats = resumeData.stats;
  const achievements = resumeData.achievements;
  
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            About <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="h-1.5 w-16 bg-sky-400 rounded-full mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Bio Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-slate-50 dark:text-slate-50 flex items-center gap-2">
              <GraduationCap className="text-sky-400" />
              My Professional Journey
            </h3>
            
            <p className="text-slate-400 leading-relaxed font-sans text-base">
              {profileSummary}
            </p>

            <p className="text-slate-400 leading-relaxed font-sans text-base">
              I am highly passionate about product development and software engineering. I love building smart systems that bridge computer vision models and full-stack web applications. I focus on writing clean, modular, and optimized code that solves real-world challenges.
            </p>

            {/* Strengths / Interests Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/35 border border-slate-800/60">
                <CheckCircle className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-50">AI & Computer Vision</h4>
                  <p className="text-xs text-slate-400 mt-1">YOLO object detection pipelines, image pre-processing, OpenCV model tuning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/35 border border-slate-800/60">
                <CheckCircle className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-50">Full-Stack Development</h4>
                  <p className="text-xs text-slate-400 mt-1">Robust backends with Spring Boot/Java, dynamic view templates, SQL structures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/35 border border-slate-800/60">
                <CheckCircle className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-50">Analytical Problem Solving</h4>
                  <p className="text-xs text-slate-400 mt-1">Strong foundation in Data Structures, Algorithms, OOP, and Database designs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/35 border border-slate-800/60">
                <CheckCircle className="h-5 w-5 text-sky-400 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-50">Collaboration & Soft Skills</h4>
                  <p className="text-xs text-slate-400 mt-1">Effective team player, strong verbal communicator, skilled in time management.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Key Achievements Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stats Counter Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card p-5 rounded-2xl border border-white/10 text-center shadow-lg transition-colors duration-300 hover:border-sky-400/50 hover:bg-slate-800/50"
                >
                  <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 tracking-tight">
                    {/* Handle decimals like 8.9 and percentage values properly */}
                    {stat.value.includes('.') ? (
                      <span>{stat.value}{stat.suffix}</span>
                    ) : (
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    )}
                  </div>
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-200 mt-2 drop-shadow-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Achievements Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-lg font-bold text-slate-50 flex items-center gap-2">
                <Award className="text-purple-400 h-5 w-5" />
                Milestone Highlights
              </h4>
              <ul className="space-y-3.5 text-left text-sm text-slate-400">
                {achievements.map((ach, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>
                      <strong className="text-slate-300">{ach.title}:</strong> {ach.detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
