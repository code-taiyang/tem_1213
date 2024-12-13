import { Clock, AlertCircle, CheckCircle2, AlertTriangle } from 'lucide-react';

export const STATUS_COLORS = {
  planned: 'bg-gray-100 text-gray-800',
  in_progress: 'bg-blue-100 text-blue-800',
  completed: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800'
} as const;

export const STATUS_ICONS = {
  planned: Clock,
  in_progress: AlertCircle,
  completed: CheckCircle2,
  warning: AlertTriangle
} as const;

export const STATUS_TEXT = {
  in_progress: '进行中',
  completed: '已完成',
  warning: '异常',
  planned: '计划中'
} as const;

export const PROGRESS_COLORS = {
  completed: 'bg-green-500',
  high: 'bg-blue-500',
  low: 'bg-yellow-500'
} as const;