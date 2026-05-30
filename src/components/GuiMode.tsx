import React, { useRef, useState } from 'react';
import { PROFILE_DATA } from '../data';
import { Project } from '../types';
import { Sun, Moon, Cpu, GitBranch, Server, Check, X, ExternalLink } from 'lucide-react';

interface GuiModeProps {
  onBack: () => void;
  onSwitchToTerminal: () => void;
}

const SkillLogo = ({ name, isDarkMode }: { name: string; isDarkMode: boolean }) => {
  const deviconMap: Record<string, string> = {
    "Java": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    "Spring Boot": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    "Spring MVC": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    "Spring Data JPA / JPA": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    "Hibernate": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg",
    "Apache Kafka": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachekafka/apachekafka-original.svg",
    "MongoDB": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    "MySQL": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "AWS (EC2, S3, IAM, VPC)": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg",
    "AWS CloudFormation, Terraform, Ansible": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg",
    "Docker": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    "Kubernetes": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg",
    "Jenkins": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
    "Git": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    "GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    "Maven": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg",
    "Postman": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    "Swagger": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg",
    "Linux": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "HTML5 / CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  };

  if (deviconMap[name]) {
    if (name === "GitHub") {
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current shrink-0" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47722 2 2 6.47722 2 12C2 16.4178 4.86538 20.165 8.83984 21.4852C9.34 21.5775 9.52 21.2681 9.52 21.0022C9.52 20.7672 9.51185 20.1428 9.50742 19.317C6.72917 19.9197 6.14375 17.9811 6.14375 17.9811C5.68875 16.8284 5.03125 16.5219 5.03125 16.5219C4.12375 15.9019 5.1 15.9144 5.1 15.9144C6.1025 15.9847 6.63 16.9422 6.63 16.9422C7.52125 18.47 8.97125 18.0284 9.5425 17.7725C9.63375 17.1266 9.8925 16.6859 10.1775 16.4359C7.96 16.1834 5.63 15.3259 5.63 11.5 5.63 10.41 6.02 9.52 6.66 8.82C6.5575 8.5675 6.2175 7.55 6.7575 6.18C6.7575 6.18 7.595 5.9125 9.5 7.2C10.295 6.98 11.15 6.87 12 6.865C12.85 6.87 13.705 6.98 14.5 7.2C16.405 5.9125 17.24 6.18 17.24 6.18C17.7825 7.55 17.4425 8.5675 17.34 8.82C17.9825 9.52 18.37 10.41 18.37 11.5C18.37 15.3359 16.0375 16.1802 13.8125 16.4278C14.17 16.7359 14.49 17.3456 14.49 18.2778C14.49 19.6102 14.4775 20.6866 14.4775 21.0022C14.4775 21.2725 14.655 21.5831 15.1625 21.4831C19.1346 20.1613 22 16.4157 22 12C22 6.47722 17.5228 2 12 2Z" />
        </svg>
      );
    }
    return (
      <img 
        src={deviconMap[name]} 
        alt={`${name} logo`} 
        className="w-[18px] h-[18px] shrink-0 object-contain select-none" 
        referrerPolicy="no-referrer"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
      />
    );
  }

  switch (name) {
    case "SQL":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-blue-500" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14a9 3 0 0 0 18 0V5" />
          <path d="M3 12a9 3 0 0 0 18 0" />
        </svg>
      );
    case "REST APIs":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-[#ff4d00]" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      );
    case "Microservices":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-cyan-400" aria-hidden="true">
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
        </svg>
      );
    case "Spring Security":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-green-500" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "JWT":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-red-500" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m-2 4a2 2 0 012 2m-8-3a2 2 0 012-2M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      );
    case "OAuth2":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-amber-500" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    case "CI/CD":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-teal-400" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3 3L22 4" />
        </svg>
      );
    case "Microservices Architecture":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-emerald-400" aria-hidden="true">
          <rect x="2" y="2" width="6" height="6" rx="1" />
          <rect x="16" y="2" width="6" height="6" rx="1" />
          <rect x="9" y="14" width="6" height="6" rx="1" />
          <path d="M5 8v6h4m10-6v6h-4" />
        </svg>
      );
    case "Event-Driven Architecture":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-yellow-500" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case "API Design":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-rose-400" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      );
    case "Distributed Systems":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-violet-400" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="4" r="2" />
          <circle cx="4" cy="12" r="2" />
          <circle cx="20" cy="12" r="2" />
          <circle cx="12" cy="20" r="2" />
          <path d="M12 6v3M6 12h3M15 12h3M12 15v3" />
        </svg>
      );
    case "System Integration":
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2] text-orange-400" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] shrink-0 stroke-current fill-none stroke-[2]" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
  }
};

export default function GuiMode({ onBack, onSwitchToTerminal }: GuiModeProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div 
      id="gui-mode" 
      className={`min-h-screen font-sans pt-[52px] pb-0 transition-colors duration-300 relative select-text ${
        isDarkMode ? 'bg-[#0f111a] text-slate-100' : 'bg-[#f0ede8] text-[#1a1a1a]'
      }`}
    >
      {/* Navigation */}
      <nav className={`portfolio-nav fixed top-0 left-0 right-0 z-50 px-6 py-3 flex items-center justify-between backdrop-blur-md border-b transition-colors duration-300 ${
        isDarkMode ? 'bg-[#0f111a]/92 border-slate-800/80 text-white' : 'bg-[#f0ede8]/92 border-black/5 text-[#1a1a1a]'
      }`}>
        <button 
          id="btn-gui-back"
          onClick={onBack}
          className={`nav-back cursor-pointer text-[11px] tracking-[2px] uppercase py-[6px] px-[14px] rounded-[2px] border bg-none font-semibold transition-all ${
            isDarkMode 
              ? 'border-slate-800 hover:bg-slate-800/50 text-slate-300 hover:text-white' 
              : 'border-black/15 hover:bg-black/5 text-[#1a1a1a]'
          }`}
        >
          ← Back
        </button>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full cursor-pointer transition-all border ${
              isDarkMode 
                ? 'border-slate-800 bg-slate-900/60 text-amber-400 hover:bg-slate-800' 
                : 'border-black/10 bg-black/[0.02] text-slate-700 hover:bg-black/5'
            }`}
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <button 
            id="btn-gui-switch"
            onClick={onSwitchToTerminal}
            className="nav-switch cursor-pointer text-[11px] tracking-[2px] uppercase py-[6px] px-[14px] rounded-[2px] border border-[#ff4d00] bg-[#ff4d00] text-white font-semibold hover:bg-[#e03e00] transition-all"
          >
            ⌨ Switch to Terminal
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="gui-hero max-w-[1150px] mx-auto px-6 pt-24 pb-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 items-center">
        {/* Left Column */}
        <div className="gui-hero-left md:col-span-8 flex flex-col justify-center">
          <p className="gui-hero-eyebrow text-[11px] tracking-[4px] uppercase text-[#ff4d00] font-sans font-semibold mb-4 animate-gui-enter opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Full-Stack Developer
          </p>
          <h1 className={`gui-hero-name font-display text-[42px] sm:text-[54px] lg:text-[68px] font-extrabold tracking-[-0.03em] lg:tracking-[-0.04em] leading-[1.05] sm:leading-[1.0] transition-colors duration-300 animate-gui-enter opacity-0 ${
            isDarkMode ? 'text-white' : 'text-[#1a1a1a]'
          }`} style={{ animationDelay: '250ms', animationFillMode: 'forwards' }}>
            Vivek
            <br />
            <span className="accent text-[#ff4d00]">Builds</span>
            <br />
            Backend Infrastructure.
          </h1>
          <p className={`gui-hero-role font-sans text-[15px] sm:text-[16px] leading-relaxed mt-6 max-w-[480px] transition-colors duration-300 animate-gui-enter opacity-0 ${
            isDarkMode ? 'text-slate-300' : 'text-[#1a1a1a]/75'
          }`} style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            3.5+ years developing high-performance backend services, microservices architectures, event-driven applications, and cloud solutions on AWS.
          </p>
          <div className="gui-hero-cta flex gap-3.5 mt-8 flex-wrap animate-gui-enter opacity-0" style={{ animationDelay: '550ms', animationFillMode: 'forwards' }}>
            <button 
              onClick={() => scrollTo(projectsRef)}
              className={`btn-primary text-white py-3 px-7 rounded-[2px] font-semibold text-[13px] tracking-[1px] cursor-pointer hover:translate-y-[-1px] active:translate-y-0 transition-all uppercase ${
                isDarkMode 
                  ? 'bg-[#ff4d00] hover:bg-[#ff5d1a] hover:shadow-[0_4px_20px_rgba(255,77,0,0.3)]' 
                  : 'bg-[#1a1a1a] hover:bg-[#ff4d00] hover:shadow-[0_4px_16px_rgba(255,77,0,0.2)]'
              }`}
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollTo(contactRef)}
              className={`btn-outline bg-transparent py-3 px-7 border rounded-[2px] font-semibold text-[13px] tracking-[1px] cursor-pointer active:translate-y-0 transition-all uppercase ${
                isDarkMode 
                  ? 'border-slate-700 text-slate-200 hover:bg-slate-800/80 hover:text-white hover:border-slate-500' 
                  : 'border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white'
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Column (Avatar Blob) */}
        <div className="gui-hero-right md:col-span-4 flex justify-center md:justify-end animate-gui-enter opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <div className="gui-avatar-wrap relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] lg:w-[320px] lg:h-[320px] flex items-center justify-center">
            <div className={`gui-avatar-bg absolute inset-0 animate-blob-move transition-all duration-300 ${
              isDarkMode ? 'bg-[#ff4d00] shadow-[0_0_50px_rgba(255,77,0,0.22)]' : 'bg-[#ff4d00] shadow-[0_0_30px_rgba(255,77,0,0.15)]'
            }`} />
            <div className="gui-avatar-initials absolute font-display inset-0 flex items-center justify-center text-[76px] sm:text-[88px] font-extrabold text-white tracking-[-4px] select-none">
              V.
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="gui-stats max-w-[1100px] mx-auto px-6 pb-12 grid grid-cols-1 sm:grid-cols-3 gap-5 animate-[guiEnter_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0" style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}>
        {/* Card 1: Build */}
        <div className={`gui-stat rounded-lg p-5 sm:p-6 border transition-all duration-300 group overflow-hidden cursor-pointer flex items-center gap-4 ${
          isDarkMode 
            ? 'bg-[#161a26]/90 border-slate-800 hover:border-[#ff4d00]/40 hover:bg-[#1a1f33]' 
            : 'bg-white border-black/5 hover:border-[#ff4d00]/30 hover:bg-neutral-50'
        }`}>
          <div className={`p-3 rounded-md transition-all duration-300 shrink-0 ${
            isDarkMode 
              ? 'bg-slate-800/50 text-slate-400 group-hover:bg-[#ff4d00]/10 group-hover:text-[#ff4d00]' 
              : 'bg-neutral-100 text-neutral-500 group-hover:bg-[#ff4d00]/10 group-hover:text-[#ff4d00]'
          }`}>
            <Cpu className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="relative h-[72px] sm:h-[76px] md:h-[68px] lg:h-14 overflow-hidden flex-1 self-center">
            {/* Default State */}
            <div className="absolute inset-0 flex flex-col justify-center transition-all duration-350 transform group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
              <span className={`text-lg sm:text-xl font-bold tracking-tight font-display transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                Build
              </span>
              <span className={`text-[10px] uppercase tracking-[1px] sm:tracking-[1.5px] font-semibold mt-0.5 ${
                isDarkMode ? 'text-slate-400' : 'text-[#1a1a1a]/45'
              }`}>
                Core Services
              </span>
            </div>
            {/* Hover State */}
            <div className="absolute inset-0 flex flex-col justify-center transition-all duration-350 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
              <span className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-lg font-bold font-sans tracking-tight text-[#ff4d00] leading-tight">
                Spring Boot
              </span>
              <span className={`text-[10px] uppercase tracking-[1px] sm:tracking-[1.50px] font-semibold mt-0.5 ${
                isDarkMode ? 'text-slate-400' : 'text-[#1a1a1a]/50'
              }`}>
                Backend Core
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: Automate */}
        <div className={`gui-stat rounded-lg p-5 sm:p-6 border transition-all duration-300 group overflow-hidden cursor-pointer flex items-center gap-4 ${
          isDarkMode 
            ? 'bg-[#161a26]/90 border-slate-800 hover:border-[#ff4d00]/40 hover:bg-[#1a1f33]' 
            : 'bg-white border-black/5 hover:border-[#ff4d00]/30 hover:bg-neutral-50'
        }`}>
          <div className={`p-3 rounded-md transition-all duration-300 shrink-0 ${
            isDarkMode 
              ? 'bg-slate-800/50 text-slate-400 group-hover:bg-[#ff4d00]/10 group-hover:text-[#ff4d00]' 
              : 'bg-neutral-100 text-neutral-500 group-hover:bg-[#ff4d00]/10 group-hover:text-[#ff4d00]'
          }`}>
            <GitBranch className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="relative h-[72px] sm:h-[76px] md:h-[68px] lg:h-14 overflow-hidden flex-1 self-center">
            {/* Default State */}
            <div className="absolute inset-0 flex flex-col justify-center transition-all duration-350 transform group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
              <span className={`text-lg sm:text-xl font-bold tracking-tight font-display transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                Automate
              </span>
              <span className={`text-[10px] uppercase tracking-[1px] sm:tracking-[1.5px] font-semibold mt-0.5 ${
                isDarkMode ? 'text-slate-400' : 'text-[#1a1a1a]/45'
              }`}>
                Workflows
              </span>
            </div>
            {/* Hover State */}
            <div className="absolute inset-0 flex flex-col justify-center transition-all duration-350 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
              <span className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-bold font-sans tracking-tight text-[#ff4d00] leading-tight">
                CI/CD & DevOps
              </span>
              <span className={`text-[10px] uppercase tracking-[1px] sm:tracking-[1.50px] font-semibold mt-0.5 ${
                isDarkMode ? 'text-slate-400' : 'text-[#1a1a1a]/50'
              }`}>
                Pipeline Automation
              </span>
            </div>
          </div>
        </div>

        {/* Card 3: Scale */}
        <div className={`gui-stat rounded-lg p-5 sm:p-6 border transition-all duration-300 group overflow-hidden cursor-pointer flex items-center gap-4 ${
          isDarkMode 
            ? 'bg-[#161a26]/90 border-slate-800 hover:border-[#ff4d00]/40 hover:bg-[#1a1f33]' 
            : 'bg-white border-black/5 hover:border-[#ff4d00]/30 hover:bg-neutral-50'
        }`}>
          <div className={`p-3 rounded-md transition-all duration-300 shrink-0 ${
            isDarkMode 
              ? 'bg-slate-800/50 text-slate-400 group-hover:bg-[#ff4d00]/10 group-hover:text-[#ff4d00]' 
              : 'bg-neutral-100 text-neutral-500 group-hover:bg-[#ff4d00]/10 group-hover:text-[#ff4d00]'
          }`}>
            <Server className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <div className="relative h-[72px] sm:h-[76px] md:h-[68px] lg:h-14 overflow-hidden flex-1 self-center">
            {/* Default State */}
            <div className="absolute inset-0 flex flex-col justify-center transition-all duration-350 transform group-hover:-translate-y-full opacity-100 group-hover:opacity-0">
              <span className={`text-lg sm:text-xl font-bold tracking-tight font-display transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-[#1a1a1a]'
              }`}>
                Scale
              </span>
              <span className={`text-[10px] uppercase tracking-[1px] sm:tracking-[1.5px] font-semibold mt-0.5 ${
                isDarkMode ? 'text-slate-400' : 'text-[#1a1a1a]/45'
              }`}>
                Infrastructure
              </span>
            </div>
            {/* Hover State */}
            <div className="absolute inset-0 flex flex-col justify-center transition-all duration-350 transform translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
              <span className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] font-bold font-sans tracking-tight text-[#ff4d00] leading-tight">
                AWS & Microservices
              </span>
              <span className={`text-[10px] uppercase tracking-[1px] sm:tracking-[1.5px] font-semibold mt-0.5 ${
                isDarkMode ? 'text-slate-400' : 'text-[#1a1a1a]/50'
              }`}>
                Cloud & Distributed
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="gui-section max-w-[1100px] mx-auto px-6 pb-16 animate-[guiEnter_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <p className={`gui-section-title text-[11px] tracking-[4px] uppercase font-semibold mb-8 flex items-center gap-3 transition-colors duration-300 ${
          isDarkMode ? 'text-slate-400' : 'text-[#1a1a1a]/35'
        }`}>
          Skills & Stack
          <span className={`flex-1 h-[1px] ${isDarkMode ? 'bg-slate-800' : 'bg-black/5'}`} />
        </p>

        {/* Grouped Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            "Backend",
            "Security",
            "Messaging & Event Streaming",
            "Databases",
            "Cloud & DevOps",
            "Tools",
            "Frontend",
            "Architecture"
          ].map((catName) => {
            const catSkills = PROFILE_DATA.skills.filter(s => s.category === catName);
            if (catSkills.length === 0) return null;

            return (
              <div 
                key={catName}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-[#151926]/60 border-slate-800/60 hover:bg-[#161b2a] hover:border-[#ff4d00]/20' 
                    : 'bg-white border-black/5 hover:bg-neutral-50/50 hover:border-[#ff4d00]/15 hover:shadow-xs'
                }`}
              >
                <h3 className={`text-[12px] font-bold tracking-[1.5px] uppercase mb-4 flex items-center justify-between ${
                  isDarkMode ? 'text-slate-200' : 'text-[#1a1a1a]'
                }`}>
                  <span>{catName}</span>
                  <span className={`text-[10px] lowercase font-normal ${
                    isDarkMode ? 'text-slate-500' : 'text-neutral-400'
                  }`}>
                    {catSkills.length} {catSkills.length === 1 ? 'skill' : 'skills'}
                  </span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {catSkills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className={`p-3 rounded-lg border transition-all duration-300 flex items-center justify-between gap-1.5 cursor-default relative group/skill ${
                        isDarkMode 
                          ? 'bg-[#1a1f30] border-slate-800/80 hover:border-[#ff4d00]/30' 
                          : 'bg-neutral-50/50 border-black/5 hover:border-[#ff4d00]/20 hover:bg-white hover:shadow-xs'
                      }`}
                    >
                      {/* Crisp Retro Tooltip Popover (Matches Reference Image) */}
                      <div className={`absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 z-50 hidden group-hover/skill:flex flex-col items-stretch p-3.5 font-mono text-xs leading-normal shadow-2xl rounded pointer-events-none border w-60 sm:w-64 text-left animate-[guiEnter_0.15s_cubic-bezier(0.16,1,0.3,1)_forwards] ${
                        isDarkMode 
                          ? 'bg-[#090b11] border-[#ff4d00] text-slate-100 shadow-[0_12px_30px_rgba(255,77,0,0.15)] shadow-[#ff4d00]/10' 
                          : 'bg-white border-neutral-900 text-neutral-900 shadow-xl shadow-neutral-200'
                      }`}>
                        <div className={`flex items-center gap-2 mb-2 font-bold tracking-tight text-[13px] border-b pb-1.5 border-dashed ${
                          isDarkMode ? 'border-slate-800' : 'border-neutral-200'
                        }`}>
                          <SkillLogo name={skill.name} isDarkMode={isDarkMode} />
                          <span className="truncate">{skill.name}</span>
                        </div>
                        <div className="flex flex-col gap-1.5 text-[11px] opacity-95">
                          <div className="flex justify-between items-center">
                            <span className={isDarkMode ? 'text-slate-500' : 'text-neutral-400'}>STATUS   ::</span>
                            <span className={`font-extrabold uppercase text-[9px] px-1.5 py-0.5 rounded leading-none border ${
                              skill.level === 'Expert' 
                                ? (isDarkMode ? 'text-[#ff4d00] bg-[#ff4d00]/10 border-[#ff4d00]/20' : 'text-[#ff4d00] bg-[#ff4d00]/5 border-[#ff4d00]/15')
                                : skill.level === 'Advanced' 
                                ? (isDarkMode ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 'text-cyan-600 bg-cyan-50 border-cyan-200')
                                : (isDarkMode ? 'text-slate-400 bg-slate-800 border-slate-700' : 'text-slate-500 bg-neutral-100 border-neutral-200')
                            }`}>{skill.level}</span>
                          </div>
                          <div className="flex justify-between items-center text-[10px] mt-0.5">
                            <span className={isDarkMode ? 'text-slate-500' : 'text-neutral-400'}>CATEGORY ::</span>
                            <span className="font-semibold uppercase tracking-wider truncate max-w-[140px] text-right">{skill.category}</span>
                          </div>
                        </div>
                        
                        {/* Downward pointing reference pointer wrapper */}
                        <div className={`absolute top-full left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 border-r border-b -mt-[5px] ${
                          isDarkMode 
                            ? 'bg-[#090b11] border-[#ff4d00]' 
                            : 'bg-white border-neutral-900'
                        }`} />
                      </div>

                      <div className="flex items-center gap-2 min-w-0">
                        <SkillLogo name={skill.name} isDarkMode={isDarkMode} />
                        <span className={`text-[13px] font-bold tracking-tight font-sans truncate ${
                          isDarkMode ? 'text-slate-200' : 'text-neutral-800'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-[9px] px-2 py-0.5 rounded font-display tracking-[0.5px] border uppercase font-bold shrink-0 ${
                        skill.level === 'Expert'
                          ? (isDarkMode ? 'text-[#ff4d00] bg-[#ff4d00]/10 border-[#ff4d00]/20' : 'text-[#ff4d00] bg-[#ff4d00]/5 border-[#ff4d00]/15')
                          : skill.level === 'Advanced'
                          ? (isDarkMode ? 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' : 'text-cyan-600 bg-cyan-50 border-cyan-200')
                          : (isDarkMode ? 'text-slate-400 bg-slate-800/60 border-slate-700/60' : 'text-slate-500 bg-neutral-100 border-neutral-200')
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Projects Section */}
      <section 
        ref={projectsRef} 
        className="gui-section max-w-[1100px] mx-auto px-6 pb-16 scroll-mt-20 animate-[guiEnter_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards] opacity-0" 
        style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
      >
        <p className={`gui-section-title text-[11px] tracking-[4px] uppercase font-semibold mb-6 flex items-center gap-3 transition-colors duration-300 ${
          isDarkMode ? 'text-slate-400' : 'text-[#1a1a1a]/35'
        }`}>
          Projects
          <span className={`flex-1 h-[1px] ${isDarkMode ? 'bg-slate-800' : 'bg-black/5'}`} />
        </p>
        <div className="gui-projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE_DATA.projects.map((project, index) => (
            <div 
              key={project.name} 
              className={`gui-project-card group rounded-lg p-6 flex flex-col gap-4 relative border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-[#141824] border-slate-800/80 hover:border-slate-700 hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]' 
                  : 'bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-xl'
              }`}
            >
              {/* Highlight bar effect */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#ff4d00] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out rounded-t-lg" />
              
              <div className="flex items-center justify-between">
                <span className="gui-project-num text-[11px] tracking-[3px] uppercase text-[#ff4d00] font-sans font-bold">
                  0{index + 1}
                </span>
                <span className={`text-[9px] font-bold tracking-wider px-2 py-0.5 rounded uppercase font-mono ${
                  project.type.includes('MICROSERVICES')
                    ? 'bg-cyan-550/10 text-cyan-400 border border-cyan-500/20'
                    : 'bg-emerald-555/10 text-emerald-500 border border-emerald-500/20'
                }`}>
                  {project.type}
                </span>
              </div>

              <div>
                <h3 className={`gui-project-name text-lg font-extrabold tracking-tight leading-tight transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-neutral-900'
                }`}>
                  {project.name}
                </h3>
              </div>

              <p className={`gui-project-desc font-sans text-[13px] leading-relaxed line-clamp-2 h-10 transition-colors duration-300 ${
                isDarkMode ? 'text-slate-350' : 'text-[#1a1a1a]/70'
              }`}>
                {project.desc}
              </p>

              {/* Metrics / Badges row */}
              <div className="flex flex-wrap gap-1.5 py-1">
                {project.metrics.map((metric) => (
                  <span 
                    key={metric} 
                    className={`font-mono text-[9px] font-medium px-2 py-0.5 rounded border ${
                      isDarkMode 
                        ? 'bg-slate-900/40 border-slate-800/60 text-slate-400' 
                        : 'bg-neutral-50 border-neutral-200 text-neutral-500'
                    }`}
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Highlights section (4 key highlights with checkmark ✓) */}
              <div className={`py-2.5 my-1.5 border-y border-dashed ${
                isDarkMode ? 'border-slate-800/80 text-zinc-350' : 'border-neutral-200 text-neutral-600'
              }`}>
                <p className={`text-[10px] font-bold tracking-wide uppercase mb-2 ${
                  isDarkMode ? 'text-slate-500' : 'text-neutral-400'
                }`}>
                  Core Highlights
                </p>
                <div className="grid grid-cols-2 gap-x-2 gap-y-1.5">
                  {project.highlights.slice(0, 4).map((hl) => (
                    <div key={hl} className="flex items-center gap-1.5 text-[11px] font-sans">
                      <span className="text-[#ff4d00] font-bold text-[12px] shrink-0 select-none">✓</span>
                      <span className="truncate">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech tags */}
              <div className="gui-project-tags flex flex-wrap gap-1 mt-auto">
                {project.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className={`gui-tag font-sans text-[10px] px-2 py-0.5 border rounded uppercase tracking-wider transition-colors duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-900/60 border-slate-800/80 text-slate-400' 
                        : 'bg-neutral-100 border-neutral-205 text-neutral-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons View Details & GitHub */}
              <div className="flex items-center gap-2.5 pt-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`flex-1 text-center font-sans text-xs font-bold py-2 px-3 rounded cursor-pointer transition-all ${
                    isDarkMode
                      ? 'bg-slate-850 hover:bg-[#ff4d00]/90 text-slate-200 hover:text-white border border-slate-850 hover:border-[#ff4d00]/90'
                      : 'bg-[#1a1a1a] hover:bg-[#ff4d00] text-white py-2 border border-transparent'
                  }`}
                >
                  View Details
                </button>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noreferrer"
                  className={`text-center font-sans text-xs font-semibold py-2 px-3 rounded border flex items-center justify-center gap-1.5 transition-all text-decoration-none ${
                    isDarkMode
                      ? 'border-slate-800 hover:border-slate-650 text-slate-400 hover:text-white hover:bg-slate-900'
                      : 'border-neutral-300 hover:border-neutral-450 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-current" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.47722 2 2 6.47722 2 12C2 16.4178 4.86538 20.165 8.83984 21.4852C9.34 21.5775 9.52 21.2681 9.52 21.0022C9.52 20.7672 9.51185 20.1428 9.50742 19.317C6.72917 19.9197 6.14375 17.9811 6.14375 17.9811C5.68875 16.8284 5.03125 16.5219 5.03125 16.5219C4.12375 15.9019 5.1 15.9144 5.1 15.9144C6.1025 15.9847 6.63 16.9422 6.63 16.9422C7.52125 18.47 8.97125 18.0284 9.5425 17.7725C9.63375 17.1266 9.8925 16.6859 10.1775 16.4359C7.96 16.1834 5.63 15.3259 5.63 11.5 5.63 10.41 6.02 9.52 6.66 8.82C6.5575 8.5675 6.2175 7.55 6.7575 6.18C6.7575 6.18 7.595 5.9125 9.5 7.2C10.295 6.98 11.15 6.87 12 6.865C12.85 6.87 13.705 6.98 14.5 7.2C16.405 5.9125 17.24 6.18 17.24 6.18C17.7825 7.55 17.4425 8.5675 17.34 8.82C17.9825 9.52 18.37 10.41 18.37 11.5C18.37 15.3359 16.0375 16.1802 13.8125 16.4278C14.17 16.7359 14.49 17.3456 14.49 18.2778C14.49 19.6102 14.4775 20.6866 14.4775 21.0022C14.4775 21.2725 14.655 21.5831 15.1625 21.4831C19.1346 20.1613 22 16.4157 22 12C22 6.47722 17.5228 2 12 2Z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal overlay */}
      {selectedProject && (
        <div 
          onClick={() => setSelectedProject(null)} 
          className="portfolio-modal-overlay fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            className={`portfolio-modal w-full max-w-3xl rounded-xl border max-h-[90vh] overflow-hidden flex flex-col shadow-2xl relative ${
              isDarkMode 
                ? 'bg-[#121622] border-slate-800 text-slate-100' 
                : 'bg-white border-neutral-250 text-neutral-900'
            }`}
          >
            {/* Modal Header */}
            <div className={`p-6 border-b flex items-start justify-between ${
              isDarkMode ? 'border-slate-800' : 'border-neutral-200'
            }`}>
              <div>
                <span className={`text-[10px] font-bold tracking-widest px-2.5 py-1 rounded uppercase font-mono mb-2 inline-block ${
                  selectedProject.type.includes('MICROSERVICES')
                    ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/20'
                    : 'bg-emerald-500/15 text-emerald-600 border border-emerald-500/20'
                }`}>
                  {selectedProject.type}
                </span>
                <h3 className={`text-2xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-neutral-905'}`}>{selectedProject.name}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className={`p-1.5 rounded-full cursor-pointer hover:bg-slate-300/10 transition-colors ${
                  isDarkMode ? 'text-slate-400 hover:text-white' : 'text-[#1a1a1a]/60 hover:text-black'
                }`}
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 scrollbar-thin">
              {/* Problem Statement */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff4d00] mb-2 font-mono">
                  [01] Problem Statement
                </h4>
                <p className={`text-[13.5px] leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-neutral-700'}`}>
                  {selectedProject.problemStatement}
                </p>
              </div>

              {/* Architecture Diagram */}
              {selectedProject.architectureDiagram && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff4d00] mb-2.5 font-mono">
                    [02] Architecture Diagram
                  </h4>
                  <div className={`rounded-lg p-5 font-mono text-[11.5px] whitespace-pre overflow-x-auto leading-6 ${
                    isDarkMode ? 'bg-slate-950/80 text-[#00ff88]' : 'bg-neutral-100 text-[#006622] border border-neutral-200'
                  }`}>
                    {selectedProject.architectureDiagram}
                  </div>
                </div>
              )}

              {/* Features / Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff4d00] mb-2.5 font-mono">
                  [03] Key Features & Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.highlights.map((feature, i) => (
                    <div 
                      key={i} 
                      className={`flex items-start gap-2.5 p-2 rounded border text-[13px] ${
                        isDarkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-neutral-50 border-neutral-200'
                      }`}
                    >
                      <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className={isDarkMode ? 'text-slate-200' : 'text-neutral-800'}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff4d00] mb-2 font-mono">
                  [04] Complete Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tech) => (
                    <div 
                      key={tech} 
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md border text-xs font-semibold ${
                        isDarkMode 
                          ? 'bg-slate-900/65 border-slate-800 text-slate-200' 
                          : 'bg-neutral-50 border-neutral-200 text-neutral-900'
                      }`}
                    >
                      <SkillLogo name={tech} isDarkMode={isDarkMode} />
                      <span>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges Solved */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff4d00] mb-2 font-mono">
                  [05] Key Core Challenges Solved
                </h4>
                <p className={`text-[13.5px] leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-neutral-700'}`}>
                  {selectedProject.challengesSolved}
                </p>
              </div>

              {/* DevOps Setup */}
              {selectedProject.devopsSetup && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff4d00] mb-2 font-mono">
                    [06] DevOps & Cloud deployment infrastructure
                  </h4>
                  <p className={`text-[13.5px] leading-relaxed ${isDarkMode ? 'text-slate-300' : 'text-neutral-700'}`}>
                    {selectedProject.devopsSetup}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className={`p-4 border-t flex justify-between items-center ${
              isDarkMode ? 'border-slate-800 bg-slate-900/40' : 'border-neutral-200 bg-neutral-50/70'
            }`}>
              <a 
                href={selectedProject.githubUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                rel="noreferrer"
                className={`flex items-center gap-2 text-xs font-bold px-4 py-2 border rounded-md transition-all text-decoration-none ${
                  isDarkMode
                    ? 'border-slate-700 hover:border-[#ff4d00] hover:bg-slate-800 text-slate-250 hover:text-white'
                    : 'border-neutral-300 hover:border-neutral-450 hover:bg-neutral-100 text-neutral-700 hover:text-[#ff4d00]'
                }`}
              >
                <ExternalLink className="w-4 h-4" />
                <span>Visit Project Repo</span>
              </a>
              <button 
                onClick={() => setSelectedProject(null)}
                className={`text-xs font-bold cursor-pointer px-4 py-2 rounded-md transition-all border ${
                  isDarkMode
                    ? 'bg-slate-800 hover:bg-slate-700 text-white border-transparent'
                    : 'bg-[#1a1a1a] hover:bg-neutral-800 text-white border-transparent'
                }`}
              >
                Close details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <footer 
        ref={contactRef} 
        className={`gui-contact py-16 px-6 mt-10 scroll-mt-12 transition-colors duration-300 ${
          isDarkMode ? 'bg-[#0a0a0c]' : 'bg-[#1a1a1a]'
        } text-white`}
      >
        <div className="gui-contact-inner max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-none text-center sm:text-left">
            Let's build
            <br />
            something <span className="text-[#ff4d00]">great.</span>
          </h2>
          <div className="gui-contact-links flex gap-3 flex-wrap justify-center">
            <a 
              href={PROFILE_DATA.contact.github.startsWith('http') ? PROFILE_DATA.contact.github : `https://${PROFILE_DATA.contact.github}`} 
              target="_blank" 
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className={`gui-contact-link flex items-center gap-2 font-sans text-[13px] border rounded py-2 px-5 transition-all text-decoration-none select-text ${
                isDarkMode 
                  ? 'text-slate-300 border-slate-800 hover:border-[#ff4d00] hover:text-white hover:bg-slate-900/40' 
                  : 'text-white/60 border-white/15 hover:border-[#ff4d00] hover:text-white'
              }`}
            >
              ⬡ GitHub
            </a>
            <a 
              href={PROFILE_DATA.contact.linkedin.startsWith('http') ? PROFILE_DATA.contact.linkedin : `https://${PROFILE_DATA.contact.linkedin}`} 
              target="_blank" 
              referrerPolicy="no-referrer"
              rel="noreferrer"
              className={`gui-contact-link flex items-center gap-2 font-sans text-[13px] border rounded py-2 px-5 transition-all text-decoration-none select-text ${
                isDarkMode 
                  ? 'text-slate-300 border-slate-800 hover:border-[#ff4d00] hover:text-white hover:bg-slate-900/40' 
                  : 'text-white/60 border-white/15 hover:border-[#ff4d00] hover:text-white'
              }`}
            >
              in LinkedIn
            </a>
            <a 
              href={`mailto:${PROFILE_DATA.contact.email}`} 
              className={`gui-contact-link flex items-center gap-2 font-sans text-[13px] border rounded py-2 px-5 transition-all text-decoration-none select-text ${
                isDarkMode 
                  ? 'text-slate-300 border-slate-800 hover:border-[#ff4d00] hover:text-white hover:bg-slate-900/40' 
                  : 'text-white/60 border-white/10 hover:border-[#ff4d00] hover:text-white'
              }`}
            >
              ✉ Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
