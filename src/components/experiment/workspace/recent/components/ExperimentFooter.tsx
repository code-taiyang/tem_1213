import React from 'react';
import { Clock, ChevronRight } from 'lucide-react';
import type { ExperimentData } from '../types';

interface ExperimentFooterProps {
  experiment: ExperimentData;
  onEnter: (e: React.MouseEvent) => void;
}

export function ExperimentFooter({ experiment, onEnter }: ExperimentFooterProps) {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <span>{experiment.lastModified}</span>
      </div>
      
      <button
        onClick={onEnter}
        className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
      >
        <span>进入实验</span>
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}