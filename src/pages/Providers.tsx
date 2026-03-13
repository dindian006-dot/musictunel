import React from 'react';
import { motion } from 'motion/react';
import { Music, Shield, Github, Smartphone, Zap } from 'lucide-react';
import { ProviderCard } from '../components/Cards';

export default function Providers() {
  return (
    <section id="providers" className="pt-32 pb-24 relative overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Trusted Providers</h2>
          <p className="text-zinc-400">MusicTunel integrates with industry-leading services and technologies to deliver a world-class experience.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          <ProviderCard 
            icon={<Music className="w-8 h-8 text-red-500" />}
            name="YouTube Music"
            category="Music Source"
          />
          <ProviderCard 
            icon={<Music className="w-8 h-8 text-emerald-500" />}
            name="Spotify"
            category="Integration"
          />
          <ProviderCard 
            icon={<Shield className="w-8 h-8 text-blue-400" />}
            name="AdBlock"
            category="Privacy"
          />
          <ProviderCard 
            icon={<div className="w-8 h-8 text-orange-400 flex items-center justify-center font-bold text-2xl italic">CF</div>}
            name="Cloudflare"
            category="CDN & Security"
          />
          <ProviderCard 
            icon={<div className="w-8 h-8 text-white flex items-center justify-center"><svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full"><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg></div>}
            name="Vercel"
            category="Deployment"
          />
          <ProviderCard 
            icon={<Github className="w-8 h-8 text-white" />}
            name="GitHub"
            category="Open Source"
          />
          <ProviderCard 
            icon={<Smartphone className="w-8 h-8 text-emerald-400" />}
            name="Android"
            category="Platform"
          />
          <ProviderCard 
            icon={<Zap className="w-8 h-8 text-indigo-400" />}
            name="Kotlin"
            category="Language"
          />
        </div>
      </div>
    </section>
  );
}
