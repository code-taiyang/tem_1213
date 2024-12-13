export interface ChatSession {
  id: string;
  title: string;
  preview: string;
  date: string;
  time: string;
  isStarred?: boolean;
}

export type FilterType = 'all' | 'starred' | 'recent';