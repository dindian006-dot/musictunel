import React from 'react';
import { Music } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 py-12 border-t border-white/5 text-center text-zinc-500 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4" />
          <span className="font-semibold text-zinc-300">MusicTunel</span>
        </div>
        <p>
          Based on the open-source SimpMusic project. Not affiliated with YouTube or Google.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
