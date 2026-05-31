import React, { useState, useEffect, useRef } from 'react';
import { Project, TerminalLine } from '../types';
import { PROFILE_DATA } from '../data';

interface TerminalModeProps {
  onBack: () => void;
  onSwitchToGui: () => void;
}

export default function TerminalMode({ onBack, onSwitchToGui }: TerminalModeProps) {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [commandInput, setCommandInput] = useState('');
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const timeoutsRef = useRef<number[]>([]);

  // Auto-scroll to the bottom of the terminal on new line addition
  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  // Set up the initial animated load sequence of console commands (original look)
  useEffect(() => {
    // Clear out any old timers just in case
    timeoutsRef.current.forEach(id => clearTimeout(id));
    timeoutsRef.current = [];
    setLines([]);

    const initialSchedule: { type: TerminalLine['type']; text?: string; items?: string[]; project?: Project; delay: number }[] = [
      { type: 'output', text: 'Last login: Sat May 30 2026 — vivek@portfolio', delay: 0 },
      { type: 'blank', delay: 100 },
      { type: 'cmd', text: 'whoami', delay: 300 },
      { type: 'output', text: `${PROFILE_DATA.name} — ${PROFILE_DATA.role}`, delay: 550 },
      { type: 'dim', text: 'Architecting microservices & cloud-native backends · Java · Spring Boot · AWS', delay: 650 },
      { type: 'blank', delay: 700 },
      { type: 'cmd', text: 'ls skills/', delay: 900 },
      { type: 'tags', items: PROFILE_DATA.skills.map(s => s.name), delay: 1150 },
      { type: 'blank', delay: 1200 },
      { type: 'cmd', text: 'ls projects/', delay: 1350 },
      ...PROFILE_DATA.projects.map((p, i) => ({
        type: 'project' as const,
        project: p,
        delay: 1550 + i * 200
      })),
      { type: 'blank', delay: 2150 },
      { type: 'cmd', text: 'cat contact.txt', delay: 2350 },
      { type: 'output', text: `github    →  <a href="${PROFILE_DATA.contact.github}" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">${PROFILE_DATA.contact.github}</a>`, delay: 2550 },
      { type: 'output', text: `linkedin  →  <a href="${PROFILE_DATA.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">${PROFILE_DATA.contact.linkedin}</a>`, delay: 2650 },
      { type: 'output', text: `email     →  <a href="mailto:${PROFILE_DATA.contact.email}" class="underline hover:text-white">${PROFILE_DATA.contact.email}</a>`, delay: 2750 },
      { type: 'blank', delay: 2850 },
      { type: 'prompt', delay: 3000 },
    ];

    initialSchedule.forEach((item, index) => {
      const timeoutId = window.setTimeout(() => {
        setLines(pref => [
          ...pref,
          {
            id: `init-${index}`,
            type: item.type,
            text: item.text,
            items: item.items,
            project: item.project
          }
        ]);
      }, item.delay);
      timeoutsRef.current.push(timeoutId);
    });

    return () => {
      // Clean up timers on unmount
      timeoutsRef.current.forEach(id => clearTimeout(id));
    };
  }, []);

  const COMMANDS = ['help', 'whoami', 'skills', 'projects', 'contact', 'clear', 'gui'];

  // Autofocus the terminal input field on load or click on terminal window
  const focusInput = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault(); // Prevent browser tab-navigation
      const currentVal = commandInput.trim().toLowerCase();
      if (!currentVal) return;

      const matches = COMMANDS.filter(cmd => cmd.startsWith(currentVal));

      if (matches.length === 1) {
        // Exactly one command match - autocomplete it!
        setCommandInput(matches[0]);
      } else if (matches.length > 1) {
        // Multiple command matches - find Longest Common Prefix (LCP)
        let lcp = matches[0];
        for (let i = 1; i < matches.length; i++) {
          while (matches[i].indexOf(lcp) !== 0) {
            lcp = lcp.substring(0, lcp.length - 1);
            if (!lcp) break;
          }
        }

        if (lcp && lcp.length > currentVal.length) {
          // If we have a longer common prefix, complete up to that
          setCommandInput(lcp);
        } else {
          // Print matching command options below
          const cmdId = Date.now().toString();
          setLines(prev => [
            ...prev,
            { id: `${cmdId}-user-tab`, type: 'cmd', text: commandInput },
            { id: `${cmdId}-options`, type: 'output', text: matches.map(m => `<span style="color:#00cc6a; margin-right: 1.5rem">${m}</span>`).join('') }
          ]);
        }
      }
    }
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    setCommandInput('');

    if (!cmd) return;

    const cmdId = Date.now().toString();
    const newLines: TerminalLine[] = [
      { id: `${cmdId}-user-cmd`, type: 'cmd', text: cmd }
    ];

    if (cmd === 'help') {
      newLines.push(
        { id: `${cmdId}-help-hdr`, type: 'output', text: 'Available commands:' },
        { id: `${cmdId}-help-who`, type: 'dim', text: '  whoami   — about me' },
        { id: `${cmdId}-help-ski`, type: 'dim', text: '  skills   — tech stack' },
        { id: `${cmdId}-help-pro`, type: 'dim', text: '  projects — my work' },
        { id: `${cmdId}-help-con`, type: 'dim', text: '  contact  — get in touch' },
        { id: `${cmdId}-help-clr`, type: 'dim', text: '  clear    — reset terminal screen' },
        { id: `${cmdId}-help-gui`, type: 'dim', text: '  gui      — switch to visual GUI mode' }
      );
   } else if (cmd === 'whoami') {
  newLines.push({
    id: `${cmdId}-who-out`,
    type: 'output',
    text: `${PROFILE_DATA.name} — ${PROFILE_DATA.role}`
  }, {
    id: `${cmdId}-who-dim`,
    type: 'dim',
    text: 'Architecting microservices & cloud-native backends · Java · Spring Boot · AWS'
  });
    } else if (cmd === 'skills') {
      newLines.push({
        id: `${cmdId}-skills-out`,
        type: 'tags',
        items: PROFILE_DATA.skills.map(s => `${s.icon} ${s.name} (${s.level})`)
      });
    } else if (cmd === 'projects') {
      PROFILE_DATA.projects.forEach((p, idx) => {
        newLines.push({
          id: `${cmdId}-project-${idx}`,
          type: 'project',
          project: p
        });
      });
    } else if (cmd === 'contact') {
      newLines.push(
        { id: `${cmdId}-con-gh`, type: 'output', text: `github    →  <a href="${PROFILE_DATA.contact.github}" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">${PROFILE_DATA.contact.github}</a>` },
        { id: `${cmdId}-con-li`, type: 'output', text: `linkedin  →  <a href="${PROFILE_DATA.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="underline hover:text-white">${PROFILE_DATA.contact.linkedin}</a>` },
        { id: `${cmdId}-con-em`, type: 'output', text: `email     →  <a href="mailto:${PROFILE_DATA.contact.email}" class="underline hover:text-white">${PROFILE_DATA.contact.email}</a>` }
      );
    } else if (cmd === 'clear') {
      setLines([{ id: `clear-prompt-${Date.now()}`, type: 'prompt' }]);
      return;
    } else if (cmd === 'gui') {
      newLines.push({ id: `${cmdId}-gui-out`, type: 'output', text: 'Switching to GUI mode...' });
      setLines(prev => [...prev, ...newLines]);
      setTimeout(() => {
        onSwitchToGui();
      }, 500);
      return;
    } else {
      newLines.push({
        id: `${cmdId}-err`,
        type: 'dim',
        text: `command not found: ${cmd}. Type <span style="color:#00ff88">help</span> for available commands.`
      });
    }

    setLines(prev => [...prev, ...newLines]);
  };

  return (
    <div 
      id="terminal-mode" 
      className="min-h-screen bg-[#0a0a0a] text-[#00ff88] font-mono pt-[52px] pb-12 transition-all duration-300 select-text flex flex-col"
      onClick={focusInput}
    >
      {/* Portfolio navigation bar */}
      <nav className="portfolio-nav fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 flex items-center justify-between bg-[#0a0a0a]/95 border-b border-[#00ff88]/10">
        <button 
          id="btn-term-back"
          onClick={(e) => { e.stopPropagation(); onBack(); }}
          className="nav-back cursor-pointer text-[11px] tracking-[2px] uppercase py-[6px] px-[14px] rounded-[2px] border border-[#00ff88]/30 bg-none text-[#00ff88] font-mono hover:bg-[#00ff88]/10 hover:border-[#00ff88] transition-all"
        >
          ← Back
        </button>
        <button 
          id="btn-term-switch"
          onClick={(e) => { e.stopPropagation(); onSwitchToGui(); }}
          className="nav-switch cursor-pointer text-[11px] tracking-[2px] uppercase py-[6px] px-[14px] rounded-[2px] border border-[#00ff88]/30 bg-none text-[#00ff88] font-mono hover:bg-[#00ff88]/10 hover:border-[#00ff88] transition-all"
        >
          ⇄ Switch to GUI
        </button>
      </nav>

      <div className="terminal-window max-w-[860px] mx-auto px-3 sm:px-6 pt-8 pb-20 w-full flex-1 flex flex-col justify-start">
        {/* Terminal Header */}
        <div className="term-header border border-[#00ff88]/15 rounded-t-lg px-4 py-2.5 flex items-center gap-2 bg-[#00ff88]/[0.03] select-none">
          <div className="term-dot red w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="term-dot yellow w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="term-dot green w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <span className="term-title text-[11px] text-[#00ff88]/40 mx-auto tracking-[1px] font-mono">vivek@portfolio ~ bash</span>
        </div>

        {/* Terminal Body */}
        <div className="term-body border border-[#00ff88]/15 border-t-0 rounded-b-lg p-3 sm:p-7 bg-[#00ff88]/[0.01] min-h-[70vh] flex flex-col justify-start flex-1" >
          <div className="flex-1 space-y-1">
            {lines.map((line) => {
              if (line.type === 'blank') {
                return <div key={line.id} className="h-4" />;
              }
              if (line.type === 'cmd') {
                return (
                  <div key={line.id} className="term-line cmd text-[13px] text-[#00ff88] flex flex-wrap items-center font-mono">
                    <span className="font-bold select-none mr-2 font-mono flex items-center">
                      <span className="text-[#00cc6a]">vivek@ubuntu</span>
                      <span className="text-white">:</span>
                      <span className="text-[#729fcf]">~</span>
                      <span className="text-white">$</span>
                    </span>
                    <span>{line.text}</span>
                  </div>
                );
              }
              if (line.type === 'output') {
                return (
                  <div 
                    key={line.id} 
                    className="term-line output text-[13px] leading-relaxed text-[#00ff88]/80 pl-4 font-mono break-all" 
                    dangerouslySetInnerHTML={{ __html: line.text || '' }}
                  />
                );
              }
              if (line.type === 'dim') {
                return (
                  <div 
                    key={line.id} 
                    className="term-line dim text-[11px] leading-normal text-[#00ff88]/40 pl-4 font-mono"
                    dangerouslySetInnerHTML={{ __html: line.text || '' }}
                  />
                );
              }
              if (line.type === 'tags' && line.items) {
                return (
                  <div key={line.id} className="term-line output pl-4 flex flex-wrap gap-1.5 py-1">
                    {line.items.map((item, idx) => (
                      <span key={idx} className="term-tag inline-block border border-[#00ff88]/30 py-[1px] px-2 text-[11px] rounded-[2px] text-[#00cc6a] hover:bg-[#00ff88]/10 transition-all">
                        {item}
                      </span>
                    ))}
                  </div>
                );
              }
              if (line.type === 'project' && line.project) {
                const p = line.project;
                return (
                  <div key={line.id} className="pl-4 py-2 my-1 border-l border-[#00ff88]/10 bg-[#00ff88]/[0.02] rounded-r">
                    <div className="text-white font-semibold text-[13px]">{p.name}/</div>
                    <div className="text-[#00ff88]/50 text-[11px] mt-0.5">{p.desc}</div>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[10px] border border-[#00ff88]/20 px-1.5 py-0.5 rounded text-[#00cc6a] bg-[rgba(0,255,136,0.03)] font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              }
              return null;
            })}

            {/* Blinking Ubuntu style block input prompt matching original clean aesthetic */}
            {lines.some(l => l.type === 'prompt') && (
              <form onSubmit={handleCommandSubmit} className="term-input-row flex items-center gap-0 mt-5 bg-transparent border-none p-0 outline-none select-none">
                <span className="term-prompt font-bold select-none font-mono flex items-center mr-2">
                  <span className="text-[#00cc6a]">vivek@ubuntu</span>
                  <span className="text-white">:</span>
                  <span className="text-[#729fcf]">~</span>
                  <span className="text-white mr-1">$</span>
                </span>
                <input
                  id="term-cli-input"
                  ref={inputRef}
                  type="text"
                  value={commandInput}
                  onChange={(e) => setCommandInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="term-input flex-1 bg-transparent border-none outline-none text-[#00ff88] font-mono text-[13px] caret-[#00ff88] p-0 m-0"
                  placeholder=""
                  autoComplete="off"
                  autoFocus
                />
              </form>
            )}

            <div ref={terminalBottomRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
