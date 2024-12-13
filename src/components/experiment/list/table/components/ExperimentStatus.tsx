import React from 'react';
import { Clock, PlayCircle, CheckCircle2, AlertTriangle } from 'lucide-react';
import type { ExperimentData } from '../../types';

interface ExperimentStatusProps {
  status: ExperimentData['status'];
}

export function ExperimentStatus({ status }: ExperimentStatusProps) {
  const statusConfig = {
    planned: {
      icon: Clock,
      text: '计划中',
      className: 'bg-gray-100 text-gray-800'
    },
    in_progress: {
      icon: PlayCircle,
      text: '进行中',
      className: 'bg-blue-100 text-blue-800'
    },
    completed: {
      icon: CheckCircle2,
      text: '已完成',
      className: 'bg-green-100 text-green-800'
    },
    warning: {
      icon: AlertTriangle,
      text: '异常',
      className: 'bg-yellow-100 text-yellow-800'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      <Icon className="h-3.5 w-3.5" />
      {config.text}
    </span>
  );
}