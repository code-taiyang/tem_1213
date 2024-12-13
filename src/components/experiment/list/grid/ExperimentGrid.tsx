import React from 'react';
import { ExperimentCard } from '../components/ExperimentCard';
import type { ExperimentData } from '../types';

interface ExperimentGridProps {
  experiments: ExperimentData[];
  selectedIds: string[];
  onSelect: (id: string) => void;
  isLoading: boolean;
}

export function ExperimentGrid({
  experiments,
  selectedIds,
  onSelect,
  isLoading
}: ExperimentGridProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 h-48 animate-pulse"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {experiments.map((experiment) => (
        <ExperimentCard
          key={experiment.id}
          experiment={experiment}
          selected={selectedIds.includes(experiment.id)}
          onSelect={() => onSelect(experiment.id)}
        />
      ))}
    </div>
  );
}