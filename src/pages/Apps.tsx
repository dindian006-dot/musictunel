import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Laptop, Tv, Sparkles, Download, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { useDownloadModal } from '../context/DownloadModalContext';

export default function Apps() {
  const { openDownloadModal } = useDownloadModal();

  const appsList = [
    {
      id: 'musictunel-android',
      name: 'MusicTunel for Android',
      status: 'Available',
      icon: <Smartphone className="w-8 h-8 text-indigo-500" />,
      description: 'The standard, feature-packed edition of MusicTunel. Experience full Material You integration, high-fidelity audio playback, custom lyrics blurring, and intelligent caching.',
      badge: 'Recommended',
      features: ['Material You Theming', 'Synchronized Lyrics', 'Background Playback', 'Offline Downloads'],
      actionText: 'Download APK',
      action: openDownloadModal,
    },
    {
      id: 'musictunel-lite',
      name: 'MusicTunel Lite',
      status: 'Available',
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      description: 'Ultra-lightweight edition designed for older Android devices or limited storage. Focuses on core music streaming functions while using minimal memory and battery.',
      badge: 'Lightweight',
      features: ['Compact Size (~8MB)', 'Low RAM Usage', 'Saves Data', 'Essential Player Features'],
      actionText: 'Download Lite APK',
      action: openDownloadModal, // Standard download trigger (has selection for Universal/Lite)
    },
    {
      id: 'musictunel-desktop',
      name: 'MusicTunel Desktop',
      status: 'Coming Soon',
      icon: <Laptop className="w-8 h-8 text-emerald-500" />,
      description: 'Experience your music on the big screen. The desktop companion features a gorgeous fluid interface, global media keys, lyrics synchronization, and rich-presence integration.',
      badge: 'In Development',
      features: ['Cross-platform (Win/Mac/Linux)', 'Hotkeys Support', 'Rich Discord Status', 'Audio Equalizer'],
      actionText: 'Notify Me',
      action: () => alert('MusicTunel Desktop is currently in development. Stay tuned on our GitHub repository!'),
    },
    {
      id: 'musictunel-tv',
      name: 'MusicTunel TV',
      status: 'Coming Soon',
      icon: <Tv className="w-8 h-8 text-purple-500" />,
      description: 'Brings MusicTunel to your living room. An optimized user interface for remote controls, custom-designed screensavers, and high-quality home theater audio outputs.',
      badge: 'Planned',
      features: ['Android TV / Fire TV Support', 'Remote Control Navigation', 'Beautiful Screensavers', 'Direct Audio Stream'],
      actionText: 'Notify Me',
      action: () => alert('MusicTunel TV is planned for our roadmap. Follow us for updates!'),
    },
  ];

  return (
    <section className="pt-32 pb-24 relative overflow-hidden min-h-screen">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Product Suite
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white tracking-tight">
              MusicTunel Ecosystem
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-lg">
              Explore our beautiful suite of music applications, tailored for all your devices and platforms.
            </p>
          </motion.div>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {appsList.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col justify-between bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 p-8 rounded-[2rem] hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-indigo-500/5 transition-all duration-300 group"
            >
              {app.badge && (
                <div className="absolute top-6 right-6">
                  <span className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                    app.status === 'Available'
                      ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 border border-zinc-200 dark:border-white/10'
                  }`}>
                    {app.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                  {app.icon}
                </div>

                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                  {app.name}
                </h3>
                
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  {app.description}
                </p>

                <div className="border-t border-zinc-100 dark:border-white/5 pt-6 mb-8">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-4">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-3">
                    {app.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                        <ShieldCheck className="w-4 h-4 text-indigo-500 dark:text-indigo-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <button
                  onClick={app.action}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-2xl font-semibold transition-all ${
                    app.status === 'Available'
                      ? 'bg-zinc-900 dark:bg-white text-white dark:text-black hover:bg-indigo-600 dark:hover:bg-indigo-500 hover:text-white dark:hover:text-white'
                      : 'bg-zinc-100 dark:bg-white/5 text-zinc-400 dark:text-zinc-500 cursor-not-allowed border border-zinc-200 dark:border-white/5'
                  }`}
                >
                  {app.status === 'Available' ? <Download className="w-4 h-4" /> : null}
                  <span>{app.actionText}</span>
                  {app.status === 'Coming Soon' && <ArrowRight className="w-4 h-4 ml-1 opacity-50" />}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
