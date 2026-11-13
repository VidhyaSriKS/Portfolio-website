export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  achievement?: string;
  features: string[];
  architectureDetails: string[];
  stats: { label: string; value: string }[];
  tag: string;
  isFlagship?: boolean;
  category?: 'ai-ml' | 'java-backend' | 'web-apps';
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    description: string;
    icon?: string;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  type: 'milestone' | 'certification' | 'award';
  date?: string;
  description: string;
  badge: string;
  highlight?: boolean;
  link?: string;
  stats?: string;
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  cgpa: string;
  scale: string;
  description: string;
  highlights: string[];
}

