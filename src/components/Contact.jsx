import React, { useState, useEffect } from 'react';
import { init, send } from '@emailjs/browser';
import { Mail, Phone, Send, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';

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

export default function Contact() {
  const { email, phone, location, github, linkedin, githubUsername, linkedinUsername } = resumeData.personalInfo;
  
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (publicKey) {
      init(publicKey);
    }
  }, [publicKey]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage('Email service is not configured. Add EmailJS keys to your .env file.');
      return;
    }

    // Strict regex to ensure it's a real-looking email address
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formState.email)) {
      setErrorMessage('Please enter a validly formatted email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    // 1. Verify Email first
    const verificationKey = import.meta.env.VITE_EMAIL_VERIFICATION_KEY;
    if (verificationKey) {
      try {
        const verifyRes = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=${verificationKey}&email=${formState.email}`);
        const verifyData = await verifyRes.json();
        
        if (verifyData.deliverability === 'UNDELIVERABLE' || (verifyData.error && verifyData.error.code)) {
          setErrorMessage('Please enter valid email address');
          setIsSubmitting(false);
          return;
        }
      } catch (err) {
        console.error('Email verification failed:', err);
        // If verification API fails (CORS, network), we just bypass it and try to send anyway
      }
    }

    // 2. Send via EmailJS
    try {
      await send(
        serviceId,
        templateId,
        {
          name: formState.name,
          email: formState.email,
          title: formState.subject || 'New message from portfolio',
          message: formState.message,
        },
        publicKey
      );

      setIsSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Email send error:', error);
      // We check if it's an EmailJS specific error and show it, otherwise generic message
      setErrorMessage(error?.text || 'Unable to send the message right now. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="h-1.5 w-16 bg-sky-400 rounded-full mx-auto mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="text-left space-y-6">
              <h3 className="text-2xl font-bold text-slate-50">Let's build something together!</h3>
              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                I am actively seeking internship opportunities starting from my final year of engineering. If you have an opening in Software Engineering, AI/ML, Full-Stack, or Product Engineering, I would love to connect and contribute to your team.
              </p>
            </div>

            {/* Quick Details Cards */}
            <div className="space-y-4 text-left">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-sky-400/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-800 text-sky-400 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">Email Address</span>
                  <span className="text-sm font-bold text-slate-50 group-hover:text-sky-400 transition-colors duration-300">{email}</span>
                </div>
              </a>

              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/40 border border-white/5 hover:border-sky-400/30 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-slate-800 border border-slate-800 text-sky-400 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 block">Phone Number</span>
                  <span className="text-sm font-bold text-slate-50 group-hover:text-sky-400 transition-colors duration-300">{phone}</span>
                </div>
              </a>

            </div>

            {/* Social handles */}
            <div className="flex items-center gap-4 pt-4 text-left justify-start">
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:border-sky-400 transition-all duration-300"
              >
                <Github className="h-4.5 w-4.5" />
                <span>@{githubUsername}</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white hover:border-sky-400 transition-all duration-300"
              >
                <Linkedin className="h-4.5 w-4.5" />
                <span>@{linkedinUsername}</span>
              </a>
            </div>

          </div>

          {/* Form submission column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 text-left shadow-2xl h-full flex flex-col justify-center">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex p-3 rounded-full bg-emerald-500/10 text-emerald-500 mb-2">
                    <CheckCircle2 className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-50">Message Sent!</h3>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you for reaching out, Gadde. Your message has been submitted. I will respond to you shortly!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-800/60 border border-slate-800 text-sm text-slate-50 focus:outline-none focus:border-sky-400 transition-all font-sans"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-5 py-4 rounded-xl bg-slate-800/60 border border-slate-800 text-sm text-slate-50 focus:outline-none focus:border-sky-400 transition-all font-sans"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-400">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-800/60 border border-slate-800 text-sm text-slate-50 focus:outline-none focus:border-sky-400 transition-all font-sans"
                      placeholder="Opportunity / Collaboration"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">Message Content</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={6}
                      required
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-slate-800/60 border border-slate-800 text-sm text-slate-50 focus:outline-none focus:border-sky-400 transition-all font-sans"
                      placeholder="Hello, I'd like to talk about an opportunity..."
                    />
                  </div>

                  {errorMessage && (
                    <p className="text-sm text-rose-400 font-medium">{errorMessage}</p>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-sky-500 hover:bg-sky-400 disabled:bg-sky-700 disabled:opacity-50 transition-all duration-300 shadow-xl hover:shadow-sky-500/10"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                    <Send className="h-4.5 w-4.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
