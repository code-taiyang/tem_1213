import React from 'react';
import { STATUS_COLORS, STATUS_ICONS, STATUS_TEXT } from '../../constants';
import type { ExperimentData } from '../../types';

interface ExperimentHeaderProps {
  experiment: ExperimentData;
}

export function ExperimentHeader({ experiment }: ExperimentHeaderProps) {
  const StatusIcon = STATUS_ICONS[experiment.status];

  return (
    <div className="flex-1">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
          {experiment.title}
        </h3>
        <span className={`
          inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium
          ${STATUS_COLORS[experiment.status]}
        `}>
          <StatusIcon className="h-3.5 w-3.5" />
          <span>{STATUS_TEXT[experiment.status]}</span>
        </span>
      </div>
      <p className="mt-1 text-sm text-gray-500 line-clamp-2">{experiment.description}</p>
    </div>
  );
}