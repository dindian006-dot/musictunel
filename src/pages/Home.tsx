import React from 'react';
import { motion } from 'motion/react';
import { Download, Github, Shield, CloudOff, Smartphone, ListMusic, Zap, Radio, Settings, Heart, Play, Music } from 'lucide-react';
import { FeatureCard } from '../components/Cards';
import MockupFrame from '../components/MockupFrame';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/20 via-zinc-950 to-zinc-950 -z-10" />
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6 border border-indigo-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              Latest Release v1.2.0
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Your music,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                without limits.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto">
              MusicTunel is a beautiful, open-source music player for Android. Stream your favorite tracks, download for offline listening, and enjoy an ad-free experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#download" className="flex items-center justify-center gap-2 bg-indigo-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 transition-colors">
                <Download className="w-5 h-5" />
                Download APK
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 bg-white/5 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors border border-white/10">
                <Github className="w-5 h-5" />
                View Source
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Experience Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Screen 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <MockupFrame>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Now Playing</div>
                    <Settings className="w-4 h-4 text-zinc-500" />
                  </div>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-8 shadow-2xl flex items-center justify-center">
                    <Music className="w-20 h-20 text-white/20" />
                  </div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold mb-1">Midnight City</h3>
                    <p className="text-zinc-500">M83 • Hurry Up, We're Dreaming</p>
                  </div>
                  <div className="w-full h-1 bg-zinc-800 rounded-full mb-8 overflow-hidden">
                    <div className="w-1/3 h-full bg-indigo-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <Radio className="w-6 h-6 text-zinc-500" />
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <Play className="w-6 h-6 text-black fill-current" />
                      </div>
                    </div>
                    <Heart className="w-6 h-6 text-zinc-500" />
                  </div>
                </div>
              </MockupFrame>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3">Beautiful Player</h3>
                <p className="text-zinc-400">A clean, immersive playback experience that puts your music front and center.</p>
              </div>
            </motion.div>

            {/* Screen 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <MockupFrame>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Library</div>
                    <div className="w-8 h-8 rounded-full bg-zinc-800" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { title: "Liked Songs", count: "1,240 songs", color: "from-pink-500 to-rose-500" },
                      { title: "Daily Mix 1", count: "50 songs", color: "from-emerald-500 to-teal-500" },
                      { title: "Discover Weekly", count: "30 songs", color: "from-blue-500 to-indigo-500" },
                      { title: "Release Radar", count: "20 songs", color: "from-amber-500 to-orange-500" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-zinc-900/50 border border-white/5">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color}`} />
                        <div>
                          <div className="font-bold text-sm">{item.title}</div>
                          <div className="text-xs text-zinc-500">{item.count}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </MockupFrame>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3">Smart Library</h3>
                <p className="text-zinc-400">Organize your music with ease. Automatic categorization and smart playlists at your fingertips.</p>
              </div>
            </motion.div>

            {/* Screen 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <MockupFrame>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Settings</div>
                  </div>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Appearance</div>
                      <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-between">
                        <div className="text-sm">Dynamic Theming</div>
                        <div className="w-8 h-4 bg-indigo-500 rounded-full relative">
                          <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                      <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-between">
                        <div className="text-sm">Pure Black Mode</div>
                        <div className="w-8 h-4 bg-zinc-700 rounded-full relative">
                          <div className="absolute left-1 top-1 w-2 h-2 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest">Audio</div>
                      <div className="p-4 rounded-2xl bg-zinc-900/50 border border-white/5 flex items-center justify-between">
                        <div className="text-sm">Audio Quality</div>
                        <div className="text-xs text-indigo-400">Extreme</div>
                      </div>
                    </div>
                  </div>
                </div>
              </MockupFrame>
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold mb-3">Dynamic Themes</h3>
                <p className="text-zinc-400">Full Material You support. The app's colors adapt to your wallpaper and system theme.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need</h2>
            <p className="text-zinc-400">MusicTunel is packed with features to make your listening experience perfect, without any of the bloat.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Shield className="w-6 h-6 text-emerald-400" />}
              title="Ad-Free Experience"
              description="Listen to your favorite music without any interruptions. No audio ads, no banner ads, ever."
            />
            <FeatureCard 
              icon={<CloudOff className="w-6 h-6 text-blue-400" />}
              title="Offline Playback"
              description="Download your favorite tracks, albums, and playlists to listen when you don't have an internet connection."
            />
            <FeatureCard 
              icon={<Smartphone className="w-6 h-6 text-purple-400" />}
              title="Material You"
              description="A beautiful, modern interface that adapts to your system colors. Fully supports Android 12+ dynamic theming."
            />
            <FeatureCard 
              icon={<ListMusic className="w-6 h-6 text-pink-400" />}
              title="Synchronized Lyrics"
              description="Sing along with synchronized lyrics for millions of songs, fetched automatically as you listen."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-amber-400" />}
              title="High Quality Audio"
              description="Stream and download music in the highest available quality for the best listening experience."
            />
            <FeatureCard 
              icon={<Radio className="w-6 h-6 text-indigo-400" />}
              title="Smart Playlists"
              description="Automatically generated playlists based on your listening habits, favorites, and most played tracks."
            />
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-indigo-500/5" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to tune in?</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
            Download MusicTunel today and take control of your music listening experience. Free and open-source forever.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition-colors group">
              <Download className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs font-medium text-zinc-600">Download for</div>
                <div className="text-lg leading-none mt-0.5">Android (APK)</div>
              </div>
            </a>
            <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-zinc-800 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-700 transition-colors group">
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <div className="text-xs font-medium text-zinc-400">Available on</div>
                <div className="text-lg leading-none mt-0.5">GitHub</div>
              </div>
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-500">
            Requires Android 8.0 or later.
          </p>
        </div>
      </section>
    </>
  );
}
