export interface ExperimentMember {
  id: string;
  name: string;
  avatar: string;
  status: 'completed' | 'pending' | 'in_progress';
}

export interface ExperimentData {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in_progress' | 'completed' | 'warning';
  currentStep: number;
  totalSteps: number;
  stepName: string;
  lastModified: string;
  progress: number;
  owner: string;
  members: ExperimentMember[];
  recentData?: {
    dataPoints: number;
    completeness: number;
    lastValue: string;
    unit: string;
  };
  attachments?: Array<{
    name: string;
    type: string;
    size: number;
    uploadedAt: string;
  }>;
  hasWarning?: boolean;
  warningMessage?: string;
}

export interface ExperimentCardProps {
  experiment: ExperimentData;
  onSelect?: (id: string) => void;
  selected?: boolean;
}