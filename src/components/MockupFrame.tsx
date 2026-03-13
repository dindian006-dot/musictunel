import React from 'react';

export default function MockupFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[280px] md:max-w-[320px]">
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl -z-10 rounded-full" />
      <div className="relative rounded-[2.5rem] border-[8px] border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl aspect-[9/19.5] flex flex-col">
        {children}
      </div>
    </div>
  );
}
