import React from 'react';
import { SlidersHorizontal } from 'lucide-react';
import type { FilterOptions } from '../../types';

interface FilterControlsProps {
  filters: FilterOptions;
  onFilterChange: (key: keyof FilterOptions, value: string | string[]) => void;
}

export function FilterControls({ filters, onFilterChange }: FilterControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <SlidersHorizontal className="h-5 w-5 text-gray-400" />
      <select
        value={filters.status[0] || ''}
        onChange={(e) => onFilterChange('status', [e.target.value])}
        className="text-sm border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">所有状态</option>
        <option value="planned">计划中</option>
        <option value="in_progress">进行中</option>
        <option value="completed">已完成</option>
      </select>

      <select
        value={filters.timeRange}
        onChange={(e) => onFilterChange('timeRange', e.target.value)}
        className="text-sm border-gray-200 rounded-lg focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="all">所有时间</option>
        <option value="today">今天</option>
        <option value="week">本周</option>
        <option value="month">本月</option>
      </select>
    </div>
  );
}