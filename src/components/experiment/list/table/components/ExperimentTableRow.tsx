import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { ExperimentStatus } from './ExperimentStatus';
import type { ExperimentData } from '../../types';

interface ExperimentTableRowProps {
  experiment: ExperimentData;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function ExperimentTableRow({
  experiment,
  selected,
  onSelect
}: ExperimentTableRowProps) {
  return (
    <tr className={selected ? 'bg-blue-50' : 'hover:bg-gray-50'}>
      <td className="relative w-8 p-4">
        <input
          type="checkbox"
          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          checked={selected}
          onChange={() => onSelect(experiment.id)}
        />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div>
            <div className="text-sm font-medium text-gray-900">
              {experiment.title}
            </div>
            <div className="text-sm text-gray-500">
              {experiment.description}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <ExperimentStatus status={experiment.status} />
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex -space-x-1">
            {experiment.members.slice(0, 3).map((member) => (
              <img
                key={member.id}
                className="h-6 w-6 rounded-full ring-2 ring-white"
                src={member.avatar}
                alt={member.name}
              />
            ))}
          </div>
          {experiment.members.length > 3 && (
            <span className="ml-1 text-sm text-gray-500">
              +{experiment.members.length - 3}
            </span>
          )}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {experiment.lastModified}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-gray-400 hover:text-gray-500">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </td>
    </tr>
  );
}