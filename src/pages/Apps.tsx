import React from 'react';
import { motion } from 'motion/react';
import { Download, Info, ExternalLink, Sparkles } from 'lucide-react';

export default function Apps() {
  const apps = [
    {
      name: 'LayarFilm',
      tagline: 'STREAMING',
      version: 'v4.0.0',
      description: 'Aplikasi streaming film & serial TV terlengkap untuk Android. Tonton ribuan judul dari berbagai genre — gratis, tanpa iklan, dan tanpa batas.',
      tags: ['Film & Serial TV', 'Anime', '4K Quality', 'Subtitle', 'Offline'],
      stats: [
        { value: '500K+', label: 'JUDUL', color: 'text-red-500' },
        { value: 'Gratis', label: 'HARGA', color: 'text-red-500' },
        { value: 'Android', label: 'PLATFORM', color: 'text-red-500' },
      ],
      link: 'https://layarfilm.cloud',
      buttonBg: 'bg-red-600 hover:bg-red-700 active:bg-red-800 text-white',
      themeColor: 'red',
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
          {/* Popcorn container box SVG */}
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Popcorn Fluff on top */}
            <circle cx="38" cy="30" r="12" fill="#FBBF24" />
            <circle cx="50" cy="24" r="14" fill="#FBBF24" />
            <circle cx="62" cy="30" r="12" fill="#FBBF24" />
            <circle cx="45" cy="32" r="10" fill="#F59E0B" />
            <circle cx="55" cy="32" r="10" fill="#F59E0B" />
            
            {/* Popcorn Bucket */}
            <path d="M30 40 L70 40 L64 90 L36 90 Z" fill="#EF4444" />
            {/* White stripes */}
            <path d="M37 40 L43 40 L41 90 L37 90 Z" fill="#FFFFFF" />
            <path d="M47 40 L53 40 L52 90 L48 90 Z" fill="#FFFFFF" />
            <path d="M57 40 L63 40 L59 90 L55 90 Z" fill="#FFFFFF" />
            
            {/* Blue play badge in center */}
            <circle cx="50" cy="65" r="16" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
            <circle cx="50" cy="65" r="12" fill="#3B82F6" />
            {/* Play triangle */}
            <polygon points="47,59 57,65 47,71" fill="#FFFFFF" />
          </svg>
        </div>
      ),
      headerBg: 'bg-gradient-to-b from-[#4A0E17] to-[#1E1E24]',
      badgeBg: 'bg-red-500/10 text-red-400 border border-red-500/20',
    },
    {
      name: 'Listplay',
      tagline: 'MEDIA PLAYER',
      version: 'Terbaru',
      description: 'Pengalaman YouTube & Music dalam satu aplikasi — tanpa iklan, tanpa gangguan. Tonton video, nikmati musik, buat playlist, dan akses konten favorit dengan fitur premium yang sepenuhnya gratis.',
      tags: ['YouTube Tanpa Iklan', 'Streaming Musik', 'Background Play', 'Playlist', 'Download Offline', 'Premium Gratis'],
      stats: [
        { value: '0 Iklan', label: 'GANGGUAN', color: 'text-blue-500' },
        { value: 'Gratis', label: 'HARGA', color: 'text-blue-500' },
        { value: 'Android', label: 'PLATFORM', color: 'text-blue-500' },
      ],
      link: 'https://listplays.vercel.app',
      buttonBg: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white',
      themeColor: 'blue',
      icon: (
        <div className="relative w-28 h-28 flex items-center justify-center filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.4)]">
          {/* Listplay stylized icon */}
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-[#1E293B] to-[#0F172A] border border-white/10 flex items-center justify-center p-4">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Red double-arrow play symbol */}
              <path d="M20 20 L80 50 L20 80 L35 50 Z" fill="#EF4444" />
              <path d="M35 32 L70 50 L35 68 L45 50 Z" fill="#DC2626" />
            </svg>
          </div>
        </div>
      ),
      headerBg: 'bg-gradient-to-b from-[#0F2942] to-[#1E1E24]',
      badgeBg: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    }
  ];

  return (
    <section className="pt-32 pb-24 relative overflow-hidden min-h-screen bg-[#0F0F12] text-zinc-100">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/5 via-transparent to-transparent -z-10" />
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 mb-4 border border-indigo-500/10">
              <Sparkles className="w-3.5 h-3.5" /> Premium Apps
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
              Our Application Suite
            </h2>
            <p className="text-zinc-400 text-base">
              Nikmati layanan multimedia premium gratis tanpa batas dengan aplikasi terbaik pilihan kami.
            </p>
          </motion.div>
        </div>

        {/* Beautiful Apps Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-[#17171C] border border-[#23232C] rounded-[2rem] overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col justify-between"
            >
              {/* Card Header (Image Area) */}
              <div className={`h-64 ${app.headerBg} relative flex items-center justify-center overflow-hidden border-b border-[#23232C]`}>
                {/* Decorative background grid pattern */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:14px_24px]" />
                
                {/* Tagline Badge */}
                <div className="absolute top-6 right-6">
                  <span className={`text-[10px] tracking-widest font-black px-3.5 py-1.5 rounded-full ${app.badgeBg}`}>
                    {app.tagline}
                  </span>
                </div>

                {/* Big Center Icon */}
                {app.icon}
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  {/* Title and Version */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {app.name}
                    </h3>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-[#23232C] text-zinc-400 border border-[#2D2D38]">
                      {app.version}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6 font-normal">
                    {app.description}
                  </p>

                  {/* Tags / Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-[#1E1E24] text-zinc-300 border border-[#2D2D38]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Divider line */}
                  <div className="h-px bg-[#23232C] w-full mb-6" />

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {app.stats.map((stat) => (
                      <div key={stat.label} className="text-left">
                        <div className={`text-xl font-bold ${stat.color} tracking-tight leading-none mb-1.5`}>
                          {stat.value}
                        </div>
                        <div className="text-[10px] tracking-widest font-bold text-zinc-500 uppercase">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-grow flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-semibold transition-all duration-300 text-sm active:scale-95 ${app.buttonBg}`}
                    >
                      <Download className="w-4 h-4" />
                      Download APK
                    </a>
                    
                    <a
                      href={app.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-[#23232C] text-zinc-400 hover:text-white border border-[#2D2D38] hover:bg-[#2D2D38] transition-colors flex items-center justify-center"
                      title="Website Info"
                    >
                      {app.themeColor === 'red' ? (
                        <Info className="w-5 h-5" />
                      ) : (
                        <ExternalLink className="w-5 h-5" />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
