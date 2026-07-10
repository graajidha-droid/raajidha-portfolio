import React, { useState, useEffect } from 'react';
import { ExternalLink, Terminal, Code2, GitBranch, RefreshCw } from 'lucide-react';
import { resumeData } from '../data/resumeData';

export default function CodingProfiles() {
  const profiles = resumeData.codingProfiles || [];

  // Live Stats State
  const [leetcodeStats, setLeetcodeStats] = useState({ solved: '150+', badges: '2', loading: true });
  const [githubStats, setGithubStats] = useState({ repos: '12', contributions: '250+', loading: true });
  const [hackerRankStats, setHackerRankStats] = useState({ badges: '4 Stars', skills: 'Python, SQL', loading: true });

  useEffect(() => {
    // 1. Fetch GitHub Repos
    fetch('https://api.github.com/users/graajidha-droid')
      .then(res => res.json())
      .then(data => {
        if (data && data.public_repos !== undefined) {
          setGithubStats({
            repos: String(data.public_repos),
            contributions: '350+',
            loading: false
          });
        } else {
          setGithubStats(prev => ({ ...prev, loading: false }));
        }
      })
      .catch(() => {
        setGithubStats(prev => ({ ...prev, loading: false }));
      });

    // 2. Fetch LeetCode Solved Count
    fetch('https://leetcode-api-faisalshohag.vercel.app/graajidha_gadde')
      .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
      })
      .then(data => {
        if (data && data.totalSolved !== undefined) {
          setLeetcodeStats({
            solved: String(data.totalSolved),
            badges: String(data.badgesCount || '2'),
            loading: false
          });
        } else {
          setLeetcodeStats(prev => ({ ...prev, loading: false }));
        }
      })
      .catch(() => {
        // Fallback API
        fetch('https://alfa-leetcode-api.onrender.com/graajidha_gadde/solved')
          .then(res => res.json())
          .then(data => {
            if (data && data.solvedProblem !== undefined) {
              setLeetcodeStats({
                solved: String(data.solvedProblem),
                badges: '2',
                loading: false
              });
            } else {
              setLeetcodeStats(prev => ({ ...prev, loading: false }));
            }
          })
          .catch(() => {
            setLeetcodeStats(prev => ({ ...prev, loading: false }));
          });
      });

    // 3. HackerRank Dynamic Sync Simulator
    const timer = setTimeout(() => {
      setHackerRankStats({
        badges: '4 Stars',
        skills: 'Python, SQL',
        loading: false
      });
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const getIcon = (id) => {
    switch (id) {
      case 'leetcode':
        return <Code2 className="h-8 w-8 text-sky-400" />;
      case 'github':
        return <GitBranch className="h-8 w-8 text-sky-400" />;
      case 'hackerrank':
        return <Terminal className="h-8 w-8 text-sky-400" />;
      default:
        return <Code2 className="h-8 w-8 text-sky-400" />;
    }
  };

  const getLiveValue = (profileId, label, defaultValue) => {
    if (profileId === 'leetcode') {
      if (label === 'Problems Solved') return leetcodeStats.solved;
      if (label === 'Badges') return leetcodeStats.badges;
    }
    if (profileId === 'github') {
      if (label === 'Repositories') return githubStats.repos;
      if (label === 'Contributions') return githubStats.contributions;
    }
    if (profileId === 'hackerrank') {
      if (label === 'Badges') return hackerRankStats.badges;
      if (label === 'Skill Verified') return hackerRankStats.skills;
    }
    return defaultValue;
  };

  const isProfileLoading = (profileId) => {
    if (profileId === 'leetcode') return leetcodeStats.loading;
    if (profileId === 'github') return githubStats.loading;
    if (profileId === 'hackerrank') return hackerRankStats.loading;
    return false;
  };

  if (!profiles.length) return null;

  return (
    <section id="profiles" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Coding <span className="bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-transparent">Profiles</span>
          </h2>
          <div className="h-1.5 w-16 bg-sky-400 rounded-full mx-auto mt-3" />
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {profiles.map((profile) => {
            const loading = isProfileLoading(profile.id);
            return (
              <div key={profile.id} className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl hover:border-sky-400/50 hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex justify-between items-start mb-4 sm:mb-6">
                  <div className="p-3 sm:p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-sky-400 shadow-inner group-hover:scale-110 group-hover:shadow-sky-400/20 transition-all duration-300">
                    {getIcon(profile.id)}
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <a
                      href={profile.link}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 sm:p-2.5 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-sky-500 shadow-md transition-all duration-300"
                      aria-label={`Open ${profile.platform} Profile`}
                    >
                      <ExternalLink className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                    </a>
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-50 group-hover:text-sky-400 transition-colors">{profile.platform}</h3>
                  <div className="mt-2 inline-flex items-center gap-2 px-3 py-1.5 bg-sky-400/10 border border-sky-400/30 rounded-full">
                    <span className="text-xs sm:text-sm text-sky-400 font-bold">@</span>
                    <p className="text-xs sm:text-sm text-sky-300 font-mono font-semibold tracking-wider">{profile.username}</p>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-5 border-t border-white/10">
                  {profile.stats.map((stat, i) => (
                    <div key={i} className="flex justify-between items-center gap-3">
                      <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400">{stat.label}</span>
                      {loading ? (
                        <span className="h-5 w-16 bg-slate-800 rounded animate-pulse" />
                      ) : (
                        <span className="text-xs sm:text-sm font-extrabold text-sky-400 bg-sky-400/10 border border-sky-400/20 px-2.5 sm:px-3 py-1 rounded-md transition-all duration-300 whitespace-nowrap">
                          {getLiveValue(profile.id, stat.label, stat.value)}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
