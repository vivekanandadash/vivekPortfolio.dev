import React from 'react';
import { ExperienceMode } from '../types';

interface ModeSelectorProps {
  onSelectMode: (mode: ExperienceMode) => void;
}

export default function ModeSelector({ onSelectMode }: ModeSelectorProps) {
  return (
    <div 
      id="mode-selector" 
      className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-12 relative overflow-hidden select-none px-6"
    >
      {/* Glow highlight background mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,255,136,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Main Branding Header */}
      <div className="selector-title text-center relative z-10">
        <span className="tag font-mono text-[11px] tracking-[4px] text-[#00ff88] uppercase opacity-70 block mb-4">
          Choose Your Experience
        </span>
        <h1 className="font-sans text-[44px] sm:text-[60px] lg:text-[72px] font-extrabold text-white leading-none tracking-[-2px]">
          vivek<span className="text-[#00ff88]">.</span>dev
        </h1>
        <p className="font-sans text-[14px] text-white/35 mt-3 tracking-[0.5px]">
          Full-Stack Developer · Open to opportunities
        </p>
      </div>

      {/* Choice Buttons */}
      <div className="mode-buttons flex gap-5 flex-wrap justify-center relative z-10 w-full max-w-2xl">
        {/* Terminal Option */}
        <button 
          id="btn-select-terminal"
          onClick={() => onSelectMode('terminal')}
          className="mode-btn cursor-pointer bg-transparent border-none p-0 group w-full sm:w-[230px]"
        >
          <div className="inner h-full flex flex-col items-start gap-3 p-7 border border-white/8 bg-white/[0.02] rounded-[4px] md:w-[230px] w-full text-left transition-all duration-300 group-hover:border-[#00ff88] group-hover:bg-[#00ff88]/[0.05] group-hover:translate-y-[-2px] relative overflow-hidden">
            <div className="icon text-[28px] leading-none mb-1">⌨</div>
            <span className="label font-sans text-[18px] font-black text-[#00ff88] block">
              Terminal
            </span>
            <p className="desc font-sans text-[12px] text-white/40 leading-relaxed">
              CLI-style interface.
              <br />
              Navigate with commands.
            </p>
            <span className="arrow absolute bottom-6 right-6 text-[18px] text-[#00ff88] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
              →
            </span>
          </div>
        </button>

        {/* GUI Option */}
        <button 
          id="btn-select-gui"
          onClick={() => onSelectMode('gui')}
          className="mode-btn cursor-pointer bg-transparent border-none p-0 group w-full sm:w-[230px]"
        >
          <div className="inner h-full flex flex-col items-start gap-3 p-7 border border-white/8 bg-white/[0.02] rounded-[4px] md:w-[230px] w-full text-left transition-all duration-300 group-hover:border-[#ff4d00] group-hover:bg-[#ff4d00]/[0.04] group-hover:translate-y-[-2px] relative overflow-hidden">
            <div className="icon text-[28px] leading-none mb-1">◈</div>
            <span className="label font-sans text-[18px] font-black text-[#ff4d00] block">
              GUI
            </span>
            <p className="desc font-sans text-[12px] text-white/40 leading-relaxed">
              Visual interface.
              <br />
              Cards, motion & color.
            </p>
            <span className="arrow absolute bottom-6 right-6 text-[18px] text-[#ff4d00] opacity-0 group-hover:opacity-100 group-hover:translate-x-1.5 transition-all">
              →
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
