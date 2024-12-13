import React from 'react';
import { ExperimentTableHeader } from './components/ExperimentTableHeader';
import { ExperimentTableRow } from './components/ExperimentTableRow';
import type { ExperimentData } from '../types';

interface ExperimentTableProps {
  experiments: ExperimentData[];
  selectedIds: string[];
  onSelect: (id: string) => void;
  onSelectAll: (selected: boolean) => void;
  isLoading: boolean;
}

export function ExperimentTable({
  experiments,
  selectedIds,
  onSelect,
  onSelectAll,
  isLoading
}: ExperimentTableProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-8 p-4" />
                {[...Array(4)].map((_, index) => (
                  <th key={index} className="h-10 px-6">
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse" />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[...Array(5)].map((_, index) => (
                <tr key={index}>
                  <td className="w-8 p-4">
                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse" />
                  </td>
                  {[...Array(4)].map((_, cellIndex) => (
                    <td key={cellIndex} className="px-6 py-4">
                      <div className="w-full h-4 bg-gray-200 rounded animate-pulse" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <ExperimentTableHeader
            selectedCount={selectedIds.length}
            totalCount={experiments.length}
            onSelectAll={onSelectAll}
          />
          <tbody className="divide-y divide-gray-200">
            {experiments.map((experiment) => (
              <ExperimentTableRow
                key={experiment.id}
                experiment={experiment}
                selected={selectedIds.includes(experiment.id)}
                onSelect={onSelect}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}