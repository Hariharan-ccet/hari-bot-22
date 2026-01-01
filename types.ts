
export interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export interface Intent {
  tag: string;
  patterns: string[];
  responses: string[];
}

export interface ProjectAnalysis {
  architecture: string;
  languages: string[];
  frameworks: string[];
  issues: string[];
}

export enum ViewMode {
  CHAT = 'CHAT',
  ANALYSIS = 'ANALYSIS',
  DATASET = 'DATASET'
}
