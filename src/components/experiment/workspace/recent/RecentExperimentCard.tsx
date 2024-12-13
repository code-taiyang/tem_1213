import React from 'react';
import { Clock, Users } from 'lucide-react';

interface Experiment {
  id: string;
  title: string;
  description: string;
  status: 'planned' | 'in_progress' | 'completed';
  lastModified: string;
  progress: number;
  team: string;
}

interface RecentExperimentCardProps {
  experiment: Experiment;
}

export function RecentExperimentCard({ experiment }: RecentExperimentCardProps) {
  const statusColors = {
    planned: 'bg-gray-100 text-gray-800',
    in_progress: 'bg-blue-100 text-blue-800',
    completed: 'bg-green-100 text-green-800'
  };

  const statusText = {
    planned: '计划中',
    in_progress: '进行中',
    completed: '已完成'
  };

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{experiment.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{experiment.description}</p>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[experiment.status]}`}>
            {statusText[experiment.status]}
          </span>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-500">{experiment.progress}% 完成</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                experiment.status === 'completed' ? 'bg-green-500' :
                experiment.progress > 60 ? 'bg-blue-500' : 'bg-yellow-500'
              }`}
              style={{ width: `${experiment.progress}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <Users size={14} />
            <span>{experiment.team}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} />
            <span>{experiment.lastModified}</span>
          </div>
        </div>
      </div>
    </div>
  );
}