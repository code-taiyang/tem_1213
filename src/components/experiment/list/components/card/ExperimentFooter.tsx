import React from 'react';
import { Clock } from 'lucide-react';
import type { ExperimentData } from '../../types';

interface ExperimentFooterProps {
  experiment: ExperimentData;
}

export function ExperimentFooter({ experiment }: ExperimentFooterProps) {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500">
      <div className="flex items-center gap-2">
        <Clock className="h-4 w-4" />
        <span>{experiment.lastModified}</span>
      </div>
      <div className="flex -space-x-1">
        {experiment.members.slice(0, 3).map((member) => (
          <img
            key={member.id}
            className="h-6 w-6 rounded-full ring-2 ring-white"
            src={member.avatar}
            alt={member.name}
          />
        ))}
        {experiment.members.length > 3 && (
          <span className="ml-2 text-sm text-gray-500">
            +{experiment.members.length - 3}
          </span>
        )}
      </div>
    </div>
  );
}