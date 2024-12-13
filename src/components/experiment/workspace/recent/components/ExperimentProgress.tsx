import React from 'react';
import { PROGRESS_COLORS } from '../constants';
import type { ExperimentData } from '../types';

interface ExperimentProgressProps {
  experiment: ExperimentData;
}

export function ExperimentProgress({ experiment }: ExperimentProgressProps) {
  const getProgressColor = () => {
    if (experiment.status === 'completed') return PROGRESS_COLORS.completed;
    return experiment.progress > 60 ? PROGRESS_COLORS.high : PROGRESS_COLORS.low;
  };

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between text-sm mb-2">
        <span className="text-gray-600">
          步骤 {experiment.currentStep}/{experiment.totalSteps}：{experiment.stepName}
        </span>
        <span className="font-medium text-gray-900">{experiment.progress}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-300 ${getProgressColor()}`}
          style={{ width: `${experiment.progress}%` }}
        />
      </div>
    </div>
  );
}