import React from 'react';
import { ArrowDownAZ, Calendar, Users } from 'lucide-react';

interface ExperimentTableHeaderProps {
  selectedCount: number;
  totalCount: number;
  onSelectAll: (selected: boolean) => void;
}

export function ExperimentTableHeader({
  selectedCount,
  totalCount,
  onSelectAll
}: ExperimentTableHeaderProps) {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="relative w-8 p-4">
          <input
            type="checkbox"
            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            checked={selectedCount > 0 && selectedCount === totalCount}
            ref={input => input && (input.indeterminate = selectedCount > 0 && selectedCount < totalCount)}
            onChange={(e) => onSelectAll(e.target.checked)}
          />
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <ArrowDownAZ className="h-4 w-4" />
            实验名称
          </div>
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          状态
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            团队
          </div>
        </th>
        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            更新时间
          </div>
        </th>
        <th scope="col" className="relative px-6 py-3">
          <span className="sr-only">操作</span>
        </th>
      </tr>
    </thead>
  );
}