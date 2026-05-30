export interface Project {
  name: string;
  type: string;
  desc: string;
  detailedDesc?: string;
  highlights: string[];
  tags: string[];
  metrics: string[];
  problemStatement?: string;
  architectureDiagram?: string;
  devopsSetup?: string;
  challengesSolved?: string;
  githubUrl?: string;
}

export interface Contact {
  github: string;
  email: string;
  linkedin: string;
}

export interface Profile {
  name: string;
  role: string;
  skills: { name: string; icon: string; level: string; category?: string }[];
  projects: Project[];
  contact: Contact;
}

export type ExperienceMode = 'selector' | 'terminal' | 'gui';

export interface TerminalLine {
  id: string;
  type: 'cmd' | 'output' | 'dim' | 'tags' | 'project' | 'blank' | 'prompt' | 'help';
  text?: string;
  items?: string[];
  project?: Project;
}
