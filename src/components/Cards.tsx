import React from 'react';
import { motion } from 'motion/react';

export function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl hover:bg-zinc-800/50 transition-colors">
      <div className="w-12 h-12 rounded-2xl bg-zinc-800 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-zinc-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
}

export function ProviderCard({ icon, name, category }: { icon: React.ReactNode, name: string, category: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-zinc-900/50 border border-white/5 p-6 rounded-3xl flex flex-col items-center text-center group hover:bg-zinc-900 transition-all hover:border-indigo-500/30"
    >
      <div className="w-16 h-16 rounded-2xl bg-zinc-950 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
        {icon}
      </div>
      <h3 className="font-bold text-white mb-1">{name}</h3>
      <p className="text-xs text-zinc-500 uppercase tracking-widest">{category}</p>
    </motion.div>
  );
}
