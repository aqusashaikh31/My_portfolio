export interface Project {
  id: string;
  name: string;
  description: string;
  problem: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  linkedinUrl: string;
  type: ProjectType[];
  category: string;
  featured?: boolean;
  caseStudy?: {
    problem: string;
    solution: string;
    architecture: string[];
    techStack: string[];
    keyFeatures: string[];
    whatILearned: string;
  };
}

export type ProjectType =
  | 'AI'
  | 'GenAI'
  | 'RAG'
  | 'Machine Learning'
  | 'Web Apps'
  | 'Data Analytics';

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  description: string;
}

export type SkillCategory =
  | 'Programming'
  | 'Frontend'
  | 'AI / ML'
  | 'Generative AI'
  | 'Backend'
  | 'Database'
  | 'Developer Tools'
  | 'Deployment'
  | 'AI Ecosystem';

export interface SkillGroup {
  category: SkillCategory;
  skills: Skill[];
}

export interface AIStackNode {
  id: string;
  label: string;
  icon: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface PlaygroundDemo {
  id: string;
  title: string;
  description: string;
  icon: string;
  type: 'prompt-generator' | 'rag-demo' | 'chat' | 'summarizer' | 'dev-assistant';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Command {
  id: string;
  label: string;
  icon: string;
  action: () => void;
  shortcut?: string;
}
